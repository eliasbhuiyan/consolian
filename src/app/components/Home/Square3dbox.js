"use client"
import React, { useEffect, useRef, useState } from 'react'
const Square3dbox = () => {
    const [moveX, setMoveX] = useState(0);
    const [moveY, setMoveY] = useState(0);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleMove = (e) => {
                setMoveX(e.clientX);
                setMoveY(e.clientY);

            };
            window.addEventListener("mousemove", handleMove);
            return () => {
                window.removeEventListener("mousemove", handleMove);
            };
        }
    }, []);
    return (
        <div className="cube-outer">
            <div className="cube" style={{
                transform: `rotateX(${moveX / 4}deg) rotateY(${moveY / 6}deg) rotateZ(${moveY / 6}deg)`,
            }}>
                <div className="face face-front bg-[url('/gym.png')] bg-cover"></div>
                <div className="face face-top bg-[url('/Walmart.png')] bg-cover">
                </div>
                <div className="face face-right bg-[url('/Walmart2.png')] bg-cover"></div>
                <div className="face face-back bg-[url('/avada.png')] bg-cover"></div>
                <div className="face face-left bg-[url('/hokah.png')] bg-cover"></div>
                <div className="face face-bottom bg-[url('/apper.png')] bg-cover"></div>
            </div>
        </div>
    )
}

export default Square3dbox