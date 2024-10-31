"use client";
import Image from "next/image";
import { PortfolioTabs } from "../Framer/PortfolioTabs";
import Link from "next/link";
import { IoOpenOutline } from "react-icons/io5";

export function Portfolio() {
    const tabs = [
        {
            title: "Agency",
            value: "Agency",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Agency Website</p>
                    <Content />
                </div>
            ),
        },
        {
            title: "E-Commerce",
            value: "E-Commerce",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>E-Commerce</p>
                    <Content />
                </div>
            ),
        },
        {
            title: "Educational",
            value: "Educational",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Educational</p>
                    <Content />
                </div>
            ),
        },
        {
            title: "Dashbord",
            value: "Dashbord",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Dashbord</p>
                    <Content />
                </div>
            ),
        },
        {
            title: "Business",
            value: "Business",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Business</p>
                    <Content />
                </div>
            ),
        },
        {
            title: "Social Media",
            value: "social-media",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Social Media</p>
                    <Content />
                </div>
            ),
        },
        {
            title: "NPM Package",
            value: "npm-package",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>NPM Package</p>
                    <Content />
                </div>
            ),
        },
    ];

    return (
        (<section className="py-24">
            <div className="container">
                <div
                    className="[perspective:1000px] relative b flex flex-col items-start justify-start">
                    <PortfolioTabs tabs={tabs} />
                </div>
            </div>
        </section>)
    );
}

const Content = () => {
    return (
        <div className="grid grid-cols-3 gap-5 h-full">
            <div className="h-[20vh] rounded-xl overflow-hidden relative group">
                <Image src="/apper.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                <Link href="/" target="_blank" className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Agency Website <IoOpenOutline /></Link>
            </div>
            <div className="h-[20vh] rounded-xl overflow-hidden relative group">
                <Image src="/avada.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                <Link href="/" target="_blank" className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Agency Website <IoOpenOutline /></Link>
            </div>
            <div className="h-[20vh] rounded-xl overflow-hidden relative group">
                <Image src="/btls.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                <Link href="/" target="_blank" className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Agency Website <IoOpenOutline /></Link>
            </div>
            <div className="h-[20vh] rounded-xl overflow-hidden relative group">
                <Image src="/digital.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                <Link href="/" target="_blank" className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Agency Website <IoOpenOutline /></Link>
            </div>
            <div className="h-[20vh] rounded-xl overflow-hidden relative group">
                <Image src="/gym.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                <Link href="/" target="_blank" className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Agency Website <IoOpenOutline /></Link>
            </div>
            <div className="h-[20vh] rounded-xl overflow-hidden relative group">
                <Image src="/hinta.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                <Link href="/" target="_blank" className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Agency Website <IoOpenOutline /></Link>
            </div>
            <div className="h-[20vh] rounded-xl overflow-hidden relative group">
                <Image src="/hokah.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                <Link href="/" target="_blank" className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Agency Website <IoOpenOutline /></Link>
            </div>
            <div className="h-[20vh] rounded-xl overflow-hidden relative group">
                <Image src="/Walmart.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                <Link href="/" target="_blank" className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Agency Website <IoOpenOutline /></Link>
            </div>
            <div className="h-[20vh] rounded-xl overflow-hidden relative group">
                <Image src="/Walmart2.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                <Link href="/" target="_blank" className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Agency Website <IoOpenOutline /></Link>
            </div>
        </div>
    );
};