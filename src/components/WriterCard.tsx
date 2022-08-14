import React from "react";
import { Link } from "react-router-dom";
import { setContentLength } from "../utils/format";
import { Avatar } from "./Avatar";

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
    <li className="flex flex-col basis-full xl:basis-0 items-center">
      <Link
        to={`/profile/${id}`}
        className="flex flex-col items-center w-full xl:w-80 duration-300 rounded hover:bg-gray-400 py-2"
      >
        <Avatar imageUrl={profileImage} size="lg" />

        <p className="font-medium text-gray-700">
          {setContentLength(fullName, 30)}
        </p>

        <p>{setContentLength(description, 30)}</p>
      </Link>
    </li>
  );
};
