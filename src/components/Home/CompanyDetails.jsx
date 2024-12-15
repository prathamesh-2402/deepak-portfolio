// import React from 'react'

function CompanyDetails() {
    return (
        <div className='flex flex-col justify-center items-center w-full py-[100px] text-[#1c4571] dark:text-gray-50'>
            <div className='text-[78px] w-[40%] text-center'>
                <span className='pr-2'>A</span>
                <img className='w-[63px] h-[78px] rounded-md object-cover inline-block hover:scale-[2] hover:-rotate-3 transition-all duration-500' src='https://images.pexels.com/photos/29713860/pexels-photo-29713860/free-photo-of-aerial-view-of-the-atacama-desert-s-rugged-terrain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                <span className='px-2'>tiny mountain village</span>
                <img className='w-[63px] h-[78px] rounded-md object-cover inline-block hover:scale-[2] hover:rotate-6 transition-all duration-500' src='https://images.pexels.com/photos/29734994/pexels-photo-29734994/free-photo-of-scenic-view-of-zermatt-mountains-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                <span className='px-2'>where it all began...</span>
                <img className='w-[113px] h-[78px] rounded-md object-cover inline-block hover:scale-[2] hover:-rotate-3 transition-all duration-500' src='https://images.pexels.com/photos/29713861/pexels-photo-29713861/free-photo-of-sunset-over-atacama-desert-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            </div>
            <h1 className='w-[40%] text-center font-medium py-[55px]'>Giulia Gartner (@example) is an outdoor, travel, and commercial photographer, filmmaker, and storyteller from the Dolomites in northern Italy. Her work focuses on capturing wild and rugged landscapes with a vivid color palette and dreamy elements. Her love for photography has spilled over into filmmaking which is one of the main creative outlets she pursues today.</h1>
            <button className="px-3 py-1 border rounded-3xl text-sm text-[#1c4571] dark:text-gray-50 border-[#1c4571] hover:bg-[#1c457110] dark:border-gray-50 dark:hover:bg-[#f9fafb10] transition-all duration-300">
                Read My Story
            </button>
        </div>
    )
}

export default CompanyDetails