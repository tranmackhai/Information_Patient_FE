import axiosInstance from "../config/api.config";
import { IQueryParams } from "../../types/common";
import qs from "querystringify";

const getProvince = async (params: IQueryParams) => {
  const response = await axiosInstance.get(
    `/address/province?${qs.stringify(params)}`
  );
  return response;
};

const getAddressLevel = async (params: IQueryParams) => {
  const response = await axiosInstance.get(
    `/address/address-level?${qs.stringify(params)}`
  );
  return response;
};

export const addressApi = {
  getProvince,
  getAddressLevel,
};
