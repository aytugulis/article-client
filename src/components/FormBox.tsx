import React from "react";

type FormBoxProps = React.PropsWithChildren<{}>;
export const FormBox: React.FC<FormBoxProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-full">
      <form className="flex flex-col gap-5 items-center">{children}</form>
    </div>
  );
};
