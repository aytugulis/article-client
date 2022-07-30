import React from "react";
import { ArticleCard } from "./ArticleCard/ArticleCard";
import { Loading } from "../components/Loading";
import { GetArticlesProps, useArticles } from "../hooks";
import cx from "classnames";
import { setContentLength } from "../utils/format";
import { Button } from "./Button";

interface ArticleCardListProps extends GetArticlesProps {
  page?: string;
  limit?: string;
  category?: string;
  authorId?: string;
  withIcon?: boolean;
}

export const ArticleCardList: React.FC<ArticleCardListProps> = ({
  category,
  authorId,
  limit,
  page,
  withIcon,
}) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
  } = useArticles({
    category,
    authorId,
    limit,
    pageParam: page,
  });
  const articleLength = data?.pages?.length;

  if (!articleLength) return <p>No data found</p>;
  console.log(hasNextPage);
  return (
    <>
      {(isLoading || isFetchingNextPage) && <Loading />}
      <ul
        className={cx("flex flex-wrap", {
          "w-full 2xl:w-11/12": articleLength > 3,
        })}
      >
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.articles.map(
              ({ imageUrl, header, author, createdAt, category, _id }: any) => (
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
          </React.Fragment>
        ))}
      </ul>
      <Button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        color="tropical-blue"
        size="sm"
      >
        {hasNextPage ? "Load More" : "Nothing more to load"}
      </Button>
    </>
  );
};
