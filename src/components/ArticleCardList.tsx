import React from "react";
import { ArticleCard } from "./ArticleCard";
import { Loading } from "../components/Loading";
import { GetArticlesProps, useArticles } from "../hooks";
import cx from "classnames";
import { setContentLength } from "../utils/format";

interface ArticleCardListProps extends GetArticlesProps {
  withIcon?: boolean;
}

export const ArticleCardList: React.FC<ArticleCardListProps> = ({
  category,
  authorId,
  limit,
  page,
  withIcon,
}) => {
  const { data, isLoading } = useArticles({ category, authorId, limit, page });
  const articleLength = data?.articles?.length;

  if (!articleLength) return <p>No data found</p>;

  return (
    <>
      {isLoading && <Loading />}
      <ul
        className={cx("flex flex-wrap", {
          "w-full 2xl:w-11/12": articleLength > 3,
        })}
      >
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
              withIcon={withIcon}
              articleLength={articleLength}
            />
          )
        )}
      </ul>
    </>
  );
};
