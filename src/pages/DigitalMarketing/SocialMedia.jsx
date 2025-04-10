import PropTypes from "prop-types";
import HeroSection from "../../components/DigitalMarketing/HeroSection";
import Intro from "../../components/DigitalMarketing/Intro";
import OurServices from "../../components/DigitalMarketing/OurServices";
import Benefits from "../../components/DigitalMarketing/Benefits";
import WhyChoseUs from "../../components/DigitalMarketing/WhyChoseUs";
import Process from "../../components/DigitalMarketing/Process";

const data = {
  page: "Social Media Management",
  intro: {
    introTitle: "Enhance Your Presence and Impact with Our Expert Social Media Management.",
    introSubtitle:
      "N24 Production's experienced social media management will help you realize the full potential of your business.",
    introDesc:
      "We create captivating content that engages your audience and boosts your digital visibility across all platforms.",
  },
  services: {
    servicesTitle: "What Our Social Media Management Service Includes",
    servicesSubtitle:
      "Specialized Strategies to Boost Engagement, Conversions, and Brand Loyalty",
    servicesDesc:
      "We offer specialized social media strategies to help your brand thrive online. Our team creates compelling content, monitors interactions, and optimizes campaigns to enhance traffic, conversions, and brand loyalty.",
    servicesList: [
      {
        id: 1,
        title: "Facebook Management",
        desc: "Creating entertaining content, monitoring advertisements, and analyzing data to increase brand loyalty.",
        icon: "facebook",
      },
      {
        id: 2,
        title: "Instagram Management",
        desc: "Curating visually appealing material, managing stories and reels, and implementing targeted marketing to drive organic growth.",
        icon: "instagram",
      },
      {
        id: 3,
        title: "YouTube Management",
        desc: "Optimizing videos, managing channels, and implementing SEO methods to boost views, subscribers, and interaction.",
        icon: "youtube",
      },
      {
        id: 4,
        title: "LinkedIn Management",
        desc: "Creating quality content, improving profiles, and executing B2B campaigns to establish your company as an industry leader.",
        icon: "linkedin",
      },
      {
        id: 5,
        title: "Twitter (X) Management",
        desc: "Crafting real-time tweets, engaging with trends, and enhancing your brand's voice in conversations.",
        icon: "x",
      },
      {
        id: 6,
        title: "Pinterest Management",
        desc: "Designing eye-catching pins, maintaining boards, and optimizing content to boost traffic and visibility.",
        icon: "pinterest",
      },
    ],
  },
  process: "smm-process",
  benefits: {
    benefitsTitle: "Benefits from Our Social Media Management Services",
    benefitsSubtitle:
      "Effective social media management may transform your business, leaving a lasting digital footprint that leads to both success and loyalty.",
    benefitsList: [
      {
        id: 1,
        title: "Enhanced Brand Visibility",
        desc: "Create high-quality content and attention-grabbing initiatives on a consistent basis to keep your business top of mind.",
      },
      {
        id: 2,
        title: "Increased Engagement",
        desc: "We create a community of engaged followers by using strategic updates, real-time interaction, and creative marketing.",
      },
      {
        id: 3,
        title: "Generate Targeted Leads",
        desc: "We use data-driven tactics and smart targeting to attract your perfect audience to your services or products, converting followers into buyers.",
      },
      {
        id: 4,
        title: "Brand Reputation",
        desc: "We maintain a positive brand image by responding to consumer inquiries, taking comments, and managing online interactions.",
      },
      {
        id: 5,
        title: "Data-Driven Growth",
        desc: "Our consistent tracking and optimization efforts assure measurable outcomes, which improve engagement and ROI over time.",
      },
    ],
  },
  whyUs:
    "We combine creativity and strategy to help your brand survive in today's competitive digital landscape. We are more than just a service provider, we are a long-term partner committed to improving your brand's reputation, creating an engaged community, and maximizing your ROI. Our team's expertise in social media management, content production, and audience engagement guarantees that your business stays on top of trends and consistently provides measurable results. Whether you're looking to expand your footprint, launch a new product, or strengthen consumer loyalty, N24 Production provides customized, data-driven solutions built to match your individual needs.",
};

const SocialMedia = ({ darkMode }) => {
  SocialMedia.propTypes = {
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

export default SocialMedia;
