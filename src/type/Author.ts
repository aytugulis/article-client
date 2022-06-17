export interface Author {
  _id: string;
  name: string;
  description: string;
  email: string;
  imageUrl: string;
  role: "user" | "admin";
}
