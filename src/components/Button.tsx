import cx from "classnames";
import { ColorVariant, SizeVariant } from "../type/Variant";
import { IconProps } from "phosphor-react";
import { InlineIcon } from "./InlineIcon";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  rightIcon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  leftIcon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  color: ColorVariant;
  size?: Exclude<SizeVariant, "xlg" | "xsm">;
  outlined?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  leftIcon,
  rightIcon,
  color,
  size,
  outlined,
  ...rest
}) => {
  return (
    <div className="relative inline-block group">
      {leftIcon && (
        <InlineIcon
          color={color}
          icon={leftIcon}
          type="button"
          direction="left"
          outlined={outlined}
        />
      )}
      {rightIcon && (
        <InlineIcon
          color={color}
          icon={rightIcon}
          type="button"
          direction="right"
          outlined={outlined}
        />
      )}

      <button
        {...rest}
        className={cx(
          "px-5 rounded-md duration-500",
          {
            "text-sm": size === "sm",
            "text-base": size === "md",
            "text-lg": size === "lg",
            "h-7": size === "sm",
            "h-8": size === "md",
            "h-9": size === "lg",
          },
          { "text-white": !outlined },
          { "hover:text-white border-2": outlined },

          {
            "bg-primary hover:bg-primary-400": color === "primary" && !outlined,
            "bg-secondary hover:bg-secondary-400":
              color === "secondary" && !outlined,
            "bg-error hover:bg-error-400": color === "error" && !outlined,
            "bg-success hover:bg-success-400": color === "success" && !outlined,
            "bg-warning hover:bg-warning-400": color === "warning" && !outlined,
          },

          {
            "text-primary border-primary hover:bg-primary":
              color === "primary" && outlined,
            "text-secondary border-secondary hover:bg-secondary":
              color === "secondary" && outlined,
            "text-error border-error hover:bg-error":
              color === "error" && outlined,
            "text-success border-success hover:bg-success":
              color === "success" && outlined,
            "text-warning border-warning hover:bg-warning":
              color === "warning" && outlined,
          },

          { "pl-10": leftIcon, "pr-10": rightIcon },
          className
        )}
      >
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "primary",
  size: "md",
};
