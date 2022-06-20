import { Endpoint } from "./../type/Endpoint";
import { useQuery } from "react-query";
import { PopulatedArticle } from "../type/Article";
import { axiosClient } from "../utils/client";

const getArticle = async (articleId: string) => {
  const { data } = await axiosClient.get(`${Endpoint.getArticle(articleId)}`);
  return data.article;
};

export function useArticle(articleId: string) {
  return useQuery<PopulatedArticle, Error>(["posts", articleId], () =>
    getArticle(articleId)
  );
}
