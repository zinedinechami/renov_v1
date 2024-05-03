import contact_photo from "../assets/nathan-dumlao-kLmt1mpGJVg-unsplash.jpg";
import Image from "next/image";

// redesign this section

export default function Contact() {
  return (
    <>
      <section id="contact" className=" flex pt-24 pb-24 lg:px-48 px-4 ">
        <div className="mx-auto  h-96   lg:flex">
          <div className=" border   bg-zinc-900 rounded-xl   flex flex-row justify-between shadow-2xl">
            <div className="md:flex hidden h-full  w-full rounded-xl p-0  overflow-hidden">
              <Image src={contact_photo} width={300} alt="image" />
            </div>
            <div className="mb-8 text-right flex-col pt-8 pr-8 w-full h-full">
              <div className="text-zinc-50 bebas-neue-regular text-5xl   font-bold  mb-2">
                Contactez Nous
              </div>
              <p className="text-zinc-50 text-base ">
                Parlez nous de votre projet, nous serrons ravi de vous aider !
              </p>
              <a href="tel:0619513185">
                <button className=" transition-colors bebas-neue-regular  tracking-wider text-2xl bg-blue-600 hover:bg-blue-700 text-white my-6 py-2 px-8 border border-blue-500 rounded-lg shadow-lg">
                  06 15 57 74 18
                </button>
              </a>

              <p className="text-zinc-50 text-base ">
                N hésistez pas a poser nimporte quel question !
              </p>
              <a href="mailto:g.bouillet@hotmail.com">
                <button className=" transition-colors bebas-neue-regular tracking-wider text-2xl bg-blue-600 hover:bg-blue-700 text-white my-6 py-2 px-8 border border-blue-500 rounded-lg shadow-lg">
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
