"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Loader2, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const MENU: { course: string; items: { name: string; detail: string; price: string }[] }[] = [
  {
    course: "To begin",
    items: [
      { name: "Raw sea bass", detail: "citrus, cold-pressed olive oil, sea salt", price: "24" },
      { name: "Charred octopus", detail: "smoked paprika, fennel, lemon ash", price: "28" },
      { name: "Tomato & stone fruit", detail: "sheep's curd, basil flowers", price: "19" },
    ],
  },
  {
    course: "From the fire",
    items: [
      { name: "Whole catch of the day", detail: "grilled over vine cuttings, for two", price: "96" },
      { name: "Lamb shoulder", detail: "seven hours, black garlic, mountain herbs", price: "54" },
      { name: "Aged celeriac", detail: "ember oil, hazelnut, truffle", price: "34" },
    ],
  },
  {
    course: "To finish",
    items: [
      { name: "Burnt honey cream", detail: "fig leaf, toasted almond", price: "16" },
      { name: "Dark chocolate & sea salt", detail: "olive oil, cold espresso", price: "15" },
    ],
  },
];

const RESTAURANT_IMAGE =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=80";

export default function Restaurant() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [reserving, setReserving] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const reserve = () => {
    setReserving(true);
    window.setTimeout(() => {
      setReserving(false);
      setReserved(true);
    }, 1000);
  };

  return (
    <section id="restaurant" aria-label="NOIRÉ Kitchen" className="relative scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={RESTAURANT_IMAGE}
          alt="NOIRÉ Kitchen dining room at dusk"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-32 sm:px-8 sm:py-48">
        <SectionHeading eyebrow="NOIRÉ Kitchen" title="Local ingredients. Unexpected evenings." />

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
            Twenty seats on the cliff edge. The menu is written each
            afternoon, after the boats come in and the garden is walked. Wine
            is local, mostly natural, always interesting.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="border border-cream/40 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-cream backdrop-blur-sm transition-all duration-500 hover:border-champagne hover:text-champagne"
            >
              Menu
            </button>
            <button
              type="button"
              onClick={reserve}
              disabled={reserving || reserved}
              className={
                reserved
                  ? "flex cursor-default items-center gap-3 border border-champagne/60 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-champagne backdrop-blur-sm"
                  : "flex items-center gap-3 bg-champagne px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink transition-colors duration-500 hover:bg-cream disabled:opacity-70"
              }
            >
              {reserving && <Loader2 size={14} className="animate-spin" aria-hidden="true" />}
              {reserved && <Check size={14} aria-hidden="true" />}
              {reserved ? "Table requested" : "Reserve table"}
            </button>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            role="dialog"
            aria-modal="true"
            aria-label="NOIRÉ Kitchen menu"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[88svh] w-full max-w-2xl overflow-y-auto border border-cream/10 bg-coal p-7 sm:p-12"
            >
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close"
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-champagne hover:text-champagne"
              >
                <X size={18} strokeWidth={1.5} />
              </button>

              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-champagne">
                Tonight, and only tonight
              </p>
              <h3 className="mt-2 font-display text-4xl font-light text-cream">The menu</h3>

              <div className="mt-8 space-y-9">
                {MENU.map((section) => (
                  <div key={section.course}>
                    <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-stone">
                      {section.course}
                    </h4>
                    <ul className="space-y-4">
                      {section.items.map((item) => (
                        <li key={item.name} className="flex items-baseline justify-between gap-4">
                          <div>
                            <p className="font-display text-lg text-cream">{item.name}</p>
                            <p className="text-xs text-stone italic">{item.detail}</p>
                          </div>
                          <span className="shrink-0 text-sm text-champagne">€{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="mt-10 border-t border-cream/10 pt-5 text-[11px] leading-relaxed text-stone">
                Tasting menu — seven courses, €140, wine pairing €85. The
                kitchen closes when the cliff path goes dark.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
