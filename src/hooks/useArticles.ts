import { Endpoint } from "./../type/Endpoint";
import { useQuery } from "react-query";
import { PopulatedArticle } from "../type/Article";
import { axiosClient } from "../utils/client";

interface GetArticles {
  articles: PopulatedArticle[];
  totalPages: number;
  currentPage: number;
}
const getArticles = async () => {
  const { data } = await axiosClient.get(`${Endpoint.getArticles}?limit=6`);
  return data;
};

export function useArticles() {
  return useQuery<GetArticles, Error>(["posts"], getArticles);
}
