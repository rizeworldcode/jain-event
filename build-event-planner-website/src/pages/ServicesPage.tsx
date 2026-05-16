import { services } from "../data";

export default function ServicesPage() {
  return (
    <div className="relative pb-24 overflow-hidden">
      {/* Hero Section for Services */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/reception & varmala.avif')" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0b0608]/80 via-[#0b0608]/40 to-[#0b0608]" />
        
        <div className="relative z-10 text-center px-5">
          <span className="text-xs tracking-[0.5em] uppercase text-white font-bold mb-4 block animate-pulse">
            Premium Experience
          </span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-semibold text-white rise">
            Our <span className="text-gradient-gold italic">Services</span>
          </h1>
          <div className="mt-6 divider-mandala mx-auto" />
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((s) => (
            <div 
              key={s.title}
              className="group flex flex-col lg:flex-row gap-8 bg-[#150a0d] rounded-4xl overflow-hidden border border-saffron-500/10 hover:border-saffron-500/30 transition-all duration-500"
            >
              <div className="lg:w-2/5 aspect-square lg:aspect-auto overflow-hidden">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                <div className="h-14 w-14 rounded-2xl grid place-items-center bg-saffron-500/10 border border-saffron-500/20 text-3xl mb-6">
                  <i className={`${s.icon} text-gradient-gold`}></i>
                </div>
                <h2 className="font-display text-3xl text-white font-semibold mb-4">
                  {s.title}
                </h2>
                <p className="text-white leading-relaxed mb-6 text-lg">
                  {s.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {["Customized Themes", "Expert Coordination", "Premium Vendors"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white">
                      <i className="fa-solid fa-circle-check text-xs text-gold-400"></i>
                      {item}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-gold-300 transition-colors uppercase tracking-widest"
                >
                  Book this service
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Services Banner */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="rounded-[3rem] bg-linear-to-br from-maroon-900/40 to-[#0b0608] border border-maroon-500/20 p-10 sm:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10 text-9xl">
            <i className="fa-solid fa-om"></i>
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl text-white font-semibold mb-6">
              Specialized <span className="text-gradient-gold">Jain Cultural</span> Events
            </h2>
            <p className="text-white text-lg mb-8 leading-relaxed">
              We specialize in traditional Jain ceremonies including Pheras with musical groups, 
              Bhajan Sandhyas, and meticulously planned rituals that respect our cultural heritage.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-gold-400 font-bold mb-2 uppercase text-xs tracking-tighter">Decoration</h4>
                <p className="text-sm text-white">Floral mandaps, traditional lighting, and ethnic setups.</p>
              </div>
              <div>
                <h4 className="text-gold-400 font-bold mb-2 uppercase text-xs tracking-tighter">Catering</h4>
                <p className="text-sm text-white">Pure vegetarian cuisine with traditional Jain menus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
