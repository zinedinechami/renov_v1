import tiktok from "../assets/tiktok.png";
import insta from "../assets/instagram.png";
import logo from "../assets/renov_logo.png";
import Image from "next/image";

// todo: add canva logo

export default function Header() {
  return (
    <>
      <nav className="sticky z-50 top-5  w-10/12 mx-auto bg-zinc-50  sm:h-20 h-16 shadow-sm   rounded-full  border border-zinc-200   ">
        <div className="flex">
          {/* <Image src={logo} width={90} height={100} quality={100} alt="logo" /> */}
          <a href="#acceuil">
            <h1 className="bebas-neue-regular  text-3xl sm:pt-6 pt-4 sm:pl-10 pl-6 flex-col text-zinc-950 ">
              RÉNOV À 9
            </h1>
          </a>

          <ul className="text xl:flex mr-auto  ml-64 font-medium text-zinc-950 hidden pt-7">
            <a
              className=" hover:text-zinc-600 transition-color  hover:-translate-y-1 transition "
              href="#acceuil"
            >
              <li className="pr-12   ">Acceuil</li>
            </a>
            <a
              className=" hover:text-zinc-600 transition-color  hover:-translate-y-1 transition "
              href="#about"
            >
              <li className="pr-12   ">À Propos</li>
            </a>
            <a
              className="hover:text-zinc-600 transition-color hover:-translate-y-1 transition"
              href="#services"
            >
              <li className="pr-12 ">Services</li>
            </a>
            <a
              className="hover:text-zinc-600 transition-color hover:-translate-y-1 transition"
              href="#avis"
            >
              <li className="pr-12 ">Témoignages</li>
            </a>
          </ul>
        </div>

        <a href="#contact">
          <button className="absolute  sm:top-4 top-3 sm:right-3 right-1 flex font-medium sm:text-sm text-xs bg-zinc-950  hover:bg-zinc-700 transition-colors  text-white  py-3 px-5 mr-2   rounded-full  ">
            Contactez Nous
          </button>
        </a>
      </nav>
    </>
  );
}
