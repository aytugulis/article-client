import { Lock, At, IdentificationCard, Password } from "phosphor-react";
import { Link } from "react-router-dom";
import { FormBox } from "../components/FormBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";

export const RegisterPage = () => {
  return (
    <FormBox>
      <h2 className="text-2xl font-bold tracking-wide">JOIN US</h2>
      <TextInput
        leftIcon={<IdentificationCard size={24} className="text-gray-500" />}
        placeholder="Enter a name"
      />
      <TextInput
        leftIcon={<At size={24} className="text-gray-500" />}
        placeholder="Enter an email"
      />
      <TextInput
        leftIcon={<Password size={24} className="text-gray-500" />}
        placeholder="Enter a password"
      />

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
  );
};
