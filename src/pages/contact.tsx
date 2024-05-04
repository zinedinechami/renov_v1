import contact_photo from "../assets/nathan-dumlao-kLmt1mpGJVg-unsplash.jpg";
import Image from "next/image";

// redesign this section

// white background card, with black card, blueb button for number, black one for email

export default function Contact() {
  return (
    <>
      <section id="contact" className=" flex pt-24 pb-24 lg:px-32 px-4 ">
        <div className="mx-auto     ">
          <h1 className="text-zinc-900 bebas-neue-regular text-5xl text-center  font-bold  mb-12">
            Contactez Nous
          </h1>
          <div className=" border w-full  bg-zinc-50 rounded-md  h-72 flex flex-row justify-between shadow-2xl">
            <div className="md:flex hidden h-full  w-full rounded-md p-0  overflow-hidden"></div>
            <div className="mb-8 text-center flex-col pt-6 w-full h-full">
              <p className="text-zinc-900 text-base ">
                Parlez nous de votre projet, nous serrons ravi de vous aider !
              </p>
              <a href="tel:0619513185">
                <button className=" transition-colors bebas-neue-regular  tracking-wide text-2xl bg-blue-600 hover:bg-blue-700 text-white my-6 py-2 px-8 border border-blue-500 rounded-full shadow-lg">
                  06 15 57 74 18
                </button>
              </a>

              <p className="text-zinc-900 text-base ">
                N hésistez pas a poser nimporte quel question !
              </p>
              <a href="mailto:g.bouillet@hotmail.com">
                <button className=" transition-colors bebas-neue-regular tracking-wide text-2xl bg-zinc-900 hover:bg-zinc-700 text-white my-6 py-2 px-8 border  rounded-full shadow-lg">
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
