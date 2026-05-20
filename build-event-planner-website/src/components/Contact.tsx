import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Wedding",
    date: "",
    location: "",
    message: "",
  });

  const handle = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const whatsappNumber = "917340150780";
    const messageText = `--------------------------------
New Event Inquiry

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Event Type: ${form.eventType}
Date: ${form.date}
Location: ${form.location}
Message: ${form.message}
--------------------------------`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);

    setForm({
      name: "",
      phone: "",
      email: "",
      eventType: "Wedding",
      date: "",
      location: "",
      message: "",
    });
    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-[#0b0608] to-[#150a0d]" />
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/jain bg.png')",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#0b0608] via-[#0b0608]/80 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left text */}
          <div className="lg:col-span-2">
            <span className="text-xs tracking-[0.4em] uppercase text-saffron-400 font-semibold">
              — Let's Talk
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Plan Your <span className="text-gradient-gold italic pr-4">Dream Event</span> with Us.
            </h2>
            <p className="mt-5 text-saffron-50/75">
              Tell us a little about your celebration. Our team will reach out within 24 hours with a custom plan and quote.
            </p>

            <div className="mt-10 space-y-5">
              <ContactRow icon="fa-solid fa-phone" label="Call Us" value="+91 7340150780, +91 6367267190, +91 7742759492" />
              <ContactRow icon="fa-solid fa-envelope" label="Email" value="jainevents1996@gmail.com" />
              <ContactRow icon="fa-solid fa-location-dot" label="Office" value="Capital Galleria Mall, Manu Marg, 2nd Floor, C-SF 23, Alwar" />
              <ContactRow icon="fa-solid fa-clock" label="Hours" value="Mon – Sun · 24 Hours" />
            </div>

            <div className="mt-10 flex gap-3">
              {[
                { name: "Instagram", href: "https://www.instagram.com/jain_events_planner?igsh=OXJ4ZjBhZGgzZmxt", icon: "fa-brands fa-instagram" },
                { name: "Facebook", href: "https://www.facebook.com/share/17R8Btmojb/", icon: "fa-brands fa-facebook-f" },
                { name: "WhatsApp", href: "https://wa.me/917340150780", icon: "fa-brands fa-whatsapp" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-full grid place-items-center border border-saffron-400/30 text-lg hover:bg-saffron-500/10 hover:scale-110 transition-all"
                  aria-label={s.name}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <form
            onSubmit={handle}
            className="lg:col-span-3 rounded-3xl bg-[#150a0d]/80 backdrop-blur-xl border border-saffron-500/20 p-6 sm:p-10 shadow-2xl"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Your Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label="Phone Number"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                required
              />
              <Field
                label="Email"
                type="text"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
              />
              <div>
                <label className="block text-xs tracking-widest uppercase text-saffron-300/80 mb-2">
                  Event Type
                </label>
                <div className="relative">
                  <select
                    value={form.eventType}
                    onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                    className="w-full rounded-xl bg-[#0b0608] border border-saffron-500/20 px-4 py-3 text-saffron-50 focus:outline-none focus:border-saffron-400 transition-colors appearance-none cursor-pointer"
                  >
                    <option>Wedding</option>
                    <option>Sangeet / DJ Night</option>
                    <option>Haldi & Mehendi</option>
                    <option>Bhajan Sandhya</option>
                    <option>Reception</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-saffron-400">
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </div>
                </div>
              </div>
              <Field
                label="Event Date"
                type="date"
                value={form.date}
                onChange={(v) => setForm({ ...form, date: v })}
                required
              />
              <Field
                label="Location"
                value={form.location}
                onChange={(v) => setForm({ ...form, location: v })}
                required
                placeholder="City or Venue"
              />
            </div>

            <div className="mt-5">
              <label className="block text-xs tracking-widest uppercase text-saffron-300/80 mb-2">
                Tell us about your event
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                required
                placeholder="Venue, theme, special requirements..."
                className="w-full rounded-xl bg-[#0b0608] border border-saffron-500/20 px-4 py-3 text-saffron-50 placeholder:text-saffron-100/30 focus:outline-none focus:border-saffron-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-7 w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-[#0b0608] btn-shimmer shadow-2xl shadow-saffron-600/40 hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitted ? "✓ Request Received — We'll Call You Soon!" : loading ? "Sending..." : "Send Enquiry"}
              {!submitted && !loading && (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            <p className="mt-3 text-xs text-center text-saffron-100/50">
              Your details are safe with us. We'll never share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-12 w-12 rounded-xl grid place-items-center bg-saffron-500/10 border border-saffron-400/20 text-xl">
         <i className={`${icon} text-gradient-gold`}></i>
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-saffron-300/70">{label}</p>
        <p className="text-saffron-50 mt-1 text-sm whitespace-pre-line">
          {value}
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs tracking-widest uppercase text-saffron-300/80 mb-2">
        {label} {required && <span className="text-saffron-400">*</span>}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl bg-[#0b0608] border border-saffron-500/20 px-4 py-3 text-saffron-50 placeholder:text-saffron-100/30 focus:outline-none focus:border-saffron-400 transition-colors"
      />
    </div>
  );
}
