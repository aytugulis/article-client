import { FastForward, Rewind } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../utils/url";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { Button } from "./Button";

export const Banner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const articles = [
    {
      _id: "62e525d9e0aa251b017b489a",
      header: "1",
      category: "Fullstack",
      imageUrl: "default.webp",
      author: {
        _id: "62603f5de19449931fd64baa",
        name: "aytug22222areg",
        imageUrl: "3776ee4e-97e9-41dc-a440-c103b3dec00c.webp",
      },
      createdAt: "2022-07-30T12:36:41.612Z",
      updatedAt: "2022-07-30T12:36:41.612Z",
      __v: 0,
    },
    {
      _id: "62e51dc9e0aa251b017b4451",
      header: "2",
      category: "Fullstack",
      imageUrl: "default.webp",
      author: {
        _id: "62603f5de19449931fd64baa",
        name: "aytug22222areg",
        imageUrl: "3776ee4e-97e9-41dc-a440-c103b3dec00c.webp",
      },
      createdAt: "2022-07-30T12:02:17.281Z",
      updatedAt: "2022-07-30T12:02:17.281Z",
      __v: 0,
    },
    {
      _id: "62d7ec4491e5df7d17612a58",
      header: "3",
      category: "Backend",
      imageUrl: "e57e5249-f9d6-414c-8142-bcfb07bbb411.webp",
      author: {
        _id: "62603f5de19449931fd64baa",
        name: "aytug22222areg",
        imageUrl: "3776ee4e-97e9-41dc-a440-c103b3dec00c.webp",
      },
      createdAt: "2022-07-20T11:51:32.638Z",
      updatedAt: "2022-07-20T11:51:32.638Z",
      __v: 0,
    },
    {
      _id: "62d6d0762367ab355e419d23",
      header: "4",
      category: "Backend",
      imageUrl: "936519b1-aec6-4e4d-96f8-c0ccd61ce93b.webp",
      author: {
        _id: "62d6d0402367ab355e419d1b",
        name: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        imageUrl: "0787fc02-e30d-4024-8a24-9bcfbab9838f.webp",
      },
      createdAt: "2022-07-19T15:40:38.841Z",
      updatedAt: "2022-07-19T15:40:38.841Z",
      __v: 0,
    },
    {
      _id: "62d6cbec43cfe6396c7aa0c8",
      header: "5",
      category: "Backend",
      imageUrl: "default.webp",
      author: {
        _id: "62c0daef0a8705bc14463777",
        name: "editedName",
        imageUrl: "5222207d-d433-420c-af1c-ce3fbe765edb.webp",
      },
      createdAt: "2022-07-19T15:21:16.347Z",
      updatedAt: "2022-07-19T15:21:16.347Z",
      __v: 0,
    },
    {
      _id: "62d6cbeb43cfe6396c7aa0c6",
      header: "6",
      category: "Backend",
      imageUrl: "default.webp",
      author: {
        _id: "62c0daef0a8705bc14463777",
        name: "editedName",
        imageUrl: "5222207d-d433-420c-af1c-ce3fbe765edb.webp",
      },
      createdAt: "2022-07-19T15:21:15.314Z",
      updatedAt: "2022-07-19T15:21:15.314Z",
      __v: 0,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((pre) => (pre === articles.length - 1 ? 0 : pre + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const {
    _id,
    header,

    imageUrl,
    author: { imageUrl: authorImageUrl, name },
  } = articles[bannerIndex];
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
          onClick={() =>
            setBannerIndex((pre) => (pre === 0 ? articles.length - 1 : pre - 1))
          }
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
          onClick={() =>
            setBannerIndex((pre) => (pre === articles.length - 1 ? 0 : pre + 1))
          }
        >
          <FastForward className="text-white" weight="fill" size={30} />
        </Button>
      </div>
    </section>
  );
};
