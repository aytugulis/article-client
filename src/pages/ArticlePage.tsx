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
            <p className="font-medium text-lg">{article.author.name}</p>
            <p>{article.author.description}</p>
          </Link>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center w-3/5 justify-center">
              <h2 className="font-bold text-2xl text-center">
                {article.header}
              </h2>
              <ThumbsUp
                size={50}
                className="cursor-pointer hover:text-secondary"
              />
            </div>
            <p className="w-5/6 text-xl leading-8 tracking-wider">
              <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
            </p>
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
