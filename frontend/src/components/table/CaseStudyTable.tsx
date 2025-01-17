import { useEffect } from "react";
import {
  useGetCaseStudiesQuery,
  useDeleteCaseStudyMutation,
} from "@/api/caseStudyApi";
import { DataTable } from "@/components/table/component/data-table";
import {
  generateColumns,
  DataItem,
} from "@/components/table/component/columns";
import { useToast } from "@/hooks/useToast";
import { useDispatch, useSelector } from "react-redux";
import { setCaseStudies, deleteCaseStudy } from "@/store/slices/caseStudySlice";
import { RootState } from "@/store";
import { CaseStudyInterface } from "@/interface";

const CaseStudyTable = ({ title }: { title: string }) => {
  const dispatch = useDispatch();
  const { caseStudies } = useSelector((state: RootState) => state.caseStudy);
  const { data: fetchedCaseStudies } = useGetCaseStudiesQuery(undefined, {
    skip: caseStudies.length > 0,
  });
  const [deleteCaseStudyMutation] = useDeleteCaseStudyMutation();
  const { showSuccess, showError } = useToast();

  useEffect(() => {
    if (fetchedCaseStudies) {
      dispatch(setCaseStudies(fetchedCaseStudies));
    }
  }, [fetchedCaseStudies, dispatch]);

  const handleDelete = async (id: number) => {
    try {
      await deleteCaseStudyMutation(id).unwrap();
      dispatch(deleteCaseStudy(id));
      // refetch();
      showSuccess("Case study deleted successfully");
    } catch (error) {
      showError("Failed to delete case study");
    }
  };

  const handleMultipleDelete = async (ids: string[]) => {
    try {
      await Promise.all(ids.map((id) => deleteCaseStudyMutation(id).unwrap()));
      // refetch();
      showSuccess("Case study deleted successfully");
    } catch (error) {
      showError("Failed to delete Case study");
      console.error("Failed to delete Case study", error);
    }
  };

  const caseStudiesWithHandlers: DataItem[] =
    caseStudies.map((client: CaseStudyInterface) => ({
      ...client,
      handleDelete: () => handleDelete(client.id),
    })) || [];

  const columns = generateColumns(
    caseStudiesWithHandlers,
    ["image"],
    ["id", "description", "points", "handleDelete"],
    true
  );

  return (
    <div>
      <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
      <DataTable
        columns={columns}
        data={caseStudiesWithHandlers}
        onMultipleDelete={handleMultipleDelete}
        searchableFields={["title", "button_text", "button_link"]}
        module="case-study"
      />
    </div>
  );
};

export default CaseStudyTable;
