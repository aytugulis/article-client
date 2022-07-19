import React from "react";
import { useFormContext } from "react-hook-form";

interface FileInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  registerName: string;
}

export const FileInput: React.FC<FileInputProps> = ({
  registerName,
  ...rest
}) => {
  const { register } = useFormContext();
  return <input {...register(registerName)} type="file" {...rest} />;
};
