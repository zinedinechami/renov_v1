import contact_photo from "../assets/nathan-dumlao-kLmt1mpGJVg-unsplash.jpg";
import Image from "next/image";

// redesign this section

// white background card, with black card, blueb button for number, black one for email

export default function Contact() {
  return (
    <>
      <section id="contact" className=" flex pt-24 pb-32 lg:px-32 px-4 ">
        <div className="    mx-auto ">
          <h1 className="font-bold text-blue-600 pb-2 text-xs text-center">
            Contactez Nous
          </h1>
          <h1 className="text-zinc-950 bebas-neue-regular text-5xl text-center  font-bold  mb-14">
            Contactez Nous
          </h1>
          <div className="flex px-8">
            <div className="bg-white border shadow rounded-lg p-8 mr-8">
              <div className="  flex-col  w-full h-full">
                <h1 className="text-3xl font-bold">Faisons un devis</h1>
                <p className="text-zinc-700 text-base pt-4">
                  Parlez nous de votre projet, nous serrons ravi de vous aider !
                </p>
                <a href="tel:0619513185">
                  <button className=" transition-colors  font-bold  text-base bg-blue-600 hover:bg-blue-700 text-white my-6 py-2 px-8 border border-blue-700 rounded-full shadow-lg">
                    06 15 57 74 18
                  </button>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 border shadow">
              <h1 className="text-3xl font-bold">Pour toute aide</h1>
              <p className="text-zinc-700 text-base pt-4">
                N hésistez pas a poser nimporte quel question !
              </p>
              <a href="mailto:g.bouillet@hotmail.com">
                <button className=" transition-colors   text-base bg-zinc-950 hover:bg-zinc-800 text-white my-6 py-2 px-10 border  rounded-full shadow-lg">
                  g.bouillet@hotmail.com
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
