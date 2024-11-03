"use client";
import {
    IconHeartHandshake,
    IconHome,
    IconLayout,
    IconTerminal2,
} from "@tabler/icons-react";
import { PiHandGrabbingBold } from "react-icons/pi";
import Link from "next/link";
import { RiContactsFill } from "react-icons/ri";

export function SideNav() {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        (<div className="w-20 max-w-20 h-fit bg-gradient-to-b from-white to-transparent border border-opacity-10 shadow-[0_25px_25px_rgba(0,0,0,0.05)] py-6 rounded-xl flex flex-col items-center justify-center gap-2 fixed right-2 top-1/2 -translate-y-1/2 z-50 transition-all duration-200">
            <button
                onClick={() => handleScroll('banner')}
                className="text-gray-500 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-20 hover:h-20 hover:mr-6 transition-all duration-200 group relative [&:hover+*]:w-16 [&:hover+*]:h-16"
            >
                <IconHome className="h-5 w-5" />
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">Home</span>
            </button>
            <button
                onClick={() => handleScroll('services')}
                className="text-gray-500 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-20 hover:h-20 hover:mr-6 transition-all duration-200 group relative [&:hover+*]:w-16 [&:hover+*]:h-16"
            >
                <IconHeartHandshake className="h-5 w-5" />
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">Services</span>
            </button>
            <button
                onClick={() => handleScroll('skills')}
                className="text-gray-500 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-20 hover:h-20 hover:mr-6 transition-all duration-200 group relative [&:hover+*]:w-16 [&:hover+*]:h-16"
            >
                <PiHandGrabbingBold className="h-5 w-5" />
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">Skills</span>
            </button>
            <button
                onClick={() => handleScroll('portfolio')}
                className="text-gray-500 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-20 hover:h-20 hover:mr-6 transition-all duration-200 group relative [&:hover+*]:w-16 [&:hover+*]:h-16"
            >
                <IconTerminal2 className="h-5 w-5" />
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">Portfolio</span>
            </button>
            <button
                onClick={() => handleScroll('about')}
                className="text-gray-500 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-20 hover:h-20 hover:mr-6 transition-all duration-200 group relative [&:hover+*]:w-16 [&:hover+*]:h-16"
            >
                <IconLayout className="h-5 w-5" />
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">About</span>
            </button>
            <button
                onClick={() => handleScroll('faq')}
                className="text-gray-500 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-20 hover:h-20 hover:mr-6 transition-all duration-200 group relative [&:hover+*]:w-16 [&:hover+*]:h-16"
            >
                <RiContactsFill className="h-5 w-5" />
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">Contact</span>
            </button>
            <button
                onClick={() => handleScroll('faq')}
                className="text-gray-500 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-20 hover:h-20 hover:mr-6 transition-all duration-200 group relative [&:hover+*]:w-16 [&:hover+*]:h-16"
            >
                <IconLayout className="h-5 w-5" />
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">FAQ</span>
            </button>
        </div>)

    );
}
