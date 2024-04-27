import tiktok from "../assets/tiktok.png";
import insta from "../assets/instagram.png";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <nav className=" sticky top-0 w-full bg-zinc-50  h-20  border z-10 ">
        <h1 className="bebas-neue-regular text-center sm:text-4xl text-2xl pt-6 flex-col text-zinc-900 ">
          RENOV À 9
        </h1>
        <div className=" absolute top-6 left-20">
          <ul className="flex ">
            <li className="pr-4">
              <a href="">
                <Image src={insta} width={25} height={20} alt={"instagram"} />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={tiktok} width={25} height={20} alt={"tiktok"} />
              </a>
            </li>
          </ul>
        </div>
        <a href="#contact">
          <button className=" absolute right-16 top-4 bebas-neue-regular sm:text-xl bg-zinc-900 hover:bg-zinc-700 text-white  py-2 px-4 border border-zinc-200 rounded shadow-md">
            Contactez Nous
          </button>
        </a>
      </nav>
    </>
  );
}
