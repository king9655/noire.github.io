"use client";

import { useState } from "react";
import { ArrowRight, Users, Maximize2 } from "lucide-react";
import { rooms, type Room } from "@/data/rooms";
import { formatPrice } from "@/data/booking";
import SectionHeading from "./SectionHeading";
import RoomModal from "./RoomModal";
import Reveal from "./Reveal";
import { cn } from "@/lib/cn";

const layouts = [
  "lg:col-span-7 aspect-[4/3]",
  "lg:col-span-5 aspect-[3/4] lg:mt-24",
  "lg:col-span-5 aspect-[3/4]",
  "lg:col-span-7 aspect-[4/3] lg:-mt-24",
];

export default function Rooms() {
  const [selected, setSelected] = useState<Room | null>(null);

  return (
    <section id="rooms" aria-label="Rooms and suites" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6 sm:mb-20">
          <SectionHeading eyebrow="Stay" title="Rooms shaped by the sea." />
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-stone">
              Twelve keys in total. Four ways to disappear. Each room faces
              the water; none face another room.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-y-8">
          {rooms.map((room, i) => (
            <Reveal key={room.id} className={cn("sm:col-span-1", layouts[i])} delay={i % 2 === 0 ? 0 : 0.12}>
              <button
                type="button"
                onClick={() => setSelected(room)}
                aria-label={`Explore room: ${room.name}`}
                className="group block h-full w-full text-left"
              >
                <div className={cn("relative h-full w-full overflow-hidden bg-coal", layouts[i].split(" ").slice(1).join(" "))}>
                  <img
                    src={room.image}
                    alt={`${room.name} at NOIRÉ`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/25" />

                  <div className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-5 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 sm:p-7">
                    <span className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-champagne">
                      Explore room <ArrowRight size={14} />
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="border border-cream/20 bg-ink/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-cream backdrop-blur-sm">
                      {formatPrice(room.pricePerNight)} / night
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-light text-cream transition-colors duration-500 group-hover:text-champagne sm:text-3xl">
                      {room.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-stone italic">{room.tagline}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-4 pt-1 text-[11px] uppercase tracking-[0.15em] text-stone">
                    <span className="flex items-center gap-1.5">
                      <Maximize2 size={13} aria-hidden="true" /> {room.size} m²
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={13} aria-hidden="true" /> {room.guests}
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <RoomModal room={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
