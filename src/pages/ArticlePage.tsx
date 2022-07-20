import { Book, ThumbsUp } from "phosphor-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArticleCardList } from "../components/ArticleCardList";
import { Avatar } from "../components/Avatar";
import { Loading } from "../components/Loading";
import { SectionHeader } from "../components/SectionHeader";
import { useArticle } from "../hooks";

export const ArticlePage: React.FC = () => {
  const { id } = useParams();
  const { data: article, isLoading } = useArticle(id!);

  return (
    <>
      {isLoading && <Loading />}
      {article && (
        <div className="flex flex-col items-center my-10 gap-5">
          <Link
            to={`/profile/${article.author._id}`}
            className="flex flex-col items-center gap-1 duration-300 rounded hover:bg-gray-400 p-2"
          >
            <Avatar size="xl" imageUrl={article.author.imageUrl} />
            <p className="font-medium text-lg word-break: break-all">
              {article.author.name}
            </p>
            <p className="word-break: break-all">
              {article.author.description}
            </p>
          </Link>

          <div className="flex flex-col items-center gap-2">
            <h2 className="font-bold text-2xl text-center word-break: break-all">
              {article.header}
            </h2>

            <p
              className="mx-20 text-xl leading-8 tracking-wider word-break: break-all"
              dangerouslySetInnerHTML={{ __html: article.content }}
            ></p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <SectionHeader
              icon={<Book weight="fill" size={20} />}
              title="Other Similar Articles"
            />
            <ArticleCardList category={article.category} />
          </div>
        </div>
      )}
    </>
  );
};
