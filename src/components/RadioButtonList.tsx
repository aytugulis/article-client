import React from "react";
import { RadioButton } from "./RadioButton";

interface RadioButtonListProps {
  registerName: string;
  selectedValue?: string;
}
export const RadioButtonList: React.FC<RadioButtonListProps> = ({
  selectedValue,
  registerName,
}) => {
  return (
    <div className="flex flex-col items-center lg:flex-row gap-1">
      <h3 className="font-semibold">Categories:</h3>
      <div className="flex justify-center flex-wrap gap-3">
        <RadioButton
          selectedValue={selectedValue}
          value="Frontend"
          registerName={registerName}
        />
        <RadioButton
          selectedValue={selectedValue}
          value="Backend"
          registerName={registerName}
        />
        <RadioButton
          selectedValue={selectedValue}
          value="Fullstack"
          registerName={registerName}
        />
        <RadioButton
          selectedValue={selectedValue}
          value="Devops"
          registerName={registerName}
        />
        <RadioButton
          selectedValue={selectedValue}
          value="AI"
          registerName={registerName}
        />
        <RadioButton
          selectedValue={selectedValue}
          value="Data"
          registerName={registerName}
        />
      </div>
    </div>
  );
};
