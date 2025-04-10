import PropTypes from "prop-types";

const Process = ({data, darkMode}) => {
  Process.propTypes = {
    data: PropTypes.object.isRequired,
    darkMode: PropTypes.bool.isRequired,
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 px-2 my-[200px] w-full">
      <h1 className="text-4xl md:text-4xl font-bold">Our Process</h1>
      <div className="mx-auto md:px-8 max-w-7xl mt-[50px]">

      <img src={`../${data.process}${darkMode ? "-dark" : "-light"}.svg`} />
      </div>
    </div>
  );
};

export default Process;
