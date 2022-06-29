import React from "react";
import { Navigate } from "react-router-dom";
import { useStore } from "../../store/zustand";

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const userData = useStore((state) => state.userData);

  return userData ? children : <Navigate to="/login" />;
};
