import React from "react";

interface AuthBoxProps {
  children: React.ReactNode;
}
export const AuthBox: React.FC<AuthBoxProps> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="mt-8 w-[475px] h-[525px] bg-gray-100 shadow-md text-center rounded border-l-8 border-secondary py-16">
        {children}
      </div>
    </div>
  );
};
