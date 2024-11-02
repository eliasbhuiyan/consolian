import Image from 'next/image'
import React from 'react'
import { MovingCard } from '../Framer/MovingCard'
import { TextRevealCard } from '../Framer/TextReveal'

const About = () => {
    return (
        <section className='py-20 bg-primary'>
            <div className="container">
                <div className="flex items-center gap-10">
                    <MovingCard containerClassName="w-1/2">
                        <Image src="/EliasBhuiyan.jpg" width={500} height={500} layout='responsive' className='w-full rounded-2xl' alt='elias bhuiyan' />
                    </MovingCard>
                    <div className='w-1/2'>
                        <TextRevealCard
                            text="You know the business"
                            revealText="I know how to develop"
                        >
                            <p className='text-white text-lg'>Hello! this is Elias Bhuiyan, a dedicated MERN Stack Developer with a passion for crafting high-quality web and mobile applications that help businesses thrive in the digital space. With a strong foundation in <strong>JavaScript, MongoDB, Express, React, and Node.js</strong>, I specialize in building seamless, responsive, and dynamic digital solutions. My focus is on delivering exceptional user experiences, optimized performance, and scalable applications that meet and exceed client expectations.
                                <span className='block pt-2'>
                                    Allowing me to approach projects with a well-rounded understanding of both technical functionality and visual appeal. My goal is to bring clients&apos; visions to life through clean code, thoughtful design, and a commitment to innovation.
                                </span>
                                <span className='block pt-2'>
                                    Whether it&apos;s a complex web platform, an engaging mobile app, or an interactive single-page application, I’m here to make it happen. When I&apos;m not coding, I enjoy exploring the latest tech trends, continuously learning, and refining my skills to stay at the forefront of the industry.
                                </span>
                                <span className='block pt-2'>If you&apos;re looking for a developer who’s as invested in your success as you are, let’s connect!</span>
                            </p>
                        </TextRevealCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About