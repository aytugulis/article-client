import { Book, SignOut, User } from "phosphor-react";
import React from "react";
import { useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";

interface MenuItemProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  to: string;
  title: string;
  icon: JSX.Element;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, title, icon, ...rest }) => {
  return (
    <li
      className="px-4 py-1 duration-500 hover:bg-gray-500 hover:text-white text-sm"
      {...rest}
    >
      <Link to={to} className="flex items-center gap-1">
        {icon}
        <p className="hidden sm:block">{title}</p>
      </Link>
    </li>
  );
};

export const ProfileMenu: React.FC = () => {
  const nagivate = useNavigate();
  const queryClient = useQueryClient();

  function logoutHandler() {
    queryClient.setQueryData("userData", undefined);
    nagivate("/");
  }

  return (
    <ul className="absolute top-14 rounded-md bg-white divide-y divide-gray-600 border border-gray-600 text-gray-600 z-10">
      <MenuItem
        icon={<User weight="fill" size={21} />}
        to="/edit-profile"
        title="Edit Profile"
      />
      <MenuItem
        icon={<Book weight="fill" size={21} />}
        to="/my-articles"
        title="My Articles"
      />
      <MenuItem
        onClick={logoutHandler}
        icon={<SignOut weight="fill" size={21} />}
        to="/logout"
        title="Logout"
      />
    </ul>
  );
};
