import pfp from "../assets/profile_pic.jpg";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section
        id="about"
        className=" bg-zinc-950 text-white lg:pl-52 lg:pr-32 px-4 pt-32  pb-44 bg-gradient-to-b from-zinc-900 to-black"
      >
        <h1 className="font-bold text-blue-500 pb-2 text-xs sm:text-left text-center">
          A Propos
        </h1>
        <h1 className=" bebas-neue-regular font-bold text-5xl  text-zinc-50 sm:text-left text-center">
          qui sommes nous?
        </h1>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-6/12 pt-5 mt-6 text-lg text-zinc-100 sm:text-left text-center ">
            Avec plus de{" "}
            <span className="font-bold">20 ans d&apos;expérience</span> dans le
            secteur du bâtiment et de la rénovation, notre équipe est composée
            d&apos;experts, qui apportent de la qualité et un souci du détail à
            chaque projet.
            <div className="pt-12 text-base">
              <h2 className="font-bold text-lg pb-2">Fiabilité</h2>
              Nous respectons nos délais et nous tenons nos promesses. Vous
              pouvez compter sur nous pour compléter votre projet à temps et
              selon le budget prévu.
            </div>
            <div className="pt-8 text-base">
              <h2 className="font-bold text-lg pb-2">Transparence</h2>
              Nous croyons en une communication ouverte et honnête avec nos
              clients à chaque étape du projet. Nous fournissons des estimations
              claires et des mises à jour régulières
            </div>
            <div className="pt-8 text-base">
              <h2 className="font-bold text-lg pb-2">Service Client</h2>
              Votre satisfaction est notre priorité absolue. Nous nous efforçons
              de dépasser vos attentes à chaque étape, en offrant un service
              client exceptionnel et un suivi attentif.
            </div>
          </div>
          <div className=" mx-auto   md:mr-16 lg:mt-16 mt-20">
            <Image
              src={pfp}
              width={450}
              height={300}
              alt="person"
              className="rounded-lg"
              quality={100}
            />
          </div>
        </div>
      </section>
    </>
  );
}
