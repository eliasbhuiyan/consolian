import React from "react";
import Link from "next/link";
import { FlipWords } from "../Framer/FlipWords";
import { Compare } from "../Framer/Compare";
import ContactBtn from "./ContactBtn";

const Banner = () => {
  const words = ["Better", "Beautiful", "Modern"];
  return (
    <section
      id="banner"
      className="relative z-10 py-10 md:py-20 lg:py-24 overflow-hidden flex items-center justify-center bg-no-repeat bg-cover bg-center"
    >
      <div className="sm:mx-14 lg:mx-20 z-20 border bg-heroBg shadow-[0px_0px_28px_5px_rgba(255,255,255,1)] px-2 sm:px-6 lg:px-10">
        <div className="pt-6 pb-4 flex justify-between border-b border-b-white">
          <div>
            <Link
              href="/"
              className="text-xl xl:text-3xl font-bold text-white cursor-pointer"
            >
              CONSOLIAN
            </Link>
          </div>
          <ContactBtn/>
        </div>
        <h2 className="text-white text-xs lg:text-lg xl:text-xl font-normal lg:font-bold flex justify-between">
          <span>G</span>
          <span>E</span>
          <span>T</span>
          <span>-</span>
          <span>T</span>
          <span>H</span>
          <span>E</span>
          <span>-</span>
          <span>B</span>
          <span>E</span>
          <span>S</span>
          <span>T</span>
          <span>-</span>
          <span>S</span>
          <span>E</span>
          <span>R</span>
          <span>V</span>
          <span>I</span>
          <span>C</span>
          <span>E</span>
        </h2>
        <div className="container flex flex-col md:flex-row items-center gap-6 py-10">
          <div className="w-full md:w-3/5 xl:w-1/2">
            <h1 className="text-white text-[24px] lg:text-3xl xl:text-6xl font-semibold lg:font-bold md:!leading-[50px] lg:!leading-[80px] text-center md:text-start">
              Create Exparience With Us, Make Your{" "}
              <FlipWords
                words={words}
                className={
                  "border text-[20px] lg:text-3xl xl:text-5xl  bg-[rgba(171,162,162,0.26)] text-green-200"
                }
              />{" "}
              Website & Grow Your Business.
            </h1>
          </div>
          <Compare />
        </div>
      </div>
    </section>
  );
};

export default Banner;
