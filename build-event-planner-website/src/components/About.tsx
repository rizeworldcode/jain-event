import { stats } from "../data";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0b0608] via-[#150a0d] to-[#0b0608]" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-saffron-600/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-maroon-700/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative h-[520px] sm:h-[600px]">
            <div className="absolute top-0 left-0 w-3/5 aspect-3/4 rounded-3xl overflow-hidden ring-1 ring-saffron-500/20 shadow-2xl shadow-black/60">
              <img
                src="/b7.jpg"
                alt="Wedding setup"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 aspect-square rounded-3xl overflow-hidden ring-1 ring-gold-400/30 shadow-2xl shadow-saffron-900/50">
              <img
                src="/b3.jpg"
                alt="Reception decoration"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-[#150a0d] border border-gold-400/30 rounded-2xl p-5 shadow-2xl backdrop-blur-md">
              <p className="font-display text-4xl text-gradient-gold font-bold leading-none">12+</p>
              <p className="text-xs uppercase tracking-widest text-saffron-200/70 mt-1">
                Years Legacy
              </p>
            </div>
            {/* Mandala accent */}
            <div className="absolute -top-6 right-1/3 text-6xl opacity-20 select-none">❀</div>
          </div>

          {/* Text */}
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-saffron-400 font-semibold">
              — About Us
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Where Every Moment <br />
              <span className="text-gradient-gold italic">Becomes a Masterpiece.</span>
            </h2>
            <span className="block mt-4 divider-mandala" />

            <p className="mt-6 text-base sm:text-lg text-saffron-50/75 leading-relaxed">
              <strong className="text-saffron-200">Jain Event Planner</strong> is a premier event management company dedicated to creating unforgettable experiences. With years of expertise, a passion for perfection, and a network of the finest vendors, we bring your vision to life.
            </p>
            <p className="mt-4 text-base sm:text-lg text-saffron-50/75 leading-relaxed">
              Our philosophy is simple: <em className="text-gold-300">your event is our masterpiece.</em> We believe in building strong client relationships, understanding your unique style and needs to craft a truly personalized event.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-4 bg-linear-to-br from-saffron-500/10 to-maroon-700/10 border border-saffron-500/20 backdrop-blur-sm"
                >
                  <p className="font-display text-3xl sm:text-4xl text-gradient-gold font-bold">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-saffron-100/70">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Custom Themes", "Trusted Vendors", "Premium Service", "24/7 Support"].map(
                (t) => (
                  <span
                    key={t}
                    className="px-4 py-2 rounded-full text-sm bg-saffron-500/5 border border-saffron-400/20 text-saffron-100"
                  >
                    ✦ {t}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
