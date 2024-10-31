"use client";
import Image from "next/image";
import { PortfolioTabs } from "../Framer/PortfolioTabs";

export function Portfolio() {
    const tabs = [
        {
            title: "Agency",
            value: "Agency",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Agency Websites</p>
                    <DummyContent />
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
                    <DummyContent />
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
                    <DummyContent />
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
                    <DummyContent />
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
                    <DummyContent />
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
                    <DummyContent />
                </div>
            ),
        },
    ];

    return (
        (<div
            className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <PortfolioTabs tabs={tabs} />
        </div>)
    );
}

const DummyContent = () => {
    return (
        (<Image
            src="/macbookScreen.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />)
    );
};
