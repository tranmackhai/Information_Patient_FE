import qs from "querystringify";
import axiosInstance from "../config/api.config";

const getProvince = async () => {
  const response = await axiosInstance.get(`/address/province`);
  return response;
};

const getDistrictsByProvince = async (params: { parentId: string }) => {
  const response = await axiosInstance.get(
    `/address/district-by-province?${qs.stringify(params)}`
  );
  return response;
};

const getWardsByDistrict = async (params: { parentId: string }) => {
  const response = await axiosInstance.get(
    `/address/ward-by-district?${qs.stringify(params)}`
  );
  return response;
};

export const addressApi = {
  getProvince,
  getDistrictsByProvince,
  getWardsByDistrict,
};
