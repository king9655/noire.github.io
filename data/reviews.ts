export interface Review {
  id: string;
  quote: string;
  author: string;
  source: string;
}

export const leadQuote: Review = {
  id: "lead",
  quote: "The kind of place you don't tell everyone about.",
  author: "Condensed from 214 guest journals",
  source: "NOIRÉ guestbook, 2024",
};

export const reviews: Review[] = [
  {
    id: "r1",
    quote:
      "We arrived as guests and left feeling like the hotel had been built around us. Nothing was asked twice, nothing was ever shown twice.",
    author: "Elena Marchetti",
    source: "Milan — stayed 6 nights",
  },
  {
    id: "r2",
    quote:
      "The quietest luxury I have ever paid for. No lobby music, no queues, no theatre. Just the sea and someone who remembered how I take coffee.",
    author: "James Whitfield",
    source: "London — stayed 9 nights",
  },
  {
    id: "r3",
    quote:
      "Dinner on the cliff on our last night was worth the flight alone. We rebooked before checkout — I have never done that in my life.",
    author: "Amira & Karim Haddad",
    source: "Dubai — stayed 4 nights",
  },
  {
    id: "r4",
    quote:
      "I came to write and finished a book. The Panorama Room is the best room I have ever worked in, and I have worked in a lot of rooms.",
    author: "Sofia Lindqvist",
    source: "Stockholm — stayed 3 weeks",
  },
];
