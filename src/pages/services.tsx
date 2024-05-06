import Card from "@/components/card";
import bain from "../assets/bain.jpg";
import cuisine from "../assets/cuisine.jpg";
import peinture from "../assets/peinture.jpg";
import plomberie from "../assets/plomberie.jpg";
import electricite from "../assets/electricite.jpg";

// todo: create bento with images

export default function Services() {
  return (
    <>
      <section id="services" className="pt-24 pb-44 4 lg:px-48 px-4  ">
        <h1 className="font-bold text-blue-600 pb-2 text-center text-xs">
          Services
        </h1>
        <h1 className="text-center bebas-neue-regular font-bold text-5xl pb-12  text-zinc-950">
          La prestation quil vous faut
        </h1>
        {/* <div className="flex flex-col md:flex-row">
          <Card image={cuisine} title="Montage de Cuisine" />
          <Card image={bain} title="Salle de bain" />
          <Card image={peinture} title="Peinture" />
        </div>
        <div className="flex flex-col md:flex-row">
          <Card image="" title="Plomberie" />
          <Card image="" title="Electicité" />
          <Card image="" title="Maconerie" />
        </div> */}
      </section>
    </>
  );
}
