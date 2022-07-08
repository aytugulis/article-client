import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks";

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const user = useAuth();

  return user ? children : <Navigate to="/login" />;
};
