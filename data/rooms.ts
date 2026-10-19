export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  size: number;
  guests: number;
  pricePerNight: number;
  image: string;
  gallery: string[];
  amenities: string[];
}

const img = (id: string, w = 1600): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const rooms: Room[] = [
  {
    id: "ocean-suite",
    name: "Ocean Suite",
    tagline: "Wake where the horizon begins.",
    description:
      "Floor-to-ceiling glass pulls the sea into the room. A hand-plastered stone bath, linen-dressed king bed and a private terrace suspended above the water make the Ocean Suite our most requested address.",
    size: 68,
    guests: 2,
    pricePerNight: 780,
    image: img("photo-1582719508461-905c673771fd"),
    gallery: [
      img("photo-1582719508461-905c673771fd"),
      img("photo-1544148103-0773bf10d330"),
      img("photo-1505142468610-359e7d316be0"),
    ],
    amenities: [
      "Private sea-facing terrace",
      "Stone soaking bath",
      "Rain shower",
      "Hand-loomed linens",
      "Espresso bar",
      "Smart lighting scenes",
    ],
  },
  {
    id: "garden-villa",
    name: "Garden Villa",
    tagline: "A private courtyard under old olive trees.",
    description:
      "Hidden behind limestone walls, the Garden Villa opens onto its own shaded courtyard with a plunge pool and an outdoor daybed. Inside, warm oak, raw clay and soft light do the talking.",
    size: 92,
    guests: 3,
    pricePerNight: 1150,
    image: img("photo-1591088398332-8a7791972843"),
    gallery: [
      img("photo-1591088398332-8a7791972843"),
      img("photo-1595576508898-0ad5c879a061"),
      img("photo-1520250497591-112f2f40a3f4"),
    ],
    amenities: [
      "Private plunge pool",
      "Shaded garden courtyard",
      "Outdoor daybed",
      "Fireplace",
      "Outdoor rain shower",
      "Daily breakfast in garden",
    ],
  },
  {
    id: "noire-residence",
    name: "Noiré Residence",
    tagline: "The entire top floor. The entire view.",
    description:
      "Our signature residence spans 140 square metres with a wraparound terrace, private dining room and a butler on call. Reserved for those who measure a stay in weeks, not nights.",
    size: 140,
    guests: 4,
    pricePerNight: 2400,
    image: img("photo-1578683010236-d716f9a3f461"),
    gallery: [
      img("photo-1578683010236-d716f9a3f461"),
      img("photo-1611892440504-42a792e24d32"),
      img("photo-1445019980597-93fa8acb246c"),
    ],
    amenities: [
      "Wraparound terrace",
      "Private dining room",
      "Dedicated butler",
      "Cellar selection on arrival",
      "In-residence spa treatments",
      "Chauffeured transfers",
    ],
  },
  {
    id: "panorama-room",
    name: "Panorama Room",
    tagline: "The coast, framed like a painting.",
    description:
      "High in the main house, the Panorama Room looks straight down the coastline through a five-metre window. Compact, quiet and effortlessly composed — our editors' favourite.",
    size: 42,
    guests: 2,
    pricePerNight: 520,
    image: img("photo-1590490360182-c33d57733427"),
    gallery: [
      img("photo-1590490360182-c33d57733427"),
      img("photo-1512918728675-ed5a9ecdebfd"),
      img("photo-1566073771259-6a8506099945"),
    ],
    amenities: [
      "Five-metre panorama window",
      "Window-side reading nook",
      "Marble bathroom",
      "Record player & vinyl selection",
      "French press coffee ritual",
      "Turndown with sea-salt chocolates",
    ],
  },
];
