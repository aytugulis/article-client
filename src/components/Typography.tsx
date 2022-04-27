import React from "react";
import cx from "classnames";

interface TypographyProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  type: "header" | "text";
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  type,
  children,
  className,
  ...rest
}) => {
  return (
    <h1
      {...rest}
      className={cx(
        { "text-2xl font-bold tracking-wide": type === "header" },
        { "text-sm font-medium text-gray-600": type === "text" },
        className
      )}
    >
      {children}
    </h1>
  );
};
