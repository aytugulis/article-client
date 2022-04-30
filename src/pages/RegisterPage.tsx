import { ArrowRight, At, IdentificationCard, Password } from "phosphor-react";
import { Link } from "react-router-dom";
import { AuthBox } from "../components/AuthBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";

export const RegisterPage = () => {
  return (
    <AuthBox>
      <h2 className="text-2xl font-bold tracking-wide">JOIN US</h2>
      <TextInput
        leftIcon={<IdentificationCard size={26} className="text-gray-500" />}
        placeholder="Enter a name"
      />
      <TextInput
        leftIcon={<At size={26} className="text-gray-500" />}
        placeholder="Enter an email"
      />
      <TextInput
        leftIcon={<Password size={26} className="text-gray-500" />}
        placeholder="Enter a password"
      />

      <Button
        leftIcon={<ArrowRight size={26} className="text-white" />}
        color="primary"
      >
        Register
      </Button>
      <Link to="/login">
        <p className="text-sm font-medium text-success-500 duration-300 hover:text-success-400 underline mt-2">
          Do you already have an account ? Login.
        </p>
      </Link>
    </AuthBox>
  );
};
