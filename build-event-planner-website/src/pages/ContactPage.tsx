
import { useState, ChangeEvent, FormEvent } from "react";

export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    eventType:"Wedding Planning",
    date: "",
    location: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const whatsappNumber = "917340150780";
    const messageText = `--------------------------------
New Event Inquiry

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Event Type: ${formData.eventType}
Date: ${formData.date}
Location: ${formData.location}
Message: ${formData.message}
--------------------------------`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);

    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "Wedding Planning",
      date: "",
      location: "",
      message: "",
    });
    setLoading(false);
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/b6.jpg" 
          alt="Contact Header" 
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0b0608]/90 via-[#0b0608]/60 to-[#0b0608]" />
        
        <div className="max-w-7xl mx-auto px-5 text-center relative z-10">
          <span className="text-xs tracking-[0.5em] uppercase text-saffron-400 font-bold mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-semibold text-white">
            Plan Your <span className="text-gradient-gold italic pr-4">Event</span>
          </h1>
          <p className="mt-6 text-saffron-50/60 max-w-xl mx-auto font-light">
            Ready to bring your vision to life? Contact us today for a consultation and let's start crafting your royal celebration.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-4xl text-white font-semibold mb-8">Contact Information</h2>
              <div className="grid gap-8">
                {[
                  { icon: "fa-location-dot", label: "Address", text: "Capital Galleria Mall, Manu Marg, 2nd Floor, C-SF 23, Alwar" },
                  { icon: "fa-phone", label: "Phone", text: "+91 7340150780, +91 6367267190, +91 7742759492" },
                  { icon: "fa-envelope", label: "Email", text: "jainevents1996@gmail.com" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="h-12 w-12 rounded-2xl bg-saffron-500/10 border border-saffron-500/20 flex items-center justify-center text-xl text-saffron-400 group-hover:scale-110 transition-transform">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="text-gold-400 text-xs uppercase tracking-widest font-bold mb-1">{item.label}</h4>
                      <p className="text-saffron-50 text-base whitespace-pre-line">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Follow Our Journey</h3>
              <div className="flex gap-4">
                {[
                  { id: "instagram", icon: "fa-brands fa-instagram", href: "https://www.instagram.com/jain_events_planner?igsh=OXJ4ZjBhZGgzZmxt" },
                  { id: "facebook", icon: "fa-brands fa-facebook-f", href: "https://www.facebook.com/share/17R8Btmojb/" },
                  { id: "whatsapp", icon: "fa-brands fa-whatsapp", href: "https://wa.me/917340150780" }
                ].map((social) => (
                  <a 
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-xl bg-saffron-500/5 border border-saffron-500/10 flex items-center justify-center text-xl text-saffron-200 hover:bg-saffron-500 hover:text-[#0b0608] transition-all duration-300"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div className="aspect-video w-full rounded-4xl overflow-hidden border border-saffron-500/20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.045130604574!2d76.6047342!3d27.5611098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397299a32a1c3587%3A0x8170b787a564ed4d!2sJain%20Event%20Planner!5e0!3m2!1sen!2sin!4v1778668631506!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#150a0d] p-10 sm:p-12 rounded-[3rem] border border-saffron-500/15 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 text-8xl">
              <i className="fa-solid fa-feather-pointed"></i>
            </div>
            
            <h2 className="font-display text-3xl text-white font-semibold mb-8 relative z-10">Enquiry Form</h2>
            
            <form className="space-y-6 relative z-10" onSubmit={sendMessage}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-saffron-400 font-bold ml-1">Full Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} type="text" required placeholder="Your Name" className="w-full bg-[#0b0608] border border-saffron-500/20 rounded-2xl px-6 py-4 text-white focus:border-saffron-500/50 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-saffron-400 font-bold ml-1">Email Address</label>
                  <input name="email" value={formData.email} onChange={handleChange} type="text" required placeholder="your@email.com" className="w-full bg-[#0b0608] border border-saffron-500/20 rounded-2xl px-6 py-4 text-white focus:border-saffron-500/50 outline-none transition-colors" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label  className="text-xs uppercase tracking-widest text-saffron-400 font-bold ml-1">Phone Number</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel" required placeholder="+91" className="w-full bg-[#0b0608] border border-saffron-500/20 rounded-2xl px-6 py-4 text-white focus:border-saffron-500/50 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-saffron-400 font-bold ml-1">Event Type</label>
                  <div className="relative">
                    <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full bg-[#0b0608] border border-saffron-500/20 rounded-2xl px-6 py-4 text-white focus:border-saffron-500/50 outline-none transition-colors appearance-none cursor-pointer">
                      <option>Wedding Planning</option>
                      <option>Bhajan Sandhya</option>
                      <option>Sangeet Night</option>
                      <option>Corporate Event</option>
                      <option>Other Celebration</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-saffron-400">
                      <i className="fa-solid fa-chevron-down text-xs"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-saffron-400 font-bold ml-1">Event Date</label>
                  <input name="date" value={formData.date} onChange={handleChange} type="date" required className="w-full bg-[#0b0608] border border-saffron-500/20 rounded-2xl px-6 py-4 text-white focus:border-saffron-500/50 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-saffron-400 font-bold ml-1">Location</label>
                  <input name="location" value={formData.location} onChange={handleChange} type="text" required placeholder="City or Venue" className="w-full bg-[#0b0608] border border-saffron-500/20 rounded-2xl px-6 py-4 text-white focus:border-saffron-500/50 outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-saffron-400 font-bold ml-1">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} required placeholder="Tell us about your event..." className="w-full bg-[#0b0608] border border-saffron-500/20 rounded-2xl px-6 py-4 text-white focus:border-saffron-500/50 outline-none transition-colors resize-none"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-5 rounded-2xl font-bold text-[#0b0608] btn-shimmer text-lg shadow-xl shadow-saffron-600/20 hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitted ? "✓ Request Received!" : loading ? "Sending..." : "Send Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
