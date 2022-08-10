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
  const formattedImageUrl = getImageUrl("article", imageUrl);

  return (
    <section className="relative w-full">
      <img
        key={_id}
        className="animate-banner w-full h-[500px] object-none"
        src={formattedImageUrl}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = getImageUrl("article");
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-around w-full">
        <Button
          size="sm"
          className="cursor-pointer"
          color="red"
          onClick={decreaseBannerIndex}
        >
          <Rewind className="text-white" weight="fill" size={30} />
        </Button>
        <div className="flex flex-col items-center gap-1 text-white w-1/2">
          <Avatar imageUrl={authorImageUrl} size="lg" />
          <p className="text-lg">{name}</p>
          <h2 className="text-5xl">{header}</h2>
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
