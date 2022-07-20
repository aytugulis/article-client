import React, { useState } from "react";
import { At, IdentificationCard, Quotes, ArrowUp } from "phosphor-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FormBox } from "../components/FormBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { FileInput } from "../components/FileInput";
import { useAuth, useEditProfile } from "../hooks";
import { Loading } from "../components/Loading";
import { useQueryClient } from "react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUserSchema } from "../schemas/authSchema";

interface EditProfileInput {
  name: string;
  email: string;
  description: string;
  file?: File[];
}

export const EditProfilePage: React.FC = () => {
  const userData = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const methods = useForm<EditProfileInput>({
    resolver: yupResolver(editUserSchema),
    defaultValues: {
      description: userData?.description,
      email: userData?.email,
      name: userData?.name,
    },
  });

  const editUserHandler: SubmitHandler<EditProfileInput> = (data) => {
    mutate(
      { ...data, file: data?.file?.[0], token: userData?.token },
      {
        onSuccess(data, variables) {
          queryClient.setQueryData("userData", {
            ...data,
            token: variables.token,
          });
          navigate("/");
        },
      }
    );
  };

  const { mutate, isLoading } = useEditProfile();

  return (
    <>
      {isLoading && <Loading />}
      <FormBox
        methods={methods}
        onSubmit={methods.handleSubmit(editUserHandler)}
      >
        <h2 className="text-2xl font-bold tracking-wide">Edit Profile</h2>
        <TextInput
          registerName="name"
          leftIcon={<IdentificationCard size={24} className="text-gray-500" />}
        />
        <TextInput
          registerName="email"
          leftIcon={<At size={24} className="text-gray-500" />}
        />
        <TextInput
          registerName="description"
          leftIcon={<Quotes size={24} className="text-gray-500" />}
        />
        <FileInput registerName="file" />

        <Button
          leftIcon={<ArrowUp size={24} className="text-white" />}
          color="secondary"
        >
          Update
        </Button>
      </FormBox>
    </>
  );
};
