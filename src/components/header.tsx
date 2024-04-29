import tiktok from "../assets/tiktok.png";
import insta from "../assets/instagram.png";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <nav className="  top-0 w-full bg-zinc-50  h-28   z-10 ">
        <a href="#home">
          <h1 className="bebas-neue-regular pl-28 sm:text-4xl text-xl pt-10 flex-col text-zinc-900 ">
            RÉNOV À 9
          </h1>
        </a>
        <div className=" absolute top-10 right-28">
          <ul className="flex">
            <li className="pt-2 pr-4">
              <a className="hover:opacity-60 transition-opacity" href="">
                <Image src={insta} width={25} height={20} alt={"instagram"} />
              </a>
            </li>
            <li className="pt-2 pr-6">
              <a className="hover:opacity-60 transition-opacity" href="">
                <Image src={tiktok} width={25} height={20} alt={"tiktok"} />
              </a>
            </li>
            <a href="#contact">
              <button className="  flex bebas-neue-regular sm:text-xl bg-zinc-900 hover:bg-zinc-700  text-white  py-2 px-4 border border-zinc-200 rounded-lg shadow-md transition-colors">
                Contactez Nous
              </button>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}
