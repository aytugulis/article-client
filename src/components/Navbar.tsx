import { Horse, Lock, Fingerprint } from "phosphor-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-around py-3 bg-gradient-to-r from-primary-700 via-primary-400  to-primary-700">
      <Link className="flex items-center gap-1 group" to="/">
        <Horse
          className="text-white group-hover:text-secondary duration-500"
          weight="fill"
          size={30}
        />
        <h1 className="group-hover:text-secondary duration-500 text-2xl text-white border-secondary">
          Article
        </h1>
      </Link>

      <ul className="flex items-center">
        <li className="group mr-5 text-white">
          <Link className="flex items-center gap-1" to="/login">
            <Fingerprint className="text-secondary" weight="fill" size={20} />
            <h2 className="group-hover:border-b-2 group-hover:border-secondary">
              Login
            </h2>
          </Link>
        </li>

        <li className="group text-white">
          <Link className="flex items-center gap-1" to="/register">
            <Lock className="text-secondary" weight="fill" size={20} />
            <h2 className="group-hover:border-b-2 group-hover:border-secondary">
              Register
            </h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
