import img_ex from "../assets/taylor-flowe-30omXayKjQo-unsplash.jpg";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section
        className=" bg-zinc-900 text-white lg:pl-52 pr-32 px-4 pt-32  pb-40 "
        id="about"
      >
        <h1 className=" bebas-neue-regular font-bold text-5xl  text-zinc-50">
          par gérard bouillet
        </h1>
        <div className="flex md:flex-row flex-col">
          <p className="md:w-6/12 pt-5 mt-10 text-xl  ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            rerum illo ducimus ex quos veniam explicabo doloribus beatae ut
            dolore iusto aperiam ipsa animi nesciunt commodi minus, eligendi
            alias quis. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Aliquid, nobis accusantium suscipit deserunt quam nulla
            delectus, deleniti similique maiores omnis beatae laborum animi odio
            a repellat quo adipisci. Iure, debitis.
          </p>
          <div className=" mx-auto rounded image-wrapper md:mr-28 mt-6">
            <Image src={img_ex} width={300} height={300} alt="person" />
          </div>
        </div>
      </section>
    </>
  );
}
