import cx from "classnames";
import { PencilLine } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";
import { Avatar } from "../Avatar";
import { Badge } from "../Badge";
import { ProfileMenu } from "./ProfileMenu";

export const Member = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const userData = useAuth();

  return (
    <ul className="flex items-center gap-3">
      <li>
        <Link to="create-article">
          <Badge className="flex cursor-pointer" color="secondary">
            <div className="flex items-center gap-1 hover:animate-bounce">
              <PencilLine weight="fill" />
              <p className="font-medium">Write</p>
            </div>
          </Badge>
        </Link>
      </li>
      <li
        className="flex flex-col items-center cursor-pointer group"
        onClick={() => setIsProfileOpen(!isProfileOpen)}
      >
        <Avatar
          className="cursor-pointer"
          imageUrl={userData?.imageUrl}
          size="xs"
        />

        <p
          className={cx(
            "text-xs font-thin text-white group-hover:text-gray-300 duration-300",
            { "text-gray-300": isProfileOpen }
          )}
        >
          Options
        </p>
        {isProfileOpen && <ProfileMenu />}
      </li>
    </ul>
  );
};
