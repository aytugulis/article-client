import { Author } from "./Author";

export interface AuthData extends Author {
  token: string;
}
