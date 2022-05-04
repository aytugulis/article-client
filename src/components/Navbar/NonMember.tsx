import { Lock, Fingerprint } from "phosphor-react";
import { Link } from "react-router-dom";

export const NonMember = () => {
  return (
    <ul className="flex items-center gap-3">
      <li className="group text-white">
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
  );
};
