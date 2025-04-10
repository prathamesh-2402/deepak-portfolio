import PropTypes from "prop-types";
import HeroSection from "../../components/DigitalMarketing/HeroSection";
import Intro from "../../components/DigitalMarketing/Intro";
import OurServices from "../../components/DigitalMarketing/OurServices";
import Benefits from "../../components/DigitalMarketing/Benefits";
import WhyChoseUs from "../../components/DigitalMarketing/WhyChoseUs";

const data = {
  page: "Web Design Services",
  intro: {
    introTitle: "Compelling Designs That Grab Attention and Boost Conversions",
    introSubtitle:
      "We specialize in creating visually appealing, user-friendly, high-performance websites that have an impact.",
    introDesc:
      "Our team combines creativity and technical expertise to build websites that not only look great but also serve as powerful tools for business growth. Whether you're starting from scratch or revamping an existing site, our custom web design services are tailored to your unique needs.",
  },
  services: {
    servicesTitle: "What Our Web Design Services Include",
    servicesSubtitle:
      "We offer a wide range of web design services to ensure your business stands out in the digital world.",
    servicesDesc:
      "Our team is committed to bringing your vision to life, from user-friendly eCommerce platforms to distinctive brand identities.",
    servicesList: [
      {
        id: 1,
        title: "Ecommerce Website Design",
        desc: "We design intuitive, responsive, and secure e-commerce websites that drive sales and offer seamless shopping experiences with easy navigation and payment options.",
        icon: "web-dev",
      },
      {
        id: 2,
        title: "Logo Designing",
        desc: "Our expert designers craft unique, memorable logos that reflect your brand identity, helping you establish a professional presence in a competitive market.",
        icon: "web-dev",
      },
      {
        id: 3,
        title: "UI/UX Design",
        desc: "We focus on creating visually stunning and user-friendly interfaces that enhance engagement, providing smooth and enjoyable experiences for your audience.",
        icon: "web-dev",
      },
      {
        id: 4,
        title: "Website Redesign",
        desc: "If your website needs a refresh, we specialize in redesigning sites to improve aesthetics, functionality, and user experience while keeping your business goals in focus.",
        icon: "web-dev",
      },
      {
        id: 5,
        title: "Custom Web Design",
        desc: "We create bespoke website designs tailored to your brand, ensuring your site stands out and aligns with your vision, objectives, and target audience.",
        icon: "web-dev",
      },
      {
        id: 6,
        title: "Website Maintenance",
        desc: "Our ongoing maintenance services keep your website updated, secure, and performing optimally, from content updates to software enhancements.",
        icon: "web-dev",
      },
    ],
  },
  benefits: {
    benefitsTitle: "Benefits of Our Web Design Services",
    benefitsSubtitle:
      "We design websites that not only look great but also drive meaningful business results.",
    benefitsList: [
      {
        id: 1,
        title: "Improved User Experience",
        desc: "We follow a user-first approach, ensuring seamless navigation, fast load times, and easy content access to keep visitors engaged and drive action.",
      },
      {
        id: 2,
        title: "Responsive Designs",
        desc: "Our mobile-friendly designs ensure your site looks and functions flawlessly across all devices—desktops, tablets, and smartphones—expanding your reach.",
      },
      {
        id: 3,
        title: "Brand Consistency",
        desc: "We integrate your branding, style, and messaging into your website design, reinforcing a cohesive and professional digital identity.",
      },
      {
        id: 4,
        title: "Increased Conversions",
        desc: "Our designs are optimized to boost conversions—whether sales, leads, or subscriptions—by focusing on clear CTAs and streamlined user journeys.",
      },
      {
        id: 5,
        title: "Search Engine Optimized",
        desc: "Our websites follow SEO best practices, ensuring better search engine rankings, increased visibility, and more organic traffic for your business.",
      },
    ],
  },
  whyUs:
    "We blend creativity with functionality to design websites that are visually stunning and highly effective. Our expert team takes the time to understand your business goals, audience, and vision, ensuring your website aligns perfectly with your needs. Whether you need an eCommerce platform, a full redesign, or a custom-built site, we deliver high-quality, professional solutions with lasting value. With N24 Production, you gain a dedicated partner committed to your success, offering continuous support and maintenance to keep your website secure, relevant, and efficient.",
};

const WebDesign = ({ darkMode }) => {
  WebDesign.propTypes = {
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

export default WebDesign;
