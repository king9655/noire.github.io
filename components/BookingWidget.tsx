"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Minus, Plus, X, ArrowRight, Loader2 } from "lucide-react";
import { DayPicker } from "react-day-picker";
import {
  addDays,
  differenceInCalendarDays,
  format,
  isBefore,
  isSameDay,
  startOfDay,
} from "date-fns";
import { getAvailability, formatPrice, type AvailabilityResult } from "@/data/booking";
import { cn } from "@/lib/cn";

function DateField({
  label,
  value,
  placeholder,
  open,
  onToggle,
}: {
  label: string;
  value: Date | undefined;
  placeholder: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-label={`${label}: ${value ? format(value, "d MMM yyyy") : placeholder}`}
      className="group flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors hover:bg-cream/[0.04] sm:px-6"
    >
      <span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-stone">
          {label}
        </span>
        <span
          className={cn(
            "mt-1 block text-sm",
            value ? "text-cream" : "text-cream/40"
          )}
        >
          {value ? format(value, "d MMM yyyy") : placeholder}
        </span>
      </span>
      <Calendar size={16} strokeWidth={1.5} className="shrink-0 text-stone transition-colors group-hover:text-champagne" />
    </button>
  );
}

export default function BookingWidget() {
  const today = startOfDay(new Date());
  const [checkIn, setCheckIn] = useState<Date | undefined>(addDays(today, 7));
  const [checkOut, setCheckOut] = useState<Date | undefined>(addDays(today, 10));
  const [guests, setGuests] = useState(2);
  const [openPicker, setOpenPicker] = useState<"in" | "out" | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AvailabilityResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpenPicker(null);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const nights =
    checkIn && checkOut ? Math.max(differenceInCalendarDays(checkOut, checkIn), 0) : 0;

  const handleCheckIn = (date: Date | undefined) => {
    setCheckIn(date);
    if (date && checkOut && !isBefore(checkOut, date) && !isSameDay(checkOut, date)) return;
    if (date) setCheckOut(addDays(date, 2));
  };

  const handleCheckOut = (date: Date | undefined) => {
    setCheckOut(date);
  };

  const handleSubmit = () => {
    setError(null);
    if (!checkIn || !checkOut) {
      setError("Please select both check-in and check-out dates.");
      return;
    }
    if (nights < 1) {
      setError("Check-out must be after check-in.");
      return;
    }
    setOpenPicker(null);
    setLoading(true);
    setResults(null);
    window.setTimeout(() => {
      setResults(getAvailability(checkIn, nights));
      setLoading(false);
    }, 900);
  };

  const datePicker = (which: "in" | "out") => (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "absolute top-full z-40 mt-2 w-[calc(100%-1.5rem)] max-w-[320px] border border-cream/10 bg-coal p-3 shadow-2xl shadow-black/60 sm:w-[320px]",
        which === "in" ? "left-3 sm:left-6" : "right-3 sm:right-auto sm:left-[calc(33%-10px)]"
      )}
    >
      <DayPicker
        mode="single"
        selected={which === "in" ? checkIn : checkOut}
        onSelect={which === "in" ? handleCheckIn : handleCheckOut}
        disabled={{ before: which === "out" && checkIn ? addDays(checkIn, 1) : today }}
        defaultMonth={which === "in" ? checkIn : checkOut}
        weekStartsOn={1}
        className="rdp-noire"
      />
    </motion.div>
  );

  return (
    <section id="booking" aria-label="Check availability" className="relative z-20 scroll-mt-24 px-4 sm:px-8">
      <div ref={rootRef} className="mx-auto -mt-16 max-w-5xl sm:-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="border border-cream/10 bg-coal/95 shadow-2xl shadow-black/50 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 divide-y divide-cream/10 sm:grid-cols-[1fr_1fr_1fr_auto] sm:divide-x sm:divide-y-0">
            <div className="relative">
              <DateField
                label="Check in"
                value={checkIn}
                placeholder="Select date"
                open={openPicker === "in"}
                onToggle={() => setOpenPicker(openPicker === "in" ? null : "in")}
              />
              <AnimatePresence>{openPicker === "in" && datePicker("in")}</AnimatePresence>
            </div>

            <div className="relative">
              <DateField
                label="Check out"
                value={checkOut}
                placeholder="Select date"
                open={openPicker === "out"}
                onToggle={() => setOpenPicker(openPicker === "out" ? null : "out")}
              />
              <AnimatePresence>{openPicker === "out" && datePicker("out")}</AnimatePresence>
            </div>

            <div className="flex items-center justify-between gap-3 px-5 py-4 sm:px-6">
              <div>
                <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-stone">
                  Guests
                </span>
                <span className="mt-1 block text-sm text-cream">
                  {guests} {guests === 1 ? "guest" : "guests"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  disabled={guests <= 1}
                  aria-label="Decrease guests"
                  className="flex h-8 w-8 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-champagne hover:text-champagne disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <Minus size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.min(6, g + 1))}
                  disabled={guests >= 6}
                  aria-label="Increase guests"
                  className="flex h-8 w-8 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-champagne hover:text-champagne disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="flex items-center justify-center gap-3 bg-champagne px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink transition-colors duration-500 hover:bg-cream disabled:opacity-70 sm:py-0"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                  <span className="hidden lg:inline">Checking</span>
                </>
              ) : (
                <>
                  Check availability
                  <ArrowRight size={16} aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {(error || results) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 border border-cream/10 bg-coal/80 backdrop-blur-md"
            >
              {error ? (
                <p className="flex items-center justify-between px-5 py-4 text-sm text-cream/80">
                  {error}
                  <button
                    type="button"
                    onClick={() => setError(null)}
                    aria-label="Dismiss"
                    className="text-stone hover:text-cream"
                  >
                    <X size={16} />
                  </button>
                </p>
              ) : (
                <div className="p-5 sm:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-champagne">
                      Availability — {nights} {nights === 1 ? "night" : "nights"},{" "}
                      {guests} {guests === 1 ? "guest" : "guests"}
                    </p>
                    <button
                      type="button"
                      onClick={() => setResults(null)}
                      aria-label="Close results"
                      className="text-stone transition-colors hover:text-cream"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <ul className="divide-y divide-cream/10">
                    {results?.map(({ room, total }) => (
                      <li
                        key={room.id}
                        className="flex items-center justify-between gap-4 py-3.5"
                      >
                        <div>
                          <p className="font-display text-lg text-cream">{room.name}</p>
                          <p className="text-xs text-stone">
                            {room.size} m² — up to {room.guests} guests
                          </p>
                        </div>
                        {total === null ? (
                          <span className="text-[11px] uppercase tracking-[0.2em] text-stone">
                            Fully booked
                          </span>
                        ) : (
                          <div className="text-right">
                            <p className="text-sm text-cream">{formatPrice(total)}</p>
                            <p className="text-[11px] text-stone">total stay</p>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[11px] text-stone">
                    Demo availability — no real reservation is made.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
