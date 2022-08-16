import { Endpoint } from "../../types/Endpoint";
import {
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  useQuery,
} from "react-query";
import { PopulatedArticle } from "../../types/Article";
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
const getArticles = async (
  props: QueryFunctionContext<string | readonly unknown[]>
) => {
  const { pageParam } = props;
  const articleProps = props?.queryKey?.[1] as { props: GetArticlesProps };
  const { authorId, category, limit } = articleProps?.props;

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

const getBannerArticles = async () => {
  const { data } = await axiosClient.get(Endpoint.getBannerArticles);
  return data.articles;
};
export function useBannerArticles() {
  return useQuery<PopulatedArticle[], Error>(["banner"], () =>
    getBannerArticles()
  );
}
