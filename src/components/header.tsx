import tiktok from "../assets/tiktok.png";
import insta from "../assets/instagram.png";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <nav className=" h-20  ">
        <h1 className="bebas-neue-regular text-center sm:text-4xl text-2xl pt-4 flex-col ">
          RENOV À 9
        </h1>
        <div className=" absolute top-5 left-8">
          <ul className="flex ">
            <li className="pr-4">
              <a className="pr-2" href="">
                <Image src={insta} width={25} height={20} alt={"instagram"} />
              </a>
            </li>
            <li>
              <a className="pr-2" href="">
                <Image src={tiktok} width={25} height={20} alt={"tiktok"} />
              </a>
            </li>
          </ul>
        </div>
        <button className=" absolute right-5 top-3 bebas-neue-regular sm:text-xl bg-zinc-50 hover:bg-zinc-200 text-black  py-2 px-4 border border-zinc-300 rounded shadow-lg">
          Contactez Nous
        </button>
      </nav>
    </>
  );
}
