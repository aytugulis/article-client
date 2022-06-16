export interface Author {
  _id: string;
  name: string;
  email: string;
  imageUrl: string;
  role: "user" | "admin";
}
