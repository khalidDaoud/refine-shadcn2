import { useDeleteHelper } from "@/hooks";
import { DeleteContext } from "@/providers";
import { useContext } from "react";
import type { RowActionProps } from ".";
import { RowAction } from ".";

type DeleteActionProps = RowActionProps & {
    row: Record<string, any>;
    resource: string;
    title: string;
    onAfterHandle?: () => void;
};

export function DeleteAction({
    row,
    resource,
    title,
    disabled,
    onAfterHandle,
    ...props
}: DeleteActionProps) {
    const { can, reason } = useDeleteHelper(resource, String(row.id), row);  // Pass row as meta
    const deleteContext = useContext(DeleteContext);

    return (
        <RowAction
            {...props}
            disabled={!can || disabled}
            title={!can ? reason : title}
            onClick={() =>
                deleteContext?.updateData({
                    row,  // Use 'row' instead of 'rowId'
                    resource,
                    toogle: true,
                    onAfterHandle,
                })
            }
        />
    );
}

DeleteAction.displayName = "DeleteAction";
