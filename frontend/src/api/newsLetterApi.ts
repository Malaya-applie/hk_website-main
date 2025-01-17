import axios from "./axios";

export const fetchNewsletters = async () => {
  try {
    const response = await axios.get("/api/newsletter");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch newsletters", error);
    throw error;
  }
};

export const createNewsletter = async (newNewsletterSignup: any) => {
  try {
    const response = await axios.post("/api/newsletter", newNewsletterSignup);
    return response.data;
  } catch (error) {
    console.error("Failed to create newsletter", error);
    throw error;
  }
};
