import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const OurServices = ({ data, darkMode, smallIcon }) => {
  OurServices.propTypes = {
    data: PropTypes.object.isRequired,
    darkMode: PropTypes.bool.isRequired,
    smallIcon: PropTypes.bool,
  };
  return (
    <div className="flex flex-col justify-center items-center my-[100px] px-2">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-left md:text-center text-4xl md:text-4xl font-bold text-light-foreground dark:text-dark-foreground px-4 mx-auto md:px-8 max-w-7xl">
          {data.services.servicesSubtitle}
        </h1>
        <p className="text-left md:text-center text-light-foreground dark:text-dark-foreground mb-8 leading-relaxed md:px-4 mx-auto max-w-4xl">
          {data.services.servicesDesc}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-10 px-4 mx-auto md:px-8 max-w-7xl">
        {data.services.servicesList.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div>
              <h1 className="font-semibold text-xl">{item.title}</h1>
              <p>{item.desc}</p>
            </div>
            <img src={`../${darkMode ? "dark" : "light"}/${item.icon}${darkMode ? "-dark" : "-light"}.svg`} className={`${smallIcon ? "w-[66px]" : "w-[96px]"}`}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
