import { Author } from "./Author";

export interface PopulatedArticle {
  _id: string;
  header: string;
  content: string;
  category: string;
  imageUrl: string;
  author: Omit<Author, "email" | "role">;
  createdAt: string;
  updatedAt: string;
}

export interface Article {
  _id: string;
  header: string;
  content: string;
  category: string;
  imageUrl: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}
