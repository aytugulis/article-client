import cx from "classnames";
import { Heart } from "phosphor-react";
import React from "react";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { useAuth, useDeleteArticle } from "../hooks";
import { setContentLength } from "../utils/format";
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

  if (!withIcon)
    return (
      <div className="flex items-center gap-2">
        {isLoading && <Loading />}
        <Avatar imageUrl={profileImage} size="xs" />
        <span className="text-sm font-medium text-gray-700">{fullName}</span>
      </div>
    );

  return (
    <div>
      {isLoading && <Loading />}
      <Link className="mr-1" to={`/edit-article/${id}`}>
        <Badge color="tropical-blue">Edit</Badge>
      </Link>
      <Badge onClick={(e) => deleteHandler(e)} color="secondary">
        Delete
      </Badge>
    </div>
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
  articleLength: number;
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
  articleLength,
}) => {
  return (
    <Link
      to={`/article/${id}`}
      className={cx(
        "flex flex-col lg:flex-row justify-center items-center gap-4 mx-10 p-4 cursor-pointer duration-300 rounded hover:bg-gray-400",
        {
          "xl:basis-1/3 lg:basis-1/2 basis-full mx-0": articleLength > 3,
        }
      )}
    >
      <ArticleImage imageUrl={imageUrl} />
      <div className="flex flex-col gap-1 items-center lg:items-start w-1/2">
        <CardType
          withIcon={withIcon}
          profileImage={profileImage}
          fullName={setContentLength(fullName, 20)}
          id={id}
        />

        <p className="font-medium text-base">{setContentLength(header, 20)}</p>
        <p className="font-medium text-tropical-blue-600">{category}</p>
        <p className="text-sm font-light">{date.slice(0, 10)}</p>
      </div>
    </Link>
  );
};
