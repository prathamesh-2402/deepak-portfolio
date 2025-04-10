import PropTypes from "prop-types";
import HeroSection from "../../components/DigitalMarketing/HeroSection";
import Intro from "../../components/DigitalMarketing/Intro";
import OurServices from "../../components/DigitalMarketing/OurServices";
import Benefits from "../../components/DigitalMarketing/Benefits";
import WhyChoseUs from "../../components/DigitalMarketing/WhyChoseUs";
import Process from "../../components/DigitalMarketing/Process";

const data = {
  page: "SEO Services",
  intro: {
    introTitle: "Increase Your Visibility, Improve Your Ranking, and Get Noticed.",
    introSubtitle:
      "With our comprehensive SEO tactics targeted to your business objectives, you can maximize the potential of your website and generate organic traffic.",
    introDesc:
      "At N24 Production, we are focused on increasing your visibility, driving conversions, and guaranteeing that your website ranks higher in search engines.",
  },
  services: {
    servicesTitle: "What Our SEO Services Include",
    servicesSubtitle: "Comprehensive Strategies to Enhance Your Search Rankings",
    servicesDesc:
      "Our SEO services are designed to improve your website’s visibility, optimize its performance, and attract the right audience through proven strategies.",
    servicesList: [
      {
        id: 1,
        title: "On-Page SEO",
        desc: "Optimizing website content, meta tags, headings, and internal links to boost relevance and keyword ranks.",
        icon: "seo",
      },
      {
        id: 2,
        title: "Off-Page SEO",
        desc: "Building high-quality backlinks through deliberate outreach to boost domain authority and search engine rankings.",
        icon: "seo",
      },
      {
        id: 3,
        title: "Technical SEO",
        desc: "Making your website crawlable, mobile-friendly, and load rapidly to enhance user experience and search engine indexing.",
        icon: "seo",
      },
      {
        id: 4,
        title: "Keyword Research",
        desc: "Identifying high-traffic keywords relevant to your industry and target audience in order to increase targeted traffic to your website.",
        icon: "seo",
      },
      {
        id: 5,
        title: "Content Optimization",
        desc: "Creating high-quality, SEO-friendly content that aligns with user intent, promotes engagement, and improves search engine rankings.",
        icon: "seo",
      },
      {
        id: 6,
        title: "Local SEO",
        desc: "Optimizing your website for local searches, increasing exposure in location-based results, and facilitating connections with local customers.",
        icon: "seo",
      },
      {
        id: 7,
        title: "SEO Audits",
        desc: "Conducting in-depth website audits to uncover SEO issues, weaknesses, and opportunities to enhance your site's performance.",
        icon: "seo",
      },
      {
        id: 8,
        title: "Analytics & Reporting",
        desc: "Providing detailed performance reports, tracking progress, and making data-driven tweaks to constantly optimize SEO strategy.",
        icon: "seo",
      },
    ],
  },
  process: "seo-process",
  benefits: {
    benefitsTitle: "Benefits of Our SEO Services",
    benefitsSubtitle:
      "SEO is more than just ranking higher, it's about building a relevant online presence that attracts important traffic.",
    benefitsList: [
      {
        id: 1,
        title: "Increased Organic Traffic",
        desc: "Increase your website's visibility and drive more traffic from organic search results.",
      },
      {
        id: 2,
        title: "Higher Conversion Rates",
        desc: "Attract the correct audience to your website, which leads to more engagement and conversions.",
      },
      {
        id: 3,
        title: "Long-Term Effects",
        desc: "SEO provides long-term effects with ongoing benefits as your ranking rises.",
      },
      {
        id: 4,
        title: "Cost-Effective Marketing",
        desc: "Unlike paid ads, SEO is a less expensive way to generate visitors and leads.",
      },
      {
        id: 5,
        title: "Brand Credibility and Trust",
        desc: "Higher search ranks foster confidence, establishing your company as an industry leader.",
      },
    ],
  },
  whyUs:
    "At N24 Production, we recognize the power of effective SEO. Our devoted team of specialists develops SEO strategies that are suited to your specific business goals. We use industry knowledge and new strategies to create meaningful results. Whether you want to increase search ranks, drive traffic, or boost your brand's online presence, we are here to help you succeed in a competitive digital environment. We don't only execute SEO techniques, we also measure, analyze, and optimize them to ensure continuing value and growth for your business.",
};

const SeoServices = ({ darkMode }) => {
  SeoServices.propTypes = {
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

export default SeoServices;
