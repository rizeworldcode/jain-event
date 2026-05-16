import { Link } from "react-router-dom";
import { services } from "../data";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-[#0b0608] via-[#1a0b10] to-[#0b0608]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-saffron-600/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.4em] uppercase text-white font-semibold">
            — Our Services
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
            Everything You Need.<br />
            <span className="text-gradient-gold italic">Beautifully Done.</span>
          </h2>
          <span className="block mt-4 divider-mandala mx-auto" />
          <p className="mt-5 text-white">
            From the first ritual to the final farewell — we orchestrate every moment with care, creativity and a touch of grandeur.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="service-card group relative rounded-3xl overflow-hidden bg-[#150a0d] border border-saffron-500/15"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0b0608] via-[#0b0608]/40 to-transparent pointer-events-none" />
              </div>
              <div className="absolute top-4 left-4 h-12 w-12 rounded-2xl grid place-items-center bg-[#0b0608]/70 backdrop-blur-md border border-gold-400/30 text-2xl">
                <i className={`${s.icon} text-gradient-gold`}></i>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-normal text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-white text-sm leading-relaxed">{s.desc}</p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-gold-300 transition-colors"
                >
                  Enquire Now
                  <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </Link>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gold-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
