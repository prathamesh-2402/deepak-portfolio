import PropTypes from "prop-types";
import HeroSection from "../../components/DigitalMarketing/HeroSection";
import Intro from "../../components/DigitalMarketing/Intro";
import OurServices from "../../components/DigitalMarketing/OurServices";
import Benefits from "../../components/DigitalMarketing/Benefits";
import WhyChoseUs from "../../components/DigitalMarketing/WhyChoseUs";

const data = {
  page: "Video Production & Editing Services",
  intro: {
    introTitle: "Enhance Your Story with Engaging Video Creations.",
    introSubtitle:
      "In today's digital age, video content is one of the most effective ways to increase engagement, develop brand awareness, and communicate messages.",
    introDesc:
      "N24 Production specializes in high-quality video creation and editing services that seamlessly integrate with your digital marketing strategy. Whether it's brand storytelling, customer testimonials, or promotional videos, we ensure every frame delivers the right message, connects with your audience, and drives results.",
  },
  services: {
    servicesTitle: "What Our Video Production & Editing Service Includes",
    servicesSubtitle:
      "We provide a range of video services to help businesses connect with their audiences and achieve their marketing goals.",
    servicesList: [
      {
        id: 1,
        title: "Brand Promotional Videos",
        desc: "Create an emotional connection with your target audience while increasing brand awareness. We showcase your brand’s mission, vision, and values to build long-term relationships.",
        icon: "video-production",
      },
      {
        id: 2,
        title: "Testimonial Videos",
        desc: "Showcase real customer experiences to build trust and credibility. These videos serve as powerful endorsements that influence purchasing decisions.",
        icon: "video-production",
      },
      {
        id: 3,
        title: "Explainer Videos",
        desc: "Simplify complex ideas and demonstrate your product or service in an engaging and easy-to-understand format, enhancing audience comprehension.",
        icon: "video-production",
      },
      {
        id: 4,
        title: "Corporate Videos",
        desc: "Showcase your company's culture, values, and milestones with professionally produced corporate videos for internal and external communications.",
        icon: "video-production",
      },
      {
        id: 5,
        title: "Product Advertisement Videos",
        desc: "Promote your products dynamically with engaging videos that highlight key features and benefits, driving sales and conversions.",
        icon: "video-production",
      },
      {
        id: 6,
        title: "Social Media Videos",
        desc: "Create powerful, short-form videos optimized for platforms like Instagram, Facebook, and TikTok to maximize engagement and brand visibility.",
        icon: "video-production",
      },
      {
        id: 7,
        title: "Event Coverage Videos",
        desc: "Capture key moments from business events, product launches, and conferences, extending their impact beyond the venue.",
        icon: "video-production",
      },
      {
        id: 8,
        title: "Training & Educational Videos",
        desc: "Develop clear, engaging training videos for employees or customers, enhancing learning and retention with structured content.",
        icon: "video-production",
      },
    ],
  },
  benefits: {
    benefitsTitle: "Benefits of Our Video Production & Editing Services",
    benefitsSubtitle:
      "At N24 Production, we believe in crafting compelling video experiences that resonate with your audience.",
    benefitsList: [
      {
        id: 1,
        title: "High-Quality Content Creation",
        desc: "We ensure every video is of the highest quality, capturing your vision with a professional look and feel.",
      },
      {
        id: 2,
        title: "Increased Engagement",
        desc: "Video is one of the most engaging forms of content. We create videos that not only capture attention but also sustain audience interest.",
      },
      {
        id: 3,
        title: "Brand Visibility",
        desc: "Well-crafted videos enhance your brand message, ensuring a strong online presence and a lasting impact on your audience.",
      },
      {
        id: 4,
        title: "Enhanced Message Delivery",
        desc: "Our videos simplify complex ideas, making information easier to understand, retain, and act upon.",
      },
      {
        id: 5,
        title: "Tailored to Your Needs",
        desc: "We customize every video to align with your brand’s unique goals, ensuring maximum effectiveness and impact.",
      },
    ],
  },
  whyUs:
    "N24 Production brings creativity and technical expertise to every project. We understand the power of video and tailor our services to your business needs. Our team is passionate about storytelling, ensuring that each video is not just content but a valuable marketing tool. Whether you need a brand promotion video or a product advertisement, we deliver videos that engage, inform, and inspire your audience.",
};

const VideoProduction = ({ darkMode }) => {
  VideoProduction.propTypes = {
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

export default VideoProduction;
