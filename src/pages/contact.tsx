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
            Rejoinez nous
          </h1>
          <div className="flex lg:flex-row flex-col">
            <div className="bg-white border shadow rounded-xl h-48 p-8 mr-8 mt-2">
              <div className="  flex-col  w-full h-full">
                <h1 className="text-3xl font-bold">Faisons un devis</h1>
                <p className="text-zinc-950 text-sm pt-2">
                  Parlez nous de votre projet, nous serrons ravi de vous aider !
                </p>
                <a href="tel:0619513185">
                  <button className="   font-semibold  text-base bg-blue-600  text-white my-6 py-2 px-8 border border-blue-600 rounded-full shadow-lg hover:scale-95 transition">
                    06 15 57 74 18
                  </button>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 h-48 border shadow mt-2">
              <h1 className="text-3xl font-bold">Pour toute aide</h1>
              <p className="text-zinc-950 text-sm pt-2">
                N&apos;hésistez pas à nous poser n&apos;importe quel question !
              </p>
              <a href="mailto:g.bouillet@hotmail.com">
                <button className="   font-semibold text-base bg-zinc-950  text-white my-6 py-2 px-10 border  rounded-full shadow-lg hover:scale-95 transition">
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
