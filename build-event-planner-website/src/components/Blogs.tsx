import { Link } from "react-router-dom";

export default function Blogs() {
  const posts = [
    { id: "royal-rajasthani-weddings-2024", title: "Top 10 Wedding Trends in Rajasthan", date: "Oct 12, 2023", img: "/Wedding plan.jpg" },
    { id: "jain-wedding-rituals", title: "How to Plan a Divine Bhajan Sandhya", date: "Sep 28, 2023", img: "/Bhajan.jpg" },
    { id: "luxury-corporate-events", title: "Choosing the Perfect Varmala Concept", date: "Aug 15, 2023", img: "/Choosing the Perfect Varmala.avif" },
  ];

  return (
    <section id="blogs" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[#0b0608]" />
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-saffron-900/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <span className="text-[10px] tracking-[0.5em] uppercase text-saffron-500 font-black mb-6 block">— Our Journal</span>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-semibold text-white leading-tight">
              Latest <span className="text-gradient-gold italic pr-4">Insights.</span>
            </h2>
          </div>
          <Link 
            to="/blogs" 
            className="group flex items-center gap-4 text-saffron-400 font-black uppercase tracking-[0.2em] text-xs hover:gap-6 transition-all"
          >
            Explore All Posts <i className="fa-solid fa-arrow-right-long text-lg"></i>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {posts.map((post) => (
            <Link 
              to={`/blogs/${post.id}`} 
              key={post.title} 
              className="group flex flex-col bg-white/3 border border-white/10 rounded-[3rem] overflow-hidden hover:bg-white/5 hover:border-saffron-500/30 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transition-all duration-700 hover:-translate-y-4"
            >
              <div className="aspect-4/3 overflow-hidden relative">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0b0608]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="p-10 lg:p-12 flex flex-col grow">
                <div className="flex items-center gap-3 text-[9px] text-saffron-400/40 font-black uppercase tracking-[0.2em] mb-6">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-saffron-500/20" />
                  <span>5 min read</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-semibold text-white group-hover:text-saffron-300 transition-colors leading-tight mb-8">
                  {post.title}
                </h3>
                
                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-saffron-400 text-[10px] font-black uppercase tracking-[0.2em]">Read More</span>
                  <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-saffron-400 group-hover:bg-saffron-500 group-hover:text-[#0b0608] group-hover:border-transparent transition-all duration-500">
                    <i className="fa-solid fa-chevron-right text-[10px]"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
