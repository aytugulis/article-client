import { Endpoint } from "../../type/Endpoint";
import { useQuery } from "react-query";
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
  page?: string;
  limit?: string;
  category?: string;
  authorId?: string;
}
const getArticles = async (props: GetArticlesProps) => {
  const { authorId, category, limit, page } = props;
  const queryString = new URLSearchParams({
    page: page || "1",
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
  return useQuery<GetArticles, Error>(["posts"], () => getArticles(props));
}
