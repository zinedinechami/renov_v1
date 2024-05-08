import AvisCard from "@/components/avis_card";

export default function Avis() {
  return (
    <>
      <section
        id="avis"
        className="bg-zinc-950 text-white lg:pl-52 pr-32 px-4 pt-32  pb-40 bg-gradient-to-b from-zinc-900 to-black"
      >
        <h1 className="font-bold text-blue-500 pb-2 text-xs ">Temoiniages</h1>
        <h1 className=" bebas-neue-regular font-bold text-5xl  text-zinc-50 pb-12 ">
          Nos clients sont ravis
        </h1>
        <div className="flex p-6">
          <AvisCard />
          <AvisCard />
          <AvisCard />
        </div>
        <div className="flex px-6 pb-6">
          <AvisCard />
          <AvisCard />
          <AvisCard />
        </div>
        <div className="flex px-6 ">
          <AvisCard />
          <AvisCard />
          <AvisCard />
        </div>
      </section>
    </>
  );
}
