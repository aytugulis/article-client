import { Heart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface ArticleCardProps {
  profileImage: string;
  imageUrl: string;
  fullName: string;
  category: string;
  header: string;
  date: string;
  id: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  imageUrl,
  profileImage,
  fullName,
  header,
  category,
  date,
  id,
}) => {
  return (
    <Link
      to={`/article/${id}`}
      className="flex flex-col lg:flex-row justify-center gap-x-5 gap-y-2 items-center lg:basis-1/3 md:basis-1/2 basis-full py-4 cursor-pointer duration-300 rounded hover:bg-gray-400"
    >
      <img
        className="w-[288px] h-[162px] lg:w-[208px] lg:h-[117px] object-cover"
        src={imageUrl}
        alt="article image"
      />
      <div className="flex flex-col gap-1 items-center lg:items-start">
        <div className="flex items-center gap-2">
          <Avatar imageUrl={profileImage} size="xs" />
          <span className="font-medium text-gray-700">{fullName}</span>
        </div>

        <p className="font-medium text-lg">{header}</p>
        <p className="font-medium text-tropical-blue-600">{category}</p>
        <div className="flex gap-3">
          <p className="text-sm font-light">{date.slice(0, 10)}</p>
          <Heart size={20} />
        </div>
      </div>
    </Link>
  );
};
