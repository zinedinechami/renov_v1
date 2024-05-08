import tiktok from "../assets/tiktok.png";
import insta from "../assets/instagram.png";
import logo from "../assets/renov_logo.png";
import Image from "next/image";

// todo: add canva logo

export default function Header() {
  return (
    <>
      <nav className="sticky z-50 top-4  w-11/12 mx-auto bg-zinc-50  h-20 shadow   rounded-md  border border-zinc-100   ">
        <div className="flex">
          {/* <Image src={logo} width={90} height={100} quality={100} alt="logo" /> */}
          <a href="#acceuil">
            <h1 className="bebas-neue-regular  sm:text-4xl text-2xl pt-5 pl-12 flex-col text-zinc-950 ">
              RÉNOV À 9
            </h1>
          </a>

          <ul className="text lg:flex mr-auto  ml-72  hidden pt-7">
            <a
              className=" hover:text-zinc-600 transition-color  hover:-translate-y-1 transition "
              href="#about"
            >
              <li className="pr-10   ">À Propos</li>
            </a>
            <a
              className="hover:text-zinc-600 transition-color hover:-translate-y-1 transition"
              href="#services"
            >
              <li className="pr-10 ">Services</li>
            </a>
            <a
              className="hover:text-zinc-600 transition-color hover:-translate-y-1 transition"
              href="#avis"
            >
              <li className="pr-10 ">Temoignages</li>
            </a>
          </ul>
        </div>

        <div className=" absolute top-5 right-3">
          <ul className="flex">
            <li className="pt-1 pr-4">
              <a className="hover:opacity-60 transition-opacity" href="">
                <Image src={insta} width={25} height={20} alt={"instagram"} />
              </a>
            </li>
            <li className="pt-1 pr-6">
              <a className="hover:opacity-60 transition-opacity" href="">
                <Image src={tiktok} width={25} height={20} alt={"tiktok"} />
              </a>
            </li>
            <a href="#contact">
              <button className="  flex font-semibold text-sm bg-zinc-950 hover:bg-zinc-700 hover:scale-95 transition  text-white  py-2 px-4 mr-4   rounded-full shadow-md ">
                Contactez Nous
              </button>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}
