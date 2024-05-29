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
        <div className=" overflow-hidden h-96    w-96 rounded-lg  shadow-md">
          <Image
            src={image}
            width={600}
            height={600}
            className="rounded-lg brightness-90"
            alt={title}
          />
        </div>

        <h1 className=" text-zinc-900 font-semibold text-xl flex pt-3">
          {title}
        </h1>
        <div className="w-96 text-sm text-zinc-500 ">{description}</div>
      </article>
    </>
  );
}
