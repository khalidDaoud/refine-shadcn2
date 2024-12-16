import { ListPage } from "../../curds/list";
import { Table, TableFilterProps } from "../../table";
import { BaseRecord, HttpError, useUserFriendlyName } from "@refinedev/core";
import type { UseTableReturnType } from "@refinedev/react-table";
import { Edit, Eye, Trash2 } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Checkbox } from "../../components/ui/checkbox";

const TaskList = () => {
    const friendly = useUserFriendlyName();
    const bulkDeleteAction = (
        table: UseTableReturnType<BaseRecord, HttpError>,
    ) => {
        const label = `Delete Selected (${
            table.getSelectedRowModel().rows.length
        }) ${friendly(
            "Row",
            table.getSelectedRowModel().rows.length > 1 ? "plural" : "singular",
        )}`;

        return {
            label,
            onClick: () => {
                alert("Delete Selected");
            },
        };
    };

    // Function to get state badge color
    const getStateBadgeColor = (state: string) => {
        const colors = {
            NEW: 'bg-blue-100 text-blue-800',
            IN_PROGRESS: 'bg-yellow-100 text-yellow-800',
            COMPLETED: 'bg-green-100 text-green-800',
            CANCELLED: 'bg-red-100 text-red-800'
        };
        return colors[state as keyof typeof colors] || 'bg-gray-100 text-gray-800';
    };

    return (
        <ListPage>
            <Table enableSorting enableFilters>
                <Table.Column
                    accessorKey="id"
                    id={"select"}
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
                            key={`checkbox-${row.original.id}`}
                        />
                    )}
                />
                <Table.Column
                    header={"ID"}
                    id="id"
                    accessorKey="id"
                    enableSorting
                    enableHiding
                    filter={(props: TableFilterProps) => (
                        <Table.Filter.Search {...props} />
                    )}
                />
                <Table.Column
                    header={"Type"}
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
                                { label: "Service", value: "SERVICE" }
                            ]}
                        />
                    )}
                    cell={({ row }) => (
                        <Badge variant="outline">
                            {row.original.type?.replace('_', ' ')}
                        </Badge>
                    )}
                />
                <Table.Column
                    header={"State"}
                    id="state"
                    accessorKey="state"
                    enableSorting
                    enableHiding
                    filter={(props: TableFilterProps) => (
                        <Table.Filter.Dropdown
                            {...props}
                            options={[
                                { label: "New", value: "NEW" },
                                { label: "In Progress", value: "IN_PROGRESS" },
                                { label: "Completed", value: "COMPLETED" },
                                { label: "Cancelled", value: "CANCELLED" }
                            ]}
                        />
                    )}
                    cell={({ row }) => (
                        <Badge className={getStateBadgeColor(row.original.state)}>
                            {row.original.state?.replace('_', ' ')}
                        </Badge>
                    )}
                />
                <Table.Column
                    header={"Tracking ID"}
                    id="trackingId"
                    accessorKey="trackingId"
                    enableSorting
                    enableHiding
                    filter={(props: TableFilterProps) => (
                        <Table.Filter.Search {...props} />
                    )}
                />
                <Table.Column
                    header={"Location"}
                    id="plannedLocation"
                    accessorKey="plannedLocation"
                    cell={({ row }) => {
                        const location = row.original.plannedLocation;
                        if (!location) return '-';
                        return (
                            <span className="font-mono text-sm">
                                {`${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}`}
                            </span>
                        );
                    }}
                />
                <Table.Column
                    header={"Outcome"}
                    id="taskOutcome"
                    accessorKey="taskOutcome"
                    enableSorting
                    enableHiding
                    filter={(props: TableFilterProps) => (
                        <Table.Filter.Dropdown
                            {...props}
                            options={[
                                { label: "Outcome Unspecific", value: "TASK_OUTCOME_UNSPECIFIED" },
                                { label: "In Progress", value: "SUCCEEDED" },
                                { label: "Failed", value: "FAILED" },
                            ]}
                        />
                    )}
                    cell={({ row }) => (
                        <span className="text-sm">{row.original.taskOutcome || '-'}</span>
                    )}
                />
                <Table.Column
                    accessorKey={"id"}
                    id={"actions"}
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
