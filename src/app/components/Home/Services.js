'use client'
import webDesign from '../../../../public/lottieFiles/webdesign.json'
import webDevelop from '../../../../public/lottieFiles/webdevelop.json'
import android from '../../../../public/lottieFiles/android.json'
import ios from '../../../../public/lottieFiles/ios.json'
import maintain from '../../../../public/lottieFiles/maintain.json'
import seo from '../../../../public/lottieFiles/seo.json'
import Lottie from "lottie-react"
import { useEffect } from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
const Services = () => {
    // useEffect(() => {
    //     AOS.init();
    // })
    return (
        <section className="bg-white py-10 md:px-0">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <div className="container">
                <div className="columns-2">
                    <div className="w-full mb-4 xl:m-0 relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <Lottie className='w-full h-1/2' animationData={webDesign} />
                        <h3 className="service_text">Website Design</h3>
                    </div>
                    <div className="w-full mb-4 xl:m-0 relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <Lottie className='w-full h-1/2' animationData={webDevelop} />
                        <h3 className="service_text">Website Development</h3>
                    </div>
                    <div className="w-full mb-4 xl:m-0 flex flex-col justify-center relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <Lottie className='w-full h-1/2' animationData={android} />
                        <h3 className="service_text">Android App Development</h3>
                    </div>
                    <div className="w-full mb-4 xl:m-0 relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <Lottie className='w-full h-1/2' animationData={ios} />
                        <h3 className="service_text">IOS App Development</h3>
                    </div>
                    <div className="w-full relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <Lottie className='w-full h-1/2' animationData={maintain} />
                        <h3 className="service_text">Website Maintenance</h3>
                    </div>
                    <div className="w-full mt-4 xl:m-0 relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <Lottie className='w-full h-1/2' animationData={seo} />
                        <h3 className="service_text">SEO Optimize</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
