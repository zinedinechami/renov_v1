import Card from "@/components/card";

export default function Services() {
  return (
    <>
      <section className="md:pt-32 pb-32 4 lg:px-48 px-4 bg-zinc-50 ">
        <h1 className="text-center bebas-neue-regular font-bold text-5xl pb-6  text-zinc-900">
          Nos Services proposées
        </h1>
        <div className="flex flex-col md:flex-row">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex flex-col md:flex-row">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}
