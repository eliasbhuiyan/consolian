import { FaBootstrap, FaNodeJs, FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaSass, FaWordpressSimple } from 'react-icons/fa'
import { DiMaterializecss, } from 'react-icons/di'
import { SiSemanticuireact, SiExpress, SiStrapi, SiMongoose, SiSocketdotio, SiMongodb, SiReactrouter, SiJsonwebtokens, SiGraphql, SiFramer } from 'react-icons/si'
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineCloudServer } from "react-icons/ai";
import { IoLogoFirebase } from "react-icons/io5";
import { FaWebflow } from "react-icons/fa6";
import { TbBrandFramerMotion, TbBrandMysql, TbBrandNextjs, TbBrandRedux } from 'react-icons/tb'
import { GrGatsbyjs } from 'react-icons/gr'
import { SparklesCore } from '../Framer/Sparkles';
import { SpeedTextCover } from '../Framer/SpeedTextCover';
const Skills = () => {
    return (
        <section className="pt-28 bg-basic" id='about'>
            <div className="container">
                {/* Header */}
                <div className="h-96 w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <h2 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-primary relative z-20">
                        Skills
                    </h2>
                    <div className="w-full h-40 relative">
                        {/* Gradients */}
                        <div className="absolute inset-x-0 top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-0 top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-0 top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-0 top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                        {/* Core component */}
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="w-full h-full"
                            particleColor="#3b5998"
                        />

                        {/* Radial Gradient to prevent sharp edges */}
                        <div className="absolute inset-0 z-50 w-full h-full bg-basic [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>
                </div>
                {/* Front End */}
                <div className='pb-10'>
                    <div className='flex justify-center mb-10'>
                        <SpeedTextCover className="text-2xl font-bold" main="bg-white">Front End Technologies</SpeedTextCover>
                    </div>
                    <div className='flex justify-around my-5'>
                        <div className='flex flex-col items-center text-center'>
                            <div className='w-fit bg-[#E44D25] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(228,77,37)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#E44D25] before:rounded-full before:shadow-[0_10px_10px_rgb(228,77,37)]'>
                                <FaHtml5 className='text-5xl text-white' />
                            </div>
                            <div>
                                <h3 className='mt-14 font-primary text-lg text-primary font-medium'>HTML 5</h3>
                                <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <div className='w-fit bg-[#214ce5] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[#214ce5] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#214ce5] before:rounded-full before:shadow-[0_10px_10px_rgb(33,76,229)]'>
                                <FaCss3Alt className='text-5xl text-white' />
                            </div>
                            <div>
                                <h3 className='mt-14 font-primary text-lg text-primary font-medium'>CSS 3</h3>
                                <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <div className='w-fit bg-[#573E7F] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(87,62,127)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#573E7F] before:rounded-full before:shadow-[0_10px_10px_rgb(87,62,127)]'>
                                <FaBootstrap className='text-5xl text-white' />
                            </div>
                            <div>
                                <h3 className='mt-14 font-primary text-lg text-primary font-medium'>BOOTSTRAP</h3>
                                <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <div className='w-fit bg-[#38BDF8] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(56,189,248)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#38BDF8] before:rounded-full before:shadow-[0_10px_10px_rgb(56,189,248)]'>
                                <RiTailwindCssFill className='text-5xl text-white' />
                            </div>
                            <div>
                                <h3 className='mt-14 font-primary text-lg text-primary font-medium'>TAILWIND</h3>
                                <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <div className='w-fit bg-[#EB7077] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(235,112,119)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#EB7077] before:rounded-full before:shadow-[0_10px_10px_rgb(235,112,119)]'>
                                <DiMaterializecss className='text-5xl text-white' />
                            </div>
                            <div>
                                <h3 className='mt-14 font-primary text-lg text-primary font-medium'>MATERIALIZE</h3>
                                <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <div className='w-fit bg-[#007E77] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(0,126,119)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#007E77] before:rounded-full before:shadow-[0_10px_10px_rgb(0,126,119)]'>
                                <SiSemanticuireact className='text-5xl text-white' />
                            </div>
                            <div>
                                <h3 className='mt-14 font-primary text-lg text-primary font-medium'>SEMANTIC UI</h3>
                                <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <div className='w-fit bg-[#61DBFB] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(97,219,251)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#61DBFB] before:rounded-full before:shadow-[0_10px_10px_rgb(97,219,251)]'>
                                <FaReact className='text-5xl text-white' />
                            </div>
                            <div>
                                <h3 className='mt-14 font-primary text-lg text-primary font-medium'>REACT.JS</h3>
                                <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center text-center'>
                            <div className='w-fit bg-[#000000] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(0,0,0)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#000000] before:rounded-full before:shadow-[0_10px_10px_rgb(0,0,0)]'>
                                <TbBrandNextjs className='text-5xl text-white' />
                            </div>
                            <div>
                                <h3 className='mt-14 font-primary text-lg text-primary font-medium'>NEXT.JS</h3>
                                <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <div className='w-fit bg-[#542C85] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(84,44,133)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#542C85] before:rounded-full before:shadow-[0_10px_10px_rgb(84,44,133)]'>
                                <GrGatsbyjs className='text-5xl text-white' />
                            </div>
                            <div>
                                <h3 className='mt-14 font-primary text-lg text-primary font-medium'>GATSBY</h3>
                                <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <div className='w-fit bg-[#764ABC] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(84,44,133)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#542C85] before:rounded-full before:shadow-[0_10px_10px_rgb(84,44,133)]'>
                                <TbBrandRedux className='text-5xl text-white' />
                            </div>
                            <div>
                                <h3 className='mt-14 font-primary text-lg text-primary font-medium'>Redux</h3>
                                <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <div className='w-fit bg-[#F44250] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(244,66,80)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#F44250] before:rounded-full before:shadow-[0_10px_10px_rgb(244,66,80)]'>
                                <SiReactrouter className='text-5xl text-white' />
                            </div>
                            <div>
                                <h3 className='mt-14 font-primary text-lg text-primary font-medium'>React Router</h3>
                                <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <div className='w-fit bg-[#f0db4f] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(240,219,79)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#f0db4f] before:rounded-full before:shadow-[0_10px_10px_rgb(240,219,79)]'>
                                <FaJsSquare className='text-5xl text-white' />
                            </div>
                            <div>
                                <h3 className='mt-14 font-primary text-lg text-primary font-medium'>JavaScript (ES6+)</h3>
                                <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <div className='w-fit bg-[#CF649A] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(207,100,154)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#cf649a] before:rounded-full before:shadow-[0_10px_10px_rgb(207,100,154)]'>
                                <FaSass className='text-5xl text-white' />
                            </div>
                            <div>
                                <h3 className='mt-14 font-primary text-lg text-primary font-medium'>SASS</h3>
                                <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <div className='w-fit bg-[#E22AC4] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(226,42,196)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#e22ac4] before:rounded-full before:shadow-[0_10px_10px_rgb(226,42,196)]'>
                                <TbBrandFramerMotion className='text-5xl text-white' />
                            </div>
                            <div>
                                <h3 className='mt-14 font-primary text-lg text-primary font-medium'>Framer Motion</h3>
                                <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BackEnd */}
            <div className='py-10 bg-white z-10'>
                <div className='container py-10'>
                    <div className='flex justify-center mb-10'>
                        <SpeedTextCover className="text-2xl font-bold" main="bg-basic">Back End Technologies</SpeedTextCover>
                    </div>
                    <div className='flex justify-center gap-5 mt-10'>
                        <div className='w-fit flex flex-col items-center bg-[#5CAC47] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2  before:w-[155%] before:h-20 before:border-[#5CAC47] before:border-[20px] before:border-t-0 before:rounded-b-full before:-z-10 z-10'>
                            <FaNodeJs className='text-5xl text-white' />
                            <h3 className='text-white font-semibold'>NODE.JS</h3>
                        </div>
                        <div className='w-fit flex flex-col items-center bg-[#828282] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative before:absolute before:bottom-1/2 before:left-1/2 before:-translate-x-1/2  before:w-[151.5%] before:h-20 before:border-[#828282] before:border-[20px] before:border-b-0 before:rounded-t-full before:-z-10 z-10'>
                            <SiExpress className='text-5xl text-white' />
                            <h3 className='text-white font-semibold'>EXPRESS</h3>
                        </div>
                        <div className='w-fit flex flex-col items-center bg-[#0595D4] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2  before:w-[146%] before:h-20 before:border-[#0595D4] before:border-[20px] before:border-t-0 before:rounded-b-full before:-z-10 z-10'>
                            <AiOutlineCloudServer className='text-5xl text-white' />
                            <h3 className='text-white font-medium'>RESTful API</h3>
                        </div>
                        <div className='w-fit flex flex-col items-center bg-[linear-gradient(to_right,_#F50057,_#D500F9,_#546E7A)] py-4 px-6 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative before:absolute before:bottom-1/2 before:left-1/2 before:-translate-x-1/2 before:w-[147%] before:h-20 before:border-[#D500F9] before:border-[20px] before:border-b-0 before:rounded-t-full before:-z-10 z-10 '>
                            <SiJsonwebtokens className='text-4xl text-white' />
                            <h3 className='text-white font-semibold mt-3'>JWT Auth</h3>
                        </div>
                    </div>
                    <div className='flex justify-center gap-5 mt-20'>
                        <div className='w-fit flex flex-col items-center bg-[#F6009C] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2  before:w-[151%] before:h-20 before:border-[#F6009C] before:border-[20px] before:border-t-0 before:rounded-b-full before:-z-10 z-10 '>
                            <SiGraphql className='text-5xl text-white' />
                            <h3 className='text-white font-semibold'>GRAPHQL</h3>
                        </div>
                        <div className='w-fit flex flex-col items-center bg-[#010101] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative before:absolute before:bottom-1/2 before:left-1/2 before:-translate-x-1/2  before:w-[147%] before:h-20 before:border-[#010101] before:border-[20px] before:border-b-0 before:rounded-t-full before:-z-10 z-10 '>
                            <SiSocketdotio className='text-5xl text-white' />
                            <h3 className='text-white font-medium'>SOCKET.IO</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* Database CMS */}
            <div className='py-10'>
                <div className="container">
                    <div className="flex justify-between gap-10">
                        {/* Database */}
                        <div className='w-1/2'>
                            <div className='flex justify-center mb-10'>
                                <SpeedTextCover className="text-2xl font-bold" main="bg-white">Database</SpeedTextCover>
                            </div>
                            <div className='flex justify-around my-5'>
                                <div className='flex flex-col items-center text-center'>
                                    <div className='w-fit bg-[#12924F] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(18,146,79)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#12924F] before:rounded-full before:shadow-[0_10px_10px_rgb(18,146,79)]'>
                                        <SiMongodb className='text-5xl text-white' />
                                    </div>
                                    <div>
                                        <h3 className='mt-14 font-primary text-lg text-primary font-medium'>MongoDB</h3>
                                        <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center text-center'>
                                    <div className='w-fit bg-[#A03333] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[#A03333] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#A03333] before:rounded-full before:shadow-[0_10px_10px_rgb(160,51,51)]'>
                                        <SiMongoose className='text-5xl text-white' />
                                    </div>
                                    <div>
                                        <h3 className='mt-14 font-primary text-lg text-primary font-medium'>Mongoose</h3>
                                        <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center text-center'>
                                    <div className='w-fit bg-[#E76136] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(231,97,54)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#E76136] before:rounded-full before:shadow-[0_10px_10px_rgb(231,97,54)]'>
                                        <IoLogoFirebase className='text-5xl text-white' />
                                    </div>
                                    <div>
                                        <h3 className='mt-14 font-primary text-lg text-primary font-medium'>Firebase</h3>
                                        <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center text-center'>
                                    <div className='w-fit bg-[#00758F] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(0,117,143)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#00758F] before:rounded-full before:shadow-[0_10px_10px_rgb(0,117,143)]'>
                                        <TbBrandMysql className='text-5xl text-white' />
                                    </div>
                                    <div>
                                        <h3 className='mt-14 font-primary text-lg text-primary font-medium'>Mysql</h3>
                                        <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* CMS */}
                        <div className='w-1/2'>
                            <div className='flex justify-center mb-10'>
                                <SpeedTextCover className="text-2xl font-bold" main="bg-white">CMS</SpeedTextCover>
                            </div>
                            <div className='flex justify-around my-5'>
                                <div className='flex flex-col items-center text-center'>
                                    <div className='w-fit bg-[#055BDC] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(5,91,220)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#055BDC] before:rounded-full before:shadow-[0_10px_10px_rgb(5,91,220)]'>
                                        <FaWebflow className='text-5xl text-white' />
                                    </div>
                                    <div>
                                        <h3 className='mt-14 font-primary text-lg text-primary font-medium'>Webflow</h3>
                                        <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center text-center'>
                                    <div className='w-fit bg-[#4945FF] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[#4945FF] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#214ce5] before:rounded-full before:shadow-[0_10px_10px_rgb(73,69,255)]'>
                                        <SiStrapi className='text-5xl text-white' />
                                    </div>
                                    <div>
                                        <h3 className='mt-14 font-primary text-lg text-primary font-medium'>Strapi</h3>
                                        <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center text-center'>
                                    <div className='w-fit bg-[#3858E9] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-[rgb(56,88,233)] after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-[#3858E9] before:rounded-full before:shadow-[0_10px_10px_rgb(56,88,233)]'>
                                        <FaWordpressSimple className='text-5xl text-white' />
                                    </div>
                                    <div>
                                        <h3 className='mt-14 font-primary text-lg text-primary font-medium'>Wordpress</h3>
                                        <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center text-center'>
                                    <div className='w-fit bg-[#000000] p-4 rounded-full border-8 border-white shadow-[-0.5rem_0.5rem_1rem_rgba(0,_0,_0,_0.45),inset_-0.25rem_0.25rem_0.5rem_rgba(0,_0,_0,_0.45)] relative after:absolute after:top-[110%] after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-dotted after:border-black after:h-10 after:content-[""]  before:absolute before:top-[160%] before:left-1/2 before:-translate-x-1/2  before:w-4 before:h-4 before:bg-black before:rounded-full before:shadow-[0_10px_10px_rgb(0,0,0)]'>
                                        <SiFramer className='text-5xl text-white' />
                                    </div>
                                    <div>
                                        <h3 className='mt-14 font-primary text-lg text-primary font-medium'>Framer</h3>
                                        <p className='w-40'>Lorem ipsum dolor sit amet consectetur,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
