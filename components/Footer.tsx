import { Instagram, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Rooms", href: "#rooms" },
  { label: "Experiences", href: "#experiences" },
  { label: "Restaurant", href: "#restaurant" },
];
const utilityLinks = [
  { label: "Contact", href: "#contact" },
  { label: "Instagram", href: "https://instagram.com", external: true },
  { label: "Privacy", href: "#privacy" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-cream/10 bg-ink" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-display text-5xl tracking-[0.2em] text-cream sm:text-6xl">NOIRÉ</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone">
              A twelve-key boutique retreat on the Mediterranean coast.
              Between sea, silence and design — since always.
            </p>
            <div className="mt-8 space-y-2.5 text-sm text-stone">
              <p className="flex items-center gap-3">
                <MapPin size={14} className="text-champagne" aria-hidden="true" />
                Cliff road, Mediterranean coast
              </p>
              <p className="flex items-center gap-3">
                <Mail size={14} className="text-champagne" aria-hidden="true" />
                stay@noire.example
              </p>
            </div>
          </div>

          <nav className="lg:col-span-3" aria-label="Footer navigation">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-stone">
              Explore
            </p>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/80 transition-colors duration-300 hover:text-champagne"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-stone">
              Hotel
            </p>
            <ul className="space-y-3.5">
              {utilityLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...("external" in link && link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-2 text-sm text-cream/80 transition-colors duration-300 hover:text-champagne"
                  >
                    {link.label === "Instagram" && (
                      <Instagram size={14} aria-hidden="true" />
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-[11px] tracking-[0.2em] text-stone uppercase">
            © {new Date().getFullYear()} NOIRÉ — a fictional concept hotel
          </p>
          <p className="text-[11px] tracking-[0.2em] text-stone uppercase">
            Crafted for a portfolio demo
          </p>
        </div>
      </div>
    </footer>
  );
}
