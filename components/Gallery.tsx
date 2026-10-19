"use client";

import { useState } from "react";
import { galleryImages } from "@/data/gallery";
import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section aria-label="Photo gallery" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
      <div className="mb-14 sm:mb-20">
        <SectionHeading eyebrow="Gallery" title="Postcards we never sent." />
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {galleryImages.map((image, i) => (
          <Reveal key={image.id} delay={(i % 3) * 0.06} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Open photo: ${image.alt}`}
              className="group block w-full overflow-hidden bg-coal"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={`${image.ratio} w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]`}
              />
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox
        images={galleryImages}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
