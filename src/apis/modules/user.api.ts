import { IQueryParams } from "../../types/common";
import { UserDto } from "../../types/user";
import axiosInstance from "../config/api.config";
import qs from "querystringify";

const create = async (data: UserDto) => {
  const response = await axiosInstance.post(`/user/create`, data);
  return response;
};

const getAll = async (params: IQueryParams) => {
  const response = await axiosInstance.get(`/user?${qs.stringify(params)}`);
  return response;
};

const getById = async (id: string) => {
  const response = await axiosInstance.get(`/user/${id}`);
  return response;
};

const deleteUser = async (id: string) => {
  const response = await axiosInstance.get(`/user/delete${id}`);
  return response;
};

const updateUser = async (id: string, data: UserDto) => {
  const response = await axiosInstance.post(`/user/update/${id}`, data);
  return response;
};

const updatePassword = async (id: string, password: UserDto) => {
  const response = await axiosInstance.post(
    `/user/update-password/${id}`,
    password
  );
  return response;
};

export const userApi = {
  create,
  getAll,
  getById,
  deleteUser,
  updateUser,
  updatePassword,
};
