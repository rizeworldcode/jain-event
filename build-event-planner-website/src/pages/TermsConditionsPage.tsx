
export default function TermsConditionsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using the services of Jain Event Planner, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our services."
    },
    {
      title: "Services Information",
      content: "Jain Event Planner provides luxury event management services, including but not limited to weddings, corporate events, and religious ceremonies. We reserve the right to modify or discontinue any service without prior notice."
    },
    {
      title: "Booking & Payments",
      content: "A booking is confirmed only after the receipt of the initial deposit. All payments must be made according to the schedule agreed upon in the service contract. Delay in payments may lead to cancellation of services."
    },
    {
      title: "Event Responsibilities",
      content: "While we strive for perfection, some aspects of events depend on external factors like weather or third-party vendors. Clients are responsible for providing accurate information and timely approvals to ensure smooth execution."
    },
    {
      title: "Cancellation Policy",
      content: "Cancellations must be submitted in writing. Refunds of deposits and payments are subject to the specific terms mentioned in your service contract, depending on the proximity of the cancellation to the event date."
    },
    {
      title: "Intellectual Property",
      content: "All content, designs, and photographs displayed on this website are the property of Jain Event Planner unless otherwise stated. Unauthorized use of this material is prohibited."
    },
    {
      title: "User Conduct",
      content: "Users agree to use our website and services for lawful purposes only. Any attempt to disrupt the website's functionality or harass our staff will lead to immediate termination of access."
    },
    {
      title: "Liability Limitation",
      content: "Jain Event Planner shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our services or website, beyond the total amount paid by the client for the specific service."
    },
    {
      title: "Contact Information",
      content: "For any queries regarding these Terms & Conditions, please reach out to us:\nEmail: jainevents1996@gmail.com\nPhone: +91 7340150780\nAddress: Capital Galleria Mall, Alwar, Rajasthan"
    }
  ];

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/b4.jpg" 
          alt="Terms and Conditions" 
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0b0608]/90 via-[#0b0608]/60 to-[#0b0608]" />
        
        <div className="max-w-7xl mx-auto px-5 text-center relative z-10">
          <span className="text-xs tracking-[0.5em] uppercase text-saffron-400 font-bold mb-4 block">
            Service Agreement
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-semibold text-white">
            Terms & <span className="text-gradient-gold italic">Conditions</span>
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

        <div className="mt-24 p-10 rounded-[3rem] bg-white/5 border border-white/10 text-center text-saffron-100/50 italic font-light">
          Last Updated: May 2026. These terms are subject to change without notice.
        </div>
      </section>
    </div>
  );
}
