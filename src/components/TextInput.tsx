import React from "react";
import cx from "classnames";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: any; // TODO: define type
  leftIcon?: any; // TODO: define type
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <div className="relative">
      {props.leftIcon && (
        <div className="absolute left-2 top-2.5">{props.leftIcon}</div>
      )}

      <input
        {...props}
        type="text"
        className={cx(
          "w-64 p-1 bg-gray-100 rounded border border-gray-300 outline-0 transition duration-500 shadow-md shadow-gray-300 hover:shadow-gray-400 focus:shadow-gray-400",
          props.className,
          { "pl-8": props.leftIcon }
        )}
      />

      {props.rightIcon && (
        <div className="absolute left-52 top-2.5">{props.rightIcon}</div>
      )}
    </div>
  );
};

/* width: 70%;

border-radius: 4px;

box-shadow: 2px 2px 5px 2px lightgray;

&:hover,
&:focus {
  box-shadow: 2px 2px 5px 2px grey;
}

&:focus {
  animation: ${blink} 1s infinite alternate;
} */
