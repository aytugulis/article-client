import React from "react";
import cx from "classnames";
import { Size } from "../type/Variant";
import { getImageUrl } from "../utils/url";

interface AvatarProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  imageUrl?: string;
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
        "rounded-full inline-block border-[3px] border-gray",
        {
          "w-6": size === "xs",
          "w-8": size === "sm",
          "w-12": size === "md",
          "w-16": size === "lg",
          "w-24": size === "xl",
        },
        className
      )}
      src={getImageUrl("user", imageUrl)}
      alt="Avatar"
    />
  );
};
