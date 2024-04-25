"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div
      className="embla bg-zinc-50 mt-12 h-80 max-w-lg border rounded-lg  shadow-lg"
      ref={emblaRef}
    >
      {" "}
      <div className="embla__container h-full ">
        {" "}
        <div className="embla__slide">Slide 1</div>{" "}
        <div className="embla__slide">Slide 2</div>{" "}
        <div className="embla__slide">Slide 3</div>{" "}
      </div>{" "}
    </div>
  );
}
