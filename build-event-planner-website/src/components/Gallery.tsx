import { useState } from "react";
import { gallery } from "../data";

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0b0608]" />
      <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-maroon-700/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-saffron-400 font-semibold">
              — Our Moments
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
              A Glimpse of <span className="text-gradient-gold italic">Magic.</span>
            </h2>
          </div>
          <p className="max-w-md text-saffron-50/70">
            Captured stories from weddings, sangeets, receptions and devotional evenings across India.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[200px]">
          {gallery.map((src, i) => {
            const span =
              i % 7 === 0
                ? "col-span-2 row-span-2"
                : i % 5 === 0
                ? "row-span-2"
                : "";
            return (
              <button
                key={src}
                onClick={() => setActive(src)}
                className={`group relative overflow-hidden rounded-2xl ring-1 ring-saffron-500/15 ${span}`}
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0b0608]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs uppercase tracking-widest text-saffron-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View</span>
                  <span className="h-7 w-7 rounded-full grid place-items-center bg-saffron-500 text-[#0b0608] text-[10px]">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-100 bg-black/90 backdrop-blur-md grid place-items-center p-4 cursor-zoom-out"
        >
          <img
            src={active}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl ring-1 ring-gold-400/30"
          />
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 h-11 w-11 rounded-full grid place-items-center bg-saffron-500 text-[#0b0608] font-bold text-xl"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
