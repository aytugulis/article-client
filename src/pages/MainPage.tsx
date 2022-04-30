import { Heart, Horse } from "phosphor-react";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";

export const MainPage = () => {
  return (
    <div className="h-[500px] bg-secondary flex flex-col items-center">
      <Button
        color="primary"
        leftIcon={
          <Horse size={26} weight="fill" className="text-white"></Horse>
        }
      >
        asd
      </Button>
    </div>
  );
};
