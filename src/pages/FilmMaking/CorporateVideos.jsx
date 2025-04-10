import ParallaxWindow from "../../components/FilmMaking/ParallaxVideo";

const CorporateVideos = () => {
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
          Corporate Video
        </h1>
        <h1 className="text-[34px] sm:text-[54px] font-semibold ">
          “Turn Your Brand&apos;s Voice to Life in Motion”
        </h1>
        <p className="text-[18px] sm:text-[24px]  ">
          We create compelling corporate videos that highlight your brand&apos;s
          story, values, and ambition. Whether you want to showcase your
          business, launch a new product, or improve internal communication, our
          skilled team will ensure that every frame says volumes. We blend
          creative narrative with high-end production quality, customizing each
          video to resonate with your target audience and improve your
          company&apos;s image.
        </p>
        <p className="text-[18px] sm:text-[24px]  ">
          A well-executed corporate video is a strong tool for building brand
          credibility and increasing engagement. From training and testimonial
          videos to compelling promotional content, our production approach is
          meant to provide you with a visually stunning and dynamic story. N24
          Production will help you effectively deliver your message and leave a
          lasting impression on your clients, employees, and stakeholders.
        </p>
      </div>
      {serviceData.map((item, index) => (
        <ParallaxWindow serviceData={item} key={index} />
      ))}
    </div>
  );
};

export default CorporateVideos;
