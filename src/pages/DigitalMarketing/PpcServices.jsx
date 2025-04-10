import PropTypes from "prop-types";
import HeroSection from "../../components/DigitalMarketing/HeroSection";
import Intro from "../../components/DigitalMarketing/Intro";
import OurServices from "../../components/DigitalMarketing/OurServices";
import Benefits from "../../components/DigitalMarketing/Benefits";
import WhyChoseUs from "../../components/DigitalMarketing/WhyChoseUs";

const data = {
  page: "PPC Services",
  intro: {
    introTitle: "Boost Your Traffic and Drive Results with Strategic PPC Campaigns!",
    introSubtitle:
      "We provide comprehensive Pay-Per-Click (PPC) services that will give your brand a competitive advantage in the digital industry.",
    introDesc:
      "PPC advertising allows you to reach the correct audience, drive targeted traffic, and receive immediate results by simply paying for clicks. With years of experience refining PPC ads, we ensure that your budget is used properly to improve conversions and ROI.",
  },
  services: {
    servicesTitle: "What Do Our PPC Services Include?",
    servicesSubtitle: "Maximize Your Reach and Acquire High-Quality Leads with PPC",
    servicesDesc:
      "We provide a comprehensive suite of PPC services to help your company stand out and gain high-quality leads, maximizing your visibility across multiple platforms.",
    servicesList: [
      {
        id: 1,
        title: "Search Ads",
        desc: "Our search ads appear when potential customers search for keywords related to your business. We optimize bidding strategies and ad copy to generate high-intent traffic.",
        icon: "pay-per-click",
      },
      {
        id: 2,
        title: "Display Ads",
        desc: "Display ads reach users across millions of websites, keeping your brand visible. We create eye-catching ads to increase brand awareness and retarget interested users.",
        icon: "pay-per-click",
      },
      {
        id: 3,
        title: "Google Shopping Ads",
        desc: "Google Shopping Ads put your products in front of ready-to-buy shoppers. Optimized for product visibility, they drive direct traffic and increase e-commerce sales.",
        icon: "pay-per-click",
      },
      {
        id: 4,
        title: "Social Ads",
        desc: "We optimize social media ads on Facebook, Instagram, and LinkedIn, using captivating visuals and compelling copy to drive engagement and conversions.",
        icon: "pay-per-click",
      },
      {
        id: 5,
        title: "Local Service Ads",
        desc: "Connect with nearby customers searching for your services. Appearing at the top of Google results boosts local visibility, trust, and leads.",
        icon: "pay-per-click",
      },
      {
        id: 6,
        title: "Daily Rank Tracking",
        desc: "We track your campaign’s success daily, monitoring keyword rankings and making real-time adjustments to optimize ad placement and maximize ROI.",
        icon: "pay-per-click",
      },
    ],
  },
  benefits: {
    benefitsTitle: "Benefits of Pay-Per-Click Services",
    benefitsSubtitle:
      "PPC is a proven strategy for increasing traffic and generating leads rapidly, ensuring your brand stays at the top of search results.",
    benefitsList: [
      {
        id: 1,
        title: "Immediate Traffic",
        desc: "PPC campaigns place businesses at the top of search results instantly, driving high-quality traffic and increasing sales.",
      },
      {
        id: 2,
        title: "Targeted Marketing",
        desc: "PPC allows businesses to target specific demographics, interests, and locations, ensuring ads reach the most relevant audience.",
      },
      {
        id: 3,
        title: "Measurable ROI",
        desc: "Track every dollar spent with PPC and analyze performance, making it easy to calculate and improve your return on investment.",
      },
      {
        id: 4,
        title: "Scalable Growth",
        desc: "PPC offers flexibility to increase budget and expand reach as your business grows, maximizing exposure and customer acquisition.",
      },
      {
        id: 5,
        title: "Comprehensive Analytics",
        desc: "Gain insights into audience behavior and campaign performance. Our detailed reports help you make data-driven decisions.",
      },
    ],
  },
  whyUs:
    "We don’t just manage your PPC campaigns—we turn them into revenue-generating machines. Our skilled digital marketers develop customized PPC strategies tailored to your objectives. From keyword research to landing page optimization, we oversee every aspect of your campaign to ensure maximum efficiency. With a results-driven approach and continuous optimization, we keep your brand ahead in the competitive digital marketplace. Choose us to unlock the full potential of PPC and propel your business to new heights.",
};

const PpcServices = ({ darkMode }) => {
  PpcServices.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };

  return (
    <div className="w-full">
      <HeroSection data={data} />
      <Intro data={data} />
      <OurServices data={data} darkMode={darkMode} />
      <Benefits data={data} darkMode={darkMode} />
      <WhyChoseUs data={data} />
    </div>
  );
};

export default PpcServices;
