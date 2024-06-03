import Card from "@/components/service_card";
import bain from "../assets/bain.jpg";
import cuisine from "../assets/cuisine.jpg";
import peinture from "../assets/peinture.jpg";
import plomberie from "../assets/plomberie.jpg";
import electricite from "../assets/electricite.jpg";
import menuiserie from "../assets/menuiserie.jpg";

export default function Services() {
  return (
    <>
      <section
        id="services"
        className="sm:pt-32 pt-20 sm:pb-28 pb-16 xl:w-9/12 w-11/12 mx-auto   "
      >
        <div className="sm:ml-7">
          <h1 className="font-bold text-blue-600 pb-2  text-xs sm:text-left text-center">
            Services
          </h1>

          <h1 className=" bebas-neue-regular font-semibold sm:text-5xl text-4xl sm:text-left text-center pb-2  text-zinc-950">
            Les prestations dont vous avez besoin
          </h1>
          <p className="  pb-10 sm:text-sm text-xs text-zinc-900 sm:text-left text-center">
            Des travaux de la plus haute qualité, pour de résultats
            exceptionnels.
          </p>
        </div>
        <div className=" flex flex-col md:flex-row flex-wrap">
          <Card
            image={cuisine.src}
            title="Montage de Cuisine"
            description="Installation professionnelle et élégante de votre cuisine."
          />
          <Card
            image={bain.src}
            title="Salle de bain"
            description="Conception moderne et fonctionnelle de votre salle de bain."
          />
          <Card
            image={peinture.src}
            title="Peinture"
            description="Application experte de peinture pour des finitions impeccables."
          />
          <Card
            image={plomberie.src}
            title="Plomberie"
            description="Services de plomberie fiables pour une installation sans souci."
          />
          <Card
            image={electricite.src}
            title="Electicité"
            description="Solutions électriques sécurisées et efficaces pour votre maison."
          />
          <Card
            image={menuiserie.src}
            title="Maconerie"
            description="Travaux de maçonnerie robustes pour des constructions durables."
          />
        </div>
      </section>
    </>
  );
}
