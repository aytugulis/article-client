import cx from "classnames";
import { Variant } from "../type/Variant";

interface BadgeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  color: Variant;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  color,
  ...rest
}) => {
  return (
    <span
      {...rest}
      className={cx(
        "px-1.5 py-0.5 text-gray-100 text-xs font-light rounded duration-500",
        { "bg-primary hover:bg-primary-600": color === "primary" },
        { "bg-secondary hover:bg-secondary-600": color === "secondary" },
        {
          "bg-tropical-blue hover:bg-tropical-blue-600":
            color === "tropical-blue",
        },
        { "bg-red hover:bg-red-600": color === "red" },
        { "bg-yellow hover:bg-yellow-600": color === "yellow" },
        className
      )}
    >
      {children}
    </span>
  );
};
