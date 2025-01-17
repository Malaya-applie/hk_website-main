import { useEffect } from "react";
import {
  useGetClientFeedbacksQuery,
  useDeleteClientFeedbackMutation,
} from "@/api/clientFeedbackApi";
import { DataTable } from "@/components/table/component/data-table";
import {
  generateColumns,
  DataItem,
} from "@/components/table/component/columns";
import { useToast } from "@/hooks/useToast";
import { useDispatch, useSelector } from "react-redux";
import {
  setClientFeedbacks,
  deleteClientFeedback,
} from "@/store/slices/clientFeedbackSlice";
import { RootState } from "@/store";
import { ClientFeedbackInterface } from "@/interface";

const ClientFeedbackTable = ({ title }: { title: string }) => {
  const dispatch = useDispatch();
  const { clientFeedbacks } = useSelector(
    (state: RootState) => state.clientFeedback
  );
  const { data: fetchedClientFeedbacks } = useGetClientFeedbacksQuery(
    undefined,
    { skip: clientFeedbacks.length > 0 }
  );
  const [deleteClientFeedbackMutation] = useDeleteClientFeedbackMutation();
  const { showSuccess, showError } = useToast();

  useEffect(() => {
    if (fetchedClientFeedbacks) {
      dispatch(setClientFeedbacks(fetchedClientFeedbacks));
    }
  }, [fetchedClientFeedbacks, dispatch]);

  const handleDelete = async (id: number) => {
    try {
      await deleteClientFeedbackMutation(id).unwrap();
      dispatch(deleteClientFeedback(id));
      // refetch();
      showSuccess("Client feedback deleted successfully");
    } catch (error) {
      showError("Failed to delete client feedback");
    }
  };

  const handleMultipleDelete = async (ids: string[]) => {
    try {
      await Promise.all(
        ids.map((id) => deleteClientFeedbackMutation(id).unwrap())
      );
      // refetch();
      showSuccess("Client feedback deleted successfully");
    } catch (error) {
      showError("Failed to delete Client feedback");
      console.error("Failed to delete Client feedback", error);
    }
  };

  const clientFeedbacksWithHandlers: DataItem[] =
    clientFeedbacks.map((client: ClientFeedbackInterface) => ({
      ...client,
      handleDelete: () => handleDelete(client.id),
    })) || [];

  const columns = generateColumns(
    clientFeedbacksWithHandlers,
    ["userimage"],
    ["id", "feedback", "handleDelete"],
    true
  );

  return (
    <div>
      <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
      <DataTable
        columns={columns}
        data={clientFeedbacksWithHandlers}
        onMultipleDelete={handleMultipleDelete}
        searchableFields={["name", "company", "position"]}
        module="client-feedback"
      />
    </div>
  );
};

export default ClientFeedbackTable;
