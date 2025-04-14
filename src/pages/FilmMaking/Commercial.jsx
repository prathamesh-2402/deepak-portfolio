import ParallaxWindow from "../../components/FilmMaking/ParallaxVideo";

const Commercial = () => {
  const serviceData = [
    {
      id: 1,
      title: "Hinduja 1",
      location: "New York, USA",
      date: "March 2023",
    },
    {
      id: 2,
      title: "Hinduja 2",
      location: "New York, USA",
      date: "March 2023",
    },
    {
      id: 3,
      title: "Hinduja 3",
      location: "New York, USA",
      date: "March 2023",
    },
    {
      id: 4,
      title: "Hinduja 4",
      location: "New York, USA",
      date: "March 2023",
    },
    {
      id: 5,
      title: "Lisen",
      location: "New York, USA",
      date: "March 2023",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-col justify-center items-center gap-20 px-[10%] md:text-center">
        <h1 className="text-[54px] sm:text-[90px] font-semibold h-[85vh] content-center">
          Commercial
        </h1>
        <h1 className="text-[34px] sm:text-[54px] font-semibold ">
          “Turned the ads into a chance to showcase your brand.”
        </h1>
        <p className="text-[18px] sm:text-[24px]  ">
          We specialize in creating creative TVC commercials that engage and
          inspire. Our team generates intriguing, visually attractive
          advertising that has a long-term impact on your audience. With our
          skills, we provide innovative solutions that not only highlight what
          you sell but also enhance your brand&apos;s identity.
        </p>
        <p className="text-[18px] sm:text-[24px]  ">
          An effective TVC can boost sales and brand recognition. Our
          advertisements, whether for TV, social media, or digital platforms,
          are purposefully crafted to captivate viewers, elicit emotions, and
          effectively convey your message. can help you stand out in a crowded
          industry by creating a commercial that delivers results and connects
          with your target audience.
        </p>
      </div>
      {serviceData.map((item, index) => (
        <ParallaxWindow serviceData={item} key={index} />
      ))}
    </div>
  );
};

export default Commercial;
