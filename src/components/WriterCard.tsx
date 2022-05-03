import React from "react";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { Button } from "./Button";

interface WriterCardProps {
  profileImage: string;
  fullName: string;
  description: string;
}

export const WriterCard: React.FC<WriterCardProps> = ({
  profileImage,
  fullName,
  description,
}) => {
  return (
    <li className="flex flex-col items-center basis-full md:basis-1/3 p-5 gap-1">
      <Avatar imageUrl={profileImage} size="lg" />
      <div className="flex items-center gap-1">
        <span className="font-medium text-lg text-gray-700">{fullName}</span>
        <Badge className="cursor-pointer" color="secondary">
          More
        </Badge>
      </div>
      <p>{description}</p>
    </li>
  );
};
