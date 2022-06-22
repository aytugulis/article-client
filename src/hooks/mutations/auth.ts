import { Endpoint } from "../../type/Endpoint";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../utils/client";
import { Author } from "../../type/Author";

interface Register {
  token: string;
}
interface RegisterProps {
  name: string;
  description: string;
  email: string;
  password: string;
}
const register = async (props: RegisterProps) => {
  const { data } = await axiosClient.post(Endpoint.register, props);
  return data;
};
export function useRegister() {
  return useMutation<Register, Error, RegisterProps>((props) => {
    return register(props);
  });
}

interface Login {
  token: string;
}
interface LoginProps {
  email: string;
  password: string;
}
const login = async (props: LoginProps) => {
  const { data } = await axiosClient.post(Endpoint.login, props);
  return data;
};
export function useLogin() {
  return useMutation<Login, Error, LoginProps>((props) => {
    return login(props);
  });
}
