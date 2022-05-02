import { Heart, Book, HourglassSimple } from "phosphor-react";
import { CardList } from "../components/CardList";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { SectionHeader } from "../components/SectionHeader";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center gap-12 my-10 divide-y divide-primary-900">
      <h1 className="text-3xl font-bold">Read</h1>
      <section className="flex">
        <SectionHeader
          icon={<Book weight="fill" size={20} />}
          title="Trend Articles"
        />
        <CardList />
      </section>
      <section className="flex">
        <SectionHeader
          icon={<Book weight="fill" size={20} />}
          title="Trend Articles"
        />
        <CardList />
      </section>
    </div>
  );
};
