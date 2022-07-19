import { Lock, At, IdentificationCard, Password } from "phosphor-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FormBox } from "../components/FormBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { useRegister } from "../hooks";
import { useState } from "react";
import { Loading } from "../components/Loading";
import { FileInput } from "../components/FileInput";
import { useQueryClient } from "react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../schemas/authSchema";

interface RegisterInput {
  name: string;
  email: string;
  description: string;
  password: string;
  file?: File[];
}

export const RegisterPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const methods = useForm<RegisterInput>({
    resolver: yupResolver(registerSchema),
  });

  const registerHandler: SubmitHandler<RegisterInput> = (data) => {
    mutate(
      { ...data, file: data?.file?.[0] },
      {
        onSuccess(data) {
          queryClient.setQueryData("userData", data);
          navigate("/");
        },
      }
    );
  };

  const { mutate, isLoading } = useRegister();

  return (
    <>
      {isLoading && <Loading />}
      <FormBox
        methods={methods}
        onSubmit={methods.handleSubmit(registerHandler)}
      >
        <h2 className="text-2xl font-bold tracking-wide">JOIN US</h2>
        <TextInput
          registerName="name"
          leftIcon={<IdentificationCard size={24} className="text-gray-500" />}
          placeholder="Enter a name"
        />
        <TextInput
          registerName="email"
          leftIcon={<At size={24} className="text-gray-500" />}
          placeholder="Enter an email"
        />
        <TextInput
          registerName="description"
          leftIcon={<Password size={24} className="text-gray-500" />}
          placeholder="Enter a description"
        />
        <TextInput
          registerName="password"
          leftIcon={<Password size={24} className="text-gray-500" />}
          placeholder="Enter a password"
        />
        <FileInput registerName="file" />
        <Button
          leftIcon={<Lock size={24} className="text-white" />}
          color="secondary"
        >
          Register
        </Button>
        <Link to="/login">
          <p className="text-sm font-medium text-tropical-blue-500 duration-300 hover:text-tropical-blue-400 underline mt-2">
            Do you already have an account ? Login.
          </p>
        </Link>
      </FormBox>
    </>
  );
};
