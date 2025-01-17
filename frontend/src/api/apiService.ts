import { loginInterface } from "@/interface";
import axios from "./axios";

// Define the login function
export const login = async (data: loginInterface) => {
  const response = await axios.post("/api/user/login", data);
  return response.data;
};

// Define other API functions as needed
export const fetchUserProfile = async (token: string) => {
  const response = await axios.get("/api/user/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
