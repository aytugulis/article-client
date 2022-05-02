import React from "react";
import { Avatar } from "./Avatar";
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
      <span className="font-medium text-lg text-gray-700">{fullName}</span>
      <p>{description}</p>
      <Button color="secondary" size="sm">
        More
      </Button>
    </li>
  );
};
