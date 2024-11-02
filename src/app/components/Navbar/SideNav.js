import React from "react";
import {
    IconHeartHandshake,
    IconHome,
    IconLayout,
    IconTerminal2,
} from "@tabler/icons-react";
import { PiHandGrabbingBold } from "react-icons/pi";
import Link from "next/link";

export function SideNav() {
    return (
        (<div className="w-20 max-w-20 h-fit bg-gradient-to-b from-white to-transparent border border-opacity-10 shadow-[0_25px_25px_rgba(0,0,0,0.05)] py-6 rounded-xl flex items-center justify-center fixed right-2 top-1/2 -translate-y-1/2 z-50 transition-all">
            <ul className="flex flex-col gap-6 items-center pr-1">
                <li>
                    <Link
                        href="/"
                        className="text-gray-500 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-20 hover:h-20 hover:mr-6 transition-all relative group"
                    >
                        <IconHome className="h-5 w-5" />
                        <span className="absolute -left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">Home</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="#services"
                        className="text-gray-500 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-20 hover:h-20 hover:mr-6 transition-all relative group"
                    >
                        <IconHeartHandshake className="h-5 w-5" />
                        <span className="absolute -left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">Services</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="#skills"
                        className="text-gray-500 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-20 hover:h-20 hover:mr-6 transition-all relative group"
                    >
                        <PiHandGrabbingBold className="h-5 w-5" />
                        <span className="absolute -left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">Skills</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="#portfolio"
                        className="text-gray-500 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-20 hover:h-20 hover:mr-6 transition-all relative group"
                    >
                        <IconTerminal2 className="h-5 w-5" />
                        <span className="absolute -left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">Portfolio</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="#about"
                        className="text-gray-500 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-20 hover:h-20 hover:mr-6 transition-all relative group"
                    >
                        <IconLayout className="h-5 w-5" />
                        <span className="absolute -left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">About</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="#faq"
                        className="text-gray-500 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:w-20 hover:h-20 hover:mr-6 transition-all relative group"
                    >
                        <IconLayout className="h-5 w-5" />
                        <span className="absolute -left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-200 border border-slate-300 rounded text-primary text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">FAQ</span>
                    </Link>
                </li>
            </ul>
        </div>)
    );
}
