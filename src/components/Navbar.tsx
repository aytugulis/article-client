import { Horse, Lock, Fingerprint } from "phosphor-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-around py-3 bg-primary">
      <Link to="/">
        <div className="flex items-center gap-1">
          <Horse className="text-white" weight="fill" size={30} />
          <h1 className=" text-2xl text-white border-secondary">Article</h1>
        </div>
      </Link>

      <ul className="flex items-center">
        <li className="group flex items-center gap-1 cursor-pointer mr-5  text-white">
          <Lock className="text-secondary" weight="fill" size={20} />
          <Link
            className="group-hover:border-b-2 group-hover:border-secondary"
            to="/register"
          >
            Register
          </Link>
        </li>

        <li className="group flex items-center gap-1 cursor-pointer  text-white">
          <Fingerprint className="text-secondary" weight="fill" size={20} />
          <Link
            className="group-hover:border-b-2 group-hover:border-secondary"
            to="/login"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};
