import Card from "@/components/card";

export default function Services() {
  return (
    <>
      <section className="  md:pt-16 pb-20 lg:px-48 px-4">
        <h1 className="bebas-neue-regular text-7xl  text-zinc-900">
          Services proposées
        </h1>
        <div className="flex flex-col md:flex-row">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}
