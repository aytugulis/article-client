import { Book } from "phosphor-react";
import React from "react";
import { ArticleCardList } from "../components/ArticleCardList";
import { Avatar } from "../components/Avatar";
import { SectionHeader } from "../components/SectionHeader";

export const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center my-10 gap-5">
      <div className="flex flex-col items-center gap-1 p-2">
        <Avatar
          size="xl"
          imageUrl="https://media-exp1.licdn.com/dms/image/C5603AQH7CCKjPEEkZw/profile-displayphoto-shrink_800_800/0/1609592718275?e=1657756800&v=beta&t=wJ-lU3zGG8qkoAGx35tD6FEmoghu5NvW5EYhc7xBRzI"
        />
        <p className="font-medium text-lg">Aytuğ Ulış</p>
        <p>I am a software developer</p>
      </div>
      <div className="flex flex-col items-center">
        <SectionHeader
          icon={<Book weight="fill" size={20} />}
          title="Articles"
        />
        <ArticleCardList />
      </div>
    </div>
  );
};
