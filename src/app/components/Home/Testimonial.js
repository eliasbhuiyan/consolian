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
                        pagination: true,
                        focus: 'center',
                        pauseOnHover: false,
                        arrows: 'false',
                        breakpoints: {
                            767: {
                                perPage: 1,
                            },
                            1279: {
                                perPage: 2,
                            },
                        },
                        perPage: 3,
                    }} extensions={{ AutoScroll }}>
                    <SplideSlide>
                        <div className="review">
                            <div className="icon overflow-hidden">
                                <Image src="" width={200} height={200} alt='profile' />
                            </div>
                            <div className="content">
                                <h3 className='text-xl text-primary font-bold font-primary'>Elias Bhuiyan</h3>
                                <p>SEO Expert</p>
                                <ul className='flex gap-1 justify-center text-xl text-orange-600'>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul>
                                <p>GREAT work. Very fast and beautiful design. He got it right the first time which really made me happy. I&apos;m very impressed with the quality and caring Elias put into creating a landing page for my company. Thank you. I&apos;ll highly recommend you.</p>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="review">
                            <div className="icon overflow-hidden">
                                <Image src="" width={200} height={200} alt='profile' />
                            </div>
                            <div className="content">
                                <h3 className='text-xl text-primary font-bold font-primary'>Elias Bhuiyan</h3>
                                <p>Mern Stack Developer</p>
                                <ul className='flex gap-1 justify-center text-xl text-orange-600'>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul>
                                <p>Elias&apos;s agency, led by the talented MERN Stack Developer Elias, delivers outstanding results. Their expertise in MongoDB, Express.js, React.js, and Node.js is evident in the high-quality web and mobile applications they produce.</p>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="review">
                            <div className="icon overflow-hidden">
                                <Image src="" width={200} height={200} alt='profile' />
                            </div>
                            <div className="content">
                                <h3 className='text-xl text-primary font-bold font-primary'>Elias Bhuiyan</h3>
                                <p>Mern Stack Developer</p>
                                <ul className='flex gap-1 justify-center text-xl text-orange-600'>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul>
                                <p>Elias is very committed and fast communicative. He delivered the project precisely as required without many revisions. I&apos;m looking to work for more projects with him on other website.</p>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </section>
    )
}

export default Testimonial
