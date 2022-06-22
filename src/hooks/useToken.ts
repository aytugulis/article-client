import { useNavigate } from "react-router-dom";

export function useToken(token?: string) {
  const navigate = useNavigate();
  if (token) {
    localStorage.setItem("token", token);
    navigate("/");
  }
}
