import Reveal from "./Reveal";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal>
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-champagne">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl leading-[1.05] font-light text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
