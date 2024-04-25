import Image from "next/image";
import example from "../assets/fake_img1 (1).jpg";

export default function Card() {
  return (
    <>
      <div className="max-w-sm bg-zinc-50 border-zinc-900 rounded-lg overflow-hidden shadow-lg m-10 mt-14">
        <Image src={example} width={500} height={200} alt="ex" />
        <div className="px-6 py-4">
          <div className="bebas-neue-regular text-zinc-900  text-xl mb-2">
            Peinture
          </div>
          <p className="text-zinc-900 text-base">
            <ul>
              <li>- point 1</li>
              <li>- point 1</li>
              <li>- point 1</li>
              <li>- point 1</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}
