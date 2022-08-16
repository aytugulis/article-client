import { useQuery } from "react-query";
import { AuthData } from "../../types/AuthData";

export function useAuth() {
  const { data } = useQuery<AuthData, Error>("userData", { enabled: false });
  return data;
}
