import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar/Navbar";

type MainLayoutProps = React.PropsWithChildren<{}>;

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow grid bg-gray-300">{children}</main>
      <Footer />
    </div>
  );
};
