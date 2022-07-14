import React from "react";
import { FormProvider } from "react-hook-form";

interface FormBoxProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  methods?: any; // Todo defined type
}
export const FormBox: React.FC<FormBoxProps> = ({
  methods,
  children,
  ...rest
}) => {
  return (
    <div className="flex justify-center items-center min-h-full">
      <FormProvider {...methods}>
        <form className="flex flex-col gap-5 items-center" {...rest}>
          {children}
        </form>
      </FormProvider>
    </div>
  );
};
