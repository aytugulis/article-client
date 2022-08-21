import { FastForward, Rewind } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBannerArticles } from "../hooks";
import { getImageUrl } from "../utils/url";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { Button } from "./Button";

export const Banner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const limit = 5;
  const { data } = useBannerArticles();

  useEffect(() => {
    const interval = setInterval(() => {
      increaseBannerIndex();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const increaseBannerIndex = () => {
    setBannerIndex((pre) => (pre === limit - 1 ? 0 : pre + 1));
  };
  const decreaseBannerIndex = () => {
    setBannerIndex((pre) => (pre === 0 ? limit - 1 : pre - 1));
  };

  if (!data?.[bannerIndex]) return <></>;

  const {
    _id,
    header,
    imageUrl,
    author: { imageUrl: authorImageUrl, name },
  } = data[bannerIndex];
  const formattedImageUrl = getImageUrl("banner", imageUrl);
  const defaultImage = getImageUrl("banner");

  return (
    <section className="w-full relative">
      <img
        draggable={false}
        key={_id}
        className="w-full h-[500px] object-cover animate-banner"
        src={formattedImageUrl}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = defaultImage;
        }}
      />
      <div className="flex items-center justify-around w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute">
        <Button
          size="sm"
          className="cursor-pointer"
          color="red"
          onClick={decreaseBannerIndex}
        >
          <Rewind className="text-white" weight="fill" size={30} />
        </Button>
        <div className="flex flex-col items-center gap-4 text-tropical-blue-300 w-1/2 p-10 ">
          <Avatar imageUrl={authorImageUrl} size="lg" />
          <div className="bg-black bg-opacity-50">
            <p className="text-sm lg:text-md font-medium lg:font-black  p-1 word-break: break-all">
              {name}
            </p>
          </div>
          <div className="bg-black bg-opacity-50">
            <h2 className="text-md lg:text-2xl font-bold p-1 word-break: break-all">
              {header}
            </h2>
          </div>
          <Link to={`/article/${_id}`}>
            <Badge color="tropical-blue">Read Now</Badge>
          </Link>
        </div>
        <Button
          size="sm"
          className="cursor-pointer"
          color="red"
          onClick={increaseBannerIndex}
        >
          <FastForward className="text-white" weight="fill" size={30} />
        </Button>
      </div>
    </section>
  );
};
