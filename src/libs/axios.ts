// libs/axios.ts
import { getToken } from "@/utils/token";
import axios from "axios";

const cax = (customToken?: string | null) => {
  const token = customToken ?? getToken();

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000",
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {},
  });
};

export default cax;
