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
      <div className="max-w-sm bg-zinc-50  rounded-xl overflow-hidden border m-10 cursor-pointer hover:shadow-lg transition-shadow">
        <Image src={image} width={500} height={200} alt="ex" />
        <div className="px-6 py-4">
          <div className="bebas-neue-regular text-zinc-900  text-xl mb-2">
            {title}
          </div>
          <div className="text-zinc-900 text-base">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
