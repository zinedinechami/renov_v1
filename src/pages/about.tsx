import pfp from "../assets/profile_pic.jpg";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section
        id="about"
        className=" bg-zinc-950 text-white  px-4 sm:pt-32 pt-16  sm:pb-40 pb-20 bg-gradient-to-b from-zinc-900 to-black"
      >
        <div className="sm:w-9/12 mx-auto">
          <h1 className="font-semibold text-blue-500 pb-2 text-xs sm:text-left text-center">
            À Propos
          </h1>
          <h1 className=" bebas-neue-regular font-bold sm:text-5xl text-4xl text-zinc-50 sm:text-left text-center">
            qui sommes nous ?
          </h1>
          <div className="flex lg:flex-row flex-col ">
            <div className="md:w-7/12 pt-10   text-zinc-100  ">
              <div className="w-11/12 ">
                Avec plus de 20 ans d&apos;expérience dans le secteur du
                bâtiment et de la rénovation, notre équipe est composée
                d&apos;experts qui apportent une qualité exceptionnelle et un
                souci du détail inégalé à chaque projet.
              </div>
              <div className="pt-10 text-base">
                <h2 className="font-bold text-lg pb-2 flex  ">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 text-blue-500 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Fiabilité
                </h2>
                <p className="text-zinc-300">
                  Comptez sur nous pour compléter votre projet à temps et selon
                  le budget prévu.
                </p>
              </div>
              <div className="pt-6 text-base">
                <h2 className="font-bold text-lg pb-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 text-blue-500 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Transparence
                </h2>
                <p className="text-zinc-300">
                  Des estimations claires et des mises à jour régulières.
                </p>
              </div>
              <div className="pt-6 text-base">
                <h2 className="font-bold text-lg pb-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 text-blue-500 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Service Client
                </h2>
                <p className="text-zinc-300">
                  {" "}
                  Un service client exceptionnel et un suivi attentif.
                </p>
              </div>
            </div>
            <div className=" mx-auto     md:ml-20 lg:mt-8 sm:mt-20 mt-10">
              <Image
                src={pfp}
                width={360}
                height={600}
                alt="person"
                className="rounded-full object-fill"
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
