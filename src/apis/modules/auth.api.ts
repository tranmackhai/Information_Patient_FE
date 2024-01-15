import { LoginDto } from "../../types/auth";
import axiosInstance from "../config/api.config";

const login = async (data: LoginDto) => {
  const response = await axiosInstance.post(`/auth/login`, data);
  return response;
};

export const authApi = {
  login,
};
