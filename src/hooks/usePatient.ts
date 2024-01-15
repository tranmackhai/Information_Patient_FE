import { useMutation, useQuery } from "@tanstack/react-query";
import { patientApi } from "../apis/modules/patient.api";
import { PatientDTo } from "../types/patient";
import { useNavigate } from "react-router-dom";

export type TUsePatient = {
  page?: number;
  pageSize?: number;
};

const usePatient = (payload: TUsePatient) => {
  const navigate = useNavigate();
  // getAll
  const { data: patients, refetch } = useQuery({
    queryKey: ["patients", payload.page, payload.pageSize],
    queryFn: async () => {
      const response = await patientApi.getAll({
        page: payload.page,
        limit: payload.pageSize,
      });
      const { data } = response;
      // console.log(data);
      return {
        data,
      };
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const { mutate: createPatient } = useMutation({
    mutationFn: ({ payload }: { payload: PatientDTo }) => {
      return patientApi.create(payload);
    },
    onSuccess: () => {
      navigate("/patient");
    },
    onError: (error) => {
      return error;
    },
  });

  // getDetail

  // create user
  // update user
  // delete user
  return {
    patients,
    refetch,
    createPatient,
  };
};

export { usePatient };
