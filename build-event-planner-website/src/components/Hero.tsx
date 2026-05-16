import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grain"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/jain bg.png')",
        }}
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Floating decorative petals */}
      <div className="absolute top-24 left-10 text-4xl float-slow opacity-30 select-none text-saffron-400/50">
        <i className="fa-solid fa-fan"></i>
      </div>
      <div className="absolute bottom-32 right-16 text-5xl float-slow opacity-20 select-none text-maroon-500/50" style={{ animationDelay: "2s" }}>
        <i className="fa-solid fa-leaf"></i>
      </div>
      <div className="absolute top-1/3 right-1/4 text-2xl float-slow opacity-30 select-none text-gold-400/50" style={{ animationDelay: "4s" }}>
        <i className="fa-solid fa-sparkles"></i>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl rise">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-saffron-500/10 border border-saffron-400/30 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-saffron-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-saffron-200">
              Alwar • Rajasthan
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-semibold leading-[1.05] text-white">
            Crafting <span className="text-gradient-gold italic pr-2">Royal</span>
            <br />
            Celebrations,
            <br />
            <span className="text-gradient-gold">Timeless Memories.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-saffron-50/80 leading-relaxed">
            From intimate Haldi mornings to grand wedding nights and divine bhajan sandhyas — Jain Event Planner brings your vision to life with elegance, devotion, and unmatched detail.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-[#0b0608] btn-shimmer shadow-2xl shadow-saffron-600/40 hover:scale-105 transition-transform"
            >
              Start Planning
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-saffron-100 border border-saffron-400/40 backdrop-blur-sm hover:bg-saffron-500/10 transition-colors"
            >
              <i className="fa-solid fa-play text-xs"></i>
              Watch Our Story
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-saffron-100/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-gold-400 text-sm">
                {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
              </div>
              <span>4.9 / 5 from 200+ families</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-saffron-300/30" />
            <p className="font-display italic text-lg text-saffron-100">
              "Your event is our masterpiece."
            </p>
          </div>
        </div>
      </div>


    </section>
  );
}
