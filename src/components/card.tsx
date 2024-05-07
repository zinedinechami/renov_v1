import Image from "next/image";
import example from "../assets/fake_img1 (1).jpg";

interface Props {
  image: string;
  title: string;
}

export default function Card({ image, title }: Props) {
  return (
    <>
      <div className=" overflow-hidden  mx-auto mb-20  w-80 rounded-md ">
        <div className="rounded-md opacity-95">
          <Image
            src={image}
            width={600}
            height={600}
            style={{ objectFit: "fill" }}
            alt={title}
          />
        </div>
      </div>
      {/* <h1 className=" text-zinc-900 font-bold text-xl flex">{title}</h1> */}
    </>
  );
}
