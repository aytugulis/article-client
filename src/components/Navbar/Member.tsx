import { CaretDoubleDown, PencilLine } from "phosphor-react";
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
            <div className="flex items-center gap-1 hover:animate-pulse">
              <PencilLine weight="fill" />
              <p className="font-medium">Write</p>
            </div>
          </Badge>
        </Link>
      </li>
      <li
        className="flex flex-col items-center cursor-pointer rounded-lg group"
        onClick={() => setIsProfileOpen(!isProfileOpen)}
      >
        <Avatar
          className="cursor-pointer"
          imageUrl={userData?.imageUrl}
          size="xs"
        />

        <div className="flex items-center justify-center text-white group-hover:text-secondary duration-300">
          <p className="text-xs font-thin">Me</p>
          <CaretDoubleDown size={14} />
        </div>
        {isProfileOpen && <ProfileMenu />}
      </li>
    </ul>
  );
};
