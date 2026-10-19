"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

const STORY_IMAGE =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80";

export default function Story() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} aria-label="Our story" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40">
      <div className="grid items-center gap-14 lg:grid-cols-12">
        <div className="relative order-2 lg:order-1 lg:col-span-6">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.img
                src={STORY_IMAGE}
                alt="A quiet cove below the cliffs near NOIRÉ"
                loading="lazy"
                style={{ y }}
                className="h-[116%] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-stone">
              The cove below the house — five minutes by foot, zero by phone.
            </p>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
          <Reveal>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-champagne">
              The story
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-4xl leading-[1.08] font-light text-cream sm:text-5xl lg:text-6xl">
              Designed for <span className="italic">disappearing.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-stone sm:text-base">
              <p>
                NOIRÉ began as a family stone house, empty for forty years,
                sitting above a cove the fishing boats had quietly agreed to
                skip. We restored it the slow way — local limestone, old
                olive wood, plaster mixed with the sand from the beach below.
              </p>
              <p>
                There are twelve rooms because a thirteenth would have meant
                cutting the oldest olive tree. The restaurant seats twenty
                because the cliff path narrows at dusk and dinner should
                never feel like an event. Everything here was decided by the
                question: does it make leaving harder?
              </p>
              <p className="font-display text-xl text-cream/90 italic">
                We think it does.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
