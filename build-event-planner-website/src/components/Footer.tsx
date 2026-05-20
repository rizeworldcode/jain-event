import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0608] border-t border-saffron-500/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group transition-transform duration-500 hover:scale-105 active:scale-95"
            >
              <div className="h-14 w-14 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Jain Event Planner Logo" 
                  className="h-full w-auto object-contain brightness-110 drop-shadow-[0_0_12px_rgba(255,215,0,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.6)] transition-all"
                />
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-gradient-gold group-hover:text-saffron-300 transition-colors">
                  Jain
                </p>
                <p className="text-[11px] tracking-[0.25em] uppercase text-saffron-200/70 group-hover:text-saffron-400 transition-colors">
                  Event Planner
                </p>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-saffron-50/70 leading-relaxed">
              Crafting royal celebrations and timeless memories in Alwar — weddings, sangeets, bhajan sandhyas, and more.
            </p>
            <p className="mt-5 font-display italic text-gold-300">
              "Your event is our masterpiece."
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-saffron-400 font-semibold">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {[
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Contact", path: "/contact" },
                { name: "Blogs", path: "/blogs" },
              ].map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.path}
                    className="text-saffron-50/70 hover:text-saffron-300 transition-colors text-sm"
                  >
                    → {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <p className="text-xs uppercase tracking-widest text-saffron-400 font-semibold">
              Get in Touch
            </p>
            <ul className="mt-4 space-y-3 text-sm text-saffron-50/70">
              <li>📞 +91 7340150780, +91 6367267190</li>
              <li>✉️ jainevents1996@gmail.com</li>
              <li>📍 Capital Galleria Mall, Alwar</li>
            </ul>
            <div className="mt-5 flex gap-2">
              {[
                { icon: "fa-brands fa-instagram", href: "https://www.instagram.com/jain_events_planner?igsh=OXJ4ZjBhZGgzZmxt" },
                { icon: "fa-brands fa-facebook-f", href: "https://www.facebook.com/share/17R8Btmojb/" },
                { icon: "fa-brands fa-whatsapp", href: "https://wa.me/917340150780" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full grid place-items-center border border-saffron-400/30 hover:bg-saffron-500/10 transition-colors"
                >
                  <i className={`${s.icon} text-saffron-300 text-sm`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-saffron-500/10 flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-sm text-saffron-100/50">
            © {new Date().getFullYear()} Jain Event Planner. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hidden md:block h-1 w-1 rounded-full bg-saffron-500/20" />
            <Link to="/privacy-policy" className="text-[10px] uppercase tracking-[0.2em] text-saffron-100/30 hover:text-saffron-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-saffron-500/10" />
            <Link to="/terms-conditions" className="text-[10px] uppercase tracking-[0.2em] text-saffron-100/30 hover:text-saffron-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
