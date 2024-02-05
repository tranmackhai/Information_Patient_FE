import { useMutation, useQuery } from "@tanstack/react-query";
import { userApi } from "../apis/modules/user.api";
import { UserDto } from "../types/user";
import { useNavigate } from "react-router-dom";

export type TUseUser = {
  page?: number;
  pageSize?: number;
};

const useUser = (payload: TUseUser) => {
  const navigate = useNavigate();
  // getAll
  const { data: users, refetch } = useQuery({
    queryKey: ["users", payload.page, payload.pageSize],
    queryFn: async () => {
      const response = await userApi.getAll({
        page: payload.page,
        limit: payload.pageSize,
      });
      const { data } = response;
      return {
        data,
      };
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const { mutate: createUser, data: resCreatePatient } = useMutation({
    mutationFn: ({ payload }: { payload: UserDto }) => {
      return userApi.create(payload);
    },
    onSuccess: (data) => {
      refetch();
      return data;
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
    users,
    refetch,
    createUser,
    resCreatePatient,
  };
};

export { useUser };
