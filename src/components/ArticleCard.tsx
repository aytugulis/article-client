import { Heart } from "phosphor-react";
import React from "react";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { useAuth, useDeleteArticle } from "../hooks";
import { ArticleImage } from "./ArticleImage";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { Loading } from "./Loading";

interface CardTypeProps {
  withIcon?: boolean;
  profileImage?: string;
  fullName?: string;
  id?: string;
}
const CardType: React.FC<CardTypeProps> = ({
  withIcon,
  profileImage,
  fullName,
  id,
}) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useDeleteArticle();
  const user = useAuth();

  const deleteHandler = async (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!id || !user) return;

    await mutateAsync({ id, token: user.token });
    queryClient.invalidateQueries("posts");
  };

  return (
    <>
      {isLoading && <Loading />}
      {withIcon ? (
        <>
          <Link to={`/edit-article/${id}`}>
            <Badge color="tropical-blue">Edit</Badge>
          </Link>
          <Badge onClick={(e) => deleteHandler(e)} color="secondary">
            Delete
          </Badge>
        </>
      ) : (
        <>
          <Avatar imageUrl={profileImage} size="xs" />
          <span className="font-medium text-gray-700">{fullName}</span>
        </>
      )}
    </>
  );
};

interface ArticleCardProps {
  profileImage: string;
  imageUrl: string;
  fullName: string;
  category: string;
  header: string;
  date: string;
  id: string;
  withIcon?: boolean;
}
export const ArticleCard: React.FC<ArticleCardProps> = ({
  imageUrl,
  profileImage,
  fullName,
  header,
  category,
  date,
  id,
  withIcon,
}) => {
  return (
    <Link
      to={`/article/${id}`}
      className="flex flex-col lg:flex-row justify-center gap-x-5 gap-y-2 items-center lg:basis-1/3 md:basis-1/2 basis-full py-4 cursor-pointer duration-300 rounded hover:bg-gray-400"
    >
      <ArticleImage imageUrl={imageUrl} />
      <div className="flex flex-col gap-1 items-center lg:items-start">
        <div className="flex items-center gap-2">
          <CardType
            withIcon={withIcon}
            profileImage={profileImage}
            fullName={fullName}
            id={id}
          />
        </div>
        <p className="font-medium text-lg">{header}</p>
        <p className="font-medium text-tropical-blue-600">{category}</p>
        <div className="flex gap-3">
          <p className="text-sm font-light">{date.slice(0, 10)}</p>
          <Heart size={20} />
        </div>
      </div>
    </Link>
  );
};
