import Card from "@/components/service_card";
import bain from "../assets/bain.jpg";
import cuisine from "../assets/cuisine.jpg";
import peinture from "../assets/peinture.jpg";
import plomberie from "../assets/plomberie.jpg";
import electricite from "../assets/electricite.jpg";

// todo: create bento with images

export default function Services() {
  return (
    <>
      <section id="services" className="pt-24 pb-44  w-10/12 mx-auto  ">
        <h1 className="font-bold text-blue-600 pb-2 text-center text-xs">
          Services
        </h1>
        <h1 className="text-center bebas-neue-regular font-bold text-5xl pb-16  text-zinc-950">
          La prestation quil vous faut
        </h1>

        <div className="flex space-between">
          <Card image={cuisine.src} title="Montage de Cuisine" />
          <Card image={bain.src} title="Salle de bain" />
          <Card image={peinture.src} title="Peinture" />
        </div>
        <div className="flex flex-col md:flex-row">
          <Card image={plomberie.src} title="Plomberie" />
          <Card image={electricite.src} title="Electicité" />
          <Card image="" title="Maconerie" />
        </div>
      </section>
    </>
  );
}
