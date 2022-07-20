import React from "react";
import { Link } from "react-router-dom";
import { setContentLength } from "../utils/format";
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
    <li className="flex flex-col basis-full lg:basis-0 p-5 gap-1">
      <Link
        to={`/profile/${id}`}
        className="flex flex-col items-center p-3 duration-300 rounded hover:bg-gray-400"
      >
        <Avatar imageUrl={profileImage} size="lg" />

        <span className="font-medium text-gray-700">
          {setContentLength(fullName, 15)}
        </span>

        <p>{setContentLength(description, 15)}</p>
      </Link>
    </li>
  );
};
