import PropTypes from "prop-types";
import HeroSection from "../../components/DigitalMarketing/HeroSection";
import Intro from "../../components/DigitalMarketing/Intro";
import OurServices from "../../components/DigitalMarketing/OurServices";
import Benefits from "../../components/DigitalMarketing/Benefits";
import WhyChoseUs from "../../components/DigitalMarketing/WhyChoseUs";
import Process from "../../components/DigitalMarketing/Process";

const data = {
  page: "Social Media Marketing",
  intro: {
    introTitle: "Transform Your Brand with Powerful Social Media Strategies.",
    introSubtitle:
      "N24 Production's expert social media marketing services will help you maximize your brand's digital impact.",
    introDesc:
      "In today's fast-paced digital world, having a strong social media presence is critical for growing your business. At N24 Production, we help you stand out, engage your audience, and create meaningful conversions across all platforms.",
  },
  services: {
    servicesTitle: "What Our Social Media Marketing Services Includes",
    servicesSubtitle: "Comprehensive Services Tailored for Every Platform",
    servicesDesc:
      "Our full-service social media marketing solutions are designed to help you increase brand awareness, engage your audience, and produce measurable results across all social platforms.",
    servicesList: [
      {
        id: 1,
        title: "Facebook Marketing",
        desc: "Build brand loyalty by creating engaging posts, running data-driven marketing campaigns, and managing community interactions.",
        icon: "facebook",
      },
      {
        id: 2,
        title: "Instagram Marketing",
        desc: "Create visually appealing content, manage stories and reels, and carry out targeted campaigns to boost engagement and reach.",
        icon: "instagram",
      },
      {
        id: 3,
        title: "Youtube Marketing",
        desc: "Improve YouTube marketing by optimizing video content, SEO, and thumbnails to increase views and interaction and boost channel growth.",
        icon: "youtube",
      },
      {
        id: 4,
        title: "LinkedIn Marketing",
        desc: "Create thought-leadership content, optimize your profile, and launch B2B ad campaigns to increase credibility.",
        icon: "linkedin",
      },
      {
        id: 5,
        title: "Pinterest Marketing",
        desc: "To improve content discoverability and increase website traffic, create eye-catching pins and oversee boards.",
        icon: "pinterest",
      },
      {
        id: 6,
        title: "X (formerly Twitter) Marketing",
        desc: "Create timely, interesting material around trending topics to increase brand visibility and reinforce its voice in real-time conversations.",
        icon: "x",
      },
    ],
  },
  process: "smm-process",
  benefits: {
    benefitsTitle: "Benefits from Our Social Media Marketing Services",
    benefitsSubtitle:
      "With our Social Media Marketing services, your brand will see measurable changes that transfer into real-world outcomes.",
    benefitsList: [
      {
        id: 1,
        title: "Increase brand visibility",
        desc: "By creating compelling, personalized content and using targeted advertising, we ensure that your company reaches a larger audience and remains top of mind.",
      },
      {
        id: 2,
        title: "Engage Your Target Audience",
        desc: "We create meaningful connections with your followers by posting on a regular basis, managing the community, and providing interactive material.",
      },
      {
        id: 3,
        title: "Drive website traffic and conversions",
        desc: "Our solutions integrate social media activities with your website, assisting in driving traffic, increasing conversions, and generating leads that turn into loyal clients.",
      },
      {
        id: 4,
        title: "Enhance Brand Reputation",
        desc: "We proactively manage your brand's online reputation by monitoring mentions, responding to customer comments, and ensuring your company remains trustworthy and trustworthy.",
      },
      {
        id: 5,
        title: "Comprehensive Analytics and Reporting",
        desc: "Our data-driven approach gives you clear insights into campaign performance, allowing you to better understand the ROI and adapt strategies for improved results.",
      },
    ],
  },
  whyUs:
    "We know of the power of narrative. Our content marketing strategy aims to emotionally engage with your audience in addition to simply speaking to them. Before creating content that is specifically suited to your objectives, we take the time to understand the voice, values, and audience of your brand. We make sure that every piece of content, whether it be captivating social media posts or excellent films, complements your overall marketing plan. In order to help your company stand out from the competition and establish genuine connections with consumers, our team is dedicated to providing results. You get more than simply content when you work with N24 Production, you get a plan that works.",
};

const SmmServices = ({ darkMode }) => {
  SmmServices.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };
  return (
    <div className="w-full">
      <HeroSection data={data} />
      <Intro data={data} />
      <OurServices data={data} darkMode={darkMode} />
      <Benefits data={data} darkMode={darkMode} />
      <Process data={data} darkMode={darkMode} />
      <WhyChoseUs data={data} />
    </div>
  );
};

export default SmmServices;
