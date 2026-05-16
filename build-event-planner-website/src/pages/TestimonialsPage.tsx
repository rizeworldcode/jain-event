import { testimonials } from "../data";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/haldi.jpg" 
          alt="Testimonials Header" 
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0b0608]/90 via-[#0b0608]/60 to-[#0b0608]" />
        
        <div className="max-w-7xl mx-auto px-5 text-center relative z-10">
          <span className="text-xs tracking-[0.5em] uppercase text-saffron-400 font-bold mb-4 block">
            Love from Clients
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-semibold text-white">
            Client <span className="text-gradient-gold italic">Stories</span>
          </h1>
          <div className="mt-6 divider-mandala mx-auto opacity-50" />
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className="bg-[#150a0d] p-8 rounded-[2.5rem] border border-saffron-500/10 hover:border-saffron-500/30 transition-all duration-500 flex flex-col h-full group"
            >
              <div className="flex gap-1 text-gold-400 mb-6">
                {[...Array(5)].map((_, j) => (
                  <i key={j} className="fa-solid fa-star text-sm"></i>
                ))}
              </div>
              
              <blockquote className="text-saffron-50/80 leading-relaxed mb-8 grow italic">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-saffron-500/10">
                <div className="h-14 w-14 rounded-full bg-linear-to-br from-saffron-400 to-maroon-600 grid place-items-center text-white font-bold text-xl shadow-lg shadow-maroon-500/20 group-hover:scale-110 transition-transform">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-xs text-saffron-400 uppercase tracking-widest mt-1">{t.place}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-4xl mx-auto px-5 py-20 text-center">
        <div className="bg-linear-to-r from-saffron-600/10 via-saffron-600/20 to-saffron-600/10 p-12 rounded-[3rem] border border-saffron-500/20">
          <h2 className="font-display text-4xl text-white mb-6">Want to be our next success story?</h2>
          <p className="text-saffron-200/70 mb-8 max-w-xl mx-auto">
            Let us handle the details while you enjoy the most precious moments of your life.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0b0608] btn-shimmer"
          >
            Schedule a Consultation
            <i className="fa-solid fa-calendar-check"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
