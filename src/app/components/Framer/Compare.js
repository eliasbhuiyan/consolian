import { SparklesCore } from "./Sparkles";
import Image from "next/image";
import  firstImage from "../../../../public/heroImages/compare.png"
export const Compare = ({  }) => {
  return (
    <div className="relative w-full md:w-2/5 h-full bg-white rounded-3xl overflow-hidden">
      <Image
        src={firstImage}
        alt="snippet"
        width={0}
        height={0}
        sizes="100%"
        className="w-full h-full"
        placeholder="blur"
        loading="lazy"
        />
      <div className="w-3/4 h-full rotate-90 absolute top-0 left-1/2 -translate-x-1/2 cliping">
        {/* Gradients */}
        <div className="absolute inset-x-0 top-1/2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
        <div className="absolute inset-x-0 top-1/2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
        <div className="absolute inset-x-0 top-1/2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm" />
        <div className="absolute inset-x-0 top-1/2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={0.8}
          particleDensity={800}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
};
