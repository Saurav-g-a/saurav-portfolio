export const profile = {
  name: "Saurav Sharma",
  pronouns: "He/Him",
  role: "Senior Frontend Developer",
  email: "sharmasunny027@gmail.com",
  phone: "+91 7018051504",
  phoneDisplay: "+91 70180 51504",
  location: "Mohali / Chandigarh, India",
  linkedin: "https://linkedin.com/in/saurav-sharma-frontend",
  resume: "/Saurav_Sharma_Resume.pdf",
  years: 6,
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const stats = [
  { value: 6, suffix: "+", label: "Years in frontend" },
  { value: 5, suffix: "", label: "Shopify apps in production" },
  { value: 12, suffix: "", label: "Projects shipped" },
  { value: 25, suffix: "%", label: "Faster builds via shared component library" },
] as const;

export type Role = {
  title: string;
  date: string;
  bullets: string[];
};

export type Job = {
  company: string;
  summary: string;
  date: string;
  location: string;
  roles: Role[];
  tags: string[];
};

export const jobs: Job[] = [
  {
    company: "CollationHub",
    summary: "Production Shopify apps for jewellery and e-commerce merchants",
    date: "Sep 2025 – Present",
    location: "Mohali · On-site",
    roles: [
      {
        title: "Senior Software Developer",
        date: "Sep 2025 – Present · Full-time",
        bullets: [
          "Shipped five Shopify apps to production in my first year: Diamond Jewellery Builder, Instant Diamond Catalogue, Ring Sizer, Ring Styler and the Ring Configurator. I owned the frontend architecture, the React/TypeScript UI, routing and Shopify integrations, and a sixth app is in progress.",
          "Built the merchant admin UIs in Shopify Polaris with a shared component layer underneath, so all five apps feel like one product rather than five separate tools.",
          "Designed the React Router architecture behind the admin screens, so merchants move between sections without a full page reload.",
          "Rebuilt the Ring Configurator as a standalone React/Express app after merchants asked for it on their own storefronts, so it now runs outside Shopify too.",
          "Moved the codebase to TypeScript: fewer runtime surprises, and new developers find their way around faster.",
          "Cover components with React Testing Library, focused on the parts of the builders customers actually touch.",
          "Brought AI-assisted tooling into daily work for debugging, refactoring and documentation.",
        ],
      },
    ],
    tags: ["React", "TypeScript", "React Router", "Shopify Polaris", "Remix", "Express", "REST APIs", "AWS"],
  },
  {
    company: "Codenomad",
    summary: "Two roles, from web design into frontend engineering",
    date: "Sep 2020 – Jul 2025",
    location: "Mohali, Punjab · 4 yrs 11 mos",
    roles: [
      {
        title: "Frontend Web Developer",
        date: "Aug 2023 – Jul 2025 · Full-time",
        bullets: [
          "Frontend engineering on two SaaS platforms for warranty and claims management: CodeWarranty and GetCover.",
          "Built scalable, high-performance web apps in React and Next.js, focused on responsive experiences and maintainable frontend code.",
          "Engineered reusable React components and design-system patterns that cut development time by 25% while improving consistency across the product.",
          "Delivered the GetCover B2B claims system with a Fixably integration for real-time data sync, removing the duplicate-entry problem the ops team had been working around by hand.",
          "Optimised Core Web Vitals, accessibility (WCAG) and on-page SEO across the products.",
        ],
      },
      {
        title: "Web Designer",
        date: "Sep 2020 – Aug 2023 · Full-time",
        bullets: [
          "Designed and built client websites end to end, from visual design through to responsive, hand-written frontend code.",
          "Turned Figma and UI prototypes into pixel-perfect, functional components that held up across devices and browsers.",
          "Moved from design into engineering across this period, picking up React, Redux and Git, which led to the Frontend Web Developer role in 2023.",
        ],
      },
    ],
    tags: ["React", "Next.js", "Redux", "Tailwind CSS", "SASS", "Figma", "JIRA", "Core Web Vitals"],
  },
  {
    company: "IGeek Team",
    summary: "Website redesigns from wireframe to launch",
    date: "Jan 2019 – Aug 2020",
    location: "Mohali, Punjab · 1 yr 8 mos",
    roles: [
      {
        title: "Web Designer",
        date: "Jan 2019 – Aug 2020",
        bullets: [
          "Led multiple website redesign projects end to end, improving UI/UX and lifting engagement by around 30% on the redesigns we measured.",
          "Created wireframes, prototypes and visual mockups alongside the design team, then handed them over for development.",
          "Maintained and modernised existing websites to meet current design, usability and responsive standards.",
        ],
      },
    ],
    tags: ["UI Design", "Wireframing", "HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];

export type Category = "shopify" | "saas" | "web";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: Category;
  featured?: boolean;
  badge?: string;
  href?: string;
  shot?: { src: string; domain: string };
  icon?: string;
};

export const filters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "shopify", label: "Shopify apps" },
  { id: "saas", label: "SaaS" },
  { id: "web", label: "Websites" },
];

export const projects: Project[] = [
  {
    title: "Ring Configurator",
    description:
      "Customers configure a wedding ring by metal, stone, style and size, and watch the price update as they go. Started as a Shopify embed built with Remix and React Router; merchants asked for it on their own storefronts, so I rebuilt it as a standalone React/Express app that now runs outside Shopify too.",
    tags: ["React", "TypeScript", "Remix", "Express", "Shopify"],
    category: "shopify",
    featured: true,
  },
  {
    title: "Diamond Jewellery Builder",
    description:
      "Shopify app where customers build a custom diamond piece by stone, setting and metal, and watch it come together, integrated with the live product catalogue.",
    tags: ["React", "TypeScript", "Polaris", "React Router"],
    category: "shopify",
    icon: "gem",
  },
  {
    title: "Instant Diamond Catalogue",
    description:
      "Searchable, real-time diamond inventory for product discovery, built to stay responsive across large inventories that change constantly, with REST APIs feeding live stock into the storefront.",
    tags: ["React", "TypeScript", "Polaris", "REST APIs"],
    category: "shopify",
    icon: "search",
  },
  {
    title: "Ring Sizer",
    description:
      "An online ring-sizing tool that gets customers to the right size without a trip to the store, which means fewer returns for merchants.",
    tags: ["React", "TypeScript", "Polaris"],
    category: "shopify",
    icon: "ruler",
  },
  {
    title: "Ring Styler",
    description:
      "Mix-and-match styler for pairing settings with stones. Shares a component layer with the other apps so the whole suite feels like one product.",
    tags: ["React", "TypeScript", "Polaris"],
    category: "shopify",
    icon: "grid",
  },
  {
    title: "360° Product Viewer",
    badge: "In progress",
    description:
      "Interactive 360-degree viewing for jewellery listings, built to improve how a high-consideration purchase is presented online. In React and TypeScript at CollationHub.",
    tags: ["React", "TypeScript", "Canvas"],
    category: "shopify",
    icon: "rotate",
  },
  {
    title: "CodeWarranty",
    description:
      "SaaS platform for warranty and claims management for solar manufacturers and EPCs. Built the frontend for the full claim lifecycle plus real-time analytics views. Mar 2024 – present.",
    tags: ["React", "Redux", "SaaS", "Dashboards"],
    category: "saas",
    href: "https://codewarranty.vercel.app/",
    icon: "shield",
  },
  {
    title: "GetCover",
    description:
      "B2B claims platform with a live Fixably sync for real-time data. The sync removed the duplicate-entry problem the ops team had been working around by hand. Jun 2023 – Feb 2025.",
    tags: ["React", "Next.js", "REST APIs", "Integrations"],
    category: "saas",
    href: "https://www.getcover.com/",
    icon: "server",
  },
  {
    title: "Astrid Diamonds",
    description:
      "Lab-grown diamond e-commerce for the EU market. I built the frontend for the engagement, wedding and fine-jewellery pages, including the multi-currency, EU/non-EU VAT and EN/NL language views.",
    tags: ["HTML5", "CSS3", "Bootstrap", "Laravel"],
    category: "web",
    href: "https://astriddiamonds.jewelexperts.dev/",
    shot: { src: "/images/projects/astrid.webp", domain: "astriddiamonds.jewelexperts.dev" },
  },
  {
    title: "Darya Diamonds",
    description:
      '"The Future of Brilliance", a lab-grown jewellery storefront. I built the frontend for the catalogue, virtual appointments, store locator, wishlist, bag and account pages with reusable components.',
    tags: ["HTML5", "CSS3", "Bootstrap", "Laravel"],
    category: "web",
    href: "https://daryadiamonds.jewelexperts.dev/",
    shot: { src: "/images/projects/darya.webp", domain: "daryadiamonds.jewelexperts.dev" },
  },
  {
    title: "Forevery",
    description:
      'Lab-grown diamond jewellery site with a "Build Your Jewelry" configurator flow. Built the configurator UI plus engagement, wedding, fine-jewellery and gift pages, fully responsive.',
    tags: ["HTML5", "CSS3", "Bootstrap", "Laravel"],
    category: "web",
    href: "https://forevery.jewelexperts.dev/",
    shot: { src: "/images/projects/forevery.webp", domain: "forevery.jewelexperts.dev" },
  },
  {
    title: "Raymonds Jewellery",
    description:
      "Luxury fine-jewellery e-commerce. I converted the designs into pixel-perfect markup for the diamond, fine-jewellery and watch catalogues, plus wishlist, cart and appointment booking, all cross-browser tested.",
    tags: ["HTML5", "CSS3", "Bootstrap", "Laravel"],
    category: "web",
    href: "https://raymonds.jewelexperts.dev/",
    shot: { src: "/images/projects/raymonds.webp", domain: "raymonds.jewelexperts.dev" },
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript (ES6+)", "Next.js", "Remix", "Redux", "React Router", "React Testing Library", "React Native", "Vue.js"],
  },
  {
    title: "Shopify",
    items: ["Shopify app development", "Shopify Polaris", "Shopify Admin & Storefront APIs", "Storefront embeds"],
  },
  {
    title: "UI & Styling",
    items: ["HTML5", "CSS3", "SASS", "Tailwind CSS", "Bootstrap", "Design systems", "Responsive UI", "Accessibility (WCAG)", "Core Web Vitals", "SEO"],
  },
  {
    title: "Backend & Tools",
    items: ["REST APIs", "Express.js", "Git", "GitLab", "JIRA", "Figma", "AWS", "Agile", "AI-assisted tooling"],
  },
];

export const education = [
  {
    years: "Aug 2015 – Jun 2018 · Grade A+",
    title: "Bachelor of Computer Applications",
    place: "Himachal Pradesh University, Shimla. Studied at NSCBM Government College, Hamirpur",
  },
  {
    years: "Apr 2014 – Mar 2015",
    title: "Senior Secondary, Science",
    place: "HP Board of School Education, Dharamshala",
  },
];
