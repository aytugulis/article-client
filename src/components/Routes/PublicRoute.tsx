import React from "react";
import { Navigate } from "react-router-dom";
import { useStore } from "../../store/zustand";

interface PublicRouteProps {
  children: JSX.Element;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const userData = useStore((state) => state.userData);

  return userData ? <Navigate to="/" /> : children;
};
