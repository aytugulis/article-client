import { Heart, Horse } from "phosphor-react";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";

export const TestPage = () => {
  return (
    <div>
      <TextInput
        leftIcon={<Horse className="text-success" weight="fill" size={32} />}
        rightIcon={<Heart className="text-primary" weight="fill" size={32} />}
        placeholder="Type a name"
      />
      <Button
        color="success"
        size="lg"
        leftIcon={<Heart className="text-white" weight="fill" size={28} />}
        rightIcon={<Heart className="text-white" weight="fill" size={28} />}
      >
        Normal
      </Button>
      <Button
        color="error"
        size="md"
        leftIcon={<Heart className="text-white" weight="fill" size={28} />}
      >
        Normal
      </Button>
      <Button
        color="primary"
        size="sm"
        outlined
        leftIcon={
          <Heart
            className="text-primary group-hover:text-white"
            weight="fill"
            size={28}
          />
        }
        rightIcon={
          <Heart
            className="text-primary group-hover:text-white"
            weight="fill"
            size={28}
          />
        }
      >
        Outlined
      </Button>
      <Button
        color="warning"
        size="lg"
        outlined
        rightIcon={
          <Heart
            className="text-warning group-hover:text-white"
            weight="fill"
            size={32}
          />
        }
      >
        Outlined
      </Button>
      <Button color="primary">Outlined</Button>
      <Button color="warning">Outlined</Button>
      <Button color="secondary">Outlined</Button>
    </div>
  );
};
