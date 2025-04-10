import PropTypes from "prop-types";

const Benefits = ({ data, darkMode }) => {
  Benefits.propTypes = {
    data: PropTypes.object.isRequired,
    darkMode: PropTypes.bool.isRequired,
  };
  return (
    <div className="text-left px-2 md:text-center flex flex-col justify-center items-center gap-4 my-[200px]">
      <h1 className="text-4xl md:text-4xl font-bold">
        {data?.benefits?.benefitsTitle}
      </h1>
      <p className="text-2xl md:text-2xl max-w-[600px]">
        {data?.benefits?.benefitsSubtitle}
      </p>
      <div className="flex flex-col gap-10 mx-auto md:px-8 max-w-7xl mt-[50px]">
      {
        data?.benefits?.benefitsList.map((item, index) => (
          <div key={index} className="flex gap-4 md:gap-10 items-start">
            <img src={`../checkmark${darkMode ? "-dark" : "-light"}.svg`} className="w-[80px]"/>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold text-left">{item.title}</h1>
              <p className="text-xl text-left max-w-[700px]">{item.desc}</p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Benefits;
