"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2000&q=80";

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} aria-label="Book your stay" className="relative flex h-[100svh] min-h-[560px] items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={CTA_IMAGE}
          alt="Empty beach at dusk on the Mediterranean coast"
          loading="lazy"
          className="h-[120%] w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 px-6 text-center">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.1] font-light text-cream sm:text-6xl lg:text-7xl">
            Your next escape
            <br />
            <span className="italic">starts here.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href="#booking"
            className="group mt-10 inline-flex items-center gap-4 bg-champagne px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink transition-colors duration-500 hover:bg-cream"
          >
            Check availability
            <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
