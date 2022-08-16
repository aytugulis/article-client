import { Author } from "./Author";

export type Category =
  | "Frontend"
  | "Backend"
  | "Fullstack"
  | "Devops"
  | "AI"
  | "Data";

export interface PopulatedArticle extends Omit<Article, "author"> {
  author: Omit<Author, "email" | "role">;
}

export interface Article {
  _id: string;
  header: string;
  content: string;
  category: Category;
  imageUrl: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}
