// import React from 'react'
import VideoCarousel from '../components/FilmMaking/VideoCarousel'

const FilmMaking = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-light-foreground dark:text-dark-foreground pt-[5%] gap-[100px]">
      <h1 className="text-[60px] font-semibold mb-8">Film Making</h1>
      <VideoCarousel />
    </div>
  )
}

export default FilmMaking