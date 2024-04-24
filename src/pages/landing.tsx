import { Carousel } from "@/components/carousel";
import Button from "@/components/button";

export default function LandingPage() {
  return (
    <>
      <section>
        <div>
          <h1 className="bebas-neue-regular text-7xl font-bold">
            Renovation <span className="text-emerald-400">rapide</span> ,
          </h1>
          <h2 className="bebas-neue-regular text-5xl font-bold">et efficace</h2>
          <ul className="italic">
            <li>- Decouvrez nos prestations</li>
            <li>- Sur Paris, Ile de France</li>
            <li>- Joiniable 7/7 </li>
          </ul>
          <Button text={"Contactez nous !"} />
        </div>
        <Carousel />
      </section>
    </>
  );
}
