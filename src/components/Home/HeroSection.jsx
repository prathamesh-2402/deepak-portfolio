// import React from 'react'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
        <div ref={container}>

            <div
                className="max-h-[840px] w-full min-h-[700px] flex justify-center py-2 mb-[100px]"
                ref={video}
            >
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    centerMode={false}
                    className="h-full w-[98%]"
                    showDots={false}
                    draggable
                    focusOnSelect={false}
                    infinite
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 1,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        }
                    }}
                >

                    <video
                        className="h-[700px] md:h-[840px] w-full object-cover rounded-3xl"
                        onContextMenu={(e) => {
                            e.preventDefault();
                        }}
                        autoPlay={true}
                        loop={true}
                        muted={true}
                        playsInline
                    >
                        <source src="/assets/film-making/short-flim/video2.mp4" />
                    </video>

                    <video
                        className="h-[700px] md:h-[840px] w-full object-cover rounded-3xl"
                        onContextMenu={(e) => {
                            e.preventDefault();
                        }}
                        autoPlay={true}
                        loop={true}
                        muted={true}
                        playsInline
                    >
                        <source src="/assets/film-making/short-flim/video3.mp4" />
                    </video>
                </Carousel>
            </div>
        </div>
    );
};

export default HeroSection;
