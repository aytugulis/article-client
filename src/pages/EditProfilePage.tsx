import React from "react";
import {
  Lock,
  At,
  IdentificationCard,
  Password,
  Upload,
  ArrowUp,
} from "phosphor-react";
import { Link } from "react-router-dom";
import { FormBox } from "../components/FormBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";

export const EditProfilePage: React.FC = () => {
  return (
    <FormBox>
      <h2 className="text-2xl font-bold tracking-wide">Edit Profile</h2>
      <TextInput
        leftIcon={<IdentificationCard size={24} className="text-gray-500" />}
        value="Aytuğ Ulış"
      />
      <TextInput
        leftIcon={<At size={24} className="text-gray-500" />}
        value="aytugulis@gmail.com"
      />
      {/*       <TextInput
        leftIcon={<Password size={24} className="text-gray-500" />}
        placeholder="Enter a password"
      /> */}

      <Button
        leftIcon={<ArrowUp size={24} className="text-white" />}
        color="secondary"
      >
        Update
      </Button>
    </FormBox>
  );
};
