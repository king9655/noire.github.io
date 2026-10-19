"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { leadQuote, reviews } from "@/data/reviews";
import Reveal from "./Reveal";
import { cn } from "@/lib/cn";

const AUTOPLAY_MS = 7000;

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [paused, go]);

  return (
    <section
      aria-label="Guest reviews"
      className="border-y border-cream/10 bg-coal"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-5xl px-5 py-28 text-center sm:px-8 sm:py-40">
        <Reveal>
          <div className="mb-8 flex justify-center gap-1.5" aria-label="Five star rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-champagne text-champagne" aria-hidden="true" />
            ))}
          </div>
          <blockquote>
            <p className="font-display text-3xl leading-[1.2] font-light text-cream sm:text-5xl lg:text-6xl">
              “{leadQuote.quote}”
            </p>
          </blockquote>
          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-stone">
            {leadQuote.author}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="mt-20 border-t border-cream/10 pt-12 outline-none"
            role="region"
            aria-roledescription="carousel"
            aria-label="Guest testimonials"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") go(-1);
              if (e.key === "ArrowRight") go(1);
            }}
          >
            <div className="relative min-h-[170px] sm:min-h-[140px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={reviews[index].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  aria-live="polite"
                >
                  <p className="mx-auto max-w-2xl text-base leading-relaxed text-cream/80 italic sm:text-lg">
                    “{reviews[index].quote}”
                  </p>
                  <footer className="mt-6">
                    <p className="text-sm text-cream">{reviews[index].author}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-stone">
                      {reviews[index].source}
                    </p>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous review"
                className="flex h-11 w-11 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-champagne hover:text-champagne"
              >
                <ChevronLeft size={16} strokeWidth={1.5} />
              </button>
              <div className="flex gap-2.5" aria-hidden="true">
                {reviews.map((r, i) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setIndex(i)}
                    tabIndex={-1}
                    aria-label={`Go to review ${i + 1}`}
                    className={cn(
                      "h-1 transition-all duration-500",
                      i === index ? "w-8 bg-champagne" : "w-3 bg-cream/20 hover:bg-cream/40"
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next review"
                className="flex h-11 w-11 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-champagne hover:text-champagne"
              >
                <ChevronRight size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
