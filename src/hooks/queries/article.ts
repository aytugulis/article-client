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

interface GetArticles {
  articles: PopulatedArticle[];
  totalPages: number;
  currentPage: number;
}
const getArticles = async (category?: Category) => {
  const queryString = new URLSearchParams({
    limit: category ? "3" : "6",
    ...(category && { category }),
  });

  const { data } = await axiosClient.get(
    `${Endpoint.getArticles}?${queryString.toString()}`
  );
  return data;
};
export function useArticles(category?: Category) {
  return useQuery<GetArticles, Error>(["posts"], () => getArticles(category));
}
