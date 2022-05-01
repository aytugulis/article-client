import { Heart, Book, HourglassSimple } from "phosphor-react";
import { CardList } from "../components/CardList";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { SectionHeader } from "../components/SectionHeader";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="flex">
        <SectionHeader
          icon={<Book weight="fill" size={20} />}
          title="Trend Articles"
        />
        <CardList />
      </section>
      ---------
      <section className="flex">
        <CardList />
        <SectionHeader
          icon={<Book weight="fill" size={20} />}
          title="Trend Articles"
        />
      </section>
    </div>
  );
};
