import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks";

interface PublicRouteProps {
  children: JSX.Element;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const user = useAuth();

  return user ? <Navigate to="/" /> : children;
};
