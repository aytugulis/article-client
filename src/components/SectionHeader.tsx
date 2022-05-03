import cx from "classnames";
import { Book } from "phosphor-react";
import React from "react";

interface SectionHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  icon: JSX.Element;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  icon,
  className,
}) => {
  return (
    <div className={cx("flex items-center gap-1 text-red-900", className)}>
      {icon}
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
};
