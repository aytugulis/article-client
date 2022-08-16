import React from "react";
import cx from "classnames";
import { Size } from "../types/Variant";
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
        "rounded-full object-cover border-2 border-secondary",
        {
          "w-6 h-6": size === "xs",
          "w-8 h-8": size === "sm",
          "w-12 h-12": size === "md",
          "w-16 h-16": size === "lg",
          "w-24 h-24": size === "xl",
        },
        className
      )}
      src={getImageUrl("user", imageUrl)}
      alt="Avatar"
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = getImageUrl("user");
      }}
    />
  );
};
