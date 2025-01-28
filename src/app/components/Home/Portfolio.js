"use client";
import Image from "next/image";
import { PortfolioTabs } from "../Framer/PortfolioTabs";
import { IoClose, IoOpenOutline } from "react-icons/io5";
import { useState } from "react";
import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import Link from "next/link";

export function Portfolio() {
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState("");
    const [screenSize, setScreenSize] = useState("100%");
    const tabs = [
        {
            title: "All",
            value: "All",
            content: (
                <div
                    className="w-full relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 h-full">
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="/thumble/marketree.jpg" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("https://marketree.vercel.app/") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Marketree <IoOpenOutline /></button>
                        </div>
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="/thumble/furniture.jpg" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("https://furnituremarket.vercel.app") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Furniture <IoOpenOutline /></button>
                        </div>
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="/thumble/easybuy.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("https://easybuy-one.vercel.app") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">EasyBuy <IoOpenOutline /></button>
                        </div>
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="/thumble/yourschool.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("https://yourschool.vercel.app") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">School management system <IoOpenOutline /></button>
                        </div>
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="/thumble/aiassistant.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("https://eb-aiassistant.vercel.app") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">AI Assistant <IoOpenOutline /></button>
                        </div>
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="/thumble/trust.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("https://stellix-wheat.vercel.app") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Crypto <IoOpenOutline /></button>
                        </div>
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="/thumble/profilesharing.jpg" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("https://profile-sharing.vercel.app/signin") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Profile Sharing <IoOpenOutline /></button>
                        </div>
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="/thumble/whassup.jpg" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("https://whassup-roan.vercel.app/login") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">WhaSsuP - Social Media Platform <IoOpenOutline /></button>
                        </div>
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="/thumble/dashbord.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("https://easybuy-dashbord.vercel.app") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Dashbord - E-Commerce <IoOpenOutline /></button>
                        </div>
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="/thumble/navbar.jpg" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("https://eb-responsive-navigation.vercel.app") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Responsive-Navigation - NPM <IoOpenOutline /></button>
                        </div>
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="/thumble/product-slider.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <Link href="https://www.npmjs.com/package/product-slide" target="_blank" className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Responsive-Navigation - NPM <IoOpenOutline /></Link>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "E-Commerce",
            value: "E-Commerce",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 h-full">
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="/thumble/marketree.jpg" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("https://marketree.vercel.app/") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Marketree <IoOpenOutline /></button>
                        </div>
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="/thumble/furniture.jpg" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("https://furnituremarket.vercel.app/") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">Furniture <IoOpenOutline /></button>
                        </div>
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="/thumble/easybuy.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("https://easybuy-one.vercel.app/") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">EasyBuy <IoOpenOutline /></button>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Educational",
            value: "Educational",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 h-full">
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="/thumble/yourschool.png" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("https://yourschool.vercel.app/") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">View <IoOpenOutline /></button>
                        </div>
                    </div>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 h-full">
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">View <IoOpenOutline /></button>
                        </div>
                    </div>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 h-full">
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">View <IoOpenOutline /></button>
                        </div>
                    </div>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 h-full">
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">View <IoOpenOutline /></button>
                        </div>
                    </div>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 h-full">
                        <div className="h-[20vh] sm:h-[40vh] md:h-[20vh] rounded-xl overflow-hidden relative group">
                            <Image src="" alt="a dream catcher" width={400} height={400} layout="responsive" className="absolute top-0 left-0 transition-all duration-1000 group-hover:-top-full" />
                            <button onClick={() => { setOpen(true), setUrl("") }} className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.3)] text-lg flex justify-center items-center gap-2 scale-0 group-hover:scale-100 transition-all">View <IoOpenOutline /></button>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        (<section id="portfolio" className="pt-10 md:py-24">
            <div className="container">
                <div
                    className="relative flex flex-col items-start justify-start">
                    <PortfolioTabs tabs={tabs} />
                </div>
            </div>
            {
                open &&
                <div className="h-screen w-full rounded-xl overflow-hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-[999999]">
                    <div className={`h-full m-auto flex flex-col items-center pb-10`}>
                        <div className="flex justify-center items-center text-brand bg-white py-4 text-3xl gap-4 relative w-full">
                            <button onClick={() => setScreenSize("100%")}>
                                <FaLaptop className="text-4xl" />
                            </button>
                            <button onClick={() => setScreenSize("768px")}>
                                <FaTabletAlt />
                            </button>
                            <button onClick={() => setScreenSize("375px")}>
                                <FaMobileAlt />
                            </button>
                            <button onClick={() => setOpen(false)} className="absolute top-4 right-4">
                                <IoClose className="text-4xl" />
                            </button>
                        </div>
                        <iframe src={url} frameborder="0" style={{ width: screenSize }} className="h-screen overflow-y-auto shadow-2xl"></iframe>
                    </div>
                </div>
            }
        </section>)
    );
}