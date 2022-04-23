import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-around p-4 bg-primary border-b border-black">
      <Link to="/">
        <h1 className="text-3xl hover:text-error hover:transition hover:duration-300">
          Article
        </h1>
      </Link>

      <ul className="flex items-center">
        <li className="pr-6 hover:text-error hover:transition hover:duration-300">
          <Link to="/register">Register</Link>
        </li>
        <li className="hover:text-error hover:transition hover:duration-300">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};
