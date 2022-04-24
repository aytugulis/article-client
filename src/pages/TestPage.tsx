import { Heart, Horse } from "phosphor-react";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";

export const TestPage = () => {
  return (
    <div>
      <TextInput
        leftIcon={<Horse className="text-success" weight="fill" size={30} />}
        rightIcon={<Heart className="text-primary" weight="fill" size={32} />}
        placeholder="Type a name"
      />
      ---
      <Button color="success" size="lg" leftIcon={Heart} rightIcon={Heart}>
        Normal
      </Button>
      <Button color="error" size="md" leftIcon={Heart}>
        Normal
      </Button>
      <Button
        color="primary"
        size="sm"
        outlined
        leftIcon={Heart}
        rightIcon={Heart}
      >
        Outlined
      </Button>
      <Button color="warning" size="lg" outlined rightIcon={Heart}>
        Outlined
      </Button>
      <div className="group">qqq</div>
      <h1 className="group-hover:text-5xl">asd</h1>
    </div>
  );
};
