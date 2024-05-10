import Image from "next/image";
import example from "../assets/fake_img1 (1).jpg";

type Props = {
  image: string;
  title: string;
};

// todo: add text under

export default function ServiceCard({ image, title }: Props) {
  return (
    <>
      <article className="mb-20  mx-auto">
        <div className=" overflow-hidden   w-80 rounded-md  shadow-md">
          <div className="rounded-md ">
            <Image
              src={image}
              width={600}
              height={600}
              style={{ objectFit: "fill" }}
              alt={title}
            />
          </div>
        </div>
        <div className="text-xl pt-4 pb-2 font-semibold ">{title}</div>
        <div className="w-80 text-zinc-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
        </div>
      </article>
      {/* <h1 className=" text-zinc-900 font-bold text-xl flex">{title}</h1> */}
    </>
  );
}
