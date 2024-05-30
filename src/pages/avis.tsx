import AvisCard from "@/components/avis_card";

// todo: add gradiant

export default function Avis() {
  return (
    <>
      <section
        id="avis"
        className="bg-zinc-950 text-white relative lg:pl-52 lg:pr-32 px-4 pt-32  pb-40 bg-gradient-to-b from-zinc-900 to-black"
      >
        <h1 className="font-bold text-blue-500 pb-2 text-xs  text-center">
          Témoiniages
        </h1>
        <h1 className=" bebas-neue-regular font-bold text-5xl  text-zinc-50 pb-4  text-center">
          Ce que nos clients disent de nous
        </h1>
        <p className="pb-10 text-zinc-300 text-center">
          Des clients ravis témoignent de nos transformations exceptionnelles.
        </p>
        <div className=" pb-2 flex flex-col md:flex-row">
          <AvisCard
            title="Exemplaire et Impeccable"
            text="Peinture du salon et de la cuisine, pose de 5 radiateurs électriques nouvelles génération à inertie: le travail de rénovation était impeccable et le respect des délais a été exemplaire."
            name="Nicole, Paris 18ème"
          />
          <AvisCard
            title="Un Travail de Précision"
            text="Création d'une cuisine équipée avec démolition, peinture, plomberie, électricité: le avant/après est très impressionnant, l'équipe de Rénov a fait un travail de précision, la qualité est au rendez-vous! "
            name="Jacques, Saint Maur"
          />
          <AvisCard
            title="Totalement Ravis"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et suscipit assumenda, temporibus non eligendi repellat recusandae aut?"
            name="Nassera"
          />
        </div>

        <div className=" flex flex-col md:flex-row">
          <AvisCard
            title="Totalement Ravis"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et suscipit assumenda, temporibus non eligendi repellat recusandae aut?"
            name="Nassera"
          />
          <AvisCard
            title="Totalement Ravis"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et suscipit assumenda, temporibus non eligendi repellat recusandae aut?"
            name="Nassera"
          />
          <AvisCard
            title="Totalement Ravis"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et suscipit assumenda, temporibus non eligendi repellat recusandae aut?"
            name="Nassera"
          />
        </div>
        <div className="w-10/12  h-44 bg-gradient-to-t from-black  absolute bottom-40"></div>
      </section>
    </>
  );
}
