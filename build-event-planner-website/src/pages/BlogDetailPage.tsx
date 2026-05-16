import { useParams, Link } from "react-router-dom";
import { blogs } from "../data";

export default function BlogDetailPage() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0608]">
        <div className="text-center">
          <h2 className="text-5xl font-display text-white mb-8">Journal Entry Not Found</h2>
          <Link to="/blogs" className="text-saffron-400 hover:text-saffron-300 font-bold uppercase tracking-widest text-xs border-b border-saffron-500/20 pb-2 hover:border-saffron-500 transition-all">
            Return to All Stories
          </Link>
        </div>
      </div>
    );
  }

  const relatedBlogs = blogs.filter(b => b.id !== blog.id && b.category === blog.category).slice(0, 3);
  const trendingBlogs = blogs.filter(b => b.id !== blog.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0b0608] pb-24 overflow-hidden">
      {/* Blog Hero Section */}
      <section className="relative h-[80vh] lg:h-[95vh] overflow-hidden">
        <img 
          src={blog.img} 
          alt={blog.title} 
          className="h-full w-full object-cover transition-transform duration-[3s] scale-105 hover:scale-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0b0608] via-[#0b0608]/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-[#0b0608]/40 via-transparent to-transparent" />
        
        <div className="absolute bottom-0 inset-x-0 pb-20 lg:pb-32 px-5">
          <div className="max-w-6xl mx-auto">
            <Link 
              to="/blogs" 
              className="inline-flex items-center gap-3 text-saffron-400 font-black mb-10 hover:translate-x-[-8px] transition-transform uppercase tracking-[0.3em] text-[10px]"
            >
              <i className="fa-solid fa-arrow-left-long text-lg"></i>
              Back to Journal
            </Link>
            
            <div className="flex flex-wrap items-center gap-5 mb-8">
               <span className="px-6 py-2 rounded-xl bg-saffron-500 text-[#0b0608] text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-saffron-600/20">
                {blog.category}
              </span>
              <span className="text-saffron-100/60 text-sm font-medium tracking-wide flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-saffron-500/40"></span>
                {blog.date}
                <span className="h-1 w-1 rounded-full bg-saffron-500/40"></span>
                {blog.readTime || "5 min read"}
              </span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-7xl lg:text-9xl font-semibold text-white leading-none mb-10 tracking-tight max-w-5xl">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-5 mt-24 lg:mt-32">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Sticky Share Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-40 flex flex-col items-center gap-8">
              <span className="text-[9px] uppercase tracking-[0.5em] text-saffron-500/40 vertical-text font-black mb-6">Spread the Story</span>
              {["facebook-f", "instagram", "whatsapp", "twitter"].map((icon) => (
                <button key={icon} className="h-14 w-14 rounded-2xl border border-white/10 flex items-center justify-center text-saffron-400/60 hover:bg-saffron-500 hover:text-[#0b0608] hover:border-transparent transition-all duration-500 hover:shadow-xl hover:shadow-saffron-600/20">
                  <i className={`fa-brands fa-${icon} text-lg`}></i>
                </button>
              ))}
            </div>
          </aside>

          {/* Main Article Content */}
          <article className="lg:col-span-7">
            <div className="max-w-none">
              {/* Intro */}
              <div className="relative mb-20">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-linear-to-b from-saffron-500 to-transparent rounded-full opacity-40"></div>
                <p className="text-2xl lg:text-4xl text-saffron-50 leading-relaxed font-display italic pl-10 lg:pl-16">
                  {blog.content.intro}
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-24 text-saffron-100/70 text-lg lg:text-xl leading-relaxed font-light">
                {blog.content.sections.map((section, idx) => (
                  <div key={idx} className="space-y-10 group">
                    <h2 className="font-display text-4xl lg:text-5xl text-white font-semibold pt-6 tracking-tight group-hover:text-saffron-300 transition-colors duration-500">
                      {section.heading}
                    </h2>
                    <p className="text-saffron-100/60">{section.text}</p>
                    
                    {section.bullets && (
                      <ul className="grid sm:grid-cols-2 gap-6 list-none pl-0 mt-12">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-4 bg-white/3 border border-white/10 p-6 rounded-4xl hover:bg-white/5 hover:border-saffron-500/20 transition-all duration-500">
                            <div className="h-6 w-6 rounded-full bg-saffron-500/10 flex items-center justify-center shrink-0 mt-1">
                              <i className="fa-solid fa-check text-[10px] text-saffron-400"></i>
                            </div>
                            <span className="text-base font-medium text-saffron-100/80">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {section.table && (
                      <div className="my-16 overflow-hidden rounded-[3rem] border border-white/10 bg-white/2 shadow-2xl">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-white/5 border-b border-white/10">
                              <th className="px-10 py-6 text-[10px] uppercase tracking-[0.2em] text-saffron-400 font-black">Category</th>
                              <th className="px-10 py-6 text-[10px] uppercase tracking-[0.2em] text-saffron-400 font-black">Investment</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {section.table.map((row: any, i: number) => (
                              <tr key={i} className="hover:bg-white/5 transition-colors">
                                <td className="px-10 py-6 text-white font-medium text-base">{row.label}</td>
                                <td className="px-10 py-6 text-saffron-300 font-semibold text-base">{row.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    
                    {section.quote && (
                      <div className="my-20 p-12 lg:p-20 bg-linear-to-br from-white/5 to-transparent border-y border-white/10 text-center relative overflow-hidden rounded-[4rem]">
                        <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-9xl">
                          <i className="fa-solid fa-quote-right"></i>
                        </div>
                        <i className="fa-solid fa-quote-left text-5xl text-saffron-500/20 mb-8 block"></i>
                        <p className="font-display text-3xl lg:text-5xl text-white italic relative z-10 leading-tight">
                          "{section.quote}"
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Article Gallery */}
                {blog.content.gallery && (
                  <div className="grid grid-cols-2 gap-8 my-24">
                    {blog.content.gallery.map((img, i) => (
                      <div key={i} className={`rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group/img ${i === 0 ? 'aspect-square lg:aspect-video col-span-2' : 'aspect-square'}`}>
                         <img 
                          src={img} 
                          alt="Event Detail" 
                          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover/img:scale-110" 
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Conclusion */}
                <div className="pt-20 border-t border-white/10 relative">
                   <div className="absolute -top-px left-0 w-24 h-px bg-saffron-500"></div>
                   <h3 className="font-display text-4xl text-white mb-8 tracking-tight">Final Thoughts</h3>
                   <p className="text-saffron-100/50 italic leading-relaxed text-xl">{blog.content.conclusion}</p>
                </div>
              </div>
            </div>

            {/* Mobile Share Buttons */}
            <div className="lg:hidden mt-24 pt-10 border-t border-white/10">
               <p className="text-[10px] uppercase tracking-[0.3em] text-saffron-500/60 font-black mb-8">Share this article</p>
               <div className="flex gap-6">
                {["facebook-f", "instagram", "whatsapp"].map((icon) => (
                  <button key={icon} className="h-16 w-16 rounded-2xl border border-white/10 flex items-center justify-center text-saffron-400">
                    <i className={`fa-brands fa-${icon} text-xl`}></i>
                  </button>
                ))}
              </div>
            </div>
          </article>

          {/* Right Sidebar - Related & Trending */}
          <aside className="lg:col-span-4 space-y-16">
            {/* Related Posts */}
            <div className="bg-white/3 border border-white/10 rounded-[3.5rem] p-10 lg:p-12 sticky top-40 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.02] text-7xl">
                <i className="fa-solid fa-book-open"></i>
              </div>
              <h4 className="font-display text-3xl text-white mb-10 border-b border-white/5 pb-6 relative z-10">Related <span className="text-gradient-gold italic">Stories</span></h4>
              <div className="space-y-12 relative z-10">
                {(relatedBlogs.length > 0 ? relatedBlogs : trendingBlogs).map((rBlog) => (
                  <Link to={`/blogs/${rBlog.id}`} key={rBlog.id} className="group block">
                    <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-lg">
                      <img src={rBlog.img} alt={rBlog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-saffron-500 font-black mb-3 block">{rBlog.category}</span>
                    <h5 className="text-white text-lg font-semibold group-hover:text-saffron-300 transition-colors leading-tight">
                      {rBlog.title}
                    </h5>
                  </Link>
                ))}
              </div>

              {/* Newsletter Small */}
              <div className="mt-16 pt-10 border-t border-white/5">
                 <p className="text-white font-display text-2xl mb-6 leading-tight">Never Miss a <span className="text-gradient-gold italic">Story</span></p>
                 <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-sm text-white pr-16 focus:outline-none focus:border-saffron-500/40 transition-all" 
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 bg-saffron-500 text-[#0b0608] rounded-xl grid place-items-center shadow-lg shadow-saffron-600/20 hover:scale-105 active:scale-95 transition-all">
                      <i className="fa-solid fa-paper-plane text-xs"></i>
                    </button>
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
