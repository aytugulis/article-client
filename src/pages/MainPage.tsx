import { User, Book } from "phosphor-react";
import { ArticleCardList } from "../components/ArticleCardList";
import { WriterList } from "../components/WriterList";
import { SectionHeader } from "../components/SectionHeader";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center gap-10 my-10">
      <section className="flex flex-col items-center gap-2">
        <SectionHeader
          icon={<Book weight="fill" size={20} />}
          title="Last Articles"
        />
        <ArticleCardList />
      </section>

      <section className="flex flex-col items-center lg:flex-row mx-10">
        <SectionHeader
          icon={<User weight="fill" size={20} />}
          title="Top Authors"
        />
        <WriterList />
      </section>
    </div>
  );
};
