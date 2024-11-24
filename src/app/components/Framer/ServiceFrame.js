"use client";;
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { SparklesCore } from "./Sparkles";

export const ServiceFrame = ({
    data
}) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        (<div
            className="w-full bg-black font-sans md:px-10"
            ref={containerRef}>
            <div className="pt-20 md:pt-0 md:h-96 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                <h2 className="text-3xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-20">
                    Our Services
                </h2>
                <div className="w-full h-40 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-0 top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-0 top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-0 top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-0 top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(160px_120px_at_top,transparent_20%,white)] md:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                        <div
                            className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div
                                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                                <div
                                    className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
                            </div>
                            <h3
                                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3
                                className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
                </div>
            </div>
        </div>)
    );
};
