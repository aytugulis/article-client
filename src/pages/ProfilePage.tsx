import { Book } from "phosphor-react";
import React from "react";
import { useParams } from "react-router-dom";
import { ArticleCardList } from "../components/ArticleCardList";
import { Avatar } from "../components/Avatar";
import { Loading } from "../components/Loading";
import { SectionHeader } from "../components/SectionHeader";
import { useUser } from "../hooks/queries/user";

export const ProfilePage: React.FC = () => {
  const { id } = useParams();

  const { data: user, isLoading } = useUser(id!);

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <div className="flex flex-col items-center my-10 gap-5">
          <div className="flex flex-col items-center gap-1 p-2">
            <Avatar size="xl" imageUrl={user.imageUrl} />
            <p className="font-medium text-lg">{user.name}</p>
            <p>{user.description}</p>
          </div>
          <div className="flex flex-col items-center">
            <SectionHeader
              icon={<Book weight="fill" size={20} />}
              title="Articles"
            />
            <ArticleCardList authorId={id} />
          </div>
        </div>
      )}
    </>
  );
};
