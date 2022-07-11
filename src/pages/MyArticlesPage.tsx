import { Book } from "phosphor-react";
import React from "react";
import { ArticleCardList } from "../components/ArticleCardList";
import { SectionHeader } from "../components/SectionHeader";
import { useAuth } from "../hooks";

export const MyArticlesPage = () => {
  const user = useAuth();
  return (
    <div className="flex flex-col items-center gap-10 my-10">
      <h1 className="text-3xl font-bold">Read</h1>
      <section className="flex flex-col items-center gap-1">
        <SectionHeader
          icon={<Book weight="fill" size={20} />}
          title="Last Articles"
        />
        <ArticleCardList authorId={user?._id} withIcon limit="200" />
      </section>
    </div>
  );
};
