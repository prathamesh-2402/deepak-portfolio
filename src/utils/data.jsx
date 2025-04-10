const homeServiceData1 = {
  id: 1,
  title: "Digital Marketing",
  image:
    "https://images.pexels.com/photos/2097103/pexels-photo-2097103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  image2:
    "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const homeServiceData2 = {
  id: 2,
  title: "Film Making",
  image:
    "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  image2:
    "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=600",
};

const companyLogos = [
  "pfizer",
  "social-alpha",
  "bloom",
  "sleepy-owl",
  "apca",
  "gc",
  "kukufm",
  "guru",
];

const aboutUs = {
  believe: [
    {
      icon: "team",
      label: "Our Team",
      desc: "Passionate storytellers committed to delivering visually stunning and impactful content.",
    },
    {
      icon: "process",
      label: "Our Process",
      desc: "A dedicated team of creators that brings your ideas to life with visuals that evoke emotions.",
    },
    {
      icon: "formula",
      label: "Our Formula",
      desc: "A secret blend of strategies that guarantees success and fuels your creative journey.",
    },
  ],
  process: [
    {
      icon: "Initial Discussion",
      label: "Initial Discussion",
      desc: "We start by understanding your objectives, market, and target audience, and then define specific project needs that correspond with your vision.",
    },
    {
      icon: "Research",
      label: "Research",
      desc: "We do in-depth competitive analysis and audience insights to identify essential components that can differentiate your brand.",
    },
    {
      icon: "Conceptualization",
      label: "Conceptualization",
      desc: "Using our research, we create engaging ideas and deliver them to you in a well-structured video treatment plan.",
    },
    {
      icon: "formula",
      label: "Pre-Production",
      desc: "After finalizing the premise, we wrote a full script, created storyboards, set up the visual style, and planned the shoot.",
    },
    {
      icon: "formula",
      label: "Production",
      desc: "Following the production schedule, we begin the shooting or video process, which includes location scouting, equipment setup, and everything in between.",
    },
    {
      icon: "formula",
      label: "Post-Production",
      desc: "Once the footage is ready, we start editing to create a cohesive video with a voiceover and share the rough cut with you for feedback. ",
    },
  ],
};

const filmMakingDropdown = [
  "CORPORATE VIDEOS",
  "COMMERCIAL",
  "DOCUMENTARY",
  "SHORT FILM",
  "MUSIC VIDEO",
  "EDITING AND COLOR GRADING",
];

const digitalMarketingDropdown = [
  "SMM SERVICES",
  "SOCIAL MEDIA MANAGEMENT",
  "SEO SERVICES",
  "CONTENT MARKETING",
  "PPC SERVICES",
  "WEB DESIGN SERVICES",
  "VIDEO PRODUCTION & EDITING",
];

const allServices = [...filmMakingDropdown, ...digitalMarketingDropdown];

export {
  homeServiceData1,
  homeServiceData2,
  companyLogos,
  aboutUs,
  filmMakingDropdown,
  digitalMarketingDropdown,
  allServices,
};
