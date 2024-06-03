"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import img1 from "../assets/carrousel_1.jpg";
import img2 from "../assets/carrousel_2.jpg";
import img3 from "../assets/carrousel_3.jpg";

// look at carrousel improvements, counter maybe?

export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500 }),
  ]);

  return (
    <div
      className="embla bg-zinc-50 mt-12 sm:h-80 md:64 h-44 max-w-lg  rounded-lg  shadow-sm   cursor-pointer	"
      ref={emblaRef}
    >
      <div className="embla__container h-full  ">
        <div className="embla__slide w-full h-full">
          <Image
            src={img1}
            width={550}
            height={1500}
            alt={"img1"}
            quality={100}
          />
        </div>
        <div className="embla__slide w-full">
          <Image src={img2} width={550} height={500} alt={"img1"} />
        </div>
        <div className="embla__slide w-full">
          <Image src={img3} width={550} height={500} alt={"img1"} />
        </div>
      </div>
    </div>
  );
}
