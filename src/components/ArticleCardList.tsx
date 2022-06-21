import React from "react";
import { ArticleCard } from "./ArticleCard";
import { Loading } from "../components/Loading";
import { useArticles } from "../hooks/queries/article";
import { Category } from "../type/Article";

interface ArticleCardListProps {
  category?: Category;
}

export const ArticleCardList: React.FC<ArticleCardListProps> = ({
  category,
}) => {
  const { data, isLoading } = useArticles(category);

  return (
    <>
      {isLoading && <Loading />}
      <ul className="flex items-center flex-wrap gap-y-4 mx-5 w-4/5">
        {data?.articles?.map(
          ({ imageUrl, header, author, createdAt, category, _id }) => (
            <ArticleCard
              key={_id}
              id={_id}
              imageUrl={imageUrl}
              category={category}
              profileImage={author.imageUrl}
              fullName={author.name}
              header={header}
              date={createdAt}
            />
          )
        )}
      </ul>
    </>
  );
};
