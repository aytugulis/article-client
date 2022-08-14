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
  const defaultImage = getImageUrl("article");

  return (
    <section
      style={{
        backgroundImage: `url('${formattedImageUrl}'), url('${defaultImage}')`,
      }}
      className="w-full h-[500px] bg-center"
    >
      <div className="flex items-center justify-around w-full mt-32">
        <Button
          size="sm"
          className="cursor-pointer"
          color="red"
          onClick={decreaseBannerIndex}
        >
          <Rewind className="text-white" weight="fill" size={30} />
        </Button>
        <div className="flex flex-col items-center gap-4 text-tropical-blue w-1/2 p-10 ">
          <Avatar imageUrl={authorImageUrl} size="lg" />
          <div className="bg-black bg-opacity-50">
            <p className="text-md lg:text-lg font-black p-1 mix-blend-exclusion">
              {name}
            </p>
          </div>
          <div className="bg-black bg-opacity-50">
            <h2 className="text-lg lg:text-4xl font-bold p-1 mix-blend-exclusion">
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
