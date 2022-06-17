import React from "react";
import { ArticleCard } from "./ArticleCard";
import { Loading } from "../components/Loading";
import { useQuery } from "react-query";
import { Endpoints } from "../type/Endpoints";
import { GetArticles } from "../type/ServiceResponse";

export const ArticleCardList: React.FC = () => {
  const { data, isLoading } = useQuery<GetArticles, Error>([
    Endpoints.getArticles,
    { queryObject: { limit: 6 } },
  ]);

  return (
    <>
      {isLoading && <Loading />}
      <ul className="flex items-center flex-wrap gap-y-4 mx-5 w-4/5">
        {data?.articles?.map(
          ({ imageUrl, header, author, createdAt, category, _id }) => (
            <ArticleCard
              key={_id}
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
