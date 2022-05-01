import React from "react";

interface AvatarProps {
  imageUrl: string;
}

export const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  return (
    <img
      className="rounded-full w-6 inline-block border-2 border-white"
      src={imageUrl}
      alt="Avatar"
    />
  );
};
