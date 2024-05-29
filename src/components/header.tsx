import tiktok from "../assets/tiktok.png";
import insta from "../assets/instagram.png";
import logo from "../assets/renov_logo.png";
import Image from "next/image";

// todo: add canva logo

export default function Header() {
  return (
    <>
      <nav className="sticky z-50 top-4  w-10/12 mx-auto bg-zinc-50  h-20 shadow   rounded-full  border border-zinc-100   ">
        <div className="flex">
          {/* <Image src={logo} width={90} height={100} quality={100} alt="logo" /> */}
          <a href="#acceuil">
            <h1 className="bebas-neue-regular  sm:text-3xl text-3xl sm:pt-6 pt-6 sm:pl-12 pl-6 flex-col text-zinc-950 ">
              RÉNOV À 9
            </h1>
          </a>

          <ul className="text lg:flex mr-auto  ml-64 font-medium text-zinc-950 hidden pt-7">
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
              <li className="pr-12 ">Temoignages</li>
            </a>
          </ul>
        </div>

        <div className=" absolute  top-4 right-3">
          <ul className="flex ">
            {/* <li className="pt-2 pr-4 md:flex hidden">
              <a className="hover:opacity-80 transition-opacity" href="">
                <Image src={insta} width={25} height={20} alt={"instagram"} />
              </a>
            </li>
            <li className="pt-2 pr-6 md:flex hidden">
              <a className="hover:opacity-80 transition-opacity" href="">
                <Image src={tiktok} width={25} height={20} alt={"tiktok"} />
              </a>
            </li> */}
            <a href="#contact">
              <button className="  flex font-semibold text-sm bg-zinc-950  hover:scale-95 transition  text-white  py-3 px-6 mr-2   rounded-full shadow-md ">
                Contactez Nous
              </button>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}
