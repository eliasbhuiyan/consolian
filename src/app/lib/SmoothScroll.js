"use client";
// import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
    return (
        // <ReactLenis root options={{ lerp: 0.1, duration: 1.1, smoothTouch: true }}>
            <div>
                {children}
            </div>
        // </ReactLenis>
    );
}

export default SmoothScrolling;