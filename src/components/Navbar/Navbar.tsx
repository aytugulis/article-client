import { useAuth } from "../../hooks";
import { Brand } from "./Brand";
import { Member } from "./Member";
import { NonMember } from "./NonMember";

export const Navbar = () => {
  const user = useAuth();

  return (
    <nav className="flex justify-around py-3 bg-gradient-to-r from-primary-700 via-primary-400  to-primary-700">
      <Brand />
      {user ? <Member /> : <NonMember />}
    </nav>
  );
};
