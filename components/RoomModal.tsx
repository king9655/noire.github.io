"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Users, Maximize2, Check, Loader2 } from "lucide-react";
import type { Room } from "@/data/rooms";
import { formatPrice } from "@/data/booking";
import { cn } from "@/lib/cn";

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
}

export default function RoomModal({ room, onClose }: RoomModalProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [reserved, setReserved] = useState(false);
  const [reserving, setReserving] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (room) {
      setImageIndex(0);
      setReserved(false);
      setReserving(false);
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [room]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleReserve = () => {
    setReserving(true);
    window.setTimeout(() => {
      setReserving(false);
      setReserved(true);
    }, 1100);
  };

  return (
    <AnimatePresence>
      {room && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${room.name} details`}
        >
          <button
            type="button"
            aria-label="Close room details"
            onClick={onClose}
            className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92svh] w-full max-w-4xl overflow-y-auto border border-cream/10 bg-coal"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center border border-cream/20 bg-ink/60 text-cream backdrop-blur-sm transition-colors hover:border-champagne hover:text-champagne"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[540px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={room.gallery[imageIndex]}
                    src={room.gallery[imageIndex]}
                    alt={`${room.name} — photo ${imageIndex + 1}`}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {room.gallery.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setImageIndex(i)}
                      aria-label={`Show photo ${i + 1}`}
                      className={cn(
                        "h-14 w-20 overflow-hidden border transition-all duration-300",
                        i === imageIndex
                          ? "border-champagne opacity-100"
                          : "border-cream/20 opacity-50 hover:opacity-90"
                      )}
                    >
                      <img src={src} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col p-6 sm:p-10">
                <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-champagne">
                  NOIRÉ collection
                </p>
                <h3 className="mt-3 font-display text-4xl font-light text-cream">
                  {room.name}
                </h3>
                <p className="mt-1 text-sm text-stone italic">{room.tagline}</p>

                <p className="mt-6 text-sm leading-relaxed text-stone">
                  {room.description}
                </p>

                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {room.amenities.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-xs text-cream/80">
                      <Check size={13} className="mt-0.5 shrink-0 text-champagne" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-8 border-t border-cream/10 pt-6 text-xs uppercase tracking-[0.15em] text-stone">
                  <span className="flex items-center gap-2">
                    <Maximize2 size={14} aria-hidden="true" /> {room.size} m²
                  </span>
                  <span className="flex items-center gap-2">
                    <Users size={14} aria-hidden="true" /> Up to {room.guests} guests
                  </span>
                </div>

                <div className="mt-auto pt-8">
                  <div className="mb-5 flex items-baseline gap-2">
                    <span className="font-display text-3xl text-cream">
                      {formatPrice(room.pricePerNight)}
                    </span>
                    <span className="text-xs text-stone">per night</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleReserve}
                    disabled={reserving || reserved}
                    className={cn(
                      "flex w-full items-center justify-center gap-3 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] transition-all duration-500",
                      reserved
                        ? "cursor-default border border-champagne/50 text-champagne"
                        : "bg-champagne text-ink hover:bg-cream disabled:opacity-70"
                    )}
                  >
                    {reserving && <Loader2 size={15} className="animate-spin" aria-hidden="true" />}
                    {reserved ? "Request received — we will be in touch" : "Reserve this room"}
                  </button>
                  <p className="mt-3 text-center text-[10px] text-stone">
                    Demo reservation — no payment is processed.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
