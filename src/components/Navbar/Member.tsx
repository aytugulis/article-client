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
          imageUrl="https://media-exp1.licdn.com/dms/image/C5603AQH7CCKjPEEkZw/profile-displayphoto-shrink_800_800/0/1609592718275?e=1657756800&v=beta&t=wJ-lU3zGG8qkoAGx35tD6FEmoghu5NvW5EYhc7xBRzI"
          size="sm"
        />
        {isProfileOpen && <ProfileMenu />}
      </li>
    </ul>
  );
};
