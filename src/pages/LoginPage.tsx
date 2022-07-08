import { Fingerprint, At, Password } from "phosphor-react";
import { Link, Navigate } from "react-router-dom";
import { FormBox } from "../components/FormBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { useLogin } from "../hooks/";
import { Loading } from "../components/Loading";
import { useState } from "react";
import { useQueryClient } from "react-query";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const queryClient = useQueryClient();

  const loginHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    mutate(
      { email, password },
      {
        onSuccess(data) {
          queryClient.setQueryData("userData", data);
        },
      }
    );
  };

  const { mutate, isLoading, isSuccess } = useLogin();

  return (
    <>
      {isSuccess && <Navigate to="/" />}
      {isLoading && <Loading />}
      <FormBox>
        <h2 className="text-2xl font-bold tracking-wide text-primary-900">
          WELCOME AGAIN
        </h2>
        <TextInput
          onChange={(e) => setEmail(e.target.value)}
          leftIcon={<At size={24} className="text-gray-500" />}
          placeholder="Enter your email"
        />
        <TextInput
          onChange={(e) => setPassword(e.target.value)}
          leftIcon={<Password size={24} className="text-gray-500" />}
          placeholder="Enter your password"
        />

        <Button
          onClick={(e) => loginHandler(e)}
          leftIcon={<Fingerprint size={24} className="text-white" />}
          color="secondary"
        >
          Login
        </Button>
        <Link to="/register">
          <p className="text-sm font-medium text-tropical-blue-500 duration-300 hover:text-tropical-blue-400 underline mt-2">
            Do not you have an account ? Join us.
          </p>
        </Link>
      </FormBox>
    </>
  );
};
