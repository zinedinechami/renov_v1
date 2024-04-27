import { Carousel } from "@/components/carousel";

// todo: reduce passing for responsive versions, add hover anims to buttons

export default function LandingPage() {
  return (
    <>
      <section className=" h-full w-full  [background:radial-gradient(125%_125%_at_50%_10%,#fafafa_50%,#14b8a6_100%)] flex flex-col md:flex-row md:pt-16 pb-24 lg:px-48 px-4">
        <div className="sm:w-3/5 mx-auto  pt-14">
          <h1 className="bebas-neue-regular text-7xl font-bold text-zinc-900">
            Rénovez votre bien <span className="text-emerald-400">à neuf</span>{" "}
          </h1>

          <ul className="text-zinc-900 font-bold">
            <li>Sur Paris, Ile de France</li>
            <li>Joiniable 7 jours sur 7 </li>
          </ul>
          <a href="#contact">
            <button className="bebas-neue-regular tracking-wider text-2xl bg-emerald-400 hover:bg-emerald-500 text-white my-6 py-2 px-8 border border-emerald-500 rounded-lg shadow-lg">
              Obtenez un devis gratuit
            </button>
          </a>
        </div>
        <div className="relative w-full  sm:pl-28">
          <Carousel />
        </div>
      </section>
    </>
  );
}
