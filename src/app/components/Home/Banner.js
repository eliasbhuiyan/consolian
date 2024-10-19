import React from 'react'
import Square3dbox from './Square3dbox'
import HeroSlide from './HeroSlide'
import Link from 'next/link'

const Banner = () => {
    return (
        <header className="relative pb-20 pt-24 overflow-hidden bg-brand" >
            {/* <video
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/hero_banner.mp4" type="video/mp4" />
            </video> */}
            {/* <HeroSlide /> */}
            <div className='mx-20 border bg-heroBg shadow-[0px_0px_28px_5px_rgba(255,255,255,1)]'>
                <div className="container pt-6 pb-4 flex justify-between border-b border-b-white">
                    <div>
                        <Link
                            href="/"
                            className="text-3xl font-bold text-white cursor-pointer"
                        >
                            CONSOLIAN
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center gap-10">
                        <button className='bg-transparent hover:bg-white text-white font-semibold hover:text-gray-700 py-2 px-4 border border-white rounded-full'>
                            Contact
                        </button>
                    </div>
                </div>
                <h1 className="text-white text-xl font-bold flex justify-between">
                    {/* <span>C</span>
                    <span>O</span>
                    <span>N</span>
                    <span>S</span>
                    <span>O</span>
                    <span>L</span>
                    <span>I</span>
                    <span>A</span>
                    <span>N</span> */}
                    <span>G</span>
                    <span>E</span>
                    <span>T</span>
                    <span></span>
                    <span>T</span>
                    <span>H</span>
                    <span>E</span>
                    <span></span>
                    <span>B</span>
                    <span>E</span>
                    <span>S</span>
                    <span>T</span>
                    <span></span>
                    <span>S</span>
                    <span>E</span>
                    <span>R</span>
                    <span>V</span>
                    <span>I</span>
                    <span>C</span>
                    <span>E</span>
                </h1>
                <div className='container flex items-center justify-between'>
                    <div className='w-1/2'>
                        <h2 className='text-white py-8 text-6xl font-secondary tracking-tighter font-bold'>Create Exparience With Me, Make Your Website & Grow Your Business <span className='text-gray-400 text-4xl font-semibold tracking-normal'>I am a passionate MERN Stack developer, dedicated to creating web applications that are not only functional but also aesthetically pleasing. Explore my portfolio to see how I can bring your ideas to life.</span></h2>
                    </div>
                    <Square3dbox />
                </div>
            </div>
        </header>
    )
}

export default Banner