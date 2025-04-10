import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeroSection = ({ data }) => {
  HeroSection.propTypes = {
    data: PropTypes.object.isRequired,
  };
  return (
    <div className="relative flex w-full h-[400px] bg-[url(https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1)] bg-fixed bg-no-repeat bg-cover">
      <div className="z-10 w-full flex flex-col items-center gap-4 justify-center">
        <h1 className="text-6xl px-4 text-center">{data.page}</h1>
        <Link to={'/contact'} className="hover:bg-light-foreground hover:dark:bg-dark-foreground hover:text-white hover:dark:text-dark-background border border-light-foreground dark:border-dark-foreground cursor-pointer px-4 py-2 rounded-3xl">
          Hire Us
        </Link>
      </div>
      <div className="absolute w-full h-full bg-slate-400 dark:bg-black opacity-50"></div>
    </div>
  );
};

export default HeroSection;
