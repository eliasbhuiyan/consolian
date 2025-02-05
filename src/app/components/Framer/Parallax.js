"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { ParallaxHeaderMask } from "./ParallaxHeaderMask";

export const Parallax = ({
    products
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-400, 150]), springConfig);
    return (
        (<div
            ref={ref}
            className="h-[200vh] md:h-[250vh] pt-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 md:space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-10 md:space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard product={product} translate={translateXReverse} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 md:space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
            </motion.div>
        </div>)
    );
};

export const Header = () => {
    return (
        (<div className="h-[50vh] w-full flex items-center justify-center text-center text-xl md:text-4xl font-bold overflow-hidden z-40">
            <ParallaxHeaderMask
                revealText={
                    <p className="max-w-4xl mx-auto text-slate-800">
                        Explore our top-notch services that prioritize innovation, quality, and customer satisfaction. From web development to mobile app solutions.
                    </p>
                }
                className="h-[50vh] border rounded-md"
            >
                Explore our <span className="text-red-500">top-notch services</span> that prioritize <span className="text-red-500">innovation, quality, and customer satisfaction</span>. From web development to mobile app solutions.
            </ParallaxHeaderMask>
        </div>)
    );
};

export const ProductCard = ({
    product,
    translate
}) => {
    return (
        (<motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-40 w-40 md:h-96 md:w-[30rem] relative flex-shrink-0">
            <div className="block group-hover/product:shadow-2xl">
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title} />
            </div>
            <div
                className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2
                className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>)
    );
};

