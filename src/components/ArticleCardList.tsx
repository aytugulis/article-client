import React from "react";
import { ArticleCard } from "./ArticleCard";
import { Loading } from "../components/Loading";
import { GetArticlesProps, useArticles } from "../hooks/queries/article";
import { Category } from "../type/Article";

export const ArticleCardList: React.FC<GetArticlesProps> = ({
  category,
  authorId,
  limit,
  page,
}) => {
  const { data, isLoading } = useArticles({ category, authorId, limit, page });

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
