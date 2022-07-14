import { Fingerprint, At, Password } from "phosphor-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FormBox } from "../components/FormBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { useLogin } from "../hooks/";
import { Loading } from "../components/Loading";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { emailRegex } from "../utils/format";

interface LoginInputs {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const methods = useForm<LoginInputs>();

  const loginHandler: SubmitHandler<LoginInputs> = (data) => {
    mutate(data, {
      onSuccess(data) {
        queryClient.setQueryData("userData", data);
        navigate("/");
      },
    });
  };

  const { mutate, isLoading, isSuccess } = useLogin();

  return (
    <>
      {isLoading && <Loading />}
      <FormBox methods={methods} onSubmit={methods.handleSubmit(loginHandler)}>
        <h2 className="text-2xl font-bold tracking-wide text-primary-900">
          WELCOME AGAIN
        </h2>
        <TextInput
          registerName="email"
          registerOption={{ required: true, pattern: emailRegex }}
          leftIcon={<At size={24} className="text-gray-500" />}
          placeholder="Enter your email"
        />
        <TextInput
          registerName="password"
          registerOption={{ required: true }}
          leftIcon={<Password size={24} className="text-gray-500" />}
          placeholder="Enter your password"
        />

        <Button
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
