// import React from 'react'
import PropTypes from "prop-types";

function CompanyDetails({ darkMode }) {
    CompanyDetails.propTypes = {
        darkMode: PropTypes.bool.isRequired,
    };

    return (
        <div className='flex flex-col justify-center items-center w-full py-[100px] text-[#1c4571] dark:text-gray-50'>
            <div className='text-[40px] md:text-[50px] lg:text-[72px] xl:text-[75px] 2xl:text-[78px] w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] text-center'>
                <span className='pr-2'>A</span>
                <img className='w-[43px] h-[58px] md:w-[53px] md:h-[68px] lg:w-[63px] lg:h-[78px] rounded-md object-cover inline-block hover:scale-[1.5] lg:hover:scale-[2] hover:-rotate-3 transition-all duration-500' src='https://images.pexels.com/photos/29713860/pexels-photo-29713860/free-photo-of-aerial-view-of-the-atacama-desert-s-rugged-terrain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                <span className='px-2'>tiny mountain village</span>
                <img className='w-[43px] h-[58px] md:w-[53px] md:h-[68px] lg:w-[63px] lg:h-[78px] rounded-md object-cover inline-block hover:scale-[1.5] lg:hover:scale-[2] hover:rotate-6 transition-all duration-500' src='https://images.pexels.com/photos/29734994/pexels-photo-29734994/free-photo-of-scenic-view-of-zermatt-mountains-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                <span className='pl-2'>where it all began</span>
                <span className="animate-wave1 inline-block">.</span>
                <span className="animate-wave2 animate-delay-100 inline-block">.</span>
                <span className="animate-wave3 animate-delay-200 inline-block">.</span>
                <img className='w-[93px] h-[58px] md:w-[103px] md:h-[68px] lg:w-[113px] lg:h-[78px] rounded-md object-cover inline-block hover:scale-[1.5] lg:hover:scale-[2] hover:-rotate-3 transition-all duration-500' src='https://images.pexels.com/photos/29713861/pexels-photo-29713861/free-photo-of-sunset-over-atacama-desert-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            </div>
            <h1 className='w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] text-center font-medium pt-[55px] pb-[40px]'>Welcome to N24 Production – where your stories come to life. Our expert filmmakers and designers craft engaging visuals for short films, documentaries, corporate videos, and promotional content. With powerful social media, digital marketing, and website development, we elevate your brand&apos;s online presence. At N24 Production, creativity knows no bounds. Let’s transform your vision into reality and create something remarkable together!</h1>
            <img src="./logo.webp" className={`w-[100px] ${darkMode ? "opacity-30" : "opacity-80"}`} />
            {/* <button className="px-3 py-1 border rounded-3xl text-sm text-[#1c4571] dark:text-gray-50 border-[#1c4571] hover:bg-[#1c457110] dark:border-gray-50 dark:hover:bg-[#f9fafb10] transition-all duration-300">
                Read My Story
            </button> */}
        </div>
    )
}

export default CompanyDetails;
