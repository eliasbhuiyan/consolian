"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

export const TextRevealCard = ({
    text,
    revealText,
    children,
    className
}) => {
    const [widthPercentage, setWidthPercentage] = useState(0);
    const cardRef = useRef(null);
    const [left, setLeft] = useState(0);
    const [localWidth, setLocalWidth] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);

    useEffect(() => {
        if (cardRef.current) {
            const { left, width: localWidth } =
                cardRef.current.getBoundingClientRect();
            setLeft(left);
            setLocalWidth(localWidth);
        }
    }, []);

    function mouseMoveHandler(event) {
        event.preventDefault();

        const { clientX } = event;
        if (cardRef.current) {
            const relativeX = clientX - left;
            setWidthPercentage((relativeX / localWidth) * 100);
        }
    }

    function mouseLeaveHandler() {
        setIsMouseOver(false);
        setWidthPercentage(0);
    }
    function mouseEnterHandler() {
        setIsMouseOver(true);
    }
    function touchMoveHandler(event) {
        event.preventDefault();
        const clientX = event.touches[0].clientX;
        if (cardRef.current) {
            const relativeX = clientX - left;
            setWidthPercentage((relativeX / localWidth) * 100);
        }
    }

    const rotateDeg = (widthPercentage - 50) * 0.1;
    return (
        (<div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            onMouseMove={mouseMoveHandler}
            onTouchStart={mouseEnterHandler}
            onTouchEnd={mouseLeaveHandler}
            onTouchMove={touchMoveHandler}
            ref={cardRef}
            className={cn(
                "border border-white/[0.08] rounded-lg p-8 relative overflow-hidden",
                className
            )}>
            <div className="relative flex items-center overflow-hidden">
                <motion.div
                    animate={
                        isMouseOver
                            ? {
                                opacity: widthPercentage > 0 ? 1 : 0,
                                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                            }
                            : {
                                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                            }
                    }
                    transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
                    className="absolute bg-primary z-20  will-change-transform w-full">
                    <p
                        style={{
                            textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
                        }}
                        className="text-base sm:text-[3rem] py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
                        {revealText}
                    </p>
                </motion.div>
                <motion.div
                    animate={{
                        left: `${widthPercentage}%`,
                        rotate: `${rotateDeg}deg`,
                        opacity: widthPercentage > 0 ? 1 : 0,
                    }}
                    transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
                    className="h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-400 to-transparent absolute z-50 will-change-transform"></motion.div>

                <div
                    className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
                    <p
                        className="text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-slate-300">
                        {text}
                    </p>
                    <MemoizedStars />
                </div>
            </div>
            {children}
        </div>)
    );
};

const Stars = () => {
    const randomMove = () => Math.random() * 4 - 2;
    const randomOpacity = () => Math.random();
    const random = () => Math.random();
    return (
        (<div className="absolute inset-0">
            {[...Array(80)].map((_, i) => (
                <motion.span
                    key={`star-${i}`}
                    animate={{
                        top: `calc(${random() * 100}% + ${randomMove()}px)`,
                        left: `calc(${random() * 100}% + ${randomMove()}px)`,
                        opacity: randomOpacity(),
                        scale: [1, 1.2, 0],
                    }}
                    transition={{
                        duration: random() * 10 + 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        top: `${random() * 100}%`,
                        left: `${random() * 100}%`,
                        width: `2px`,
                        height: `2px`,
                        backgroundColor: "white",
                        borderRadius: "50%",
                        zIndex: 2,
                    }}
                    className="inline-block"></motion.span>
            ))}
        </div>)
    );
};

export const MemoizedStars = memo(Stars);
