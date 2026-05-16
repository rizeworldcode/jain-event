import { useEffect, useRef, useState } from "react";
import { testimonials } from "../data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    timer.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, []);

  const go = (i: number) => {
    setIndex((i + testimonials.length) % testimonials.length);
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      setIndex((j) => (j + 1) % testimonials.length);
    }, 6000);
  };

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-[#0b0608] via-[#1a0b10] to-[#0b0608]" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(230,188,62,0.3), transparent 40%), radial-gradient(circle at 80% 50%, rgba(185,28,75,0.3), transparent 40%)" }} />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <span className="text-xs tracking-[0.4em] uppercase text-saffron-400 font-semibold">
          — Kind Words
        </span>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
          What Our Clients <span className="text-gradient-gold italic">Say.</span>
        </h2>
        <span className="block mt-4 divider-mandala mx-auto" />

        <div className="relative mt-14 min-h-[360px] sm:min-h-[300px]">
          <svg
            className="absolute -top-4 left-1/2 -translate-x-1/2 h-16 w-16 text-saffron-500/30"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v2a4 4 0 01-4 4v2a6 6 0 006-6V9a2 2 0 00-2-2zm12 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v2a4 4 0 01-4 4v2a6 6 0 006-6V9a2 2 0 00-2-2z" />
          </svg>

          {testimonials.map((tm, i) => (
            <div
              key={tm.name + i}
              className={`absolute inset-0 transition-all duration-700 ${
                i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 pointer-events-none"
              }`}
            >
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-saffron-50 leading-snug italic px-4">
                "{tm.quote}"
              </p>

              <div className="mt-10 flex flex-col items-center gap-3">
                <div className="h-16 w-16 rounded-full bg-linear-to-br from-saffron-500 to-maroon-700 grid place-items-center font-display text-xl font-bold text-white ring-2 ring-gold-400/40">
                  {tm.initials}
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    {tm.name}, <span className="text-saffron-200">{tm.place}</span>
                  </p>
                  <p className="text-sm text-saffron-100/60 mt-1">
                    Venue: {tm.venue}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Hidden one for height */}
          <div className="invisible">
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl leading-snug px-4">
              "{t.quote}"
            </p>
            <div className="mt-10 h-24" />
          </div>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => go(index - 1)}
            className="h-11 w-11 rounded-full grid place-items-center border border-saffron-400/30 text-saffron-200 hover:bg-saffron-500/10 transition-colors"
            aria-label="Previous"
          >
            ←
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-linear-to-r from-saffron-400 to-gold-400" : "w-3 bg-saffron-300/30"
                }`}
                aria-label={`Go to ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(index + 1)}
            className="h-11 w-11 rounded-full grid place-items-center border border-saffron-400/30 text-saffron-200 hover:bg-saffron-500/10 transition-colors"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
