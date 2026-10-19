import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "react-day-picker/style.css";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noire.example"),
  title: "NOIRÉ — Boutique Hotel on the Mediterranean Coast",
  description:
    "An intimate twelve-key retreat between sea, silence and design. Ocean suites, private villas, cliffside dining and spa rituals on the Mediterranean coast.",
  keywords: [
    "boutique hotel",
    "luxury resort",
    "Mediterranean coast",
    "design hotel",
    "NOIRÉ",
  ],
  openGraph: {
    title: "NOIRÉ — Stay somewhere unforgettable.",
    description:
      "An intimate retreat between sea, silence and design. Twelve keys on the Mediterranean coast.",
    url: "https://noire.example",
    siteName: "NOIRÉ",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "NOIRÉ resort pool glowing at sunset above the Mediterranean",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOIRÉ — Stay somewhere unforgettable.",
    description:
      "An intimate retreat between sea, silence and design. Twelve keys on the Mediterranean coast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-ink font-body text-cream antialiased">
        {/* Film grain overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[100] opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "180px 180px",
          }}
        />
        {children}
      </body>
    </html>
  );
}
