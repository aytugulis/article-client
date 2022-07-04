import { Lock, At, IdentificationCard, Password } from "phosphor-react";
import { Link, Navigate } from "react-router-dom";
import { FormBox } from "../components/FormBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { useRegister, useSaveToken } from "../hooks/mutations/auth";
import { useState } from "react";
import { Loading } from "../components/Loading";
import { FileInput } from "../components/FileInput";

export const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);

  function registerHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    mutate({ description, email, name, password, file });
  }

  const { data, mutate, isLoading, isSuccess } = useRegister();
  useSaveToken(data);

  return (
    <>
      {isSuccess && <Navigate to="/" />}
      {isLoading && <Loading />}
      <FormBox>
        <h2 className="text-2xl font-bold tracking-wide">JOIN US</h2>
        <TextInput
          onChange={(e) => setName(e.target.value)}
          leftIcon={<IdentificationCard size={24} className="text-gray-500" />}
          placeholder="Enter a name"
        />
        <TextInput
          onChange={(e) => setEmail(e.target.value)}
          leftIcon={<At size={24} className="text-gray-500" />}
          placeholder="Enter an email"
        />
        <TextInput
          onChange={(e) => setDescription(e.target.value)}
          leftIcon={<Password size={24} className="text-gray-500" />}
          placeholder="Enter a description"
        />
        <TextInput
          onChange={(e) => setPassword(e.target.value)}
          leftIcon={<Password size={24} className="text-gray-500" />}
          placeholder="Enter a password"
        />
        <FileInput onChange={(e) => setFile(e.target.files?.[0])} />
        <Button
          leftIcon={<Lock size={24} className="text-white" />}
          color="secondary"
          onClick={(e) => registerHandler(e)}
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
