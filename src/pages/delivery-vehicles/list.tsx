import { ListPage } from "../../curds/list";
import { Table, TableFilterProps } from "../../table";
import { BaseRecord, HttpError, useUserFriendlyName } from "@refinedev/core";
import type { UseTableReturnType } from "@refinedev/react-table";
import { DeliveryVehicle_DeliveryVehicleType } from "../../gen/delivery/v1/delivery_vehicles_pb";
import { DeliveryVehicleNavigationStatus } from "../../gen/delivery/v1/common_pb";
import { Edit, Eye, Trash2 } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Checkbox } from "../../components/ui/checkbox";

export const DeliveryVehicleList = () => {
    const friendly = useUserFriendlyName();
    const bulkDeleteAction = (
        table: UseTableReturnType<BaseRecord, HttpError>,
    ) => {
        const label = `Delete Selected (${
            table.getSelectedRowModel().rows.length
        }) ${friendly(
            "Vehicle",
            table.getSelectedRowModel().rows.length > 1 ? "plural" : "singular",
        )}`;

        return {
            label,
            onClick: () => {
                alert("Delete Selected");
            },
        };
    };

    const getNavigationStatusBadgeVariant = (status: DeliveryVehicleNavigationStatus): "default" | "secondary" | "destructive" | "outline" => {
        switch (status) {
            case DeliveryVehicleNavigationStatus.ENROUTE_TO_DESTINATION:
                return "secondary";
            case DeliveryVehicleNavigationStatus.ARRIVED_AT_DESTINATION:
                return "outline";
            case DeliveryVehicleNavigationStatus.OFF_ROUTE:
                return "destructive";
            case DeliveryVehicleNavigationStatus.NO_GUIDANCE:
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
                    filter={(props: TableFilterProps) => (
                        <Table.Filter.Search {...props} />
                    )}
                    cell={({ row }) => row.original.name?.split("/").pop()}
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
                                { label: "Auto", value: "AUTO" },
                                { label: "Two Wheeler", value: "TWO_WHEELER" },
                                { label: "Bicycle", value: "BICYCLE" },
                                { label: "Pedestrian", value: "PEDESTRIAN" },
                            ]}
                        />
                    )}
                    cell={({ row }) => (
                        <Badge variant="outline">
                            {DeliveryVehicle_DeliveryVehicleType[row.original.type]}
                        </Badge>
                    )}
                />
                <Table.Column
                    header="Navigation Status"
                    id="navigationStatus"
                    accessorKey="navigationStatus"
                    enableSorting
                    enableHiding
                    filter={(props: TableFilterProps) => (
                        <Table.Filter.Dropdown
                            {...props}
                            options={[
                                { label: "No Guidance", value: "NO_GUIDANCE" },
                                { label: "Enroute", value: "ENROUTE_TO_DESTINATION" },
                                { label: "Off Route", value: "OFF_ROUTE" },
                                { label: "Arrived", value: "ARRIVED_AT_DESTINATION" },
                            ]}
                        />
                    )}
                    cell={({ row }) => (
                        <Badge variant={getNavigationStatusBadgeVariant(row.original.navigationStatus)}>
                            {DeliveryVehicleNavigationStatus[row.original.navigationStatus]}
                        </Badge>
                    )}
                />
                <Table.Column
                    header="Last Location"
                    id="location"
                    accessorKey="lastLocation"
                    cell={({ row }) => {
                        const location = row.original.lastLocation?.location;
                        if (!location) return "-";
                        return (
                            <span className="font-mono text-sm">
                                {`${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}`}
                            </span>
                        );
                    }}
                />
                <Table.Column
                    header="Attributes"
                    id="attributes"
                    accessorKey="attributes"
                    enableHiding
                    cell={({ row }) => 
                        row.original.attributes
                            .map((attr: { key: string; value: string }) => `${attr.key}: ${attr.value}`)
                            .join(", ")
                    }
                    filter={(props: TableFilterProps) => (
                        <Table.Filter.Search {...props} />
                    )}
                />
                <Table.Column
                    accessorKey="name"
                    id="actions"
                    cell={({ row: { original } }) => (
                        <Table.Actions>
                            <Table.ShowAction
                                title="Detail"
                                row={original}
                                resource="deliveryVehicles"
                                icon={<Eye size={16} />}
                            />
                            <Table.EditAction
                                title="Edit"
                                row={original}
                                resource="deliveryVehicles"
                                icon={<Edit size={16} />}
                            />
                            <Table.DeleteAction
                                title="Delete"
                                row={original}
                                resource="deliveryVehicles"
                                icon={<Trash2 size={16} />}
                            />
                        </Table.Actions>
                    )}
                />
            </Table>
        </ListPage>
    );
};

export default DeliveryVehicleList;
