import { useQuery } from "@tanstack/react-query";
import { addressApi } from "../apis/modules/address.api";

const useAddress = () => {
  // getAll
  const { data: provinces, refetch } = useQuery({
    queryKey: ["provinces"],
    queryFn: async () => {
      const response = await addressApi.getProvince({});
      const { data } = response;
      // console.log(data);
      return {
        data,
      };
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return {
    provinces,
    refetch,
  };
};

export { useAddress };
