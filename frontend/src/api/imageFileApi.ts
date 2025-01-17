import axios from "./axios";

export const fetchfiles = async () => {
  try {
    const response = await axios.get("/api/file");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch files", error);
    throw error;
  }
};

export const createFile = async (newFile: any) => {
  const formData = new FormData();
  if (newFile.image) {
    formData.append("image", newFile.image[0]);
  }
  try {
    const response = await axios.post("/api/file", formData);
    return response.data;
  } catch (error) {
    console.error("Failed to create file", error);
    throw error;
  }
};
