"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/app/lib/utils";

export const MacbookScroll = ({
    src,
    showGradient,
    title,
    badge
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window && window.innerWidth < 768) {
            setIsMobile(true);
        }
    }, []);

    const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 1.5]);
    const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, isMobile ? 1 : 1.5]);
    const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
    const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
    const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        (<div
            ref={ref}
            className="min-h-[200vh] relative bg-slate-950 w-full h-4/5 overflow-hidden flex flex-col items-center py-0 md:py-80 justify-start flex-shrink-0 [perspective:800px] transform">
            <div
                className="absolute top-5 md:top-20 flex w-full flex-1 scale-y-50 md:scale-y-125 scale-x-50 md:scale-x-100 items-center justify-center isolate z-0 ">
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]">
                    <div
                        className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div
                        className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]">
                    <div
                        className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div
                        className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div
                    className="absolute top-1/2 h-20 md:h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
                <div
                    className="absolute top-1/2 z-50 h-20 md:h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div
                    className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></motion.div>
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "></motion.div>
                <div
                    className="absolute inset-auto z-40 h-20 md:h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
                <motion.h2
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="md:mt-8 bg-gradient-to-br from-white to-slate-200 py-4 bg-clip-text text-center text-3xl md:text-5xl xl:text-7xl font-medium tracking-tight text-transparent z-50">
                    Build Websites the right way
                </motion.h2>
            </div>
            {/* <div className="w-full h-full mt-40 px-5"> */}
            {/* Lid */}
            <Lid
                src={src}
                scaleX={scaleX}
                scaleY={scaleY}
                rotate={rotate}
                translate={translate} />
            {/* Base area */}
            <div
                className="h-48 md:h-[22rem] w-full max-w-72 md:max-w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
                {/* above keyboard bar */}
                <div className="h-10 w-full relative">
                    <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
                </div>
                <div className="flex relative">
                    <div className="mx-auto w-[10%] overflow-hidden  h-full">
                        <SpeakerGrid />
                    </div>
                    <div className="mx-auto w-[80%] h-full">
                        {/* <Keypad /> */}
                        <Image src="/keybord.png" alt="keybord" width={400} height={400} layout="responsive" />
                    </div>
                    <div className="mx-auto w-[10%] overflow-hidden  h-full">
                        <SpeakerGrid />
                    </div>
                </div>
                <Trackpad />
                <div
                    className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
            </div>
            {/* </div> */}
        </div>)
    );
};
export const Lid = ({
    scaleX,
    scaleY,
    rotate,
    translate,
}) => {
    return (
        (<div className="relative [perspective:800px] w-full max-w-72 md:max-w-[32rem] mt-48 md:mt-0">
            <div
                style={{
                    transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
                    transformOrigin: "bottom",
                    transformStyle: "preserve-3d",
                }}
                className="h-36 md:h-[12rem] w-full max-w-72 md:max-w-[32rem] bg-[#010101] rounded-2xl p-2 relative">
                <div
                    style={{
                        boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
                    }}
                    className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center">
                    <span className="text-white">
                        Consolian
                    </span>
                </div>
            </div>
            <motion.div
                style={{
                    scaleX: scaleX,
                    scaleY: scaleY,
                    rotateX: rotate,
                    translateY: translate,
                    transformStyle: "preserve-3d",
                    transformOrigin: "top",
                }}
                className="h-72 md:h-96 w-full overflow-hidden max-w-72 md:max-w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2">
                <div className="absolute inset-0 bg-[#272729] rounded-lg" />
                <Image
                    src="/macbookScreen.png"
                    alt="consolian"
                    width={400} height={500} layout="responsive"
                    className="object-cover absolute rounded-lg inset-0" />
            </motion.div>
        </div>)
    );
};

export const Trackpad = () => {
    return (
        (<div
            className="w-[40%] mx-auto h-32  rounded-xl my-1"
            style={{
                boxShadow: "0px 0px 1px 1px #00000020 inset",
            }}></div>)
    );
};

export const SpeakerGrid = () => {
    return (
        (<div
            className="flex px-[0.5px] gap-[2px] mt-2 h-40"
            style={{
                backgroundImage:
                    "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
                backgroundSize: "3px 3px",
            }}></div>)
    );
};
