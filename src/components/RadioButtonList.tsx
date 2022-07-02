import cx from "classnames";
import React, { useId, useState } from "react";

interface RadioButtonProps {
  value: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const RadioButton: React.FC<RadioButtonProps> = ({ setCategory, value }) => {
  return (
    <>
       <label htmlFor={value}>{value}</label>
      <input
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
}
export const RadioButtonList: React.FC<RadioButtonListProps> = ({
  setCategory,
}) => {
  return (
    <div className="flex gap-2">
      <RadioButton value="Frontend" setCategory={setCategory} />
      <RadioButton value="Backend" setCategory={setCategory} />
      <RadioButton value="Fullstack" setCategory={setCategory} />
      <RadioButton value="Devops" setCategory={setCategory} />
      <RadioButton value="AI" setCategory={setCategory} />
      <RadioButton value="Data" setCategory={setCategory} />
    </div>
  );
};
