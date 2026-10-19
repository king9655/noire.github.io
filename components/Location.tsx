import { MapPin, Plane, Ship, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Location() {
  return (
    <section id="location" aria-label="Location" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-28 sm:px-8 sm:py-36">
      <div className="grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Location" title="The end of the road, on purpose." />

          <Reveal delay={0.2}>
            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={18} strokeWidth={1.5} className="mt-1 shrink-0 text-champagne" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-cream">Mediterranean coast</p>
                  <p className="mt-1 text-xs leading-relaxed text-stone">
                    Carved into the cliffs, twenty minutes above the last
                    village. The address is given after booking — it is not
                    hard to find, just hard to leave.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Plane size={18} strokeWidth={1.5} className="mt-1 shrink-0 text-champagne" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-cream">45 min from the airport</p>
                  <p className="mt-1 text-xs leading-relaxed text-stone">
                    Private transfers meet every flight we know about. The
                    drive is half the arrival — vineyards, then sea.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Ship size={18} strokeWidth={1.5} className="mt-1 shrink-0 text-champagne" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-cream">Arrive by water</p>
                  <p className="mt-1 text-xs leading-relaxed text-stone">
                    For the unhurried: a wooden ketch collects guests from
                    the old harbour twice a day, weather permitting.
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href="#booking"
              className="group mt-10 inline-flex items-center gap-3 border border-cream/30 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-cream transition-all duration-500 hover:border-champagne hover:text-champagne"
            >
              Explore location
              <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden border border-cream/10 bg-coal">
              {/* Stylised dark coastline map */}
              <svg
                viewBox="0 0 800 600"
                className="h-full w-full"
                role="img"
                aria-label="Stylised map of the Mediterranean coastline near NOIRÉ"
              >
                <rect width="800" height="600" fill="#1A1A18" />
                {/* water texture lines */}
                {[...Array(9)].map((_, i) => (
                  <path
                    key={`w${i}`}
                    d={`M -20 ${120 + i * 58} C 150 ${100 + i * 58}, 260 ${140 + i * 58}, 420 ${118 + i * 58} S 700 ${140 + i * 58}, 830 ${116 + i * 58}`}
                    fill="none"
                    stroke="#F4F1EA"
                    strokeOpacity="0.06"
                    strokeWidth="1"
                  />
                ))}
                {/* coastline */}
                <path
                  d="M 560 -20 C 540 90, 610 150, 560 230 C 510 310, 560 360, 520 440 C 490 505, 530 560, 505 620 L 830 620 L 830 -20 Z"
                  fill="#101010"
                  stroke="#A8A39A"
                  strokeOpacity="0.35"
                  strokeWidth="1.5"
                />
                <path
                  d="M 560 -20 C 540 90, 610 150, 560 230 C 510 310, 560 360, 520 440 C 490 505, 530 560, 505 620"
                  fill="none"
                  stroke="#C9A96A"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                  strokeDasharray="1 7"
                  strokeLinecap="round"
                />
                {/* contour lines on land */}
                <path d="M 620 80 C 640 160, 600 240, 630 330" fill="none" stroke="#F4F1EA" strokeOpacity="0.08" />
                <path d="M 680 60 C 700 180, 660 300, 690 430" fill="none" stroke="#F4F1EA" strokeOpacity="0.08" />
                {/* route from airport */}
                <path
                  d="M 90 520 C 200 480, 300 430, 430 350 C 480 318, 500 290, 545 260"
                  fill="none"
                  stroke="#A8A39A"
                  strokeOpacity="0.5"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                />
                {/* airport marker */}
                <circle cx="90" cy="520" r="5" fill="#A8A39A" />
                <text x="110" y="526" fill="#A8A39A" fontSize="15" fontFamily="Inter, sans-serif" letterSpacing="2">
                  AIRPORT · 45 MIN
                </text>
                {/* harbour marker */}
                <circle cx="430" cy="350" r="5" fill="#A8A39A" />
                <text x="450" y="356" fill="#A8A39A" fontSize="15" fontFamily="Inter, sans-serif" letterSpacing="2">
                  OLD HARBOUR
                </text>
                {/* hotel marker */}
                <circle cx="545" cy="258" r="26" fill="none" stroke="#C9A96A" strokeOpacity="0.35">
                  <animate attributeName="r" values="18;30;18" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.5;0.1;0.5" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="545" cy="258" r="7" fill="#C9A96A" />
                <text
                  x="545"
                  y="222"
                  textAnchor="middle"
                  fill="#F4F1EA"
                  fontSize="20"
                  fontFamily="Cormorant Garamond, serif"
                  letterSpacing="6"
                >
                  NOIRÉ
                </text>
                {/* compass */}
                <g transform="translate(720,80)" stroke="#A8A39A" strokeOpacity="0.6" fill="none">
                  <circle r="24" strokeWidth="1" />
                  <path d="M 0 -24 L 5 0 L 0 24 L -5 0 Z" fill="#A8A39A" fillOpacity="0.6" stroke="none" />
                  <text y="-32" textAnchor="middle" fill="#A8A39A" fontSize="12" fontFamily="Inter, sans-serif" stroke="none">N</text>
                </g>
              </svg>
              <div className="absolute right-4 bottom-4 text-[10px] uppercase tracking-[0.3em] text-stone">
                Illustrative map — 40.4° N, 14.2° E
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
