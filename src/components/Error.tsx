import {
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
} from "react-hook-form";

interface ErrorProps {
  error:
    | Merge<FieldError, FieldErrorsImpl<DeepRequired<FieldValues>>>
    | undefined;
}
export const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <>
      {error && (
        <span className="text-red-600 text-sm text-center">
          {`*${error?.message}`}
        </span>
      )}
    </>
  );
};
