import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { path: "/services", label: "Services" },
  { path: "/gallery", label: "Gallery" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" },
  { path: "/blogs", label: "Blogs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-[#0b0608]/85 backdrop-blur-xl border-b border-saffron-500/20 py-3 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group transition-transform duration-500 hover:scale-105 active:scale-95"
        >
          <div className="relative h-12 w-12 flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Jain Event Planner Logo" 
              className="h-full w-auto object-contain brightness-110 drop-shadow-[0_0_12px_rgba(255,215,0,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.6)] transition-all"
            />
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg sm:text-xl font-semibold text-gradient-gold group-hover:text-saffron-300 transition-colors">
              Jain
            </p>
            <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-saffron-200/70 group-hover:text-saffron-400 transition-colors">
              Event Planner
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              className={({ isActive }) => `
                px-4 py-2 text-sm font-medium transition-colors relative group
                ${isActive ? "text-saffron-300" : "text-saffron-50/80 hover:text-saffron-300"}
              `}
            >
              {l.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-linear-to-r from-transparent via-gold-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform" />
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#0b0608] btn-shimmer shadow-lg shadow-saffron-600/30 hover:scale-105 transition-transform"
        >
          Plan Your Event
          <i className="fa-solid fa-arrow-right text-xs"></i>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden h-10 w-10 grid place-items-center rounded-lg border border-saffron-500/30 text-saffron-200"
          aria-label="Menu"
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-lg`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <div className="mx-5 rounded-2xl bg-[#150a0d]/95 border border-saffron-500/20 backdrop-blur-xl p-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `
                px-4 py-3 rounded-lg text-sm font-medium transition-all
                ${isActive ? "bg-saffron-500/10 text-saffron-300" : "text-saffron-50/90 hover:bg-saffron-500/10 hover:text-saffron-300"}
              `}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-5 py-3 rounded-xl font-semibold text-[#0b0608] btn-shimmer"
          >
            Plan Your Event →
          </Link>
        </div>
      </div>
    </header>
  );
}
