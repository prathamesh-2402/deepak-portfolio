// import React from 'react'
import { useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Service = ({ serviceData }) => {
  Service.propTypes = {
    serviceData: PropTypes.object.isRequired,
  };

  const container = useRef();
  const leftImg = useRef();
  const rightImg = useRef();

  useGSAP(
    () => {
      gsap.set([leftImg.current, rightImg.current], { position: "absolute" });
      gsap.to(rightImg.current, {
        x: "+=660",
        rotation: "+=2",
        scrollTrigger: {
          trigger: container.current,
          start: "top 35%",
          end: "top -10%",
          scrub: 1,
          // pin: true
        },
      });
      gsap.to(leftImg.current, {
        x: "-=660",
        rotation: "-=2",
        scrollTrigger: {
          trigger: container.current,
          start: "top 35%",
          end: "top -10%",
          scrub: 1,
          // pin: true
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      className="flex justify-center items-center w-full h-[750px] overflow-hidden my-[120px] text-[#1c4571] dark:text-[#f9fafb] relative"
      ref={container}
    >
      <img
        src={serviceData?.image}
        className="relative w-[600px] h-[720px] object-cover rounded-[2rem]"
        ref={leftImg}
      />
      <div className="flex flex-col justify-center items-center gap-[110px]">
        <div className="flex items-center gap-5">
          <h1>{serviceData?.date}</h1>
          <svg
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 4L-8.26528e-07 8L-4.76837e-07 -6.99382e-07L16 4Z"
              fill="currentcolor"
            ></path>
          </svg>
          <h1>{serviceData?.location}</h1>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-7">
          <h1 className="text-[65px] md:text-[72px] lg:text-[78px] xl:text-[82px] 2xl:text-[86px] w-[90%] leading-[90px]">
            {serviceData?.title}
          </h1>
          <Link
            className="px-3 py-1 border rounded-3xl text-sm text-[#1c4571] dark:text-gray-50 border-[#1c4571] hover:bg-[#1c457110] dark:border-gray-50 dark:hover:bg-[#f9fafb10] transition-all duration-300"
            to={serviceData.id === 1 ? "icn-goa" : "icn-mumbai"}
          >
            Visit Page
          </Link>
        </div>
        <div
          className="h-[20px] w-[256px] rounded-full"
          style={{
            background:
              "linear-gradient(to right, rgba(2,0,36,1) 0%, rgba(57,87,97,1) 25%, rgba(238,233,237,1) 50%, rgba(84,75,82,1) 75%, rgba(97,124,131,1) 100%)",
          }}
        ></div>
      </div>
      <img
        src={serviceData?.image2}
        className="relative w-[600px] h-[720px] object-cover rounded-[2rem]"
        ref={rightImg}
      />
    </div>
  );
};

export default Service;
