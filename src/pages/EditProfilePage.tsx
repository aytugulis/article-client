import React, { useState } from "react";
import {
  Lock,
  At,
  IdentificationCard,
  Password,
  Upload,
  ArrowUp,
} from "phosphor-react";
import { Link, Navigate } from "react-router-dom";
import { FormBox } from "../components/FormBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { FileInput } from "../components/FileInput";
import { useAuth, useEditProfile } from "../hooks";
import { Loading } from "../components/Loading";
import { useQueryClient } from "react-query";

export const EditProfilePage: React.FC = () => {
  const userData = useAuth();
  const queryClient = useQueryClient();

  const [name, setName] = useState(userData?.name || "");
  const [email, setEmail] = useState(userData?.email || "");
  const [description, setDescription] = useState(userData?.description || "");
  const [file, setFile] = useState<File | undefined>(undefined);

  function editUserHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    mutate(
      { description, email, name, file, token: userData?.token },
      {
        onSuccess(data, variables, context) {
          queryClient.setQueryData("userData", {
            ...data,
            token: variables.token,
          });
        },
      }
    );
  }

  const { mutate, isLoading, isSuccess } = useEditProfile();

  return (
    <>
      {isSuccess && <Navigate to="/" />}
      {isLoading && <Loading />}
      <FormBox>
        <h2 className="text-2xl font-bold tracking-wide">Edit Profile</h2>
        <TextInput
          onChange={(e) => setName(e.target.value)}
          leftIcon={<IdentificationCard size={24} className="text-gray-500" />}
          value={name}
        />
        <TextInput
          onChange={(e) => setEmail(e.target.value)}
          leftIcon={<At size={24} className="text-gray-500" />}
          value={email}
        />
        <TextInput
          onChange={(e) => setDescription(e.target.value)}
          leftIcon={<Password size={24} className="text-gray-500" />}
          value={description}
        />
        <FileInput onChange={(e) => setFile(e.target.files?.[0])} />

        <Button
          leftIcon={<ArrowUp size={24} className="text-white" />}
          color="secondary"
          onClick={(e) => editUserHandler(e)}
        >
          Update
        </Button>
      </FormBox>
    </>
  );
};
