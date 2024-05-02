import tiktok from "../assets/tiktok.png";
import insta from "../assets/instagram.png";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <nav className="sticky  z-50 top-8  w-10/12 mx-auto bg-white  h-20 shadow  transition-shadow rounded-xl  border  ">
        <div className="flex">
          <h1 className="bebas-neue-regular  sm:text-4xl text-2xl pt-5 pl-12 flex-col text-zinc-900 ">
            RÉN
            <span className="decoration-zinc-900 underline underline-offset-8 decoration-1">
              OV
            </span>{" "}
            À 9
          </h1>

          <ul className="lg:flex mr-auto  ml-60 pt-7 hidden">
            <a className="hover:text-zinc-600 transition-color" href="">
              <li className="pr-8 hover:text-zinc-700 transition-color">
                Acceuil
              </li>
            </a>
            <a className="hover:text-zinc-600 transition-color" href="">
              <li className="pr-8 hover:text-zinc-700 transition-color">
                À Propos
              </li>
            </a>
            <a className="hover:text-zinc-600 transition-color" href="">
              <li className="pr-8 ">Nos Services</li>
            </a>
            <a className="hover:text-zinc-600 transition-color" href="">
              <li className="pr-8 ">Avis</li>
            </a>
          </ul>
        </div>

        <div className=" absolute top-4 right-4">
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
