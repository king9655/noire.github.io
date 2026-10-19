import { rooms, type Room } from "./rooms";

export interface AvailabilityResult {
  room: Room;
  nights: number;
  total: number | null; // null = unavailable
}

/** Deterministic pseudo-availability so mock results feel consistent per date. */
function seedFromDate(date: Date): number {
  return (
    date.getFullYear() * 372 + (date.getMonth() + 1) * 31 + date.getDate()
  );
}

export function getAvailability(checkIn: Date, nights: number): AvailabilityResult[] {
  const seed = seedFromDate(checkIn);
  return rooms.map((room, i) => {
    // One room is occasionally "sold out"; weekends carry a 15% premium.
    const unavailable = (seed + i * 7) % 5 === 0;
    const isWeekend = [5, 6].includes(checkIn.getDay());
    const rate = Math.round(room.pricePerNight * (isWeekend ? 1.15 : 1));
    return {
      room,
      nights,
      total: unavailable ? null : rate * nights,
    };
  });
}

export const formatPrice = (value: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
