import Image from "next/image";
import example from "../assets/fake_img1 (1).jpg";

interface Props {
  image: string;
  title: string;
}

export default function Card({ image, title }: Props) {
  return (
    <>
      <div className=" bg-zinc-50 h-72 rounded-md overflow-hidden border m-2  shadow transition-shadow">
        <div className="h-52 overflow-hidden">
          <Image
            src={image}
            width={500}
            height={250}
            style={{ objectFit: "fill" }}
            alt="ex"
          />
        </div>
        <div className="px-6 py-4 h-12">
          <div className=" text-zinc-900 font-bold text-xl ">{title}</div>
        </div>
      </div>
    </>
  );
}
