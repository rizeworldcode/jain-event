import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Marquee from "../components/Marquee";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Blogs from "../components/Blogs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Marquee />
      <Gallery />
      <Testimonials />
      <Blogs />
      <Contact />
    </>
  );
}
