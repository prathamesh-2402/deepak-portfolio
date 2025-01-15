// import React from 'react'
import { aboutUs } from "../utils/data"

const AboutUs = () => {
  return (
    <div>
      <div className="text-center text-[62px] h-screen flex items-center justify-center">
        <h1 className="">Wanna Know About Us?</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-[80px] items-center lg:items-start text-light-foreground dark:text-dark-foreground my-20 px-2 md:px-10">
        <div className="w-[80%] md:w-1/2 flex justify-end">
          <img src="./logo.webp" className="object-contain xl:w-[85%] 2xl:w-[70%]" />
        </div>
        <div className="md:w-1/2 flex flex-col gap-4 items-center lg:items-start">
          <div className="flex flex-col gap-[30px] xl:w-[70%] 2xl:w-[50%] text-center lg:text-start">
            <h1 className="text-[52px]">Creative Studio</h1>
            <p className="text-xl">We are Apolo, an innovative studio that love creating design, art and photography products.</p>
          </div>
          <div className="w-[10%] border-b border-light-foreground dark:border-dark-foreground my-14"></div>
          <div className="lg:w-[90%] 2xl:w-[70%] flex flex-col gap-9 px-4 md:px-0">
            {aboutUs.map((item, index) => (
              <p key={index} className="dark:text-[#f3f6fa95]"><span className="font-bold text-light-foreground dark:text-dark-foreground">{item.label}:</span> {item.desc}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
