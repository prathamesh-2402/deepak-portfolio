// import React from 'react'
import VideoCarousel from '../../components/FilmMaking/VideoCarousel'
import PropTypes from "prop-types";

const FilmMaking = ({ darkMode }) => {
  FilmMaking.propTypes = {
          darkMode: PropTypes.bool.isRequired,
      };
  return (
    <div className="flex flex-col items-center justify-start text-light-foreground dark:text-dark-foreground gap-[50px] my-[100px]">
      <h1 className="text-[60px] font-semibold mb-8">Film Making</h1>
      <VideoCarousel darkMode={darkMode} />
    </div>
  )
}

export default FilmMaking