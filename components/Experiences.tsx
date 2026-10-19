"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/data/experiences";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experiences() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["2%", "-62%"]);

  return (
    <section id="experiences" ref={sectionRef} aria-label="Experiences" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pt-28 sm:px-8 sm:pt-36">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 sm:mb-20">
          <SectionHeading eyebrow="Experiences" title="More than a stay." />
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-stone">
              A short list of things worth leaving the terrace for. All
              arranged quietly, never scheduled loudly.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Desktop: horizontal scroll-driven strip */}
      <div className="relative hidden h-[260vh] md:block" aria-hidden="true">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div ref={trackRef} style={{ x }} className="flex gap-10 pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            {experiences.map((exp) => (
              <article
                key={exp.id}
                className="group relative h-[62vh] w-[34rem] shrink-0 overflow-hidden bg-coal lg:w-[38rem]"
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <span className="absolute top-6 right-7 font-display text-6xl font-light text-cream/25">
                  {exp.index}
                </span>
                <div className="absolute right-7 bottom-7 left-7">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-champagne">
                    {exp.duration}
                  </p>
                  <h3 className="font-display text-3xl font-light text-cream lg:text-4xl">
                    {exp.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/70">
                    {exp.description}
                  </p>
                </div>
              </article>
            ))}
            <div className="flex w-[24rem] shrink-0 items-center justify-center">
              <a
                href="#booking"
                className="group flex items-center gap-4 border border-cream/20 px-8 py-5 text-[11px] uppercase tracking-[0.3em] text-cream transition-all duration-500 hover:border-champagne hover:text-champagne"
              >
                Plan your days
                <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile / tablet: vertical stack */}
      <div className="space-y-12 px-5 pb-28 sm:px-8 md:hidden">
        {experiences.map((exp, i) => (
          <Reveal key={exp.id} delay={i * 0.05}>
            <article className="group relative aspect-[4/5] overflow-hidden bg-coal">
              <img
                src={exp.image}
                alt={exp.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <span className="absolute top-5 right-6 font-display text-5xl font-light text-cream/25">
                {exp.index}
              </span>
              <div className="absolute right-5 bottom-6 left-5">
                <p className="mb-1.5 text-[10px] uppercase tracking-[0.3em] text-champagne">
                  {exp.duration}
                </p>
                <h3 className="font-display text-3xl font-light text-cream">{exp.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{exp.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
