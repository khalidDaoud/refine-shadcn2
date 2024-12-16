import React from "react";
import { useNavigation } from "@refinedev/core";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Task_Type, Task_State } from "@/gen/delivery/v1/tasks_pb";
import { CreatePage } from "@/curds/create";

// Base schema for location
const locationSchema = z.object({
  latitude: z.number({
    required_error: "Latitude is required",
    invalid_type_error: "Latitude must be a number",
  }),
  longitude: z.number({
    required_error: "Longitude is required",
    invalid_type_error: "Longitude must be a number",
  }),
});

// Zod schema for task creation
const taskSchema = z.object({
  type: z.number({
    required_error: "Task type is required",
  }),
  trackingId: z.string()
    .min(1, "Tracking ID is required")
    .max(64, "Tracking ID cannot exceed 64 characters")
    .regex(/^[^\/:\?,#]+$/, "Invalid characters in Tracking ID"),
  plannedLocation: z.union([
    locationSchema,
    z.undefined()
  ]),
  taskDuration: z.number({
    required_error: "Task duration is required",
    invalid_type_error: "Task duration must be a number",
  })
    .min(1, "Duration must be at least 1 minute"),
}).superRefine((data, ctx) => {
  if (data.type !== Task_Type.UNAVAILABLE && !data.plannedLocation) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Planned location is required for this task type",
      path: ["plannedLocation"],
    });
  }
});

type TaskFormValues = z.infer<typeof taskSchema>;

export const TaskCreate: React.FC = () => {
  const { list } = useNavigation();

  const form = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      type: Task_Type.TYPE_UNSPECIFIED,
      trackingId: "",
      plannedLocation: {
        latitude: 0,
        longitude: 0,
      },
      taskDuration: 0,
    },
  });

  const onSubmit = async (data: TaskFormValues) => {
    try {
      // Create task with the form data
      // Note: You'll need to implement the actual API call here
      const task = {
        ...data,
        state: Task_State.OPEN,
      };
      
      // Handle successful creation
      list("tasks");
    } catch (error) {
      // Handle error
      console.error("Failed to create task:", error);
    }
  };

  return (
    <CreatePage resource="tasks">
      <div className="container mx-auto py-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task Type</FormLabel>
                  <Select 
                    onValueChange={(value) => field.onChange(parseInt(value))}
                    value={field.value?.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select task type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={Task_Type.PICKUP.toString()}>Pickup</SelectItem>
                      <SelectItem value={Task_Type.DELIVERY.toString()}>Delivery</SelectItem>
                      <SelectItem value={Task_Type.SCHEDULED_STOP.toString()}>Scheduled Stop</SelectItem>
                      <SelectItem value={Task_Type.UNAVAILABLE.toString()}>Unavailable</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="trackingId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tracking ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter tracking ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch("type") !== Task_Type.UNAVAILABLE && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="plannedLocation.latitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Latitude</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          step="any" 
                          placeholder="Enter latitude"
                          {...field}
                          onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : 0)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="plannedLocation.longitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Longitude</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          step="any" 
                          placeholder="Enter longitude"
                          {...field}
                          onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : 0)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            <FormField
              control={form.control}
              name="taskDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task Duration (minutes)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number"
                      placeholder="Enter duration in minutes"
                      {...field}
                      onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => list("tasks")} type="button">
                Cancel
              </Button>
              <Button type="submit">
                Create Task
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </CreatePage>
  );
};

export default TaskCreate;
