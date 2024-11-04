"use client";
import {
    IconHeartHandshake,
    IconHome,
    IconLayout,
    IconTerminal2,
} from "@tabler/icons-react";
import {
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import { PiHandGrabbingBold } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";
export function SideNav() {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);
    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            let direction = current - scrollYProgress.getPrevious();
            if (direction < 0) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
    });

    return (
        <div className={`w-full md:w-16 h-12 md:h-fit bg-gradient-to-b from-white to-transparent border border-opacity-10 shadow-[0_25px_25px_rgba(0,0,0,0.05)] py-2 md:py-6 md:rounded-xl flex flex-row md:flex-col items-center justify-center gap-2 fixed right-0 md:right-2 bottom-0 md:bottom-1/2 md:translate-y-1/2 z-50 transition-all duration-500 ${visible ? "translate-y-0 md:translate-x-0" : "translate-y-full md:translate-x-full"}`}>
            <button
                onClick={() => handleScroll('banner')}
                className="text-gray-500 w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-12 hover:h-12 hover:md:w-20 hover:md:h-20 hover:mb-2 md:hover:mb-0 md:hover:mr-6 transition-all duration-200 group relative md:[&:hover+*]:w-16 md:[&:hover+*]:h-16"
            >
                <IconHome className="h-3 w-4 md:h-5 md:w-5" />
                <span className="absolute left-1/2 -top-8 md:-left-16 md:top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-[10px] md:text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">Home</span>
            </button>
            <button
                onClick={() => handleScroll('services')}
                className="text-gray-500 w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-12 hover:h-12 hover:md:w-20 hover:md:h-20 hover:mb-2 md:hover:mb-0 md:hover:mr-6 transition-all duration-200 group relative md:[&:hover+*]:w-16 md:[&:hover+*]:h-16"
            >
                <IconHeartHandshake className="h-3 w-4 md:h-5 md:w-5" />
                <span className="absolute left-1/2 -top-8 md:-left-16 md:top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-[10px] md:text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">Services</span>
            </button>
            <button
                onClick={() => handleScroll('skills')}
                className="text-gray-500 w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-12 hover:h-12 hover:md:w-20 hover:md:h-20 hover:mb-2 md:hover:mb-0 md:hover:mr-6 transition-all duration-200 group relative md:[&:hover+*]:w-16 md:[&:hover+*]:h-16"
            >
                <PiHandGrabbingBold className="h-3 w-4 md:h-5 md:w-5" />
                <span className="absolute left-1/2 -top-8 md:-left-16 md:top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-[10px] md:text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">Skills</span>
            </button>
            <button
                onClick={() => handleScroll('portfolio')}
                className="text-gray-500 w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-12 hover:h-12 hover:md:w-20 hover:md:h-20 hover:mb-2 md:hover:mb-0 md:hover:mr-6 transition-all duration-200 group relative md:[&:hover+*]:w-16 md:[&:hover+*]:h-16"
            >
                <IconTerminal2 className="h-3 w-4 md:h-5 md:w-5" />
                <span className="absolute left-1/2 -top-8 md:-left-16 md:top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-[10px] md:text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">Portfolio</span>
            </button>
            <button
                onClick={() => handleScroll('about')}
                className="text-gray-500 w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-12 hover:h-12 hover:md:w-20 hover:md:h-20 hover:mb-2 md:hover:mb-0 md:hover:mr-6 transition-all duration-200 group relative md:[&:hover+*]:w-16 md:[&:hover+*]:h-16"
            >
                <IconLayout className="h-3 w-4 md:h-5 md:w-5" />
                <span className="absolute left-1/2 -top-8 md:-left-16 md:top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-[10px] md:text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">About</span>
            </button>
            <button
                onClick={() => handleScroll('contact')}
                className="text-gray-500 w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-12 hover:h-12 hover:md:w-20 hover:md:h-20 hover:mb-2 md:hover:mb-0 md:hover:mr-6 transition-all duration-200 group relative md:[&:hover+*]:w-16 md:[&:hover+*]:h-16"
            >
                <RiContactsFill className="h-3 w-4 md:h-5 md:w-5" />
                <span className="absolute left-1/2 -top-8 md:-left-16 md:top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-[10px] md:text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">Contact</span>
            </button>
            <button
                onClick={() => handleScroll('faq')}
                className="text-gray-500 w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-12 hover:h-12 hover:md:w-20 hover:md:h-20 hover:mb-2 md:hover:mb-0 md:hover:mr-6 transition-all duration-200 group relative md:[&:hover+*]:w-16 md:[&:hover+*]:h-16"
            >
                <IconLayout className="h-3 w-4 md:h-5 md:w-5" />
                <span className="absolute left-1/2 -top-8 md:-left-16 md:top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-[10px] md:text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">FAQ</span>
            </button>
        </div>
    );
}





