// libs/axios.ts
import { getToken } from "@/utils/token";
import axios from "axios";

const cax = (customToken?: string | null) => {
  const token = customToken ?? getToken();

  return axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {},
  });
};

export default cax;
