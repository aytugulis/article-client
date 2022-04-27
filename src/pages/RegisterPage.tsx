import { ArrowRight, At, IdentificationCard, Password } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import { AuthBox } from "../components/AuthBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { Typography } from "../components/Typography";

export const RegisterPage = () => {
  return (
    <AuthBox>
      <form className="flex flex-col gap-5 text-center">
        <Typography type="header">WELCOME AGAIN</Typography>
        <hr />
        <TextInput
          leftIcon={<IdentificationCard size={28} />}
          className="w-1/2"
          placeholder="Enter a name"
        />
        <TextInput
          leftIcon={<At size={28} color="black" />}
          className="w-1/2"
          placeholder="Enter an email"
        />
        <TextInput
          leftIcon={<Password size={28} />}
          className="w-1/2"
          placeholder="Enter a password"
        />

        <Button
          leftIcon={<ArrowRight size={28} color="black" />}
          color="primary"
        >
          Register
        </Button>
        <Link to="/register">
          <Typography
            type="text"
            className="text-success-500 duration-300 hover:text-success-400 underline mt-2"
          >
            Do you already have an account ? Login.
          </Typography>
        </Link>
      </form>
    </AuthBox>
  );
};
