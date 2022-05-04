import { useState } from "react";
import { Avatar } from "../Avatar";

export const Member = () => {
  const cond = true;
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <ul className="flex items-center gap-3">
      <li onClick={() => setIsProfileOpen(!isProfileOpen)}>
        <Avatar
          className="cursor-pointer"
          imageUrl="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          size="sm"
        />
        {isProfileOpen && (
          <ul className="absolute top-20 rounded-md bg-tropical-blue-900 divide-y-2 divide-gray-100 text-gray-100">
            <li className="px-8 py-1">Profile</li>
            <li className="px-8 py-1">Logout</li>
          </ul>
        )}
      </li>
    </ul>
  );
};
