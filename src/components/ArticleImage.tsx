import React from "react";
import { getImageUrl } from "../utils/url";

interface ArticleImageProps {
  imageUrl: string;
}

export const ArticleImage: React.FC<ArticleImageProps> = ({ imageUrl }) => {
  return (
    <img
      className="w-[288px] h-[162px] lg:w-[208px] lg:h-[117px] object-cover"
      src={getImageUrl("article", imageUrl)}
      alt="article image"
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = getImageUrl("article");
      }}
    />
  );
};
