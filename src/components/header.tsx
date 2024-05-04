import tiktok from "../assets/tiktok.png";
import insta from "../assets/instagram.png";
import logo from "../assets/renov_logo.png";
import Image from "next/image";

// todo: add canva logo

export default function Header() {
  return (
    <>
      <nav className="sticky z-50 top-5  w-11/12 mx-auto bg-zinc-50  h-20 shadow   rounded-md  border border-zinc-100  ">
        <div className="flex">
          {/* <Image src={logo} width={90} height={100} quality={100} alt="logo" /> */}
          <h1 className="bebas-neue-regular  sm:text-4xl text-2xl pt-5 pl-12 flex-col text-zinc-900 ">
            RÉNOV À 9
          </h1>

          <ul className="text-base lg:flex mr-auto  ml-72 pt-7 hidden ">
            <a className="hover:text-zinc-600 transition-color" href="#acceuil">
              <li className="pr-8 hover:text-zinc-700 transition-color">
                Acceuil
              </li>
            </a>
            <a className="hover:text-zinc-600 transition-color" href="#avis">
              <li className="pr-10 hover:text-zinc-700 transition-color">
                À Propos
              </li>
            </a>
            <a
              className="hover:text-zinc-600 transition-color"
              href="#services"
            >
              <li className="pr-10 ">Nos Services</li>
            </a>
            <a className="hover:text-zinc-600 transition-color" href="">
              <li className="pr-10 ">Avis</li>
            </a>
          </ul>
        </div>

        <div className=" absolute top-5 right-3">
          <ul className="flex">
            <li className="pt-2 pr-4">
              <a className="hover:opacity-60 transition-opacity" href="">
                <Image src={insta} width={20} height={20} alt={"instagram"} />
              </a>
            </li>
            <li className="pt-2 pr-6">
              <a className="hover:opacity-60 transition-opacity" href="">
                <Image src={tiktok} width={20} height={20} alt={"tiktok"} />
              </a>
            </li>
            <a href="#contact">
              <button className="  flex  text-sm bg-zinc-900 hover:bg-zinc-700  text-white  py-2 px-4 mr-4   rounded-lg shadow-md transition-colors">
                Contactez Nous
              </button>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}
