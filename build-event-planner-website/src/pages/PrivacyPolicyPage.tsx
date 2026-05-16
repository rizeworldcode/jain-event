import { Link } from "react-router-dom";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Introduction",
      content: "Welcome to Jain Event Planner. We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services."
    },
    {
      title: "Information We Collect",
      content: "We may collect personal information such as your name, email address, phone number, and event details when you fill out our contact or enquiry forms. We also collect non-personal data like browser type and IP address through cookies to improve our website experience."
    },
    {
      title: "How We Use Information",
      content: "The information we collect is used to respond to your enquiries, provide our event planning services, send you updates about your bookings, and improve our overall service quality. We do not sell or rent your personal information to third parties."
    },
    {
      title: "Cookies & Tracking",
      content: "Our website uses cookies to enhance user experience and analyze site traffic. You can choose to disable cookies through your browser settings, though this may affect some functionality of the website."
    },
    {
      title: "Third-Party Services",
      content: "We may use third-party service providers (such as Google Maps or WhatsApp) to facilitate our services. These providers have their own privacy policies and we recommend reviewing them."
    },
    {
      title: "Data Protection",
      content: "We implement a variety of security measures to maintain the safety of your personal information. Your data is stored in secure environments and is only accessible by authorized personnel."
    },
    {
      title: "User Rights",
      content: "You have the right to access, correct, or delete your personal information that we hold. If you wish to exercise these rights, please contact us using the information provided below."
    },
    {
      title: "Contact Information",
      content: "If you have any questions regarding this Privacy Policy, you may contact us at:\nEmail: jainevents1996@gmail.com\nPhone: +91 7340150780\nAddress: Capital Galleria Mall, Alwar, Rajasthan"
    }
  ];

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/b5.jpg" 
          alt="Privacy Policy" 
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0b0608]/90 via-[#0b0608]/60 to-[#0b0608]" />
        
        <div className="max-w-7xl mx-auto px-5 text-center relative z-10">
          <span className="text-xs tracking-[0.5em] uppercase text-saffron-400 font-bold mb-4 block">
            Legal Information
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-semibold text-white">
            Privacy <span className="text-gradient-gold italic">Policy</span>
          </h1>
          <div className="mt-6 divider-mandala mx-auto opacity-50" />
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-5 py-20">
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div key={index} className="group animate-rise" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-saffron-500/30"></div>
                <h2 className="font-display text-3xl text-white font-medium group-hover:text-saffron-300 transition-colors">
                  {section.title}
                </h2>
              </div>
              <p className="text-saffron-50/70 leading-relaxed text-lg font-light whitespace-pre-line pl-16 border-l border-white/5 ml-6">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-10 rounded-[3rem] bg-white/5 border border-white/10 text-center">
          <p className="text-saffron-100/60 mb-8">Have questions about your data?</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0b0608] btn-shimmer"
          >
            Contact Our Team
            <i className="fa-solid fa-envelope"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
