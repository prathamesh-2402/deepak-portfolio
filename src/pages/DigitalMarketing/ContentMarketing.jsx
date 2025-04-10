import PropTypes from "prop-types";
import HeroSection from "../../components/DigitalMarketing/HeroSection";
import Intro from "../../components/DigitalMarketing/Intro";
import OurServices from "../../components/DigitalMarketing/OurServices";
import Benefits from "../../components/DigitalMarketing/Benefits";
import WhyChoseUs from "../../components/DigitalMarketing/WhyChoseUs";

const data = {
  page: "Content Marketing Services",
  intro: {
    introTitle: "Connect, Educate, and Motivate with Captivating Content.",
    introSubtitle:
      "In the ever-changing digital landscape, content is at the heart of every successful marketing campaign.",
    introDesc:
      "At N24 Production, we understand that excellent content does more than just inform—it engages, educates, and influences. Our content marketing services give your business a distinct voice, foster deep connections with your audience, and position your brand as an industry thought leader. From concept to delivery, we create content that grabs attention and produces results.",
  },
  services: {
    servicesTitle: "What Our Content Marketing Service Includes",
    servicesSubtitle:
      "N24 Production offers a comprehensive range of content marketing services designed to engage, educate, and inspire your audience.",
    servicesDesc:
      "We blend strategy, creativity, and optimization to ensure your content is engaging and effective. Our services include:",
    servicesList: [
      {
        id: 1,
        title: "Content Strategy Development",
        desc: "We build content strategies tailored to your business goals, target audience, and market trends.",
        icon: "content-marketing",
      },
      {
        id: 2,
        title: "Blog and Article Writing",
        desc: "Creating engaging, relevant, and SEO-optimized content to boost traffic, educate your audience, and establish authority.",
        icon: "content-marketing",
      },
      {
        id: 3,
        title: "Social Media Content Creation",
        desc: "Crafting engaging posts and campaigns tailored to your brand’s voice for platforms like Instagram, Facebook, LinkedIn, and Twitter.",
        icon: "content-marketing",
      },
      {
        id: 4,
        title: "Video Content Production",
        desc: "High-quality videos that captivate and educate, from brand storytelling to tutorials and promotional content.",
        icon: "content-marketing",
      },
      {
        id: 5,
        title: "Infographics and Visual Content",
        desc: "Designing visually appealing infographics that simplify complex information and make it more shareable.",
        icon: "content-marketing",
      },
      {
        id: 6,
        title: "Content Distribution and Promotion",
        desc: "Strategically promoting content across relevant channels to reach your target audience and reinforce your brand message.",
        icon: "content-marketing",
      },
    ],
  },
  benefits: {
    benefitsTitle: "Benefits of Our Content Marketing Services",
    benefitsSubtitle: "Investing in content marketing is essential for building a strong and lasting brand presence.",
    benefitsList: [
      {
        id: 1,
        title: "Enhanced Brand Visibility",
        desc: "Our SEO-driven content and distribution tactics improve visibility on search engines and social media platforms.",
      },
      {
        id: 2,
        title: "Improved Customer Engagement",
        desc: "Tailored content resonates with your audience, boosting interaction and fostering brand loyalty.",
      },
      {
        id: 3,
        title: "Higher Conversion Rates",
        desc: "We create content that not only attracts visitors but also turns them into customers through compelling calls to action.",
      },
      {
        id: 4,
        title: "Long-term Brand Loyalty",
        desc: "Consistently delivering valuable content builds trust and credibility, leading to repeat customers and brand advocates.",
      },
      {
        id: 5,
        title: "Clear and Effective Communication",
        desc: "Our content strategies ensure your brand’s message is presented clearly, consistently, and effectively.",
      },
    ],
  },
  whyUs:
    "We understand the power of storytelling. Our content marketing approach goes beyond delivering messages—it creates emotional connections. We take the time to understand your brand's voice, values, and audience before crafting content tailored to your goals. From compelling social media posts to high-quality videos, we ensure every piece of content aligns with your overall marketing strategy. Our team is committed to helping your business stand out, engage customers, and drive real results. With N24 Production, you get more than content—you get a strategy that works.",
};

const ContentMarketing = ({ darkMode }) => {
  ContentMarketing.propTypes = {
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

export default ContentMarketing;
