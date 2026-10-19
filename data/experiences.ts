export interface Experience {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
  duration: string;
}

export const experiences: Experience[] = [
  {
    id: "private-dining",
    index: "01",
    title: "Private dining",
    description:
      "A chef, a cliffside table, and a menu written that afternoon from whatever the boats brought in.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
    duration: "From 3 hours",
  },
  {
    id: "spa-rituals",
    index: "02",
    title: "Spa rituals",
    description:
      "Slow, silent treatments built on sea salt, olive oil and local herbs. No clocks, no phones.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80",
    duration: "60 – 150 min",
  },
  {
    id: "sunset-sailing",
    index: "03",
    title: "Sunset sailing",
    description:
      "Leave at golden hour aboard a restored wooden ketch. Swim in coves with no names, dine on deck.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=80",
    duration: "4 hours",
  },
  {
    id: "island-excursions",
    index: "04",
    title: "Island excursions",
    description:
      "A local skipper, an empty island, and a picnic basket. You will not see another hotel.",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1400&q=80",
    duration: "Full day",
  },
];
