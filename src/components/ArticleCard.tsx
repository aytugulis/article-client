import React from "react";
import { Avatar } from "./Avatar";

interface ArticleCardProps {
  profileImage: string;
  fullName: string;
  header: string;
  date: string;
  readingMinutes: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  profileImage,
  fullName,
  header,
  date,
  readingMinutes,
}) => {
  return (
    <li className="lg:basis-1/3 basis-1/2 py-5 flex flex-col items-center">
      <div>
        <div className="flex items-center gap-2">
          <Avatar imageUrl={profileImage} size="xs" />
          <span className="font-medium text-gray-700">{fullName}</span>
        </div>

        <p className="font-medium text-lg">{header}</p>
        <p className="text-sm font-light">
          {date} - {readingMinutes} min read
        </p>
      </div>
    </li>
  );
};
