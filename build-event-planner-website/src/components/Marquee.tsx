import { artists } from "../data";

export default function Marquee() {
  const items = [...artists, ...artists];
  return (
    <section className="relative py-12 border-y border-saffron-500/10 bg-[#0b0608] overflow-hidden">
      <div className="flex items-center gap-2 mb-4 max-w-7xl mx-auto px-5 sm:px-8">
        <span className="text-xs tracking-[0.4em] uppercase text-saffron-400 font-semibold">
          ✦ Featured Artists & Performers
        </span>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap w-max">
          {items.map((a, i) => (
            <span
              key={i}
              className="font-display text-3xl sm:text-5xl text-saffron-100/40 hover:text-gradient-gold transition-colors italic flex items-center gap-12"
            >
              {a}
              <span className="text-gold-400 text-2xl">❀</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
