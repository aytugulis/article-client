import { SignOut, User } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  to: string;
  title: string;
  icon: JSX.Element;
}
const MenuItem: React.FC<MenuItemProps> = ({ to, title, icon }) => {
  return (
    <li className="px-6 py-1 duration-500 hover:bg-secondary-500 hover:text-white">
      <Link to={to} className="flex items-center gap-1">
        {icon}
        {title}
      </Link>
    </li>
  );
};

export const ProfileMenu: React.FC = () => {
  return (
    <ul className="cursor-pointer rounded-md bg-white divide-y divide-secondary-500 border border-secondary-500 text-secondary-500">
      <MenuItem
        icon={<User weight="fill" size={21} />}
        to="/edit-profile"
        title="Edit Profile"
      />
      <MenuItem
        icon={<SignOut weight="fill" size={21} />}
        to="/logout"
        title="Logout"
      />
    </ul>
  );
};
