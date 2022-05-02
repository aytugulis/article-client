import { User, Book } from "phosphor-react";
import { ArticleCardList } from "../components/ArticleCardList";
import { WriterList } from "../components/WriterList";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { SectionHeader } from "../components/SectionHeader";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center gap-10 my-10 divide-y divide-primary-900">
      <h1 className="text-3xl font-bold">Read</h1>
      <section className="flex">
        <SectionHeader
          icon={<Book weight="fill" size={20} />}
          title="Trend Articles"
        />
        <ArticleCardList />
      </section>
      <section className="flex flex-col items-center">
        <SectionHeader
          icon={<User weight="fill" size={20} />}
          title="Top Authors"
        />
        <WriterList />
      </section>
    </div>
  );
};
