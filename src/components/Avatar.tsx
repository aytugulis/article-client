import React from "react";
import cx from "classnames";
import { Size } from "../type/Variant";

interface AvatarProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  imageUrl: string;
  size: Size;
}

export const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  size,
  className,
}) => {
  return (
    <img
      className={cx(
        "rounded-full inline-block border-2 border-white",
        {
          "w-6": size === "xs",
          "w-10": size === "sm",
          "w-14": size === "md",
          "w-20": size === "lg",
          "w-24": size === "xl",
        },
        className
      )}
      src={imageUrl}
      alt="Avatar"
    />
  );
};
