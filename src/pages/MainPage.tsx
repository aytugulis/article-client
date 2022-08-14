import { User, Book } from "phosphor-react";
import { ArticleCardList } from "../components/ArticleCardList";
import { WriterList } from "../components/WriterList";
import { SectionHeader } from "../components/SectionHeader";
import { Banner } from "../components/Banner";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center gap-10 mb-5">
      <Banner />
      <section className="flex flex-col xl:flex-row items-center gap-10">
        <SectionHeader
          icon={<User weight="fill" size={20} />}
          title="Top Authors"
        />
        <WriterList />
      </section>

      <section className="flex flex-col items-center gap-2">
        <SectionHeader
          icon={<Book weight="fill" size={20} />}
          title="Last Articles"
        />
        <ArticleCardList />
      </section>
    </div>
  );
};
