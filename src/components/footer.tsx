import tiktok from "../assets/tiktok.png";
import insta from "../assets/instagram.png";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="  border border-zinc-200 px-48 bg-zinc-50">
        <div className="flex mt-6 mb-4 relative">
          <div>
            <h1 className="bebas-neue-regular  sm:text-4xl text-3xl  flex-col text-zinc-950  ">
              RÉNOV À 9
            </h1>
            <p className="text-zinc-900 text-xs  ">
              Site codé par <span className="underline">Zinedine Chami</span>
            </p>
          </div>

          <ul className="flex absolute right-0 mt-2">
            <a href="mailto:g.bouillet@hotmail.com">
              <li>
                <p className="mr-4 underline"> g.bouillet@hotmail.com</p>
              </li>
            </a>
            <li className=" pr-4 md:flex flex-row hidden">
              <a className="hover:opacity-80 transition-opacity" href="">
                <Image src={insta} width={25} height={20} alt={"instagram"} />
              </a>
            </li>
            <li className=" pr-6 md:flex hidden">
              <a className="hover:opacity-80 transition-opacity" href="">
                <Image src={tiktok} width={25} height={20} alt={"tiktok"} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
