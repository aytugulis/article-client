import React from "react";
import { ArticleCard } from "./ArticleCard";

export const ArticleCardList: React.FC = () => {
  return (
    <ul className="flex items-center flex-wrap gap-y-4 mx-5 w-4/5">
      <ArticleCard
        profileImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        fullName="Aytuğ Ulış"
        header="Header of an article"
        date="05-01-2022"
      />
      <ArticleCard
        profileImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        fullName="Aytuğ Ulış"
        header="Header of an article"
        date="05-01-2022"
      />
      <ArticleCard
        profileImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        fullName="Aytuğ Ulış"
        header="Header of an article"
        date="05-01-2022"
      />
      <ArticleCard
        profileImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        fullName="Aytuğ Ulış"
        header="Header of an article"
        date="05-01-2022"
      />
      <ArticleCard
        profileImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        fullName="Aytuğ Ulış"
        header="Header of an article"
        date="05-01-2022"
      />
      <ArticleCard
        profileImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        fullName="Aytuğ Ulış"
        header="Header of an article"
        date="05-01-2022"
      />
    </ul>
  );
};
