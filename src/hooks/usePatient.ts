import { useMutation, useQuery } from "@tanstack/react-query";
import { patientApi } from "../apis/modules/patient.api";
import { PatientDTo } from "../types/patient";
import { isNil } from "lodash";

export type TUsePatient = {
  id?: number;
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
      if (isNil(payload.id)) return null;

      const response = await patientApi.getById(payload.id);

      const { data } = response;
      return {
        data,
      };
    },
    refetchOnWindowFocus: false,
    // enabled: !isNil(payload.id),
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

  const { mutate: updatePatient, data: resUpdatePatient } = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: PatientDTo }) => {
      return patientApi.updatePatient(id, payload);
    },
    onSuccess: (data) => {
      refetch();
      return data;
    },
    onError: (error) => {
      return error;
    },
  });

  const { mutate: deletePatient, data: resDeletePatient } = useMutation({
    mutationFn: (id: number) => {
      return patientApi.deletePatient(id);
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
    patient,
    patients,
    resCreatePatient,
    resUpdatePatient,
    resDeletePatient,
    refetch,
    createPatient,
    deletePatient,
    updatePatient,
  };
};

export { usePatient };
