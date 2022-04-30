import cx from "classnames";
import { InlineIcon } from "./InlineIcon";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

export const TextInput: React.FC<TextInputProps> = ({
  leftIcon,
  rightIcon,
  className,
  ...rest
}) => {
  return (
    <div className="relative inline-block">
      {leftIcon && <InlineIcon icon={leftIcon} direction="left" />}
      {rightIcon && <InlineIcon icon={rightIcon} direction="right" />}

      <input
        {...rest}
        type="text"
        className={cx(
          "p-1 w-full bg-gray-100 rounded border border-gray-300 outline-0 duration-500 shadow-md shadow-gray-300 hover:shadow-gray-400 focus:shadow-gray-400",
          { "pl-10": leftIcon },
          className
        )}
      />
    </div>
  );
};
