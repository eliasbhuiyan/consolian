"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    IconBrightnessDown,
    IconBrightnessUp,
    IconCaretRightFilled,
    IconCaretUpFilled,
    IconChevronUp,
    IconMicrophone,
    IconMoon,
    IconPlayerSkipForward,
    IconPlayerTrackNext,
    IconPlayerTrackPrev,
    IconTable,
    IconVolume,
    IconVolume2,
    IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";
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
            className="min-h-[200vh] relative bg-slate-950 w-full h-4/5 overflow-hidden flex flex-col items-center py-0 md:py-80 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100  scale-[0.35] sm:scale-50">
            <div
                className="absolute top-20 flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
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
                    className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
                <div
                    className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
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
                    className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
                <motion.h2
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-white to-slate-200 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                    Build Websites the right way
                </motion.h2>
            </div>
            {/* Lid */}
            <Lid
                src="/macbookScreen.png"
                scaleX={scaleX}
                scaleY={scaleY}
                rotate={rotate}
                translate={translate} />
            {/* Base area */}
            <div
                className="w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl h-4/5 overflow-hidden relative -z-10">
                {/* above keyboard bar */}
                <div className="h-10 w-full relative">
                    <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
                </div>
                <div className="flex relative">
                    <div className="mx-auto w-[10%] h-4/5 overflow-hidden">
                        <SpeakerGrid />
                    </div>
                    <div className="mx-auto w-[80%] h-full">
                        <Keypad />
                    </div>
                    <div className="mx-auto w-[10%] h-4/5 overflow-hidden">
                        <SpeakerGrid />
                    </div>
                </div>
                <Trackpad />
                <div
                    className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
            </div>
        </div>)
    );
};

