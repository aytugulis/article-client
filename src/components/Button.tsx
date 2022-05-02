import cx from "classnames";
import { Variant, Size } from "../type/Variant";
import { InlineIcon } from "./InlineIcon";
import styled from "styled-components";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  color: Variant;
  size?: Exclude<Size, "xl" | "xs">;
  outlined?: boolean;
}

const Container = styled.div`
  svg {
    transition-duration: 0.5s;
  }
`;

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
    <Container className="relative inline-block group">
      {leftIcon && <InlineIcon icon={leftIcon} direction="left" />}
      {rightIcon && <InlineIcon icon={rightIcon} direction="right" />}

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
            "bg-gradient-to-br from-primary to-primary-700 hover:bg-gradient-to-tl":
              color === "primary" && !outlined,
            "bg-gradient-to-br from-secondary to-secondary-700 hover:bg-gradient-to-tl":
              color === "secondary" && !outlined,
            "bg-gradient-to-br from-red to-red-700 hover:bg-gradient-to-tl":
              color === "red" && !outlined,
            "bg-gradient-to-br from-tropical-blue to-tropical-blue-700 hover:bg-gradient-to-tl":
              color === "tropical-blue" && !outlined,
            "bg-gradient-to-br from-yellow to-yellow-700 hover:bg-gradient-to-tl":
              color === "yellow" && !outlined,
          },

          {
            "text-primary border-primary hover:bg-primary":
              color === "primary" && outlined,
            "text-secondary border-secondary hover:bg-secondary":
              color === "secondary" && outlined,
            "text-red border-red hover:bg-red": color === "red" && outlined,
            "text-tropical-blue border-tropical-blue hover:bg-tropical-blue":
              color === "tropical-blue" && outlined,
            "text-yellow border-yellow hover:bg-yellow":
              color === "yellow" && outlined,
          },

          { "pl-10": leftIcon, "pr-10": rightIcon },
          className
        )}
      >
        {children}
      </button>
    </Container>
  );
};

Button.defaultProps = {
  color: "primary",
  size: "md",
};
