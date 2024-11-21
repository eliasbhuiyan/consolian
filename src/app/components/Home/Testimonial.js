'use client'
import { FaStar } from 'react-icons/fa'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from 'next/image';
const Testimonial = () => {
    return (
        <section className='py-20 md:py-28 bg-basic' id='testimonial'>
            <div className="container">
                <Splide aria-label="My Favorite Images"
                    options={{
                        type: "loop",
                        gap: "30px",
                        drag: "free",
                        pagination: false,
                        focus: 'center',
                        pauseOnHover: false,
                        arrows: 'false',
                        breakpoints: {
                            639: {
                                perPage: 1,
                                gap: "10px",
                            },
                            1279: {
                                perPage: 2,
                                gap: "10px",
                            }
                        },
                        perPage: 3,
                    }} extensions={{ AutoScroll }}>
                    <SplideSlide>
                        <div className="review">
                            <div className="icon overflow-hidden">
                                <Image src="" width={200} height={200} alt='profile' />
                            </div>
                            <div className="content">
                                <h3 className='text-sm md:text-xl text-primary font-bold font-primary'>Elias Bhuiyan</h3>
                                <p className='text-sm md:text-base'>SEO Expert</p>
                                <ul className='flex gap-1 justify-center text-sm md:text-base mb-2 text-orange-600'>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul>
                                <p className='text-xs md:text-sm'>GREAT work. Very fast and beautiful design. He got it right the first time which really made me happy. I&apos;m very impressed with the quality and caring Elias put into creating a landing page for my company. Thank you. I&apos;ll highly recommend you.</p>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </section>
    )
}

export default Testimonial
