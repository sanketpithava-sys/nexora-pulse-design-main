import {
  Code2, Cloud, Palette, Cpu, Database,
  Globe, Shield, Smartphone, Sparkles, Workflow, LucideIcon,
  Megaphone,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  process: { step: string; title: string; description: string }[];
  technologies: string[];
};

export const services: Service[] = [
  {
    slug: "web-application",
    title: "Web Application Development",
    short: "Scalable, blazing-fast web apps built for impact.",
    description:
      "We engineer modern web applications that combine refined UX with rock-solid architecture — from progressive web apps to enterprise-grade SaaS platforms.",
    icon: Globe,
    features: [
      "Single-page & server-rendered applications",
      "API-first, microservice-ready architecture",
      "Real-time features with WebSockets",
      "Performance budgets & Core Web Vitals tuning",
      "End-to-end testing & CI/CD pipelines",
    ],
    process: [
      { step: "01", title: "Discovery", description: "Workshops to align on goals, users, and constraints." },
      { step: "02", title: "Design", description: "Wireframes, prototypes and a polished design system." },
      { step: "03", title: "Build", description: "Iterative sprints with weekly demos and reviews." },
      { step: "04", title: "Launch", description: "Deploy, monitor and continuously improve." },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "PostgreSQL"],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    short: "Cloud-native infrastructure that scales with you.",
    description:
      "Architect, migrate and operate workloads on AWS, GCP and Azure with cost-efficient, observable, and secure cloud foundations.",
    icon: Cloud,
    features: [
      "Cloud architecture & migration strategy",
      "Kubernetes & containerization",
      "Infrastructure as Code (Terraform)",
      "Observability & SRE practices",
      "FinOps & cost optimization",
    ],
    process: [
      { step: "01", title: "Assess", description: "Audit current systems and define target architecture." },
      { step: "02", title: "Plan", description: "Migration roadmap with risk and cost analysis." },
      { step: "03", title: "Migrate", description: "Phased rollout with zero-downtime cutovers." },
      { step: "04", title: "Optimize", description: "Right-size, automate and continuously improve." },
    ],
    technologies: ["AWS", "GCP", "Azure", "Kubernetes", "Terraform", "Docker"],
  },
  {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    short: "Human-centered design that elevates products.",
    description:
      "From research to pixel-perfect interfaces, we craft experiences that delight users and drive measurable business outcomes.",
    icon: Palette,
    features: [
      "User research & journey mapping",
      "Wireframes & interactive prototypes",
      "Design systems & component libraries",
      "Accessibility (WCAG 2.2)",
      "Motion & micro-interactions",
    ],
    process: [
      { step: "01", title: "Research", description: "Understand users, market and competitors." },
      { step: "02", title: "Ideate", description: "Sketches, flows and rapid prototypes." },
      { step: "03", title: "Design", description: "High-fidelity, on-brand interface design." },
      { step: "04", title: "Validate", description: "Usability testing and iteration." },
    ],
    technologies: ["Figma", "Framer", "Lottie", "Storybook", "Principle", "Maze"],
  },
  {
    slug: "software-development",
    title: "Software Development",
    short: "Custom software engineered to fit your business.",
    description:
      "Bespoke desktop, mobile and backend systems engineered with clean architecture, automated testing and long-term maintainability in mind.",
    icon: Code2,
    features: [
      "Cross-platform mobile apps",
      "High-performance backends",
      "Domain-driven design",
      "Automated QA & test coverage",
      "Long-term maintenance partnerships",
    ],
    process: [
      { step: "01", title: "Scope", description: "Translate business needs into technical specs." },
      { step: "02", title: "Architect", description: "Design systems for scale and resilience." },
      { step: "03", title: "Develop", description: "Iterative delivery with continuous feedback." },
      { step: "04", title: "Support", description: "Long-term partnership and evolution." },
    ],
    technologies: ["TypeScript", "Go", "Python", "Rust", "Swift", "Kotlin"],
  },
  {
    slug: "erp-solutions",
    title: "ERP Solutions",
    short: "Integrated ERP systems that unify operations.",
    description:
      "Implement, customize and integrate ERP platforms to streamline finance, HR, supply chain and operations across the enterprise.",
    icon: Workflow,
    features: [
      "ERP implementation & customization",
      "Module integration (Finance, HR, SCM)",
      "Data migration & cleansing",
      "Workflow automation",
      "Training & change management",
    ],
    process: [
      { step: "01", title: "Discover", description: "Map processes and identify quick wins." },
      { step: "02", title: "Design", description: "Configure modules to fit your workflows." },
      { step: "03", title: "Deploy", description: "Roll out with training and support." },
      { step: "04", title: "Evolve", description: "Iterate as your business grows." },
    ],
    technologies: ["SAP", "Odoo", "Oracle", "Microsoft Dynamics", "NetSuite", "Zoho"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Data-driven strategies that amplify your brand reach.",
    description:
      "We combine performance marketing, content strategy, and SEO to help your brand connect with the right audience and drive conversions.",
    icon: Megaphone,
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Management",
      "Pay-Per-Click (PPC) Advertising",
      "Content Strategy & Marketing",
      "Analytics & Conversion Tracking",
    ],
    process: [
      { step: "01", title: "Strategy", description: "Define goals, audience and campaign roadmap." },
      { step: "02", title: "Execute", description: "Launch campaigns across multiple channels." },
      { step: "03", title: "Analyze", description: "Track performance and gather insights." },
      { step: "04", title: "Optimize", description: "Refine tactics for maximum ROI." },
    ],
    technologies: ["Google Ads", "Meta Ads", "HubSpot", "Google Analytics", "SEMrush", "Mailchimp"],
  },
];

export const extraIcons = { Cpu, Database, Shield, Smartphone, Sparkles };
