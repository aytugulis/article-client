import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { Button } from "./Button";

interface WriterCardProps {
  profileImage: string;
  id: string;
  fullName: string;
  description: string;
}

export const WriterCard: React.FC<WriterCardProps> = ({
  profileImage,
  id,
  fullName,
  description,
}) => {
  return (
    <li className="flex flex-col basis-full md:basis-1/3 p-5 gap-1">
      <Link
        to={`/profile/${id}`}
        className="flex flex-col items-center p-3 duration-300 rounded hover:bg-gray-400"
      >
        <Avatar imageUrl={profileImage} size="lg" />
        <div className="flex items-center gap-1">
          <span className="font-medium text-lg text-gray-700">{fullName}</span>
          <Badge className="cursor-pointer" color="secondary">
            More
          </Badge>
        </div>
        <p>{description}</p>
      </Link>
    </li>
  );
};
