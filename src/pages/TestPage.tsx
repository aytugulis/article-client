import { Heart, Horse } from "phosphor-react";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";

export const TestPage = () => {
  return (
    <div>
      <TextInput
        leftIcon={
          <Horse className="text-tropical-blue" weight="fill" size={32} />
        }
        rightIcon={<Heart className="text-primary" weight="fill" size={32} />}
        placeholder="Type a name"
      />
      <Button
        color="tropical-blue"
        size="lg"
        leftIcon={<Heart className="text-white" weight="fill" size={28} />}
        rightIcon={<Heart className="text-white" weight="fill" size={28} />}
      >
        Normal
      </Button>
      <Button
        color="red"
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
        color="yellow"
        size="lg"
        outlined
        rightIcon={
          <Heart
            className="text-yellow group-hover:text-white"
            weight="fill"
            size={32}
          />
        }
      >
        Outlined
      </Button>
      <Button color="primary">Outlined</Button>
      <Button color="yellow">Outlined</Button>
      <Button color="secondary">Outlined</Button>
      <Badge color="primary">Follow</Badge>
      <Badge color="tropical-blue">asd</Badge>
      <Badge color="red">asdasdasdasd</Badge>
      <Badge color="yellow">asdaasdasdasdasdasdasd</Badge>
    </div>
  );
};
