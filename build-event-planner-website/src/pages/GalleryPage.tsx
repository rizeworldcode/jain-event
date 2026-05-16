import { useState } from "react";
import { gallery } from "../data";

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const extendedGallery = [
    ...gallery,
    "/b1.avif",
    "/tp.avif",
    "/Plan a Bhajan.avif",
    "/Choosing the Perfect Varmala.avif",
    "/Wedding plan.jpg",
    "/dj 1.avif",
  ];

  const getTitle = (src: string) => {
    const name = src.split('/').pop()?.split('.')[0].toLowerCase() || "";
    if (name.includes('haldi')) return "Haldi Ceremony";
    if (name.includes('wedding')) return "Royal Wedding";
    if (name.includes('dj')) return "Sangeet & DJ Night";
    if (name.includes('bhajan')) return "Bhajan Sandhya";
    if (name.includes('reception')) return "Grand Reception";
    if (name.includes('corporate')) return "Corporate Event";
    if (name.includes('varmala')) return "Varmala Ceremony";
    if (name.includes('tp')) return "Theme Party";
    return "";
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/Wedding plan.jpg" 
          alt="Gallery Header" 
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0b0608]/90 via-[#0b0608]/60 to-[#0b0608]" />
        
        <div className="max-w-7xl mx-auto px-5 text-center relative z-10">
          <span className="text-xs tracking-[0.5em] uppercase text-saffron-400 font-bold mb-4 block">
            Visual Journey
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-semibold text-white">
            Our <span className="text-gradient-gold italic">Gallery</span>
          </h1>
          <p className="mt-6 text-saffron-50/60 max-w-xl mx-auto font-light">
            A glimpse into the royal celebrations and timeless moments we've crafted for our clients across India.
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {extendedGallery.map((img, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-3xl cursor-pointer ring-1 ring-saffron-500/20"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt={getTitle(img)}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0b0608]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-5 sm:p-10"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-10 right-10 text-white text-4xl hover:text-saffron-400 transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <img
            src={selectedImg}
            alt="Enlarged"
            className="max-h-full max-w-full object-contain rounded-xl shadow-2xl shadow-saffron-500/20 animate-rise"
          />
        </div>
      )}
    </div>
  );
}
