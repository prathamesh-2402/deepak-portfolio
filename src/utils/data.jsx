const homeServiceData1 = {
  id: 1,
  title: "ICN Supershow",
  date: 'November 2024',
  location: 'GOA',
  image: "/assets/icn_goa/2.jpg",
  image2: "/assets/icn_goa/1.jpg",
};

const homeServiceData2 = {
  id: 2,
  title: "ICN Majestic",
  date: 'April 2024',
  location: 'MUMBAI',
  image: "/assets/icn_mumbai/1.jpg",
  image2: "/assets/icn_mumbai/2.jpg",
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
  accolades: [
    {
      icon: "checkmark",
      label: "Certified Nutritionist",
      desc: "Precision nutrition coaching rooted in science and natural methods.",
    },
    {
      icon: "checkmark",
      label: "Certified Trainer",
      desc: "Strength and hypertrophy programming tailored to your physique goals.",
    },
    {
      icon: "team",
      label: "100+ Transformations",
      desc: "Proven track record mentoring athletes to sustainable, drug‑free results.",
    },
  ],
};

const pricingPlans = {
  tiers: [
    {
      id: "month-1",
      name: "Monthly Kickstart",
      priceText: "₹ 4999",
      period: "1 month",
      highlight: false,
      cta: "Start 1 Month",
      features: [
        "Diet plan",
        "Training program",
        "Online weekly check‑ins",
        "Quantified nutrition approach",
        "Diet made easy (almost home food)",
      ],
    },
    {
      id: "month-3",
      name: "Quarterly Progress",
      priceText: "₹ 13999",
      period: "3 months",
      highlight: true,
      cta: "Choose 3 Months",
      features: [
        "Diet plan",
        "Training program",
        "Online weekly check‑ins",
        "Quantified nutrition approach",
        "Diet made easy (almost home food)",
      ],
    },
    {
      id: "month-6",
      name: "Half‑Year Transformation",
      priceText: "₹ 24999",
      period: "6 months",
      highlight: false,
      cta: "Commit 6 Months",
      features: [
        "Diet plan",
        "Training program",
        "Online weekly check‑ins",
        "Quantified nutrition approach",
        "Diet made easy (almost home food)",
      ],
    },
  ],
};

export {
  homeServiceData1,
  homeServiceData2,
  companyLogos,
  aboutUs,
  pricingPlans,
};