export const Lid = ({
    scaleX,
    scaleY,
    rotate,
    translate,
    src
}) => {
    return (
        (<div className="relative [perspective:800px]">
            <div
                style={{
                    transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
                    transformOrigin: "bottom",
                    transformStyle: "preserve-3d",
                }}
                className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative">
                <div
                    style={{
                        boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
                    }}
                    className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl [text-shadow:_7px_5px_8px_#ffffff]">
                        CONSOLIAN
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
                className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2">
                <div className="absolute inset-0 bg-[#272729] rounded-lg" />
                <Image
                    src={src}
                    alt="aceternity logo"
                    fill
                    className="object-left-top absolute rounded-lg inset-0 w-full h-full"
                />
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

export const Keypad = () => {
    return (
        (<div className="h-full rounded-md bg-[#050505] mx-1 p-1">
            {/* First Row */}
            <Row>
                <KBtn
                    className="w-10 items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start">
                    esc
                </KBtn>
                <KBtn>
                    <IconBrightnessDown className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F1</span>
                </KBtn>

                <KBtn>
                    <IconBrightnessUp className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F2</span>
                </KBtn>
                <KBtn>
                    <IconTable className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F3</span>
                </KBtn>
                <KBtn>
                    <IconSearch className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F4</span>
                </KBtn>
                <KBtn>
                    <IconMicrophone className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F5</span>
                </KBtn>
                <KBtn>
                    <IconMoon className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F6</span>
                </KBtn>
                <KBtn>
                    <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F7</span>
                </KBtn>
                <KBtn>
                    <IconPlayerSkipForward className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F8</span>
                </KBtn>
                <KBtn>
                    <IconPlayerTrackNext className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F8</span>
                </KBtn>
                <KBtn>
                    <IconVolume3 className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F10</span>
                </KBtn>
                <KBtn>
                    <IconVolume2 className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F11</span>
                </KBtn>
                <KBtn>
                    <IconVolume className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F12</span>
                </KBtn>
                <KBtn>
                    <div
                        className="h-4 w-4 rounded-full  bg-gradient-to-b from-20% from-neutral-900 via-black via-50% to-neutral-900 to-95% p-px">
                        <div className="bg-black h-full w-full rounded-full" />
                    </div>
                </KBtn>
            </Row>
            {/* Second row */}
            <Row>
                <KBtn>
                    <span className="block">~</span>
                    <span className="block mt-1">`</span>
                </KBtn>

                <KBtn>
                    <span className="block ">!</span>
                    <span className="block">1</span>
                </KBtn>
                <KBtn>
                    <span className="block">@</span>
                    <span className="block">2</span>
                </KBtn>
                <KBtn>
                    <span className="block">#</span>
                    <span className="block">3</span>
                </KBtn>
                <KBtn>
                    <span className="block">$</span>
                    <span className="block">4</span>
                </KBtn>
                <KBtn>
                    <span className="block">%</span>
                    <span className="block">5</span>
                </KBtn>
                <KBtn>
                    <span className="block">^</span>
                    <span className="block">6</span>
                </KBtn>
                <KBtn>
                    <span className="block">&</span>
                    <span className="block">7</span>
                </KBtn>
                <KBtn>
                    <span className="block">*</span>
                    <span className="block">8</span>
                </KBtn>
                <KBtn>
                    <span className="block">(</span>
                    <span className="block">9</span>
                </KBtn>
                <KBtn>
                    <span className="block">)</span>
                    <span className="block">0</span>
                </KBtn>
                <KBtn>
                    <span className="block">&mdash;</span>
                    <span className="block">_</span>
                </KBtn>
                <KBtn>
                    <span className="block">+</span>
                    <span className="block"> = </span>
                </KBtn>
                <KBtn
                    className="w-10 items-end justify-end pr-[4px] pb-[2px]"
                    childrenClassName="items-end">
                    delete
                </KBtn>
            </Row>
            {/* Third row */}
            <Row>
                <KBtn
                    className="w-10 items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start">
                    tab
                </KBtn>
                <KBtn>
                    <span className="block">Q</span>
                </KBtn>

                <KBtn>
                    <span className="block">W</span>
                </KBtn>
                <KBtn>
                    <span className="block">E</span>
                </KBtn>
                <KBtn>
                    <span className="block">R</span>
                </KBtn>
                <KBtn>
                    <span className="block">T</span>
                </KBtn>
                <KBtn>
                    <span className="block">Y</span>
                </KBtn>
                <KBtn>
                    <span className="block">U</span>
                </KBtn>
                <KBtn>
                    <span className="block">I</span>
                </KBtn>
                <KBtn>
                    <span className="block">O</span>
                </KBtn>
                <KBtn>
                    <span className="block">P</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`{`}</span>
                    <span className="block">{`[`}</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`}`}</span>
                    <span className="block">{`]`}</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`|`}</span>
                    <span className="block">{`\\`}</span>
                </KBtn>
            </Row>
            {/* Fourth Row */}
            <Row>
                <KBtn
                    className="w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start">
                    caps lock
                </KBtn>
                <KBtn>
                    <span className="block">A</span>
                </KBtn>

                <KBtn>
                    <span className="block">S</span>
                </KBtn>
                <KBtn>
                    <span className="block">D</span>
                </KBtn>
                <KBtn>
                    <span className="block">F</span>
                </KBtn>
                <KBtn>
                    <span className="block">G</span>
                </KBtn>
                <KBtn>
                    <span className="block">H</span>
                </KBtn>
                <KBtn>
                    <span className="block">J</span>
                </KBtn>
                <KBtn>
                    <span className="block">K</span>
                </KBtn>
                <KBtn>
                    <span className="block">L</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`:`}</span>
                    <span className="block">{`;`}</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`"`}</span>
                    <span className="block">{`'`}</span>
                </KBtn>
                <KBtn
                    className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]"
                    childrenClassName="items-end">
                    return
                </KBtn>
            </Row>
            {/* Fifth Row */}
            <Row>
                <KBtn
                    className="w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start">
                    shift
                </KBtn>
                <KBtn>
                    <span className="block">Z</span>
                </KBtn>
                <KBtn>
                    <span className="block">X</span>
                </KBtn>
                <KBtn>
                    <span className="block">C</span>
                </KBtn>
                <KBtn>
                    <span className="block">V</span>
                </KBtn>
                <KBtn>
                    <span className="block">B</span>
                </KBtn>
                <KBtn>
                    <span className="block">N</span>
                </KBtn>
                <KBtn>
                    <span className="block">M</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`<`}</span>
                    <span className="block">{`,`}</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`>`}</span>
                    <span className="block">{`.`}</span>
                </KBtn>{" "}
                <KBtn>
                    <span className="block">{`?`}</span>
                    <span className="block">{`/`}</span>
                </KBtn>
                <KBtn
                    className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]"
                    childrenClassName="items-end">
                    shift
                </KBtn>
            </Row>
            {/* sixth Row */}
            <Row>
                <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-end w-full pr-1">
                        <span className="block">fn</span>
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <IconWorld className="h-[6px] w-[6px]" />
                    </div>
                </KBtn>
                <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-end w-full pr-1">
                        <IconChevronUp className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="block">control</span>
                    </div>
                </KBtn>
                <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
                    <span></span>
                    <div className="flex justify-start w-full pl-1">
                        <span className="block">option</span>
                    </div>
                </KBtn>
                <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-end w-full pr-1">
                        <IconCommand className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="block">command</span>
                    </div>
                </KBtn>
                <KBtn className="w-[8.2rem]"></KBtn>
                <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-start w-full pl-1">
                        <IconCommand className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="block">command</span>
                    </div>
                </KBtn>
                <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
                    <span></span>
                    <div className="flex justify-start w-full pl-1">
                        <span className="block">option</span>
                    </div>
                </KBtn>
                <div
                    className="w-[4.9rem] mt-[2px] h-6 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center">
                    <KBtn className="w-6 h-3">
                        <IconCaretUpFilled className="h-[6px] w-[6px]" />
                    </KBtn>
                    <div className="flex">
                        <KBtn className="w-6 h-3">
                            <IconCaretLeftFilled className="h-[6px] w-[6px]" />
                        </KBtn>
                        <KBtn className="w-6 h-3">
                            <IconCaretDownFilled className="h-[6px] w-[6px]" />
                        </KBtn>
                        <KBtn className="w-6 h-3">
                            <IconCaretRightFilled className="h-[6px] w-[6px]" />
                        </KBtn>
                    </div>
                </div>
            </Row>
        </div>)
    );
};
export const KBtn = ({
    className,
    children,
    childrenClassName,
    backlit = true
}) => {
    return (
        (<div
            className={cn(
                "p-[0.5px] rounded-[4px]",
                backlit && "bg-white/[0.2] shadow-xl shadow-white hover:scale-125 cursor-pointer"
            )}>
            <div
                className={cn(
                    "h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center",
                    className
                )}
                style={{
                    boxShadow:
                        "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
                }}>
                <div
                    className={cn(
                        "text-neutral-200 text-[5px] w-full flex justify-center items-center flex-col",
                        childrenClassName,
                        backlit && "text-white"
                    )}>
                    {children}
                </div>
            </div>
        </div>)
    );
};

export const Row = ({
    children
}) => {
    return (
        (<div className="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
            {children}
        </div>)
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