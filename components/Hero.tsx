"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=80";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] min-h-[600px] overflow-hidden"
      aria-label="Welcome to NOIRÉ"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <motion.img
          src={HERO_IMAGE}
          alt="NOIRÉ resort pool glowing at sunset above the Mediterranean"
          className="h-[115%] w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink to-transparent" />

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-[11px] font-medium uppercase text-cream/70 sm:text-xs"
        >
          Boutique retreat — Mediterranean coast
        </motion.p>

        <h1 className="sr-only">NOIRÉ — boutique hotel on the Mediterranean coast</h1>
        <motion.p
          aria-hidden="true"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[22vw] leading-none font-light tracking-[0.12em] text-cream sm:text-8xl md:text-9xl lg:text-[11rem]"
        >
          NOIRÉ
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-display text-2xl font-light text-cream/90 italic sm:text-3xl md:text-4xl"
        >
          Stay somewhere unforgettable.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-5 max-w-md text-sm leading-relaxed text-cream/60 sm:text-base"
        >
          An intimate retreat between sea, silence and design.
        </motion.p>

        <motion.a
          href="#rooms"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 border border-cream/40 px-9 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-cream backdrop-blur-sm transition-all duration-500 hover:border-champagne hover:bg-champagne hover:text-ink"
        >
          Explore rooms
        </motion.a>
      </motion.div>

      <motion.a
        href="#booking"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-cream/60 transition-colors hover:text-cream"
      >
        Scroll to explore
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}
