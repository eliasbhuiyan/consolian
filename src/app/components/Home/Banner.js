import React from 'react'
import Link from 'next/link'
import { HeroBg } from '../Framer/HeroBg'
import { FlipWords } from '../Framer/FlipWords'
import { Compare } from '../Framer/Compare'

const Banner = () => {
    const words = ["Better", "Beautiful", "Modern"];
    return (
        <header id='banner' className="relative z-10 py-10 md:py-20 lg:py-24 overflow-hidden flex items-center justify-center bg-[url('/bg.jpg')] bg-no-repeat bg-cover bg-center" >
            <HeroBg />
            <div className='sm:mx-14 lg:mx-20 z-20 border bg-heroBg shadow-[0px_0px_28px_5px_rgba(255,255,255,1)] px-2 sm:px-6 lg:px-10'>
                <div className="pt-6 pb-4 flex justify-between border-b border-b-white">
                    <div>
                        <Link
                            href="/"
                            className="text-xl xl:text-3xl font-bold text-white cursor-pointer"
                        >
                            CONSOLIAN
                        </Link>
                    </div>
                    <button className='bg-transparent hover:bg-white text-white font-semibold hover:text-gray-700 text-xs xl:text-xl py-1 xl:py-2 px-4 border border-white rounded-full'>
                        Contact
                    </button>
                </div>
                <h1 className="text-white text-xs lg:text-lg xl:text-xl font-normal lg:font-bold flex justify-between">
                    <span>G</span>
                    <span>E</span>
                    <span>T</span>
                    <span>-</span>
                    <span>T</span>
                    <span>H</span>
                    <span>E</span>
                    <span>-</span>
                    <span>B</span>
                    <span>E</span>
                    <span>S</span>
                    <span>T</span>
                    <span>-</span>
                    <span>S</span>
                    <span>E</span>
                    <span>R</span>
                    <span>V</span>
                    <span>I</span>
                    <span>C</span>
                    <span>E</span>
                </h1>
                <div className='container flex flex-col md:flex-row items-center gap-6 py-10'>
                    <div className='w-full md:w-3/5 xl:w-1/2'>
                        <h2 className='text-white py-2 lg:py-8 text-[25px] lg:text-3xl xl:text-6xl font-semibold lg:font-bold'>Create Exparience With Us, Make Your <FlipWords words={words} className={"border bg-[rgba(171,162,162,0.26)] text-green-200"} /> Website & Grow Your Business. <span className='text-gray-400 text-base lg:text-xl xl:text-2xl font-semibold tracking-normal'>I am a passionate MERN Stack developer, dedicated to creating web applications that are not only functional but also aesthetically pleasing. Explore my portfolio to see how I can bring your ideas to life.</span></h2>
                    </div>
                    <Compare />
                </div>
            </div>
        </header>
    )
}

export default Banner