"use client";

import { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";

interface LightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;

  const prev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const next = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, prev, next]);

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close viewer"
            className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-champagne hover:text-champagne"
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-champagne hover:text-champagne sm:left-8"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-champagne hover:text-champagne sm:right-8"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>

          <motion.figure
            key={images[index].id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-full max-w-full px-14 sm:px-24"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[index].src.replace("w=1200", "w=1800").replace("w=1600", "w=1800")}
              alt={images[index].alt}
              className="max-h-[78svh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <span className="text-xs text-cream/80 italic sm:text-sm">
                {images[index].alt}
              </span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-stone">
                {index + 1} / {images.length}
              </span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
