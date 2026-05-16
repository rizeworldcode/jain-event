import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0b0608] text-saffron-50 overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Call Button */}
        <a
          href="tel:+917340150780"
          className="h-14 w-14 rounded-full grid place-items-center bg-saffron-500 text-[#0b0608] shadow-2xl shadow-saffron-500/40 hover:scale-110 transition-transform"
          aria-label="Call Us"
        >
          <i className="fa-solid fa-phone text-2xl"></i>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917340150780"
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 w-14 rounded-full grid place-items-center bg-green-500 text-white shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform animate-pulse"
          aria-label="WhatsApp"
        >
          <i className="fa-brands fa-whatsapp text-3xl"></i>
        </a>
      </div>
    </div>
  );
}
