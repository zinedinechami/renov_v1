import { Carousel } from "@/components/carousel";
import Button from "@/components/button";

// todo: do grid layout, change list text and font

export default function LandingPage() {
  return (
    <>
      <section className=" h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_50%,#14b8a6_100%)] flex flex-col md:flex-row md:pt-16 pb-24 lg:px-48 px-4">
        <div className="sm:w-3/5 mx-auto  pt-10">
          <h1 className="bebas-neue-regular text-7xl font-bold text-zinc-900">
            Rénovez votre bien <span className="text-emerald-400">à neuf</span>{" "}
          </h1>

          <ul className="text-zinc-900 ">
            <li>- Sur Paris, Ile de France</li>
            <li>- Joiniable 7 jours sur 7 </li>
            <li>- Joiniable 7 jours sur 7 </li>
          </ul>
          <Button text={"Je veux un devis gratuit"} />
        </div>
        <div className="relative w-full  sm:pl-28">
          <Carousel />
        </div>
      </section>
    </>
  );
}
