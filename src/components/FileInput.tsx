import React from "react";

interface FileInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const FileInput: React.FC<FileInputProps> = (props) => {
  return <input type="file" {...props} />;
};
