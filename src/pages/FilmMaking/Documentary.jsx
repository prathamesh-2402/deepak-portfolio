import ParallaxWindow from "../../components/FilmMaking/ParallaxVideo";

const Documentary = () => {
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
          Documentary
        </h1>
        <h1 className="text-[34px] sm:text-[54px] font-semibold ">
          “Where Truth Is Heard in Each Frame”
        </h1>
        <p className="text-[18px] sm:text-[24px]  ">
          We believe that storytelling has the ability to influence and inspire.
          Documentaries are more than simply pictures, they capture the heart
          and soul of real experiences, giving voice to unseen stories that must
          be heard. We create fascinating narratives that touch strongly with
          your audience, whether they address social issues, personal journeys,
          or historical events.
        </p>
        <p className="text-[18px] sm:text-[24px]  ">
          A well-made documentary can not only educate but also elicit emotions
          and spark conversation. It allows your audience to connect with
          real-life experiences, making your message memorable. With
          proficiency, your documentary will be a strong tool for education,
          awareness, and impact, highlighting the tales that are actually
          meaningful.
        </p>
      </div>
      {serviceData.map((item, index) => (
        <ParallaxWindow serviceData={item} key={index} />
      ))}
    </div>
  );
};

export default Documentary;
