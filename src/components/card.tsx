import Image from "next/image";
import example from "../assets/fake_img1 (1).jpg";

interface Props {
  image: string;
  title: string;
  text: string;
}

export default function Card({ image, title, text }: Props) {
  return (
    <>
      <div className=" bg-zinc-50  rounded-md overflow-hidden border m-2  shadow transition-shadow">
        <Image src={image} width={500} height={250} alt="ex" />
        <div className="px-6 py-4">
          <div className=" text-zinc-900 font-bold text-xl mb-2">{title}</div>
        </div>
      </div>
    </>
  );
}
