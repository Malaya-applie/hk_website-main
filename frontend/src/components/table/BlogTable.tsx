import { useEffect, useState } from "react";
import { fetchBlogs, deleteBlog } from "@/api/blogApi";
import { DataTable } from "@/components/table/component/data-table";
import {
  generateColumns,
  DataItem,
} from "@/components/table/component/columns";
import { useToast } from "@/hooks/useToast";
import { UpdateBlog } from "@/interface";

const BlogTable = ({ title }: { title: string }) => {
  const [blogs, setBlogs] = useState<UpdateBlog[]>([]);
  const { showSuccess, showError } = useToast();

  const loadBlogs = async () => {
    try {
      const data = await fetchBlogs();
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteBlog(id);
      const data = await fetchBlogs();
      setBlogs(data);
      showSuccess("Blog deleted successfully");
    } catch (error) {
      showError("Failed to delete blog");
    }
  };

  const handleMultipleDelete = async (ids: string[]) => {
    try {
      await Promise.all(ids.map((id) => deleteBlog(parseInt(id))));
      const data = await fetchBlogs();
      setBlogs(data);
      showSuccess("Blog deleted successfully");
    } catch (error) {
      showError("Failed to delete Blog");
      console.error("Failed to delete Blog", error);
    }
  };

  const blogsWithHandlers: DataItem[] =
    blogs.map((client: UpdateBlog) => ({
      ...client,
      handleDelete: () => handleDelete(client.id),
    })) || [];

  const columns = generateColumns(
    blogsWithHandlers,
    ["image"],
    ["id", "description", "introduction", "handleDelete"],
    true
  );

  return (
    <div>
      <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
      <DataTable
        columns={columns}
        data={blogsWithHandlers}
        onMultipleDelete={handleMultipleDelete}
        searchableFields={["title", "category", "author"]}
        module="blog"
      />
    </div>
  );
};

export default BlogTable;
