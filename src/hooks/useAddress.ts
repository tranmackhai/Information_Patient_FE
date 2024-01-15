import { useQuery } from "@tanstack/react-query";
import { addressApi } from "../apis/modules/address.api";
import { isNil } from "lodash";

type payloadUseAddress = {
  provinceId?: string | undefined;
  districtId?: string | undefined;
};

const useAddress = (payload: payloadUseAddress) => {
  const { data: provinces, refetch } = useQuery({
    queryKey: ["provinces"],
    queryFn: async () => {
      const response = await addressApi.getProvince();
      const { data } = response;
      return {
        data,
      };
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const { data: districtByProvince, refetch: refetchDistrictByProvince } =
    useQuery({
      queryKey: ["districts"],
      queryFn: async () => {
        const response = await addressApi.getDistrictsByProvince({
          parentId: payload.provinceId as string,
        });
        const { data } = response;
        return {
          data,
        };
      },
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      enabled: !isNil(payload.provinceId),
    });

  const { data: wardsByDistrict, refetch: refetchWardsByDistrict } = useQuery({
    queryKey: ["wards"],
    queryFn: async () => {
      const response = await addressApi.getWardsByDistrict({
        parentId: payload.districtId as string,
      });
      const { data } = response;
      return {
        data,
      };
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !isNil(payload.districtId),
  });

  return {
    provinces,
    refetch,
    districtByProvince,
    refetchDistrictByProvince,
    wardsByDistrict,
    refetchWardsByDistrict,
  };
};

export { useAddress };
