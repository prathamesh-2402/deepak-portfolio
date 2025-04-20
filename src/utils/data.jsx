const homeServiceData1 = {
  id: 1,
  title: "Film Making",
  image:
    "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  image2:
    "/assets/images/14.webp",
};

const homeServiceData2 = {
  id: 2,
  title: "Digital Marketing",
  // image:
  //   "https://images.pexels.com/photos/2097103/pexels-photo-2097103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  image:
    "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // image2:
  //   "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  image2:
    "https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      icon: "discussion",
      label: "Initial Discussion",
      desc: "We start by understanding your objectives, market, and target audience, and then define specific project needs that correspond with your vision.",
    },
    {
      icon: "research",
      label: "Research",
      desc: "We do in-depth competitive analysis and audience insights to identify essential components that can differentiate your brand.",
    },
    {
      icon: "conceptualizing",
      label: "Conceptualization",
      desc: "Using our research, we create engaging ideas and deliver them to you in a well-structured video treatment plan.",
    },
    {
      icon: "pre-prod",
      label: "Pre-Production",
      desc: "After finalizing the premise, we wrote a full script, created storyboards, set up the visual style, and planned the shoot.",
    },
    {
      icon: "prod",
      label: "Production",
      desc: "Following the production schedule, we begin the shooting or video process, which includes location scouting, equipment setup, and everything in between.",
    },
    {
      icon: "video-production",
      label: "Post-Production",
      desc: "Once the footage is ready, we start editing to create a cohesive video with a voiceover and share the rough cut with you for feedback. ",
    },
  ],
  formula: [
    {
      title: "Authentic Storytelling",
      paraOne:
        "We focus on creating stories that truly connect with your audience, addressing their emotions and needs in innovative and engaging ways.",
      paraTwo:
        "Understanding the vision behind your brand and utilizing the psychology of human connection to create narratives that genuinely engage and inspire.",
    },
    {
      title: "Strategic Storytelling",
      paraOne:
        "We immerse ourselves in studying your target audience, identifying the right tone and important moments to establish genuine connections.",
      paraTwo:
        "We concentrate on capturing those 'aha' moments that inspire rapid action and effortlessly guide your audience through the journey, leading to results at all stages of the marketing funnel.",
    },
    {
      title: "Impactful Delivery",
      paraOne:
        "We ensure every project reflects our commitment to excellence by using the right equipment and an experienced, skilled team.",
      paraTwo:
        "With our in-house studio and post-production capabilities, we have complete creative control over every video, ensuring top-tier results at all stages.",
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
