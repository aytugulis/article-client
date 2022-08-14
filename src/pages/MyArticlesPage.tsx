import { Book } from "phosphor-react";
import { ArticleCardList } from "../components/ArticleCardList";
import { SectionHeader } from "../components/SectionHeader";
import { useAuth } from "../hooks";

export const MyArticlesPage = () => {
  const user = useAuth();
  return (
    <div className="flex flex-col items-center gap-10 my-10">
      <section className="flex flex-col items-center gap-4">
        <SectionHeader
          icon={<Book weight="fill" size={20} />}
          title="My Articles"
        />
        <ArticleCardList authorId={user?._id} withIcon limit="9" />
      </section>
    </div>
  );
};
