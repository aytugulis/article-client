import { Endpoint } from "./../type/Endpoint";
import { useQuery } from "react-query";
import { axiosClient } from "../utils/client";

interface GetTopAuthors {
  topAuthors: {
    count: number;
    author: {
      _id: string;
      name: string;
      description: string;
      imageUrl: string;
    };
  }[];
}

const getTopAuthors = async () => {
  const { data } = await axiosClient.get(`${Endpoint.getTopAuthors}`);
  return data;
};

export function useTopAuthors() {
  return useQuery<GetTopAuthors, Error>(["top-authors"], getTopAuthors);
}
