import { IQueryParams } from "../../types/common";
import { PatientDTo } from "../../types/patient";
import axiosInstance from "../config/api.config";
import qs from "querystringify";

const create = async (data: PatientDTo) => {
  const response = await axiosInstance.post(`/patient/create`, data);
  return response;
};

const getAll = async (params: IQueryParams) => {
  const response = await axiosInstance.get(`/patient?${qs.stringify(params)}`);
  return response;
};

const getById = async (id: number) => {
  const response = await axiosInstance.get(`/patient/${id}`);
  return response;
};

const deletePatient = async (id: number) => {
  const response = await axiosInstance.delete(`/patient/delete/${id}`);
  return response;
};

const updatePatient = async (id: number, data: PatientDTo) => {
  const response = await axiosInstance.post(`/patient/update/${id}`, data);
  return response;
};

export const patientApi = {
  create,
  getAll,
  getById,
  deletePatient,
  updatePatient,
};
