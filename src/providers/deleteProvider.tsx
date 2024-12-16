import { ConfirmDialog } from "@/components/confirm";
import { useDeleteHelper, useOnBack } from "@/hooks";
import { useTranslate, useDelete } from "@refinedev/core";
import React, {
    PropsWithChildren,
    createContext,
    useCallback,
    useState,
} from "react";

type DeleteDataType = {
    toogle: boolean;
    row: Record<string, any> | null;
    resource: string;
    redirectBack?: boolean;
    onAfterHandle?: () => void;
};

export interface DeleteContextType {
    data: DeleteDataType | null;
    updateData: (data: DeleteDataType | Partial<DeleteDataType>) => void;
}

export function DeleteActionModal(props: DeleteContextType) {
    const back = useOnBack();
    const { mutate: deleteOne, isLoading } = useDelete();
    const { can } = useDeleteHelper(
        props.data?.resource ?? "",
        props.data?.row?.id ?? "",
    );

    const translate = useTranslate();

    const onDelete = useCallback(() => {
        if (can && props.data?.row && props.data?.resource) {
            // Extract ID from name field if it exists, otherwise use id
            const id = props.data.row.name?.split("/").pop() || props.data.row.id;
            
            // Keep the original row data but ensure it has the correct name format
            const rowData = {
                ...props.data.row,
                name: `providers/default/${props.data.resource}/${id}`
            };

            return deleteOne(
                {
                    resource: props.data.resource,
                    id,
                    meta: rowData // Pass the full row data with correct name format
                },
                {
                    onSuccess() {
                        const isRedirectBack = props.data?.redirectBack ?? false;
                        const onAfterHandle = props.data?.onAfterHandle;

                        props.updateData({
                            toogle: false,
                            row: null,
                            resource: "",
                            redirectBack: false,
                            onAfterHandle: undefined,
                        });

                        if (isRedirectBack) {
                            back?.();
                        }

                        if (onAfterHandle) {
                            onAfterHandle();
                        }
                    },
                }
            );
        }

        return undefined;
    }, [can, props.data, deleteOne, back]);

    return (
        <ConfirmDialog
            open={Boolean(can && props.data?.toogle)}
            loading={isLoading}
            title={translate("Are you sure?")}
            description={translate("This action cannot be undone.")}
            okText={translate("Delete")}
            cancelText={translate("Cancel")}
            okButtonVariant={"destructive"}
            onOpenChange={() => {
                if (!isLoading) {
                    props.updateData({
                        toogle: false,
                        row: null,
                        resource: "",
                    });
                }
            }}
            onConfirm={onDelete}
        />
    );
}

const DeleteContext = createContext<DeleteContextType | undefined>(undefined);

const DeleteProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [data, setData] = useState<DeleteDataType | null>(null);

    const updateData = (newData: DeleteDataType | Partial<DeleteDataType>) => {
        if (!newData.toogle) {
            // Reset state
            setData(null);
        } else {
            // Update state with new data
            setData(prev => ({
                ...prev,
                ...newData,
            } as DeleteDataType));
        }
    };

    return (
        <DeleteContext.Provider value={{ data, updateData }}>
            {children}
            <DeleteActionModal
                data={data}
                updateData={updateData}
            />
        </DeleteContext.Provider>
    );
};

export { DeleteContext, DeleteProvider };
