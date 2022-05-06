import { Heart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface ArticleCardProps {
  profileImage: string;
  fullName: string;
  header: string;
  date: string;
  likes: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  profileImage,
  fullName,
  header,
  date,
  likes,
}) => {
  return (
    <li className="flex flex-col items-center lg:basis-1/3 basis-1/2 py-5">
      <Link
        to="/article/:id"
        className="p-3 duration-300 rounded hover:bg-gray-400"
      >
        <div className="flex items-center gap-2 ">
          <Avatar imageUrl={profileImage} size="xs" />
          <span className="font-medium text-gray-700">{fullName}</span>
        </div>

        <p className="font-medium text-lg">{header}</p>
        <div className="flex gap-3">
          <p className="text-sm font-light">{date}</p>
          <Heart size={20} />
        </div>
      </Link>
    </li>
  );
};
