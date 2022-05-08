import { Heart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface ArticleCardProps {
  profileImage: string;
  fullName: string;
  header: string;
  date: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  profileImage,
  fullName,
  header,
  date,
}) => {
  return (
    <Link
      to="/article/:id"
      className="flex flex-col lg:flex-row justify-center gap-x-5 gap-y-2 items-center lg:basis-1/3 md:basis-1/2 basis-full py-4 cursor-pointer duration-300 rounded hover:bg-gray-400"
    >
      <img
        className="w-[288px] h-[162px] lg:w-[160px] lg:h-[90px] object-cover"
        src="https://c4.wallpaperflare.com/wallpaper/655/150/358/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg"
        alt="article image"
      />
      <div className="flex flex-col gap-1 items-center lg:items-start">
        <div className="flex items-center gap-2">
          <Avatar imageUrl={profileImage} size="xs" />
          <span className="font-medium text-gray-700">{fullName}</span>
        </div>

        <p className="font-medium text-lg">{header}</p>
        <div className="flex gap-3">
          <p className="text-sm font-light">{date}</p>
          <Heart size={20} />
        </div>
      </div>
    </Link>
  );
};
