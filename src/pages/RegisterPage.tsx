import { Lock, At, IdentificationCard, Password } from "phosphor-react";
import { Link } from "react-router-dom";
import { FormBox } from "../components/FormBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { useRegister, useSaveToken } from "../hooks/mutations/auth";
import { useState } from "react";
import { Loading } from "../components/Loading";

export const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");

  const { data, mutate, isLoading } = useRegister();
  useSaveToken(data);

  return (
    <>
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

        <Button
          leftIcon={<Lock size={24} className="text-white" />}
          color="secondary"
          onClick={(e) => {
            e.preventDefault();
            mutate({ description, email, name, password });
          }}
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

fetch("http://localhost:5000/api/auth/register", {
  headers: {
    accept: "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,tr-TR;q=0.8,tr;q=0.7",
    "content-type": "application/json",
    "sec-ch-ua":
      '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    Referer: "http://localhost:3000/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: '{"description":"","email":"","name":"","password":""}',
  method: "POST",
});
