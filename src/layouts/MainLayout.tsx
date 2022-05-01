import React from "react";
import { Navbar } from "../components/Navbar";

type MainLayoutProps = React.PropsWithChildren<{}>;

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow grid bg-gray-300">{children}</main>
      <footer className="flex justify-center py-2 bg-primary-700 text-white">
        FOOTER
      </footer>
    </div>
  );
};
