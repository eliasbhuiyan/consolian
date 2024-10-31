"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

export const MovingCard = ({
    children,
    containerClassName,
    className
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (clientX - (rect.left + rect.width / 2)) / 15;
        const y = (clientY - (rect.top + rect.height / 2)) / 15;
        setMousePosition({ x, y });
    };
    return (
        (<motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0, y: 0 });
            }}
            style={{
                transform: isHovering
                    ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
                    : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                transition: "transform 0.1s ease-out",
            }}
            className={cn(
                "relative rounded-2xl overflow-hidden",
                containerClassName
            )}>
            <motion.div
                style={{
                    transform: isHovering
                        ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
                        : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                    transition: "transform 0.1s ease-out",
                }}
                className={cn("h-full", className)}>
                {children}
            </motion.div>
        </motion.div>)
    );
};
