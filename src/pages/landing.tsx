import { Carousel } from "@/components/carousel";
import Header from "@/components/header";

// add an arrow to blue btn

export default function LandingPage() {
  return (
    <>
      <section
        id="acceuil"
        className=" h-full w-full  [background:radial-gradient(125%_125%_at_50%_10%,#f4f4f5_50%,#1d4ed8_100%)] "
      >
        <div className="flex flex-col md:flex-row md:pt-26 pt-16 pb-28 lg:px-44 px-4">
          <div className="sm:w-3/5 mx-auto  pt-14">
            <h1 className="bebas-neue-regular text-7xl font-bold text-zinc-950 ">
              Rénovez votre bien <span className="text-blue-600">à neuf</span>{" "}
            </h1>
            <p className="text-zinc-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              repellendus perferendis!
            </p>
            <ul className="text-zinc-500 text-xs  pt-2">
              <li>Sur Paris, Ile de France</li>
              <li>Joiniable 7 jours sur 7 </li>
            </ul>
            <a href="#contact">
              <button className=" flex font-semibold  text-base bg-blue-600 hover:bg-blue-500 border border-blue-600 text-white mt-6 py-2  px-7  rounded-full shadow-lg hover:scale-95 transition">
                Je veux un devis gratuit{" "}
                <span>
                  <svg
                    className="w-4 h-6 ml-2 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                </span>
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
