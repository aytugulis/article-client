import { Book, ThumbsUp } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import { ArticleCardList } from "../components/ArticleCardList";
import { Avatar } from "../components/Avatar";
import { SectionHeader } from "../components/SectionHeader";

export const ArticlePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center my-10 gap-5">
      <Link
        to="/profile/:id"
        className="flex flex-col items-center gap-1 duration-300 rounded hover:bg-gray-400 p-2"
      >
        <Avatar
          size="xl"
          imageUrl="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        />
        <p className="font-medium text-lg">Aytuğ Ulış</p>
        <p>I am a software developer</p>
      </Link>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center w-3/5 justify-center">
          <h2 className="font-bold text-2xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, at
            architecto temporibus libero magni voluptatem.
          </h2>
          <ThumbsUp size={50} className="cursor-pointer hover:text-secondary" />
        </div>
        <p className=" w-5/6 text-xl leading-8 tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          distinctio ipsa accusantium facere laudantium eos, excepturi amet
          eveniet consequuntur? Esse facere, dolorem dolor quidem saepe nihil.
          Maxime pariatur dolores reprehenderit impedit ratione iure iste nisi
          aut suscipit totam deserunt cum illo sed mollitia minus ad error nulla
          fugit temporibus, autem amet optio nam possimus vero? Nesciunt
          voluptas mollitia nobis, id, quo praesentium delectus voluptatum eaque
          blanditiis ducimus atque! Assumenda enim aliquam consequatur veritatis
          atque at, in molestias asperiores impedit reprehenderit et porro ipsam
          eos doloremque nesciunt doloribus. Expedita excepturi voluptatibus
          ipsum rerum nostrum recusandae nemo, minima ipsam deserunt assumenda
          maiores modi sed cupiditate laboriosam nam maxime, non voluptatem
          repudiandae tenetur exercitationem velit. Debitis praesentium officiis
          quod, inventore perferendis distinctio quia, dolores provident et
          facilis sapiente facere delectus odit esse. Eos sunt iste in,
          blanditiis quidem itaque neque numquam culpa explicabo! Aperiam
          nesciunt earum corporis sunt eligendi quibusdam eius labore dolorem
          quas eveniet modi sit unde soluta exercitationem impedit repellat
          commodi pariatur, doloremque error. Animi, in sequi illo quas, illum
          necessitatibus hic consequatur saepe optio ab, inventore nulla. Cum
          officia eveniet minima, maxime, neque magni consectetur placeat
          molestiae suscipit et ratione labore dolores quas velit, quae a in
          maiores culpa fugiat numquam? Incidunt numquam molestiae excepturi
          omnis officia itaque modi eum eveniet quae aut temporibus rem dolore
          perferendis alias sed, non ab veniam consequatur atque reprehenderit
          praesentium autem? Facilis ut veniam esse non cupiditate odio maiores
          deserunt soluta explicabo animi suscipit qui ducimus cum, blanditiis
          officiis repellat eligendi nesciunt dicta laudantium.
        </p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <SectionHeader
          icon={<Book weight="fill" size={20} />}
          title="Trend Articles"
        />
        <ArticleCardList />
      </div>
    </div>
  );
};
