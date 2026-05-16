export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden bg-[#150a0d]">
      <div className="absolute inset-0 bg-linear-to-b from-[#0b0608] to-[#150a0d]" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <span className="text-xs tracking-[0.4em] uppercase text-saffron-400 font-semibold">— Investment</span>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
          Transparent <span className="text-gradient-gold italic">Pricing.</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-saffron-50/70">
          We offer bespoke packages tailored to your vision and budget. Contact us for a personalized quote that fits your celebration perfectly.
        </p>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { name: "Silver", price: "Custom", features: ["Event Planning", "Decor Consultation", "On-site Coordination"] },
            { name: "Gold", price: "Custom", features: ["Everything in Silver", "Vendor Management", "Full Decor Execution"] },
            { name: "Diamond", price: "Custom", features: ["Everything in Gold", "Celebrity Artist Booking", "VVIP Hospitality"] },
          ].map((plan) => (
            <div key={plan.name} className="p-8 rounded-3xl bg-[#0b0608]/50 border border-saffron-500/20 backdrop-blur-sm hover:border-saffron-400/50 transition-colors">
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold text-gradient-gold">{plan.price}</p>
              <ul className="mt-8 space-y-4 text-sm text-saffron-50/70">
                {plan.features.map(f => <li key={f} className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-saffron-400 text-[10px]"></i> {f}</li>)}
              </ul>
              <a href="#contact" className="mt-10 block py-3 rounded-xl bg-saffron-500 text-[#0b0608] font-semibold hover:bg-saffron-400 transition-colors">Enquire Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
