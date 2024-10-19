import Image from "next/image";
import Banner from "./components/Home/Banner";
import Services from "./components/Home/Services";
import { BackgroundBeams } from "./components/Home/BackgroundBeams";
import { MacbookScroll } from "./components/Home/MackbookScroll";

export default function Home() {
  return (
    <>
      <Banner />
      <MacbookScroll />
      {/* <BackgroundBeams /> */}
      <Services />
    </>
  );
}
