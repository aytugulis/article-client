import cx from "classnames";
import React, { useId, useState } from "react";

interface RadioButtonProps {
  selectedValue?: string;
  value: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  setCategory,
  value,
  selectedValue,
}) => {
  return (
    <>
       <label htmlFor={value}>{value}</label>
      <input
        checked={selectedValue ? selectedValue === value : value === "Frontend"}
        onChange={(e) => setCategory(e.target.value)}
        type="radio"
        name="category"
        id={value}
        value={value}
      />
    </>
  );
};

interface RadioButtonListProps {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedValue?: string;
}
export const RadioButtonList: React.FC<RadioButtonListProps> = ({
  setCategory,
  selectedValue,
}) => {
  return (
    <div className="flex gap-2">
      <RadioButton
        selectedValue={selectedValue}
        value="Frontend"
        setCategory={setCategory}
      />
      <RadioButton
        selectedValue={selectedValue}
        value="Backend"
        setCategory={setCategory}
      />
      <RadioButton
        selectedValue={selectedValue}
        value="Fullstack"
        setCategory={setCategory}
      />
      <RadioButton
        selectedValue={selectedValue}
        value="Devops"
        setCategory={setCategory}
      />
      <RadioButton
        selectedValue={selectedValue}
        value="AI"
        setCategory={setCategory}
      />
      <RadioButton
        selectedValue={selectedValue}
        value="Data"
        setCategory={setCategory}
      />
    </div>
  );
};
