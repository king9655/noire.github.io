export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  ratio: string;
}

const img = (id: string, w = 1200): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: img("photo-1507525428034-b723cf961d3e", 1600), alt: "Private cove at first light", ratio: "aspect-[3/4]" },
  { id: "g2", src: img("photo-1571896349842-33c89424de2d"), alt: "Pool terrace above the sea", ratio: "aspect-[4/3]" },
  { id: "g3", src: img("photo-1540541338287-41700207dee6"), alt: "Sunset over the main pool", ratio: "aspect-square" },
  { id: "g4", src: img("photo-1551882547-ff40c63fe5fa"), alt: "Infinity pool at dusk", ratio: "aspect-[3/4]" },
  { id: "g5", src: img("photo-1515377905703-c4788e51af15"), alt: "Candlelit spa corridor", ratio: "aspect-[4/5]" },
  { id: "g6", src: img("photo-1600334129128-685c5582fd35"), alt: "Sea-salt spa ritual", ratio: "aspect-[4/3]" },
  { id: "g7", src: img("photo-1559339352-11d035aa65de", 1600), alt: "NOIRÉ Kitchen in the evening", ratio: "aspect-[3/4]" },
  { id: "g8", src: img("photo-1500375592092-40eb2168fd21"), alt: "The Mediterranean below the cliffs", ratio: "aspect-square" },
  { id: "g9", src: img("photo-1533105079780-92b9be482077"), alt: "Stone bath with garden view", ratio: "aspect-[4/5]" },
  { id: "g10", src: img("photo-1584132967334-10e028bd69f7", 1600), alt: "Villa pool in the afternoon shade", ratio: "aspect-[4/3]" },
];
