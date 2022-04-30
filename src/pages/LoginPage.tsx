import { ArrowRight, At, Password } from "phosphor-react";
import { Link } from "react-router-dom";
import { AuthBox } from "../components/AuthBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";

export const LoginPage = () => {
  return (
    <AuthBox>
      <h2 className="text-2xl font-bold tracking-wide">WELCOME AGAIN</h2>
      <TextInput
        leftIcon={<At size={26} className="text-gray-500" />}
        placeholder="Enter your email"
      />
      <TextInput
        leftIcon={<Password size={26} className="text-gray-500" />}
        placeholder="Enter your password"
      />

      <Button
        leftIcon={<ArrowRight size={26} className="text-white" />}
        color="primary"
      >
        Login
      </Button>
      <Link to="/register">
        <p className="text-sm font-medium text-success-500 duration-300 hover:text-success-400 underline mt-2">
          Do not you have an account ? Join us.
        </p>
      </Link>
    </AuthBox>
  );
};
