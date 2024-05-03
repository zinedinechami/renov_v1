import Card from "@/components/card";

// todo: add stoc images and descriptions

export default function Services() {
  return (
    <>
      <section className="md:pt-32 pb-32 4 lg:px-48 px-4  " id="services">
        <h1 className="text-center bebas-neue-regular font-bold text-5xl pb-12  text-zinc-900">
          Nos Services proposées
        </h1>
        <div className="flex flex-col md:flex-row">
          <Card
            image=""
            title="Montage de Cuisine"
            text="La peinture c'est being"
          />
          <Card image="" title="Salle de bain" text="La peinture c'est being" />
          <Card image="" title="Peinture" text="La peinture c'est being" />
        </div>
        <div className="flex flex-col md:flex-row">
          <Card image="" title="Plomberie" text="La peinture c'est being" />
          <Card image="" title="Electicité" text="La peinture c'est being" />
          <Card image="" title="Maconerie" text="La peinture c'est being" />
        </div>
      </section>
    </>
  );
}
