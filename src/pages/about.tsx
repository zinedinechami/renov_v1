import img_ex from "../assets/taylor-flowe-30omXayKjQo-unsplash.jpg";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className=" bg-zinc-900 text-white lg:px-48 px-4 pt-20 pb-20 ">
        <h1 className="bebas-neue-regular text-7xl  text-zinc-50">
          par = inserer nom
        </h1>
        <div className="flex md:flex-row flex-col">
          <div className=" mx-auto rounded-full image-wrapper md:mr-28 mt-12">
            <Image src={img_ex} width={300} height={300} alt="person" />
          </div>
          <p className="md:w-6/12 pt-5 mt-14 text-xl font-sans mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            rerum illo ducimus ex quos veniam explicabo doloribus beatae ut
            dolore iusto aperiam ipsa animi nesciunt commodi minus, eligendi
            alias quis. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Aliquid, nobis accusantium suscipit deserunt quam nulla
            delectus, deleniti similique maiores omnis beatae laborum animi odio
            a repellat quo adipisci. Iure, debitis.
          </p>
        </div>
      </section>
    </>
  );
}
