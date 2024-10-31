import Image from 'next/image'
import React from 'react'
import { MovingCard } from '../Framer/MovingCard'

const About = () => {
    return (
        <section className='py-20'>
            <div className="container">
                <div className="flex items-center gap-10">
                    <MovingCard containerClassName="w-1/2">
                        <Image src="/EliasBhuiyan.jpg" width={500} height={500} layout='responsive' className='w-full rounded-2xl' alt='elias bhuiyan' />
                    </MovingCard>
                    <div className='w-1/2'>
                        <h1>About Me</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sint, distinctio placeat illo dolorum error pariatur soluta minima odit eius asperiores dolores voluptas impedit amet! Atque tempora facilis vitae impedit aliquam magnam quisquam odit omnis explicabo ipsa mollitia placeat, corporis veritatis quo consequuntur, ipsam sint deserunt. Nisi error numquam consectetur.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About