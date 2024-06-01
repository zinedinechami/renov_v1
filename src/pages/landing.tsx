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
        <div className="flex flex-col  xl:flex-row  sm:mt-20 mt-8 pb-32 mx-auto px-4 xl:w-9/12">
          <div className="sm:w-3/5 mx-auto  pt-10">
            <h1 className="bebas-neue-regular text-center xl:text-left xl:text-7xl text-6xl font-semibold text-zinc-950 ">
              Rénovez votre bien <span className="text-blue-600">à neuf</span>{" "}
            </h1>
            <div className="xl:text-left text-center ">
              <p className="text-zinc-900 text-sm xl:w-10/12">
                Transformez votre maison en un espace de rêve avec nos services
                de rénovation.
              </p>
              <ul className="text-zinc-900 text-xs text-center pt-2 md:block hidden">
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="pt-1 pl-1 font-medium">
                    Sur Paris, Ile de France
                  </span>
                </li>
                <li className="flex pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4"
                  >
                    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="pt-1 pl-1 font-medium">
                    Joiniable 7 jours sur 7{" "}
                  </span>
                </li>
              </ul>
              <a href="#contact">
                <button className="xl:mx-0 mx-auto flex font-medium  text-base bg-blue-600  border border-blue-500  text-white mt-6 py-3  px-8  rounded-full  hover:bg-blue-500 transition-colors">
                  Je veux un devis gratuit{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 ml-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className=" w-full  xl:pl-40 ">
            <Carousel />
          </div>
        </div>
      </section>
    </>
  );
}
