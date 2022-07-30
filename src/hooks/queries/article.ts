import { Endpoint } from "../../type/Endpoint";
import { useInfiniteQuery, useQuery } from "react-query";
import { Category, PopulatedArticle } from "../../type/Article";
import { axiosClient } from "../../utils/client";

const getArticle = async (articleId: string) => {
  const { data } = await axiosClient.get(`${Endpoint.getArticle(articleId)}`);
  return data.article;
};
export function useArticle(articleId: string) {
  return useQuery<PopulatedArticle, Error>(["posts", articleId], () =>
    getArticle(articleId)
  );
}
export function useUnenabledArticle(articleId: string) {
  return useQuery<PopulatedArticle, Error>(["posts", articleId], {
    enabled: false,
  });
}

interface GetArticles {
  articles: PopulatedArticle[];
  totalPages: number;
  currentPage: number;
}
export interface GetArticlesProps {
  pageParam?: string;
  limit?: string;
  category?: string;
  authorId?: string;
}
const getArticles = async (props: any) => {
  // TODO: type
  const { pageParam } = props;
  const { authorId, category, limit } = props.queryKey[1].props;

  const queryString = new URLSearchParams({
    page: pageParam || "1",
    limit: limit || "6",
    ...(category && { category }),
    ...(authorId && { author: authorId }),
  });

  const { data } = await axiosClient.get(
    `${Endpoint.article}?${queryString.toString()}`
  );
  return data;
};
export function useArticles(props: GetArticlesProps) {
  return useInfiniteQuery<GetArticles, [string, GetArticlesProps]>(
    ["posts", { props }],
    getArticles,
    {
      getNextPageParam: ({ totalPages, currentPage }) =>
        totalPages !== currentPage && currentPage + 1,
    }
  );
}
