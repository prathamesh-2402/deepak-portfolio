// import React from 'react'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
    const container = useRef();
    const video = useRef();
    useGSAP(
        () => {
            gsap.from(video.current, {
                duration: 2,
                y: "+=360",
                scale: 0.1,
                opacity: 0.7,
                ease: "power2.out",
            });
        },
        { scope: container }
    );

    return (
        <div
            className="max-h-[840px] w-full flex justify-center py-2 mb-[100px]"
            ref={container}
        >
            <video
                ref={video}
                className="w-[92%] h-[700px] md:h-[840px] object-cover rounded-3xl"
                onContextMenu={(e) => {
                    e.preventDefault();
                }}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline
            >
                <source src="https://videos.pexels.com/video-files/5155396/5155396-uhd_2560_1440_30fps.mp4" />
            </video>
        </div>
    );
};

export default HeroSection;
