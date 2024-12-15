// import React from 'react'

function Footer() {
    return (
        <div className="flex items-center justify-between w-full px-10 py-4 text-[#1c4571] dark:text-[#f9fafb]">
            <h1>Example Company &#169; 2024</h1>
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
            <div>Design & Dev ✦ Tapedown</div>
        </div>
    )
}

export default Footer