import cx from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { setContentLength } from "../../utils/format";
import { ArticleImage } from "../ArticleImage";
import { CardType } from "./CardType";

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
      <div className="flex flex-col gap-1 items-center lg:items-start w-40">
        <CardType
          withIcon={withIcon}
          profileImage={profileImage}
          fullName={setContentLength(fullName, 15)}
          id={id}
        />

        <p className="font-medium text-base">{setContentLength(header, 15)}</p>
        <p className="font-medium text-tropical-blue-600">{category}</p>
        <p className="text-sm font-light">{date.slice(0, 10)}</p>
      </div>
    </Link>
  );
};
