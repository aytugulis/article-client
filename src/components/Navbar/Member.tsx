import { PencilLine } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/zustand";
import { Avatar } from "../Avatar";
import { Badge } from "../Badge";
import { ProfileMenu } from "./ProfileMenu";

export const Member = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const userData = useStore((state) => state.userData);

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
          imageUrl={
            userData?.imageUrl ||
            "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png"
          }
          size="sm"
        />
        {isProfileOpen && <ProfileMenu />}
      </li>
    </ul>
  );
};
