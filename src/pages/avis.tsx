import AvisCard from "@/components/avis_card";

export default function Avis() {
  return (
    <>
      <section
        id="avis"
        className="bg-zinc-950 text-white relative lg:pl-52 lg:pr-32 px-4 pt-32  pb-40 bg-gradient-to-b from-zinc-900 to-black"
      >
        <h1 className="font-bold text-blue-500 pb-2 text-xs sm:text-left text-center">
          Temoiniages
        </h1>
        <h1 className=" bebas-neue-regular font-bold text-5xl  text-zinc-50 pb-12 sm:text-left text-center">
          Nos clients sont ravis
        </h1>
        <div className=" p-6 flex flex-col md:flex-row">
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
        <div className="p-6 flex flex-col md:flex-row">
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
        <div className="p-6 flex flex-col md:flex-row ">
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
      </section>
    </>
  );
}
