import { User, Book } from "phosphor-react";
import { ArticleCardList } from "../components/ArticleCardList";
import { WriterList } from "../components/WriterList";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { SectionHeader } from "../components/SectionHeader";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center gap-10 my-10">
      <h1 className="text-3xl font-bold">Read</h1>
      <SectionHeader
        className="lg:hidden"
        icon={<Book weight="fill" size={20} />}
        title="Trend Articles"
      />
      <section className="flex">
        <SectionHeader
          className="hidden lg:flex"
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
