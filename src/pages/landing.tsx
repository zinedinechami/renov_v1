import { Carousel } from "@/components/carousel";
import Header from "@/components/header";

export default function LandingPage() {
  return (
    <>
      <section
        id="acceuil"
        className=" h-full w-full  [background:radial-gradient(125%_125%_at_50%_10%,#f4f4f5_50%,#1d4ed8_100%)] "
      >
        <div className="flex flex-col md:flex-row md:pt-26 pt-20 pb-28 lg:px-44 px-4">
          <div className="sm:w-3/5 mx-auto  pt-12">
            <h1 className="bebas-neue-regular text-7xl font-bold text-zinc-900 ">
              Rénovez votre bien <span className="text-blue-600">à neuf</span>{" "}
            </h1>
            <p className="text-zinc-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              repellendus perferendis!
            </p>
            <ul className="text-zinc-800 text-xs font-bold pt-2">
              <li>Sur Paris, Ile de France</li>
              <li>Joiniable 7 jours sur 7 </li>
            </ul>
            <a href="#contact">
              <button className="transition-colors  font-bold  text-base bg-blue-600 hover:bg-blue-500 border border-blue-600 text-white mt-6 py-2  px-9  rounded-lg shadow-lg">
                Je veux un devis gratuit
              </button>
            </a>
          </div>
          <div className=" w-full  sm:pl-28">
            <Carousel />
          </div>
        </div>
      </section>
    </>
  );
}
