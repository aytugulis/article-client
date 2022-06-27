import { Endpoint } from "../../type/Endpoint";
import { useMutation } from "react-query";
import { axiosClient } from "../../utils/client";
import { Author } from "../../type/Author";
import { useStore } from "../../store/zustand";
import { useNavigate } from "react-router-dom";

interface AuthData extends Author {
  token: string;
}

export function useSaveToken(userData?: AuthData) {
  const navigate = useNavigate();
  const authorize = useStore((state) => state.authorize);
  if (userData) {
    authorize(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/");
  }
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
  return useMutation<AuthData, Error, RegisterProps>((props) => {
    return register(props);
  });
}

export interface Login extends Author {
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
  return useMutation<AuthData, Error, LoginProps>((props) => {
    return login(props);
  });
}
