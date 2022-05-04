import React from "react";
import { ArticleCard } from "./ArticleCard";

export const ArticleCardList: React.FC = () => {
  return (
    <ul className="flex items-center flex-wrap">
      <ArticleCard
        profileImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        fullName="Aytuğ Ulış"
        header="Header of an article"
        date="05-01-2022"
        likes="6"
      />
      <ArticleCard
        profileImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        fullName="Aytuğ Ulış"
        header="Header of an article"
        date="05-01-2022"
        likes="6"
      />
      <ArticleCard
        profileImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        fullName="Aytuğ Ulış"
        header="Header of an article"
        date="05-01-2022"
        likes="6"
      />
      <ArticleCard
        profileImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        fullName="Aytuğ Ulış"
        header="Header of an article"
        date="05-01-2022"
        likes="6"
      />
      <ArticleCard
        profileImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        fullName="Aytuğ Ulış"
        header="Header of an article"
        date="05-01-2022"
        likes="6"
      />
      <ArticleCard
        profileImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        fullName="Aytuğ Ulış"
        header="Header of an article"
        date="05-01-2022"
        likes="6"
      />
    </ul>
  );
};
