import ParallaxWindow from "../../components/FilmMaking/ParallaxVideo";

const EditingColorGrading = () => {
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
        <h1 className='text-[54px] sm:text-[90px] font-semibold h-[85vh] content-center'>Editing & Colour grading</h1>
        <h1 className="text-[34px] sm:text-[54px] font-semibold ">
          “Master the Art of Visual Storytelling with Colour Grading and Expert
          Editing”
        </h1>
        <p className="text-[18px] sm:text-[24px]  ">
          We do more than just edit films, we create cinematic masterpieces.
          Consider editing to be the magic wand that transforms raw video into a
          polished gem, and colour grading to be the secret sauce that brings
          everything to life. Whether you want a dramatic tone or a colourful,
          energetic mood, we tailor every cut and colour to your unique story.
          It&apos;s similar to giving your footage a makeover but without the
          tedious small talk.
        </p>
        <p className="text-[18px] sm:text-[24px]  ">
          Our editing and colour grading technique is about more than just
          making things seem good, it&apos;s also about adding heart. Each frame is
          infused with precision, emotion, and style. Whether you&apos;re telling the
          world a corporate tale or a creative masterpiece, we add personality,
          humour, and inspiration to every project. Because, let&apos;s be honest,
          the perfect filters can make even the most humble pie look good.
        </p>
      </div>
      {serviceData.map((item, index) => (
        <ParallaxWindow serviceData={item} key={index} />
      ))}
    </div>
  );
};

export default EditingColorGrading;
