// import React from 'react'

function Footer() {
    return (
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between w-full px-10 py-4 text-[#1c4571] dark:text-[#f9fafb]">
            <h1 className="hidden md:block">Example Company &#169; 2024</h1>
            <div className="flex items-center gap-2">
                <button className="px-3 py-1 border rounded-3xl text-[#1c4571] dark:text-gray-50 border-[#1c4571] hover:bg-[#1c457110] dark:border-gray-50 dark:hover:bg-[#f9fafb10] transition-all duration-300">
                    Youtube
                </button>
                <button className="px-3 py-1 border rounded-3xl text-[#1c4571] dark:text-gray-50 border-[#1c4571] hover:bg-[#1c457110] dark:border-gray-50 dark:hover:bg-[#f9fafb10] transition-all duration-300">
                    Instagram
                </button>
                <button className="px-3 py-1 border rounded-3xl text-[#1c4571] dark:text-gray-50 border-[#1c4571] hover:bg-[#1c457110] dark:border-gray-50 dark:hover:bg-[#f9fafb10] transition-all duration-300">
                    Twitter
                </button>
            </div>
            <div>
                <h1 className="block md:hidden">Example Company &#169; 2024</h1>
                <div>Design & Dev ✦ Tapedown</div>
            </div>
        </div>
    )
}

export default Footer