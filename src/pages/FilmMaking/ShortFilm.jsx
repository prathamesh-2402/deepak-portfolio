import ParallaxWindow from "../../components/FilmMaking/ParallaxVideo";

const ShortFilm = () => {
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
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-col justify-center items-center gap-20 px-[10%] md:text-center">
        <h1 className="text-[54px] sm:text-[90px] font-semibold h-[85vh] content-center">
          Short Film
        </h1>
        <h1 className="text-[34px] sm:text-[54px] font-semibold ">
          “Stories That Live On Beyond the Final Frame”
        </h1>
        <p className="text-[18px] sm:text-[24px]  ">
          Since we think that every story should be told, there&apos;s no better
          way to accomplish that than with an impactful short film. Our team
          creates fascinating storylines that combine creativity, emotion, and
          humour, ensuring that your message is remembered long after the screen
          goes black. With a sharp eye for detail and an emphasis on human
          connection, we turn ideas into films that are both entertaining and
          impactful.
        </p>
        <p className="text-[18px] sm:text-[24px]  ">
          Short films are perfect for engaging viewers with new themes and
          real-life tales that prompt discussion. We make films that stand out,
          whether you want to tell a remarkable story, convey a personal
          experience, or lend humour to a worthwhile cause. We engage viewers on
          a deeper level by incorporating humour and compassion, leaving them
          with a lasting memory and a smile on their faces.
        </p>
      </div>
      {serviceData.map((item, index) => (
        <ParallaxWindow serviceData={item} key={index} />
      ))}
    </div>
  );
};

export default ShortFilm;
