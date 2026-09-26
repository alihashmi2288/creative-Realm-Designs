export interface Project {
  id: number;
  title: string;
  slug: string;
  category: "Website Design" | "Website Development" | "SEO & Growth";
  clientIndustry: string;
  image: string;
  description: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  deliverables: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Lumina Studio",
    slug: "lumina-e-commerce",
    category: "Website Design",
    clientIndustry: "E-Commerce & Retail",
    image: "/projects/ecommerce.png",
    description: "A conversion-focused e-commerce redesign emphasizing visual storytelling, smooth mobile navigation, and seamless checkout ergonomics.",
    tags: ["UI/UX Design", "Design System", "Mobile Optimization"],
    metrics: [
      { label: "Mobile Conversion Rate", value: "+42%" },
      { label: "Average Session Duration", value: "+1m 40s" },
      { label: "Cart Abandonment Drop", value: "-28%" }
    ],
    challenge: "The previous store suffered from confusing navigation, slow page loads, and a high drop-off rate on mobile checkouts.",
    solution: "We re-architected the entire user journey with high-converting layout hierarchy, frictionless product discovery, and crisp visual typography.",
    deliverables: ["Full UX Wireframing", "Figma Design System", "Interactive Prototype", "Design Handoff & QA"]
  },
  {
    id: 2,
    title: "Vantage Analytics",
    slug: "vantage-saas",
    category: "Website Development",
    clientIndustry: "B2B Software & SaaS",
    image: "/projects/saas.png",
    description: "A custom Next.js marketing and product website engineered for instant load times, interactive live demo components, and flawless responsiveness.",
    tags: ["Next.js", "TypeScript", "Performance Tuning"],
    metrics: [
      { label: "Google PageSpeed Score", value: "99/100" },
      { label: "Largest Contentful Paint", value: "0.7s" },
      { label: "Sign-up Flow Completion", value: "+34%" }
    ],
    challenge: "The client needed a scalable, high-performance website that loaded instantly worldwide and demonstrated complex software features effortlessly.",
    solution: "Engineered with modular Next.js architecture, edge rendering, optimized vector graphics, and accessible keyboard navigation.",
    deliverables: ["Custom Next.js Frontend", "Responsive UI Engineering", "Performance Optimization", "Accessibility Compliance"]
  },
  {
    id: 3,
    title: "Apex Architectural Group",
    slug: "creative-folio",
    category: "Website Design",
    clientIndustry: "Architecture & High-End Real Estate",
    image: "/projects/portfolio.png",
    description: "A modern, minimalist digital presence showcasing multi-million dollar architectural commissions with editorial precision and effortless typography.",
    tags: ["Brand Direction", "Editorial Design", "Responsive Layout"],
    metrics: [
      { label: "Inbound Client Inquiries", value: "+65%" },
      { label: "Qualified Lead Score", value: "+4.8/5" },
      { label: "Bounce Rate Reduction", value: "-35%" }
    ],
    challenge: "The firm's past website did not reflect the prestige of their physical projects, resulting in lost credibility with high-value prospects.",
    solution: "Crafted a bespoke digital editorial experience with curated white space, subtle micro-interactions, and high-resolution media handling.",
    deliverables: ["Brand Identity Alignment", "Website Architecture", "Client Portal Design", "Cross-Browser QA"]
  },
  {
    id: 4,
    title: "Aura Living Spaces",
    slug: "aura-interiors",
    category: "SEO & Growth",
    clientIndustry: "Interior Design & Renovations",
    image: "/projects/interior.png",
    description: "A comprehensive technical SEO restructuring and localized search strategy that placed a boutique interior design studio on Google Page 1.",
    tags: ["Technical SEO", "Local Search Optimization", "Core Web Vitals"],
    metrics: [
      { label: "Organic Search Visibility", value: "+185%" },
      { label: "Google Top 3 Keywords", value: "48+" },
      { label: "Monthly Organic Consultation Calls", value: "3.2x" }
    ],
    challenge: "Despite world-class design work, the studio was invisible on Google searches for prime regional and national keywords.",
    solution: "Conducted a complete technical SEO overhaul, restructured schema markups, optimized metadata, resolved indexing errors, and optimized speed for mobile crawlers.",
    deliverables: ["Complete Technical SEO Audit", "On-Page Keyword Optimization", "Rich Snippet & Schema Setup", "Search Console & Analytics Setup"]
  }
];

export const categories = ["All", "Website Design", "Website Development", "SEO & Growth"] as const;
