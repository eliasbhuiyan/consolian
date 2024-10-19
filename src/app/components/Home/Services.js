'use client'
import webDesign from '../../../../public/lottieFiles/webdesign.json'
import webDevelop from '../../../../public/lottieFiles/webdevelop.json'
import android from '../../../../public/lottieFiles/android.json'
import ios from '../../../../public/lottieFiles/ios.json'
import maintain from '../../../../public/lottieFiles/maintain.json'
import seo from '../../../../public/lottieFiles/seo.json'
import Lottie from "lottie-react"
import { useEffect } from 'react'
import Image from 'next/image'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
const Services = () => {
    // useEffect(() => {
    //     AOS.init();
    // })
    return (
        <section className="bg-white py-40">
            <div className="container">
                <div className="columns-2">
                    <Image priority width="600" height="200" alt="OUR SERVICES" className='pb-8' src="/heading/ourServices.png" />
                    {/* <h1 className="text-6xl font-bold mb-4 uppercase text-gray-500 hover:text-primary sec_heading">Our Services</h1> */}
                    <div className="w-full mb-4 xl:m-0 relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <h3 className="text-4xl mt-4 w-fit m-auto service_heading">Website Design</h3>
                        <Lottie className='w-full ' animationData={webDesign} />
                    </div>
                    <div className="w-full mb-4 xl:m-0 relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <h3 className="text-4xl">Website Development</h3>
                        <Lottie className='w-full ' animationData={webDevelop} />
                    </div>
                    <div className="w-full mb-4 xl:m-0 flex flex-col justify-center relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <h3 className="text-4xl">Android App Development</h3>
                        <Lottie className='w-full ' animationData={android} />
                    </div>
                    <div className="w-full mb-4 xl:m-0 relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <h3 className="text-4xl">IOS App Development</h3>
                        <Lottie className='w-full ' animationData={ios} />
                    </div>
                    <div className="w-full relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <h3 className="text-4xl">Website Maintenance</h3>
                        <Lottie className='w-full ' animationData={maintain} />
                    </div>
                    <div className="w-full mt-4 xl:m-0 relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <h3 className="text-4xl">SEO Optimize</h3>
                        <Lottie className='w-full ' animationData={seo} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
