import { Endpoint } from "../../type/Endpoint";
import { useQuery } from "react-query";
import { axiosClient } from "../../utils/client";
import { Author } from "../../type/Author";

interface TopAuthor {
  count: number;
  author: Omit<Author, "email" | "role">;
}
interface GetTopAuthors {
  topAuthors: TopAuthor[];
}
const getTopAuthors = async () => {
  const { data } = await axiosClient.get(`${Endpoint.getTopAuthors}`);
  return data;
};
export function useTopAuthors() {
  return useQuery<GetTopAuthors, Error>(["top-authors"], getTopAuthors);
}

const getOneUser = async (userId: string) => {
  const { data } = await axiosClient.get(`${Endpoint.getOneUser(userId)}`);
  return data;
};
export function useUser(userId: string) {
  return useQuery<Author, Error>(["user", userId], () => getOneUser(userId));
}
