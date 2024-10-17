import React from 'react'
import Square3dbox from './Square3dbox'
import HeroSlide from './HeroSlide'

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
                {/* <Navbar /> */}
                <h1 className="text-white text-xl font-bold flex justify-between">
                    <span>C</span>
                    <span>O</span>
                    <span>N</span>
                    <span>S</span>
                    <span>O</span>
                    <span>L</span>
                    <span>I</span>
                    <span>A</span>
                    <span>N</span>
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