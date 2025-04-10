const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[80px] items-center lg:items-start text-light-foreground dark:text-dark-foreground my-20 px-2 md:px-10">
      <div className="w-[80%] md:w-1/2 flex justify-end">
        <img
          src="./logo.webp"
          className="object-contain xl:w-[85%] 2xl:w-[70%]"
        />
      </div>
      <div className="md:w-1/2 flex flex-col gap-4 items-center lg:items-start">
        <div className="flex flex-col gap-[30px] xl:w-[70%] 2xl:w-[50%] text-center lg:text-start">
          <h1 className="text-[52px]">N24 Productions</h1>
          <p className="text-xl">
            From the ashes of concept to the flames of creation, we bring your
            story to life with precision and passion.
          </p>
        </div>
        <div className="w-[10%] border-b border-light-foreground dark:border-dark-foreground my-14"></div>
        <div className="lg:w-[90%] 2xl:w-[70%] flex flex-col gap-9 px-4 md:px-0">
          <p className="font-bold text-lg text-light-foreground dark:text-dark-foreground">
            “Telling compelling stories through video is what we do best.”
          </p>
          <p className="dark:text-[#f3f6fa95]">
            We are a dynamic full-service production company situated in Mumbai,
            India, with years of experience bringing ideas to life through
            cinematic storytelling. Our expertise lies in producing captivating
            video content that captivates viewers on several platforms, from
            concept to execution. We assist businesses, brands, and
            organizations in expressing their stories through innovative video
            production and digital marketing strategies.
          </p>
          <p className="dark:text-[#f3f6fa95]">
            <span className="font-semibold text-light-foreground dark:text-dark-foreground">
            We create captivating films that drive measurable business success.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
