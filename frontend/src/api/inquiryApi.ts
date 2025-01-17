import axios from "./axios";

export const fetchInquiries = async () => {
  try {
    const response = await axios.get("/api/inquiry");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch inquiries", error);
    throw error;
  }
};

export const createInquiry = async (newInquirySignup: any) => {
  try {
    const response = await axios.post("/api/inquiry", newInquirySignup);
    return response.data;
  } catch (error) {
    console.error("Failed to create inquiry", error);
    throw error;
  }
};
