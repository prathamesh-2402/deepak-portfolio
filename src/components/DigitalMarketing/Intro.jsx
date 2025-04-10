import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Intro = ({ data }) => {
  Intro.propTypes = {
    data: PropTypes.object.isRequired,
  };
  return (
    <div className="flex justify-center py-16 mt-[100px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 max-w-7xl">
        <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
          <h1 className="text-3xl md:text-4xl font-bold text-light-foreground dark:text-dark-foreground mb-2">
            {data.intro.introTitle}
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-light-foreground dark:text-dark-foreground mb-6">
            {data.intro.introSubtitle}
          </h2>
          <p className="text-light-foreground dark:text-dark-foreground mb-8 leading-relaxed">
            {data.intro.introDesc}
          </p>
          <Link to={'/contact'} className="bg-light-foreground dark:bg-dark-foreground text-white dark:text-black hover:brightness-105 px-4 py-2 rounded-md">Get a Quote</Link>
        </div>

        <div className="md:w-1/2 h-[700px]">
          <img
            src="https://images.pexels.com/photos/20041859/pexels-photo-20041859/free-photo-of-hand-holding-smartphone-with-instagram.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Social Media Team Collaboration"
            className="w-full h-full rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
