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
  const setUserData = useStore((state) => state.setUserData);
  if (userData) {
    setUserData(userData);
    navigate("/");
  }
}

interface RegisterProps {
  name: string;
  description: string;
  email: string;
  password: string;
  file?: File;
}
const register = async ({
  description,
  email,
  name,
  password,
  file,
}: RegisterProps) => {
  const formData = new FormData();
  formData.append("description", description);
  formData.append("email", email);
  formData.append("name", name);
  formData.append("password", password);
  if (file) formData.append("file", file);

  const { data } = await axiosClient.post(Endpoint.register, formData);
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

interface EditProfileProps {
  name: string;
  description: string;
  email: string;
  token?: string;
  file?: File;
}
const editProfile = async ({
  description,
  email,
  name,
  token,
  file,
}: EditProfileProps) => {
  const formData = new FormData();
  formData.append("description", description);
  formData.append("email", email);
  formData.append("name", name);
  if (file) formData.append("file", file);

  const { data } = await axiosClient.put(Endpoint.updateUser, formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
export function useEditProfile() {
  return useMutation<AuthData, Error, EditProfileProps>((props) => {
    return editProfile(props);
  });
}
