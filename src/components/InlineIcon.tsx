import { IconProps } from "phosphor-react";
import cx from "classnames";
import { ColorVariant } from "../type/Variant";

interface InlineIconProps {
  /*   icon:
    | React.ForwardRefExoticComponent<
        IconProps & React.RefAttributes<SVGSVGElement>
      >
    | JSX.Element; */
  icon: any;
  type: "button" | "input";
  direction: "left" | "right";
  outlined?: boolean;
  color: ColorVariant;
}

export const InlineIcon: React.FC<InlineIconProps> = ({
  icon: Icon,
  type,
  direction,
  outlined,
  color,
}) => {
  const classes = cx(
    "absolute bottom-0 top-0 flex items-center pointer-events-none duration-500",
    { "left-2": direction === "left", "right-2": direction === "right" },
    {
      "text-white": type === "button" && !outlined,
      "text-primary group-hover:text-white": type === "button" && outlined,
    },
    {
      "text-primary": type === "button" && outlined && color === "primary",
      "text-secondary": type === "button" && outlined && color === "secondary",
      "text-error": type === "button" && outlined && color === "error",
      "text-success": type === "button" && outlined && color === "success",
      "text-warning": type === "button" && outlined && color === "warning",
    }
  );

  return (
    <div className={classes}>
      {type === "button" ? <Icon size={23} weight="fill" /> : Icon}
    </div>
  );
};
