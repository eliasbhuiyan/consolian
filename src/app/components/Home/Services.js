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
const Services = () => {
    return (
        <section className="py-40 bg-heroBg">
            <div className="container">
                <div className="columns-2">
                    <Image priority width="600" height="200" alt="OUR SERVICES" className='pb-8' src="/heading/ourServices2.png" />
                    <div className="w-full mt-20 mb-4 relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <h3 className="text-4xl mt-4 w-fit m-auto service_heading">
                            Website Design
                        </h3>
                        <div className="h-[50vh] overflow-hidden">
                            <Lottie
                                className='w-full h-full'
                                animationData={webDesign}
                            />
                        </div>
                    </div>
                    <div className="w-full mb-4 relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <h3 className="text-4xl mt-4 w-fit m-auto service_heading">Website Development</h3>
                        <div className="h-[50vh] overflow-hidden">
                            <Lottie className='w-full h-full' animationData={webDevelop} />
                        </div>
                    </div>
                    <div className="w-full mb-4 flex flex-col justify-center relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <h3 className="text-4xl mt-4 w-fit m-auto service_heading">Android App Development</h3>
                        <div className="h-[50vh] overflow-hidden">
                            <Lottie className='w-full h-full' animationData={android} />
                        </div>
                    </div>
                    <div className="w-full mb-4 relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <h3 className="text-4xl mt-4 w-fit m-auto service_heading">IOS App Development</h3>
                        <div className="h-[50vh] overflow-hidden">
                            <Lottie className='w-full h-full' animationData={ios} />
                        </div>
                    </div>
                    <div className="w-full relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <h3 className="text-4xl mt-4 w-fit m-auto service_heading">Website Maintenance</h3>
                        <div className="h-[50vh] overflow-hidden">
                            <Lottie className='w-full h-full' animationData={maintain} />
                        </div>
                    </div>
                    <div className="w-full mt-4 relative text-center bg-basic rounded-xl border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)]">
                        <h3 className="text-4xl mt-4 w-fit m-auto service_heading">SEO Optimize</h3>
                        <div className="h-[50vh] overflow-hidden">
                            <Lottie className='w-full h-full' animationData={seo} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
