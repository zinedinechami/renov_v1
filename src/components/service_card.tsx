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
      <div className=" overflow-hidden  mx-auto mb-20  w-80 rounded-md  shadow-md">
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
      {/* <h1 className=" text-zinc-900 font-bold text-xl flex">{title}</h1> */}
    </>
  );
}
