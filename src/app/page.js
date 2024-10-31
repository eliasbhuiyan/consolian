import Banner from "./components/Home/Banner";
import Services from "./components/Home/Services";
import { BackgroundBeams } from "./components/Home/BackgroundBeams";
import { MacbookScroll } from "./components/Framer/MackbookScroll";
import ProductParallax from "./components/Home/ProductParallax";
import Skills from "./components/Home/Skills";
import { Portfolio } from "./components/Home/Portfolio";
import Testimonial from "./components/Home/Testimonial";
import FAQ from "./components/Home/FAQ";
import About from "./components/Home/About";
export default function Home() {
  return (
    <>
      <Banner />
      <MacbookScroll />
      {/* <BackgroundBeams /> */}
      <Services />
      <ProductParallax />
      <Skills />
      <Portfolio />
      <Testimonial />
      <About />
      <FAQ />
    </>
  );
} 
