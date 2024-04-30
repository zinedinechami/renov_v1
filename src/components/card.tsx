import Image from "next/image";
import example from "../assets/fake_img1 (1).jpg";

// todo: create card props

export default function Card() {
  return (
    <>
      <div className="max-w-sm bg-white  rounded-xl overflow-hidden border m-10 cursor-pointer hover:shadow-lg transition-shadow">
        <Image src={example} width={500} height={200} alt="ex" />
        <div className="px-6 py-4">
          <div className="bebas-neue-regular text-zinc-900  text-xl mb-2">
            Peinture
          </div>
          <div className="text-zinc-900 text-base">
            <ul>
              <li>- point 1</li>
              <li>- point 1</li>
              <li>- point 1</li>
              <li>- point 1</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
