import { Carousel } from "@/components/carousel";
import Button from "@/components/button";

// todo: do grid layout, change list text and font

export default function LandingPage() {
  return (
    <>
      <section className="flex flex-col md:flex-row md:pt-24">
        <div className="sm:w-6/12 mx-auto px-4 pt-8">
          <h1 className="bebas-neue-regular text-7xl font-bold">
            Renovation <span className="text-emerald-400">rapide</span> ,
          </h1>
          <h2 className="bebas-neue-regular text-5xl font-bold">et efficace</h2>
          <ul className="text-emerald-500">
            <li>- Decouvrez nos prestations</li>
            <li>- Sur Paris, Ile de France</li>
            <li>- Joiniable 7/7 </li>
          </ul>
          <Button text={"Je veux faire un devis !"} />
        </div>
        <div className="w-full px-4 sm:pl-20">
          <Carousel />
        </div>
      </section>
    </>
  );
}
