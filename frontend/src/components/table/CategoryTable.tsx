import { useEffect, useState } from "react";
import {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} from "@/api/categoryApi";
import { DataTable } from "@/components/table/component/data-table";
import {
  generateColumns,
  DataItem,
} from "@/components/table/component/columns";
import { DialogForm } from "@/components/forms/DialogForm";
import { CategoryForm } from "@/components/forms/CategoryForm";
import { useToast } from "@/hooks/useToast";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "@/store/slices/categorySlice";
import { RootState } from "@/store";
import { CreateCategory, UpdateCategory } from "@/interface";

const CategoryTable = ({ title }: { title: string }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state: RootState) => state.category);
  const { data: fetchedCategories } = useGetCategoriesQuery(undefined, {
    skip: categories.length > 0,
  });
  const [createCategory] = useCreateCategoryMutation();
  const [updateCategoryMutation] = useUpdateCategoryMutation();
  const [deleteCategoryMutation] = useDeleteCategoryMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<UpdateCategory | null>(null);
  const { showSuccess, showError } = useToast();

  useEffect(() => {
    if (fetchedCategories) {
      dispatch(setCategories(fetchedCategories));
    }
  }, [fetchedCategories, dispatch]);

  const handleCreate = async (newCategory: CreateCategory) => {
    try {
      const result = await createCategory(newCategory).unwrap();
      dispatch(addCategory(result));
      setIsDialogOpen(false);
      showSuccess("Category created successfully");
    } catch (error) {
      showError("Failed to create category");
    }
  };

  const handleUpdate = async (id: number, updatedCategory: CreateCategory) => {
    try {
      const result = await updateCategoryMutation({
        id,
        ...updatedCategory,
      }).unwrap();
      dispatch(updateCategory(result));
      setIsDialogOpen(false);
      showSuccess("Category updated successfully");
    } catch (error) {
      showError("Failed to update category");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteCategoryMutation(id).unwrap();
      dispatch(deleteCategory(id));
      showSuccess("Category deleted successfully");
    } catch (error) {
      showError("Failed to delete category");
    }
  };

  const handleMultipleDelete = async (ids: string[]) => {
    try {
      await Promise.all(
        ids.map((id) => {
          deleteCategoryMutation(id).unwrap();
          dispatch(deleteCategory(Number(id)));
        })
      );
      showSuccess("Category deleted successfully");
    } catch (error) {
      showError("Failed to delete Label items");
      console.error("Failed to delete Label items", error);
    }
  };

  const categoriesWithHandlers: DataItem[] =
    categories.map((logo: UpdateCategory) => ({
      ...logo,
      handleUpdate: () => {
        setSelectedCategory({
          id: logo.id,
          name: logo.name,
        });
        setIsDialogOpen(true);
      },
      handleDelete: () => handleDelete(logo.id),
    })) || [];

  const columns = generateColumns(
    categoriesWithHandlers,
    [],
    ["id", "handleUpdate", "handleDelete"],
    true
  );

  return (
    <div>
      <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
      <DataTable
        columns={columns}
        data={categoriesWithHandlers}
        onMultipleDelete={handleMultipleDelete}
        searchableFields={["name"]}
        setIsDialogOpen={() => {
          setSelectedCategory(null);
          setIsDialogOpen(true);
        }}
      />
      <DialogForm
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Create Category"
        description="Create a new Category with the following details."
        formComponent={
          <CategoryForm
            onSubmit={
              selectedCategory
                ? (data) => handleUpdate(selectedCategory.id, data)
                : handleCreate
            }
            defaultValues={selectedCategory || undefined}
          />
        }
      />
    </div>
  );
};

export default CategoryTable;
