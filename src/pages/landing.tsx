import { Carousel } from "@/components/carousel";
import Header from "@/components/header";

// add an arrow to blue btn

export default function LandingPage() {
  return (
    <>
      <section
        id="acceuil"
        className=" h-full w-full  [background:radial-gradient(125%_125%_at_50%_10%,#f4f4f5_45%,#1d4ed8_100%)] "
      >
        <div className="flex flex-col  md:flex-row  sm:mt-20 mt-8 pb-28 mx-auto px-4 md:w-9/12">
          <div className="sm:w-3/5 mx-auto  pt-12">
            <h1 className="bebas-neue-regular text-center sm:text-left text-7xl font-semibold text-zinc-950 ">
              Rénovez votre bien <span className="text-blue-600">à neuf</span>{" "}
            </h1>
            <div className="sm:text-left text-center">
              <p className="text-zinc-900 text-sm ">
                Transformez votre maison en un espace de rêve avec nos services
                de rénovation professionnels.
              </p>
              <ul className="text-zinc-900 text-xs text-center pt-2 md:block hidden">
                <li className="flex">
                  <svg
                    className="w-6 h-6  "
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
                      d="M5 11.917 9.724 16.5 19 7.5"
                    />
                  </svg>
                  <span className="pt-1 pl-1 font-medium">
                    Sur Paris, Ile de France
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="w-6 h-6  "
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
                      d="M5 11.917 9.724 16.5 19 7.5"
                    />
                  </svg>
                  <span className="pt-1 pl-1 font-medium">
                    Joiniable 7 jours sur 7{" "}
                  </span>
                </li>
              </ul>
              <a href="#contact">
                <button className="lg:mx-0 mx-auto flex font-semibold  text-base bg-blue-600  border border-blue-700 text-white mt-6 py-3  px-8  rounded-full shadow-lg hover:scale-95 transition">
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
          </div>
          <div className=" w-full  sm:pl-40">
            <Carousel />
          </div>
        </div>
      </section>
    </>
  );
}
