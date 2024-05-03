"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import image_1 from "../assets/carousel_img2.jpg";
import img1 from "../assets/fake_img1 (1).jpg";
import img2 from "../assets/fake_img1 (2).jpg";
import img3 from "../assets/fake_img1 (3).jpg";

// look at carrousel improvements, counter maybe?

export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500 }),
  ]);

  return (
    <div
      className="embla bg-zinc-50 mt-12 sm:h-80  max-w-lg  rounded-md   shadow-lg cursor-pointer	"
      ref={emblaRef}
    >
      <div className="embla__container h-full  ">
        <div className="embla__slide w-full h-full">
          <Image
            src={image_1}
            width={1000}
            height={1000}
            alt={"img1"}
            quality={100}
          />
        </div>
        <div className="embla__slide w-full">
          <Image src={img2} width={510} height={500} alt={"img1"} />
        </div>
        <div className="embla__slide w-full">
          <Image src={img3} width={510} height={500} alt={"img1"} />
        </div>
      </div>
    </div>
  );
}
