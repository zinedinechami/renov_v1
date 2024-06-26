import contact_photo from "../assets/nathan-dumlao-kLmt1mpGJVg-unsplash.jpg";
import Image from "next/image";

// redesign this section

// white background card, with black card, blueb button for number, black one for email

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className=" flex sm:pt-24 pt-16 pb-20 lg:px-32 px-4 "
      >
        <div className="    mx-auto ">
          <h1 className="font-bold text-blue-600 pb-2 text-xs text-center">
            Contactez Nous
          </h1>
          <h1 className="text-zinc-950 bebas-neue-regular sm:text-5xl text-4xl text-center  font-bold  mb-2">
            Prenez en main votre renovation
          </h1>
          <p className=" text-center sm:text-sm text-xs">
            Parlez nous de votre projet et faisons un devis, nous serrons ravi
            de vous aider.
          </p>
          <a href="tel:0615577418">
            <button className=" mx-auto flex font-bold  text-base bg-blue-600  border border-blue-500 text-white mt-8 py-4  px-8  rounded-full  hover:bg-blue-500 transition-colors">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 mr-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              06 15 57 74 18{" "}
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
