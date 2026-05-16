import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data";

const CATEGORIES = [
  "All",
  "Wedding Planning",
  "Jain Wedding Events",
  "Corporate Events",
  "Destination Wedding",
 
];

export default function BlogsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase()) || 
                            blog.desc.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const featuredBlog = blogs.find(b => b.trending) || blogs[0];

  return (
    <div className="min-h-screen bg-[#0b0608] pb-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-saffron-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-maroon-900/10 blur-[120px] rounded-full" />
      </div>

      {/* Header Section */}
      <section className="relative h-[45vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/reception & varmala.avif" 
          alt="Journal Header" 
          className="absolute inset-0 h-full w-full object-cover scale-105 animate-float-slow"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0b0608]/90 via-[#0b0608]/50 to-[#0b0608]" />
        
        <div className="max-w-7xl mx-auto px-5 relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="text-xs tracking-[0.6em] uppercase text-saffron-400 font-bold flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-saffron-500/30"></span>
              Jain Events Insights
              <span className="h-px w-8 bg-saffron-500/30"></span>
            </span>
          </div>
          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl font-semibold text-white mb-8 tracking-tight">
            Our <span className="text-gradient-gold italic pr-4">Journal</span>
          </h1>
          <p className="text-saffron-100/60 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed font-light">
            Step into our world of royal celebrations, expert planning tips, and the art of crafting unforgettable moments.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="sticky top-0 z-40 bg-[#0b0608]/80 backdrop-blur-xl border-b border-white/5 py-8 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Search */}
            <div className="relative w-full lg:w-[450px] group">
              <i className="fa-solid fa-magnifying-glass absolute left-6 top-1/2 -translate-y-1/2 text-saffron-500/40 group-focus-within:text-saffron-400 transition-colors"></i>
              <input 
                type="text" 
                placeholder="Search our articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-white placeholder:text-saffron-100/20 focus:outline-none focus:border-saffron-500/40 focus:bg-white/10 transition-all shadow-2xl"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full lg:w-auto no-scrollbar mask-fade-edges">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    whitespace-nowrap px-8 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-500 border
                    ${activeCategory === cat 
                      ? "bg-linear-to-r from-saffron-500 to-saffron-600 border-transparent text-[#0b0608] shadow-xl shadow-saffron-600/20 scale-105" 
                      : "bg-white/5 border-white/10 text-saffron-100/60 hover:border-saffron-500/30 hover:text-saffron-300 hover:bg-white/10"}
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-5 mt-24">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Main List */}
          <div className="lg:col-span-8 space-y-24">
            {/* Featured Post */}
            {(activeCategory === "All" && !search) && (
              <div className="group relative">
                <Link to={`/blogs/${featuredBlog.id}`} className="relative block rounded-[3.5rem] overflow-hidden border border-white/10 bg-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-saffron-500/30">
                  <div className="aspect-21/10 overflow-hidden relative">
                    <img 
                      src={featuredBlog.img} 
                      alt={featuredBlog.title} 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0b0608] via-[#0b0608]/40 to-transparent" />
                    
                    <div className="absolute top-10 left-10 flex gap-4">
                      <span className="bg-saffron-500 text-[#0b0608] px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">Trending</span>
                      <span className="bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] border border-white/20">{featuredBlog.category}</span>
                    </div>
                  </div>
                  
                  <div className="p-12 lg:p-16 relative">
                    <div className="flex items-center gap-4 text-saffron-400/60 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                      <span>{featuredBlog.date}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-saffron-500/30"></span>
                      <span>{featuredBlog.readTime || "5 min read"}</span>
                    </div>
                    
                    <h2 className="font-display text-4xl lg:text-6xl text-white font-semibold mb-8 group-hover:text-saffron-300 transition-colors leading-[1.1]">
                      {featuredBlog.title}
                    </h2>
                    <p className="text-saffron-100/50 text-xl leading-relaxed mb-10 font-light max-w-3xl">
                      {featuredBlog.desc}
                    </p>
                    
                    <div className="flex items-center justify-between border-t border-white/5 pt-10">
                      <div className="flex items-center gap-5">
                        <div className="h-14 w-14 rounded-2xl bg-linear-to-br from-saffron-500/20 to-maroon-500/20 border border-white/10 flex items-center justify-center text-saffron-400">
                          <i className="fa-solid fa-feather-pointed text-xl"></i>
                        </div>
                        <div>
                          <p className="text-white text-base font-semibold">Jain Events Editorial</p>
                          <p className="text-saffron-500/40 text-[10px] uppercase tracking-[0.2em] font-black">Official Guide</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-gold-400 font-black uppercase tracking-widest text-xs group-hover:gap-6 transition-all">
                        Read Story <i className="fa-solid fa-arrow-right-long text-lg"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Grid for other blogs */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {filteredBlogs.filter(b => (search || activeCategory !== "All" || b.id !== featuredBlog.id)).map((blog) => (
                <Link 
                  to={`/blogs/${blog.id}`} 
                  key={blog.id} 
                  className="group flex flex-col h-full bg-white/3 border border-white/10 rounded-[3rem] overflow-hidden hover:bg-white/5 hover:border-saffron-500/30 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transition-all duration-700 hover:-translate-y-3"
                >
                  <div className="aspect-4/3 overflow-hidden relative">
                    <img 
                      src={blog.img} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0b0608]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-8 left-8 px-5 py-2 rounded-xl bg-[#0b0608]/60 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-[0.2em] text-saffron-300">
                      {blog.category}
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col grow">
                    <div className="flex items-center gap-3 text-[10px] text-saffron-400/40 font-black uppercase tracking-[0.2em] mb-6">
                      <span>{blog.date}</span>
                      <span className="h-1 w-1 rounded-full bg-saffron-500/20" />
                      <span>{blog.readTime || "5 min read"}</span>
                    </div>
                    
                    <h3 className="font-display text-3xl text-white font-semibold mb-6 group-hover:text-saffron-300 transition-colors line-clamp-2 leading-tight">
                      {blog.title}
                    </h3>
                    
                    <p className="text-saffron-100/40 text-base leading-relaxed mb-10 line-clamp-3 font-light">
                      {blog.desc}
                    </p>
                    
                    <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                      <span className="text-saffron-400 text-[10px] font-black uppercase tracking-[0.2em]">Full Article</span>
                      <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-saffron-400 group-hover:bg-saffron-500 group-hover:text-[#0b0608] group-hover:border-transparent transition-all duration-500">
                        <i className="fa-solid fa-chevron-right text-[10px]"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredBlogs.length === 0 && (
              <div className="text-center py-32 bg-white/2 border border-dashed border-white/10 rounded-[4rem]">
                <div className="h-24 w-24 bg-saffron-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <i className="fa-solid fa-box-open text-4xl text-saffron-500/30"></i>
                </div>
                <h3 className="text-3xl text-white font-display font-medium mb-4">No stories found</h3>
                <p className="text-saffron-100/30 max-w-sm mx-auto mb-10 font-light">We couldn't find any articles matching your current filters. Try a different search term.</p>
                <button 
                  onClick={() => {setSearch(""); setActiveCategory("All");}} 
                  className="text-saffron-400 font-bold uppercase tracking-widest text-xs border-b border-saffron-500/20 pb-2 hover:border-saffron-500 transition-all"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-16 lg:pt-0">
            <div className="sticky top-32 space-y-16">
              {/* Trending Section */}
              <div className="bg-white/3 border border-white/10 rounded-[3rem] p-10 lg:p-12 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-8xl">
                  <i className="fa-solid fa-fire-flame-curved"></i>
                </div>
                <h4 className="font-display text-3xl text-white mb-10 border-b border-white/5 pb-6 flex items-center gap-4 relative z-10">
                   Trending <span className="text-gradient-gold italic">Now</span>
                </h4>
                <div className="space-y-10 relative z-10">
                  {blogs.filter(b => b.trending).slice(0, 3).map((blog, i) => (
                    <Link to={`/blogs/${blog.id}`} key={blog.id} className="group flex gap-6 items-start">
                      <span className="text-5xl font-display text-white/5 group-hover:text-saffron-500/20 transition-all duration-500 shrink-0">0{i+1}</span>
                      <div className="pt-2">
                        <h5 className="text-white font-medium group-hover:text-saffron-300 transition-colors leading-snug mb-3 text-lg">{blog.title}</h5>
                        <div className="flex items-center gap-3">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-saffron-400/40 font-black">{blog.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>



            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <section className="max-w-6xl mx-auto px-5 mt-40">
         <div className="relative p-16 lg:p-24 rounded-[5rem] bg-linear-to-br from-[#150a0d] to-[#0b0608] border border-white/10 text-center overflow-hidden shadow-2xl group">
            <div className="absolute top-0 right-0 p-16 opacity-[0.02] text-[20rem] group-hover:scale-110 transition-transform duration-[3s]">
              <i className="fa-solid fa-crown"></i>
            </div>
            <div className="absolute -bottom-24 -left-24 h-96 w-96 bg-saffron-500/5 blur-[120px] rounded-full" />
            
            <div className="relative z-10">
              <span className="text-xs tracking-[0.5em] uppercase text-saffron-400 font-black mb-8 block">Ready to create history?</span>
              <h2 className="font-display text-5xl lg:text-7xl text-white font-semibold mb-10 tracking-tight">Let's Plan Your <span className="text-gradient-gold italic pr-4">Royal Celebration</span></h2>
              <p className="text-saffron-100/40 max-w-2xl mx-auto mb-16 text-lg lg:text-xl font-light leading-relaxed">Our experts are ready to turn your dreams into a majestic reality with our signature luxury planning services.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="px-12 py-6 rounded-2xl bg-linear-to-r from-saffron-500 to-saffron-600 text-[#0b0608] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-saffron-600/30 hover:scale-105 active:scale-95 transition-all">Book a Consultation</Link>
                <Link to="/services" className="px-12 py-6 rounded-2xl bg-white/5 border border-white/10 text-saffron-400 font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all">Explore Services</Link>
              </div>
            </div>
         </div>
      </section>
    </div>
  );
}
