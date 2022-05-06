import { PencilLine } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../Avatar";
import { Badge } from "../Badge";
import { ProfileMenu } from "./ProfileMenu";

export const Member = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <ul className="flex items-center gap-3">
      <li>
        <Link to="create-article">
          <Badge
            className="flex items-center gap-1 cursor-pointer"
            color="secondary"
          >
            <PencilLine weight="fill" />
            <p className="font-medium">Write</p>
          </Badge>
        </Link>
      </li>
      <li
        className="flex flex-col items-center"
        onClick={() => setIsProfileOpen(!isProfileOpen)}
      >
        <Avatar
          className="cursor-pointer"
          imageUrl="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          size="sm"
        />
        {isProfileOpen && <ProfileMenu />}
      </li>
    </ul>
  );
};
