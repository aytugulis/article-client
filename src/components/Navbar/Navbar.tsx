import { useStore } from "../../store/zustand";
import { Brand } from "./Brand";
import { Member } from "./Member";
import { NonMember } from "./NonMember";

export const Navbar = () => {
  const userData = useStore((state) => state.userData);

  return (
    <nav className="flex justify-around py-3 bg-gradient-to-r from-primary-700 via-primary-400  to-primary-700">
      <Brand />
      {userData ? <Member /> : <NonMember />}
    </nav>
  );
};
