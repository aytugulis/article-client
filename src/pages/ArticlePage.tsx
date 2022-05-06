import { ThumbsUp } from "phosphor-react";
import React from "react";
import { Avatar } from "../components/Avatar";

export const ArticlePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 m-10">
      <div className="flex flex-col items-center gap-1">
        <Avatar
          size="xl"
          imageUrl="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        />
        <p>Aytuğ Ulış</p>

        <div className="flex items-center w-5/6">
          <h2 className="font-bold text-2xl text-center">
            Lorem ipsum dolor sit ametasasa consectetur adipisicing elit.
            Consectetur sunt quam mollitiaasasaasasasasasas officiisasasasas
          </h2>
          <ThumbsUp size={50} className="cursor-pointer hover:text-secondary" />
        </div>
      </div>

      <p className=" w-5/6 text-xl leading-8 tracking-wider">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, commodi
        impedit soluta nemo obcaecati dolorem placeat ratione mollitia eos unde
        ea suscipit autem nobis alias animi vero eius dolores quis magnam
        adipisci provident illum dolor natus at? Eligendi odit cumque voluptas
        voluptatum enim a, ratione labor e laboriosam, saepe voluptatibus natus
        illum mollitia quae, laudantium possimus distinctio animi beatae
        expedita ipsam. Tenetur, error mollitia. Eveniet ad voluptatibus
        assumenda aliquid dicta, facere, error ducimus similique quidem
        perspiciatis tempore excepturi quo et iusto autem repellat nobis
        provident necessitatibus minus! Esse quod impedi
        <br />
        <br /> ut eveniet temporibus repellendus ipsum laboriosam! Ducimus
        pariatur error, odio sit soluta quidem asperiores minus officia ut
        dignissimos. Sunt hic laudantium autem ipsam illo numquam aperiam libero
        explicabo inventore aliquid, cumque provident, culpa, fugit quas simili
        <br />
        <br />
        que natus tempore. Iure dicta in officia nam maiores necessitatibus
        aspernatur sapiente adipisci animi eligendi impedit voluptatem magni
        assumenda, atque quisquam enim minima molestias quasi nisi temporibus.
        Quam non obcaecati labore facilis assumenda libero, in sint porro unde
        deleniti officia ullam? Suscipit, quod nostrum! Voluptates eaque ad quas
        tempore commodi quasi id ratione facere maiores vitae, quia possimus?
        <br />
        <br />
        Dolorem placeat quidem voluptas ad laudantium animi ullam quae, ab atque
        quibusdam esse recusandae repellat omnis, fugiat est necessitatibus
        autem illum eveniet minima vitae aut? Nemo facere dolores dolorum libero
        similique eveniet vitae suscipit consectetur beatae, illum alias ut ad
        laudantium placeat modi provident eum quo, incidunt repellat excepturi
        numquam iusto.
        <br /> Expedita esse incidunt recusandae error facere fugiat ea
        cupiditate, obcaecati laudantium temporibus saepe tempore unde vitae
        nostrum aliquam voluptas non. Accusamus, est.
      </p>
    </div>
  );
};
