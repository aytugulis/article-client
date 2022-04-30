import React from "react";

type AuthBoxProps = React.PropsWithChildren<{}>;
export const AuthBox: React.FC<AuthBoxProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-full">
      <form className="flex flex-col gap-5 items-center">{children}</form>
    </div>
  );
};
