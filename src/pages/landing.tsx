import { Carousel } from "@/components/carousel";

export default function LandingPage() {
  return (
    <>
      <section
        id="home"
        className=" h-full w-full  [background:radial-gradient(125%_125%_at_50%_10%,#fafafa_45%,#14b8a6_100%)] flex flex-col md:flex-row md:pt-6 pb-24 lg:px-44 px-4"
      >
        <div className="sm:w-3/5 mx-auto  pt-12">
          <h1 className="bebas-neue-regular text-7xl font-bold text-zinc-900">
            Rénovez votre bien <span className="text-emerald-400">à neuf</span>{" "}
          </h1>
          <p className="text-zinc-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            repellendus perferendis!
          </p>
          <ul className="text-zinc-800 font-bold pt-2">
            <li>Sur Paris, Ile de France</li>
            <li>Joiniable 7 jours sur 7 </li>
          </ul>
          <a href="#contact">
            <button className="transition-colors bebas-neue-regular text-bol tracking-wider text-2xl bg-emerald-400 hover:bg-emerald-500 text-white my-6 py-2  px-8 border border-emerald-500 rounded-xl shadow-lg">
              Je veux un devis gratuit
            </button>
          </a>
        </div>
        <div className=" w-full  sm:pl-28">
          <Carousel />
        </div>
      </section>
    </>
  );
}
