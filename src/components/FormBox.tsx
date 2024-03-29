import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

interface FormBoxProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  methods?: object;
}
export const FormBox: React.FC<FormBoxProps> = ({
  methods,
  children,
  ...rest
}) => {
  return (
    <div className="flex justify-center items-center min-h-full py-5">
      <FormProvider {...(methods as UseFormReturn)}>
        <form className="flex flex-col gap-5 items-center" {...rest}>
          {children}
        </form>
      </FormProvider>
    </div>
  );
};
