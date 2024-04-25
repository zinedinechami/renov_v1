import { Carousel } from "@/components/carousel";
import Button from "@/components/button";

// todo: do grid layout, change list text and font

export default function LandingPage() {
  return (
    <>
      <section className="flex flex-col md:flex-row md:pt-16 pb-20 lg:px-48 px-4">
        <div className="sm:w-3/5 mx-auto  pt-10">
          <h1 className="bebas-neue-regular text-7xl font-bold text-zinc-900">
            Renovation <span className="text-emerald-400">rapide</span> ,
          </h1>
          <h2 className="bebas-neue-regular text-5xl font-bold text-zinc-900">
            et efficace
          </h2>
          <ul className="text-zinc-900 font-sans">
            <li>- Sur Paris, Ile de France</li>
            <li>- Joiniable 7 jours sur 7 </li>
          </ul>
          <Button text={"Je veux faire un devis !"} />
        </div>
        <div className="w-full  sm:pl-28">
          <Carousel />
        </div>
      </section>
    </>
  );
}
