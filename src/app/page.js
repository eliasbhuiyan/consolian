import Banner from "./components/Home/Banner";
import Services from "./components/Home/Services";
import { MacbookScroll } from "./components/Framer/MackbookScroll";
import ProductParallax from "./components/Home/ProductParallax";
import Skills from "./components/Home/Skills";
import { Portfolio } from "./components/Home/Portfolio";
import Testimonial from "./components/Home/Testimonial";
import FAQ from "./components/Home/FAQ";
import About from "./components/Home/About";
import Footer from "./components/Home/Footer";
import Contact from "./components/Home/Contact";
export default function Home() {
  return (
    <>
      <Banner />
      <MacbookScroll />
      <Services />
      <ProductParallax />
      <Skills />
      <Portfolio />
      <Testimonial />
      <About />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
} 
