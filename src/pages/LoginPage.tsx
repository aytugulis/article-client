import { ArrowRight, At, Password } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import { AuthBox } from "../components/AuthBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { Typography } from "../components/Typography";

export const LoginPage = () => {
  return (
    <AuthBox>
      <form className="flex flex-col gap-5 text-center">
        <Typography type="header">WELCOME AGAIN</Typography>
        <hr />
        <TextInput
          leftIcon={<At size={28} color="black" />}
          className="w-1/2"
          placeholder="Enter your email"
        />
        <TextInput
          leftIcon={<Password size={28} />}
          className="w-1/2 "
          placeholder="Enter your password"
        />

        <Button
          leftIcon={<ArrowRight size={28} color="black" />}
          color="primary"
        >
          Login
        </Button>
        <Link to="/register">
          <Typography
            type="text"
            className="text-success-500 duration-300 hover:text-success-400 underline mt-2"
          >
            Do not you have an account ? Join us.
          </Typography>
        </Link>
      </form>
    </AuthBox>
  );
};
