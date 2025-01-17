import { useEffect } from "react";
import {
  useGetPortfoliosQuery,
  useDeletePortfolioMutation,
} from "@/api/portfolioApi";
import { DataTable } from "@/components/table/component/data-table";
import {
  generateColumns,
  DataItem,
} from "@/components/table/component/columns";
import { useToast } from "@/hooks/useToast";
import { useDispatch, useSelector } from "react-redux";
import { setPortfolios, deletePortfolio } from "@/store/slices/portfolioSlice";
import { RootState } from "@/store";
import { PortfolioInterface } from "@/interface";

const PortfolioTable = ({ title }: { title: string }) => {
  const dispatch = useDispatch();
  const { portfolios } = useSelector((state: RootState) => state.portfolio);
  const { data: fetchedPortfolios } = useGetPortfoliosQuery(undefined, {
    skip: portfolios.length > 0,
  });
  const [deletePortfolioMutation] = useDeletePortfolioMutation();
  const { showSuccess, showError } = useToast();

  useEffect(() => {
    if (fetchedPortfolios) {
      dispatch(setPortfolios(fetchedPortfolios));
    }
  }, [fetchedPortfolios, dispatch]);

  const handleDelete = async (id: number) => {
    try {
      await deletePortfolioMutation(id).unwrap();
      dispatch(deletePortfolio(id));
      // refetch();
      showSuccess("Portfolio deleted successfully");
    } catch (error) {
      showError("Failed to delete portfolio");
    }
  };

  const handleMultipleDelete = async (ids: string[]) => {
    try {
      await Promise.all(ids.map((id) => deletePortfolioMutation(id).unwrap()));
      // refetch();
      showSuccess("Portfolio deleted successfully");
    } catch (error) {
      showError("Failed to delete Portfolio");
      console.error("Failed to delete Portfolio", error);
    }
  };

  const portfoliosWithHandlers: DataItem[] =
    portfolios.map((client: PortfolioInterface) => ({
      ...client,
      handleDelete: () => handleDelete(client.id),
    })) || [];

  const columns = generateColumns(
    portfoliosWithHandlers,
    ["image"],
    [
      "id",
      "problem",
      "solution",
      "impact_1_title",
      "impact_1_stats",
      "impact_2_title",
      "impact_2_stats",
      "impact_3_title",
      "impact_3_stats",
      "impact_4_title",
      "impact_4_stats",
      "handleDelete",
    ],
    true
  );

  return (
    <div>
      <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
      <DataTable
        columns={columns}
        data={portfoliosWithHandlers}
        onMultipleDelete={handleMultipleDelete}
        searchableFields={["title", "button_text", "heading"]}
        module="portfolio"
      />
    </div>
  );
};

export default PortfolioTable;
