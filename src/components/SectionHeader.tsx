import { Book } from "phosphor-react";
import React from "react";

interface SectionHeaderProps {
  title: string;
  icon: JSX.Element;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  icon,
}) => {
  return (
    <div className="flex items-center gap-1 text-red-900">
      {icon}
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
};
