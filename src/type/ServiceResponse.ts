import { Article } from "./Article";

export interface GetArticles {
  articles: Article[];
  totalPages: number;
  currentPage: number;
}

export interface GetTopAuthors {
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
