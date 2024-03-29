import React from "react";
import { ArticleCard } from "./ArticleCard/ArticleCard";
import { Loading } from "../components/Loading";
import { GetArticlesProps, useArticles } from "../hooks";
import cx from "classnames";
import { Button } from "./Button";
import { ArrowsOutLineHorizontal, CircleNotch } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Article, PopulatedArticle } from "../types/Article";

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
  const params = useParams();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useArticles({
      category,
      authorId,
      limit,
      pageParam: page,
    });
  const articleLength = data?.pages?.length;

  if (!articleLength && !isLoading) return <p>No data found</p>;

  return (
    <>
      {isLoading && <Loading />}
      {articleLength && (
        <>
          <ul
            className={cx("flex flex-wrap justify-center", {
              "w-full 2xl:w-11/12": articleLength > 3,
            })}
          >
            {data.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group.articles
                  .filter(({ _id }: PopulatedArticle) => _id !== params.id)
                  .map(
                    ({
                      imageUrl,
                      header,
                      author,
                      createdAt,
                      category,
                      _id,
                    }: PopulatedArticle) => (
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
            leftIcon={
              isFetchingNextPage ? (
                <CircleNotch
                  className="text-white animate-spin"
                  weight="fill"
                  size={20}
                />
              ) : (
                <ArrowsOutLineHorizontal
                  className="text-white"
                  weight="fill"
                  size={20}
                />
              )
            }
          >
            {hasNextPage ? "Load More" : "Nothing more to load"}
          </Button>
        </>
      )}
    </>
  );
};
