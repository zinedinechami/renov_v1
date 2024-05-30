import Image from "next/image";
import example from "../assets/fake_img1 (1).jpg";

type Props = {
  image: string;
  title: string;
  description: string;
};

// todo: add text under

export default function ServiceCard({ image, title, description }: Props) {
  return (
    <>
      <article className="mb-10  mx-auto">
        <div className=" overflow-hidden h-80    w-80 rounded-lg  ">
          <Image
            src={image}
            width={600}
            height={600}
            className="rounded-lg brightness-90 shadow-sm"
            alt={title}
          />
        </div>

        <h1 className=" text-zinc-900 font-semibold text-lg pb-1 flex pt-2 ">
          {title}
        </h1>
        <div className="w-80 text-sm text-zinc-400 ">{description}</div>
      </article>
    </>
  );
}
