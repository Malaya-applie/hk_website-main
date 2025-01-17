import { CreateBlogInterface, UpdateBlog } from "@/interface";
import axios from "./axios";

export const fetchBlogs = async () => {
  try {
    const response = await axios.get("/api/blog");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch blogs", error);
    throw error;
  }
};
export const fetchBlogById = async (id: number) => {
  try {
    const response = await axios.get(`/api/blog/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch blog by id", error);
    throw error;
  }
};

export const createBlog = async (newBlog: CreateBlogInterface) => {
  const formData = new FormData();
  formData.append("title", newBlog.title);
  formData.append("description", newBlog.description);
  formData.append("author", newBlog.author);
  if (newBlog.categoryId) {
    formData.append("categoryId", newBlog.categoryId);
  }
  formData.append("introduction", newBlog.introduction);
  if (newBlog.image) {
    formData.append("image", newBlog.image[0]);
  }
  try {
    const response = await axios.post("/api/blog", formData);
    return response.data;
  } catch (error) {
    console.error("Failed to create blog", error);
    throw error;
  }
};

export const updateBlog = async (updatedBlog: UpdateBlog) => {
  try {
    const response = await axios.put(
      `/api/blog/${updatedBlog.id}`,
      updatedBlog
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update blog", error);
    throw error;
  }
};

export const deleteBlog = async (blogId: number) => {
  try {
    const response = await axios.delete(`/api/blog/${blogId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete blog", error);
    throw error;
  }
};

export const getOneBlogByType = async (type: string) => {
  try {
    const response = await axios.get(`/api/blog/type/${type}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch blog by id", error);
    throw error;
  }
};

export const getBlogsByType = async (type: string, count: string) => {
  try {
    const response = await axios.get(`/api/blog/show/${type}/${count}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch blog by id", error);
    throw error;
  }
};

export const getBlog = async (id: string) => {
  try {
    const response = await axios.get(`/api/blog/blog/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch blog by id", error);
    throw error;
  }
};
