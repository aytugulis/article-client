import { Heart, Horse } from "phosphor-react";
import React from "react";
import { TextInput } from "../components/TextInput";

export const TestScreen = () => {
  return (
    <div>
      <TextInput
        rightIcon={<Heart color="#AE2983" weight="fill" size={32} />}
        leftIcon={<Horse color="#AE2983" weight="fill" size={16} />}
        placeholder="Type a name"
      />
    </div>
  );
};
