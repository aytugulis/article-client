import cx from "classnames";
import React, { useId, useState } from "react";

interface CheckBoxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  label: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ label, className }) => {
  const id = useId();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={cx("flex items-center justify-center gap-1", className)}>
      <label
        className={cx("text-sm cursor-pointer", {
          "underline text-primary": isChecked,
          "underline text-gray": !isChecked,
        })}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="cursor-pointer"
        type="checkbox"
        name=""
        id={id}
        onChange={() => setIsChecked(!isChecked)}
      />
    </div>
  );
};
