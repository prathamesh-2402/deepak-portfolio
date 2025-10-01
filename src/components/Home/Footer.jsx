// import React from 'react'

function Footer() {
    return (
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between w-full px-10 py-4 text-[#1c4571] dark:text-[#f9fafb]">
            <h1 className="hidden md:block">I&apos;m Deepak Jha</h1>
            <div className="flex items-center gap-2">
                <a href="https://www.youtube.com/@fitwithdeepak3272/" target="_blank" className="px-3 py-1 border rounded-3xl text-[#1c4571] dark:text-gray-50 border-[#1c4571] hover:bg-[#1c457110] dark:border-gray-50 dark:hover:bg-[#f9fafb10] transition-all duration-300">
                    Youtube
                </a>
                <a href="https://www.instagram.com/deepak_jha_lifestyle/" target="_blank" className="px-3 py-1 border rounded-3xl text-[#1c4571] dark:text-gray-50 border-[#1c4571] hover:bg-[#1c457110] dark:border-gray-50 dark:hover:bg-[#f9fafb10] transition-all duration-300">
                    Instagram
                </a>
                <a href="https://www.instagram.com/deepakjha_27/" target="_blank" className="px-3 py-1 border rounded-3xl text-[#1c4571] dark:text-gray-50 border-[#1c4571] hover:bg-[#1c457110] dark:border-gray-50 dark:hover:bg-[#f9fafb10] transition-all duration-300">
                    Insatgram Alt
                </a>
            </div>
            <div>
                {/* <h1 className="block md:hidden">Example Company &#169; 2024</h1> */}
                <div>Design & Dev ✦ <a href="https://infydex.in" target="_blank" className="text-[#1c4571] dark:text-gray-50 hover:underline">Infydex</a></div>
            </div>
        </div>
    )
}

export default Footer