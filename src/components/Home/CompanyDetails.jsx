// import React from 'react'

import { Link } from "react-router-dom";

function CompanyDetails() {

  return (
    <div className="flex flex-col justify-center items-center w-full py-[100px] text-[#1c4571] dark:text-gray-50">
      <div className="text-[40px] md:text-[50px] lg:text-[72px] xl:text-[75px] 2xl:text-[78px] w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] text-center">
        <img
          className="w-[43px] h-[58px] md:w-[53px] md:h-[68px] lg:w-[63px] lg:h-[80px] mr-2 rounded-md object-cover inline-block hover:scale-[5] lg:hover:scale-[8] hover:-rotate-3 transition-all duration-500"
          src="/assets/gallery/1.jpeg"
        />
        <span className="">Your Favourite</span>
        <span className="px-2 italic">&quot;Bihari Beast&quot;</span>
        <img
          className="w-[43px] h-[58px] md:w-[53px] md:h-[68px] lg:w-[63px] lg:h-[78px] rounded-md object-cover inline-block hover:scale-[5] lg:hover:scale-[8] hover:rotate-6 transition-all duration-500"
          src="/assets/gallery/11.jpeg"
        />
        <span className="pl-2"> Inspiring India Nationwide</span>
        <span className="animate-wave1 inline-block">.</span>
        <span className="animate-wave2 animate-delay-100 inline-block">.</span>
        <span className="animate-wave3 animate-delay-200 inline-block">.</span>
        <img
          className="w-[93px] h-[58px] md:w-[103px] md:h-[68px] lg:w-[113px] lg:h-[78px] rounded-md object-cover inline-block hover:scale-[5] lg:hover:scale-[8] hover:-rotate-3 transition-all duration-500"
          src="/assets/gallery/4.jpeg"
        />
      </div>
      <h1 className="w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] text-center font-medium pt-[55px] pb-[40px]">
        Natural Men&apos;s Physique Bodybuilding Champion with 100+ successful
        transformations. Competing in elite natural competitions like ICN and
        Muscle Mania, I&apos;ve earned the nickname &quot;Bihari Beast&quot;
        through dedication and results. Now I mentor others to join the sport
        and achieve their own championship dreams through proven natural
        methods.
      </h1>
      {/* <img
        src="./logo.webp"
        className={`w-[100px] ${darkMode ? "opacity-30" : "opacity-80"}`}
      /> */}
      <Link to="/about" className="px-3 py-1 border rounded-3xl text-sm text-[#1c4571] dark:text-gray-50 border-[#1c4571] hover:bg-[#1c457110] dark:border-gray-50 dark:hover:bg-[#f9fafb10] transition-all duration-300">
        Get to Know Me
      </Link>
    </div>
  );
}

export default CompanyDetails;
