import cx from "classnames";
import {
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  Merge,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";
import { Error } from "./Error";
import { InlineIcon } from "./InlineIcon";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  registerName: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  leftIcon,
  rightIcon,
  className,
  registerName,
  ...rest
}) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const error = errors[registerName];

  return (
    <div className="flex flex-col">
      <div className="relative inline-block">
        {leftIcon && <InlineIcon icon={leftIcon} direction="left" />}
        {rightIcon && <InlineIcon icon={rightIcon} direction="right" />}

        <input
          {...rest}
          {...register(registerName)}
          onChange={(e) => {
            setValue(registerName, e.target.value, {
              shouldValidate: true,
            });
          }}
          type="text"
          className={cx(
            "p-1 w-full bg-gray-100 rounded border border-gray-300 outline-0 duration-500 shadow-md shadow-gray-300 hover:shadow-gray-400 focus:shadow-gray-400",
            { "pl-10": leftIcon },
            { "border-red-600": error },
            className
          )}
        />
      </div>
      <Error error={error} />
    </div>
  );
};
