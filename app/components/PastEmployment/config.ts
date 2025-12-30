export const PAST_EMPLOYMENT = [
  {
    date: `${new Date().getFullYear()} - ???`,
    title: "Your business",
    description: "",
    icon: "lucide:circle-question-mark",
    isWork: false,
    bgColor: "#FFF",
  },
  {
    date: "2022 – now",
    title: "DappRadar",
    icon: "i-companies:dappradar",
    isWork: true,
    bgColor: "#191919",
    summary:
      "Built and maintained core frontend features for the world's largest dapp store, working on both product facing functionality and internal tooling.",
    highlights: [
      "Implemented web3 features including wallet connections, staking flows, and blockchain communication",
      "Led business critical features from initial design through release and ongoing support",
      "Focused on clean, reusable, and maintainable frontend architecture",
      "Contributed extensively to in house tooling: shared components, utilities, and services",
      "Worked closely with the design team to maintain and evolve the design system",
    ],

    techStack: ["Web3", "TypeScript", "React", "Next.js", "Node.js"],
    image: "/assets/dappradar-asset.png",
    url: "https://dappradar.com",
  },
  {
    date: "2019 – 2022",
    title: "NordPass",
    icon: "i-companies:nordpass",
    isWork: true,
    bgColor: "#01432B",
    summary:
      "Responsible for the web presence of NordPass, working closely with product and marketing to deliver high-quality, performance-focused frontend experiences.",
    highlights: [
      "Built and maintained design polished marketing pages and product related web features",
      "Maintained strong web performance standards across the site",
      "Ran A/B tests and implemented data driven improvements based on analytics insights",
      "Collaborated daily with marketing and product teams on content and feature delivery",
      "Contributed to internal tooling and mentored junior developers",
    ],

    techStack: ["React", "TypeScript", "Gatsby", "Node.js"],
    image: "/assets/nordpass-asset.png",
    url: "https://nordpass.com",
  },
  {
    date: "2017 – 2019",
    title: "Adapt A/S",
    icon: "i-companies:adapt",
    bgColor: "#260372",
    isWork: true,
    summary:
      "Started as a backend focused intern and transitioned into frontend development, contributing to multiple client projects in a fast-paced agency environment.",
    highlights: [
      "Worked on backend features using PHP, Drupal, and Twig templates",
      "Gradually transitioned to frontend development with React, CSS, and JavaScript",
      "Contributed to several client projects alongside senior developers",
      "Gained experience working across the full stack in an agency setting",
    ],

    techStack: ["Twig", "CSS", "React", "PHP", "Drupal"],
    image: "/assets/adapt-asset.png",
    url: "https://adaptagency.com/",
  },
  {
    date: "2014 – 2019",
    title: "University College Nordjylland",
    role: "Software development, Bachelor's degree",
    icon: "i-companies:ucn",
    bgColor: "#260372",
    isWork: false,
  },
];
