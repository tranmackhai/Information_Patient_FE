import { useMutation, useQuery } from "@tanstack/react-query";
import { patientApi } from "../apis/modules/patient.api";
import { PatientDTo } from "../types/patient";
import { isNil } from "lodash";

export type TUsePatient = {
  id?: string;
  page?: number;
  pageSize?: number;
};

const usePatient = (payload: TUsePatient) => {
  const { data: patients, refetch } = useQuery({
    queryKey: ["patients", payload.page, payload.pageSize],
    queryFn: async () => {
      const response = await patientApi.getAll({
        page: payload.page,
        limit: payload.pageSize,
      });
      const { data } = response;
      return {
        data,
      };
    },
    refetchOnWindowFocus: false,
  });

  const { data: patient } = useQuery({
    queryKey: ["patientDetail"],
    queryFn: async () => {
      const response = await patientApi.getById(payload.id as string);
      const { data } = response;
      return {
        data,
      };
    },
    refetchOnWindowFocus: false,
    enabled: !isNil(payload.id),
  });

  const { mutate: createPatient, data: resCreatePatient } = useMutation({
    mutationFn: ({ payload }: { payload: PatientDTo }) => {
      return patientApi.create(payload);
    },
    onSuccess: (data) => {
      refetch();
      return data;
    },
    onError: (error) => {
      return error;
    },
  });

  return {
    patients,
    refetch,
    createPatient,
    resCreatePatient,
    patient,
  };
};

export { usePatient };
