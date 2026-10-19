import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40" aria-label="Introduction">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.12] font-light text-cream sm:text-6xl lg:text-7xl">
              Some places are visited.
              <br />
              <span className="text-champagne italic">Others are remembered.</span>
            </h2>
          </Reveal>
        </div>
        <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.15}>
            <div className="mb-8 h-px w-16 bg-champagne/60" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-stone sm:text-base">
              NOIRÉ is a twelve-key retreat carved into the cliffs of the
              Mediterranean coast. There is no lobby buzz, no schedule, no
              dress code — only stone, salt air and the kind of quiet that
              resets a calendar.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-stone sm:text-base">
              Days are shaped by the sea: slow breakfasts, long lunches in
              the shade, evenings that end when you say so.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
