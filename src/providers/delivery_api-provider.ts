import { 
    CrudFilters,
    DataProvider,
    BaseRecord,
    GetListParams,
    GetListResponse,
    GetOneParams,
    GetOneResponse,
    CreateParams,
    CreateResponse,
    UpdateParams,
    UpdateResponse,
    DeleteOneParams,
    DeleteOneResponse,
    type HttpError as RefineHttpError
  } from "@refinedev/core";
  import { createGrpcWebTransport  } from "@connectrpc/connect-web";
  import { createClient, type ConnectError } from "@connectrpc/connect";
  import { DeliveryService } from "../gen/delivery/v1/delivery_api_pb";
  import { DeliveryVehicleSchema, type DeliveryVehicle } from "../gen/delivery/v1/delivery_vehicles_pb";
  import { DeliveryVehicleAttributeSchema } from "../gen/delivery/v1/common_pb";
  import { TaskSchema, Task_State, Task_TaskOutcome, type Task } from "../gen/delivery/v1/tasks_pb";
  import { useMemo } from "react";
  import { type DescService } from "@bufbuild/protobuf";
  import { type Client } from "@connectrpc/connect";
  import { create } from "@bufbuild/protobuf";
  
  const API_URL = "http://localhost:8080";
  
  const transport = createGrpcWebTransport({
    baseUrl: API_URL,
    useBinaryFormat: true,
    defaultTimeoutMs: 5_000,
    fetch: (input, init) => fetch(input, {...init, credentials: "omit", mode:"cors"}),
  });
  
  function useClient<T extends DescService>(service: T): Client<T> {
    return useMemo(() => createClient(service, transport), [service]);
  }

  const handleError = (error: ConnectError): RefineHttpError => {
    return {
      message: error.message,
      statusCode: error.code
    };
  };

  const convertToConnectFilter = (filters?: CrudFilters) => {
    if (!filters) return "";
    
    return filters
      .map((filter) => {
        const value = filter.value;
        
        // Handle different operator types
        switch (filter.operator) {
          case "eq":
            return `${filter.field}=${typeof value === 'string' ? `"${value}"` : value}`;
          case "ne":
            return `${filter.field}!=${typeof value === 'string' ? `"${value}"` : value}`;
          case "lt":
            return `${filter.field}<${value}`;
          case "gt":
            return `${filter.field}>${value}`;
          case "lte":
            return `${filter.field}<=${value}`;
          case "gte":
            return `${filter.field}>=${value}`;
          case "contains":
            return `${filter.field}:"*${value}*"`;
          case "startswith":
            return `${filter.field}:"${value}*"`;
          case "endswith":
            return `${filter.field}:"*${value}"`;
          default:
            return "";
        }
      })
      .filter(Boolean)
      .join(" AND ");
  };

  type DeliveryVariables = {
    id?: string;
    [key: string]: any;
  };
  
  export function useDataProvider(): Omit<Required<DataProvider>, "createMany" | "updateMany" | "deleteMany" | "custom" | "getMany"> {
    const client = useClient(DeliveryService);
  
    return {
      getList: async <TData extends BaseRecord = BaseRecord>({ 
        resource, 
        pagination, 
        filters 
      }: GetListParams): Promise<GetListResponse<TData>> => {
        try {
          const { current = 1, pageSize = 100 } = pagination ?? {};
          const filter = convertToConnectFilter(filters);
          const parent = "providers/default";
  
          if (resource === "deliveryVehicles") {
            const response = await client.listDeliveryVehicles({
              parent,
              pageSize,
              pageToken: ((current - 1) * pageSize).toString(),
              filter,
            });
            return {
              data: response.deliveryVehicles as unknown as TData[],
              total: Number(response.totalSize),
            };
          }
  
          if (resource === "tasks") {
            const response = await client.listTasks({
              parent,
              pageSize,
              pageToken: ((current - 1) * pageSize).toString(),
              filter,
            });
            return {
              data: response.tasks as unknown as TData[],
              total: Number(response.totalSize),
            };
          }

          if (resource === "taskTrackingInfo") {
            // For tracking info, we need to handle it differently since it doesn't have a list endpoint
            // We'll use the task list and extract tracking info
            const response = await client.listTasks({
              parent,
              pageSize,
              pageToken: ((current - 1) * pageSize).toString(),
              filter: filter ? `${filter} AND tracking_id!=''` : 'tracking_id!=""',
            });

            // Get tracking info for each task with a tracking ID
            const trackingInfoPromises = response.tasks
              .filter(task => task.trackingId)
              .map(task => 
                client.getTaskTrackingInfo({
                  name: `taskTrackingInfo/${task.trackingId}`
                }).catch(() => null)
              );

            const trackingInfos = (await Promise.all(trackingInfoPromises)).filter(Boolean);

            return {
              data: trackingInfos as unknown as TData[],
              total: trackingInfos.length,
            };
          }
  
          throw new Error(`Unsupported resource: ${resource}`);
        } catch (error) {
          throw handleError(error as ConnectError);
        }
      },
  
      getOne: async <TData extends BaseRecord = BaseRecord>({ 
        resource, 
        id 
      }: GetOneParams): Promise<GetOneResponse<TData>> => {
        try {
          const resourceName = `${resource}/${id}`;
          
          if (resource === "deliveryVehicles") {
            const response = await client.getDeliveryVehicle({ name: resourceName });
            return { data: response as unknown as TData };
          }
  
          if (resource === "tasks") {
            const response = await client.getTask({ name: resourceName });
            return { data: response as unknown as TData };
          }

          if (resource === "taskTrackingInfo") {
            const response = await client.getTaskTrackingInfo({ name: resourceName });
            return { data: response as unknown as TData };
          }
  
          throw new Error(`Unsupported resource: ${resource}`);
        } catch (error) {
          throw handleError(error as ConnectError);
        }
      },
  
      create: async <TData extends BaseRecord = BaseRecord, TVariables = DeliveryVariables>({ 
        resource, 
        variables 
      }: CreateParams<TVariables>): Promise<CreateResponse<TData>> => {
        try {
          const parent = "providers/default";
          const vars = variables as DeliveryVariables;
          
          if (resource === "deliveryVehicles") {
            const response = await client.createDeliveryVehicle({
              parent,
              deliveryVehicleId: vars.id,
              deliveryVehicle: vars as unknown as DeliveryVehicle,
            });
            return { data: response as unknown as TData };
          }
  
          if (resource === "tasks") {
            // If multiple tasks are provided, use batchCreate
            if (Array.isArray(vars)) {
              const requests = vars.map(task => ({
                parent,
                taskId: task.id,
                task: task as unknown as Task,
              }));

              const response = await client.batchCreateTasks({
                parent,
                requests,
              });

              return { data: response.tasks[0] as unknown as TData };
            }

            // Single task creation
            const response = await client.createTask({
              parent,
              taskId: vars.id,
              task: vars as unknown as Task,
            });
            return { data: response as unknown as TData };
          }
  
          throw new Error(`Unsupported resource: ${resource}`);
        } catch (error) {
          throw handleError(error as ConnectError);
        }
      },
  
      update: async <TData extends BaseRecord = BaseRecord, TVariables = DeliveryVariables>({ 
        resource, 
        id, 
        variables 
      }: UpdateParams<TVariables>): Promise<UpdateResponse<TData>> => {
        try {
          const resourceName = `${resource}/${id}`;
          const vars = variables as DeliveryVariables;
          
          if (resource === "deliveryVehicles") {
            const deliveryVehicle = { 
              ...vars as unknown as DeliveryVehicle,
              name: resourceName,
            };
            const response = await client.updateDeliveryVehicle({
              deliveryVehicle,
              updateMask: {
                paths: Object.keys(vars)
              }
            });
            return { data: response as unknown as TData };
          }
  
          if (resource === "tasks") {
            const task = { 
              ...vars as unknown as Task,
              name: resourceName,
            };
            const response = await client.updateTask({
              task,
              updateMask: {
                paths: Object.keys(vars)
              }
            });
            return { data: response as unknown as TData };
          }
  
          throw new Error(`Unsupported resource: ${resource}`);
        } catch (error) {
          throw handleError(error as ConnectError);
        }
      },
  
      deleteOne: async <TData extends BaseRecord = BaseRecord, TVariables = Record<string, any>>({ 
        resource, 
        id,
        meta
      }: DeleteOneParams<TVariables>): Promise<DeleteOneResponse<TData>> => {
        try {
          const resourceName = `${resource}/${id}`;
          
          if (resource === "deliveryVehicles") {
            // For delivery vehicles, we mark them as inactive or removed
            // since there's no direct delete method
            const existingVehicle = meta as DeliveryVehicle;
            
            // Create new attributes using the schema
            const statusAttr = create(DeliveryVehicleAttributeSchema, {
              key: "status",
              value: "INACTIVE",
              deliveryVehicleAttributeValue: { case: "stringValue", value: "INACTIVE" }
            });
            
            const removedAttr = create(DeliveryVehicleAttributeSchema, {
              key: "removed",
              value: "true",
              deliveryVehicleAttributeValue: { case: "stringValue", value: "true" }
            });

            // Create the updated vehicle using the schema
            const deliveryVehicle = create(DeliveryVehicleSchema, {
              ...existingVehicle,
              name: resourceName,
              attributes: [statusAttr, removedAttr]
            });

            await client.updateDeliveryVehicle({
              deliveryVehicle,
              updateMask: {
                paths: ["attributes"]
              }
            });
            return { data: null as unknown as TData };
          }
  
          if (resource === "tasks") {
            // For tasks, mark as CLOSED with CANCELLED outcome
            // since there's no direct delete method
            const existingTask = meta as Task;
            const task = create(TaskSchema, {
              ...existingTask,
              name: resourceName,
              state: Task_State.CLOSED,
              taskOutcome: Task_TaskOutcome.FAILED
            });

            await client.updateTask({
              task,
              updateMask: {
                paths: ["state", "taskOutcome"]
              }
            });
            return { data: null as unknown as TData };
          }
  
          throw new Error(`Unsupported resource: ${resource}`);
        } catch (error) {
          throw handleError(error as ConnectError);
        }
      },
  
      getApiUrl: () => API_URL,
    };
  }
