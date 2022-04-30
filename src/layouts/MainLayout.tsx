import React from "react";
import { Navbar } from "../components/Navbar";

type MainLayoutProps = React.PropsWithChildren<{}>;

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow grid bg-gray-100">{children}</main>
      <footer>FOOOTER</footer>
    </div>
  );
};
