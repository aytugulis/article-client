import { Book } from "phosphor-react";
import React from "react";
import { ArticleCardList } from "../components/ArticleCardList";
import { Avatar } from "../components/Avatar";
import { SectionHeader } from "../components/SectionHeader";

export const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-evenly">
      <div className="flex flex-col items-center gap-1">
        <Avatar
          size="xl"
          imageUrl="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
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
