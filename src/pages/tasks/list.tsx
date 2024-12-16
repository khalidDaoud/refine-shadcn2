import { ListPage } from "../../curds/list";
import { Table, TableFilterProps } from "../../table";
import { BaseRecord, HttpError, useUserFriendlyName } from "@refinedev/core";
import type { UseTableReturnType } from "@refinedev/react-table";
import { Task, Task_State, Task_Type, Task_TaskOutcome } from "../../gen/delivery/v1/tasks_pb";
import { Edit, Eye, Trash2 } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Checkbox } from "../../components/ui/checkbox";

export const TaskList = () => {
    const friendly = useUserFriendlyName();
    const bulkDeleteAction = (
        table: UseTableReturnType<BaseRecord, HttpError>,
    ) => {
        const label = `Delete Selected (${
            table.getSelectedRowModel().rows.length
        }) ${friendly(
            "Task",
            table.getSelectedRowModel().rows.length > 1 ? "plural" : "singular",
        )}`;

        return {
            label,
            onClick: () => {
                alert("Delete Selected");
            },
        };
    };

    const getTaskStateBadgeVariant = (state: Task_State): "default" | "secondary" | "destructive" | "outline" => {
        switch (state) {
            case Task_State.OPEN:
                return "secondary";
            case Task_State.CLOSED:
                return "outline";
            default:
                return "default";
        }
    };

    const getTaskOutcomeBadgeVariant = (outcome: Task_TaskOutcome): "default" | "secondary" | "destructive" | "outline" => {
        switch (outcome) {
            case Task_TaskOutcome.SUCCEEDED:
                return "outline";
            case Task_TaskOutcome.FAILED:
                return "destructive";
            default:
                return "default";
        }
    };

    return (
        <ListPage>
            <Table enableSorting enableFilters>
                <Table.Column
                    accessorKey="name"
                    id="select"
                    header={({ table }) => (
                        <Table.CheckAll
                            options={[bulkDeleteAction(table)]}
                            table={table}
                        />
                    )}
                    cell={({ row }) => (
                        <Checkbox
                            className="translate-y-[2px]"
                            checked={row.getIsSelected()}
                            onCheckedChange={(value) =>
                                row.toggleSelected(!!value)
                            }
                            aria-label="Select row"
                            key={`checkbox-${row.original.name}`}
                        />
                    )}
                />
                <Table.Column
                    header="ID"
                    id="id"
                    accessorKey="name"
                    enableSorting
                    enableHiding
                    cell={({ row }) => row.original.name?.split("/").pop()}
                    filter={(props: TableFilterProps) => (
                        <Table.Filter.Search {...props} />
                    )}
                />
                <Table.Column
                    header="Type"
                    id="type"
                    accessorKey="type"
                    enableSorting
                    enableHiding
                    filter={(props: TableFilterProps) => (
                        <Table.Filter.Dropdown
                            {...props}
                            options={[
                                { label: "Pickup", value: "PICKUP" },
                                { label: "Delivery", value: "DELIVERY" },
                                { label: "Scheduled Stop", value: "SCHEDULED_STOP" },
                                { label: "Unavailable", value: "UNAVAILABLE" },
                            ]}
                        />
                    )}
                    cell={({ row }) => (
                        <Badge variant="outline">
                            {Task_Type[row.original.type]}
                        </Badge>
                    )}
                />
                <Table.Column
                    header="State"
                    id="state"
                    accessorKey="state"
                    enableSorting
                    enableHiding
                    filter={(props: TableFilterProps) => (
                        <Table.Filter.Dropdown
                            {...props}
                            options={[
                                { label: "Open", value: "OPEN" },
                                { label: "Closed", value: "CLOSED" },
                            ]}
                        />
                    )}
                    cell={({ row }) => (
                        <Badge variant={getTaskStateBadgeVariant(row.original.state)}>
                            {Task_State[row.original.state]}
                        </Badge>
                    )}
                />
                <Table.Column
                    header="Outcome"
                    id="taskOutcome"
                    accessorKey="taskOutcome"
                    enableSorting
                    enableHiding
                    filter={(props: TableFilterProps) => (
                        <Table.Filter.Dropdown
                            {...props}
                            options={[
                                { label: "Succeeded", value: "SUCCEEDED" },
                                { label: "Failed", value: "FAILED" },
                            ]}
                        />
                    )}
                    cell={({ row }) => (
                        <Badge variant={getTaskOutcomeBadgeVariant(row.original.taskOutcome)}>
                            {Task_TaskOutcome[row.original.taskOutcome]}
                        </Badge>
                    )}
                />
                <Table.Column
                    header="Vehicle"
                    id="vehicle"
                    accessorKey="deliveryVehicleId"
                    enableSorting
                    enableHiding
                    filter={(props: TableFilterProps) => (
                        <Table.Filter.Search {...props} />
                    )}
                />
                <Table.Column
                    header="Location"
                    id="location"
                    accessorKey="plannedLocation"
                    cell={({ row }) => {
                        const location = row.original.plannedLocation?.point;
                        if (!location) return "-";
                        return (
                            <span className="font-mono text-sm">
                                {`${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}`}
                            </span>
                        );
                    }}
                />
                <Table.Column
                    accessorKey="name"
                    id="actions"
                    cell={({ row: { original } }) => (
                        <Table.Actions>
                            <Table.ShowAction
                                title="Detail"
                                row={original}
                                resource="tasks"
                                icon={<Eye size={16} />}
                            />
                            <Table.EditAction
                                title="Edit"
                                row={original}
                                resource="tasks"
                                icon={<Edit size={16} />}
                            />
                            <Table.DeleteAction
                                title="Delete"
                                row={original}
                                resource="tasks"
                                icon={<Trash2 size={16} />}
                            />
                        </Table.Actions>
                    )}
                />
            </Table>
        </ListPage>
    );
};

export default TaskList;
