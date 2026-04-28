import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export const portfolio = [
  { id: 1, title: "Aurora Analytics", category: "Web App", client: "Aurora Inc.", image: p1, description: "A real-time analytics SaaS dashboard handling 50M events per day with sub-second query latency.", tags: ["React", "GraphQL", "ClickHouse"] },
  { id: 2, title: "Helio Banking", category: "Mobile", client: "Helio Bank", image: p2, description: "Mobile-first neobank app with biometric authentication, instant transfers and savings goals.", tags: ["React Native", "Plaid", "AWS"] },
  { id: 3, title: "Marlow Commerce", category: "E-commerce", client: "Marlow & Co.", image: p3, description: "Headless commerce storefront with personalization engine that lifted conversion 38%.", tags: ["Next.js", "Shopify", "Algolia"] },
  { id: 4, title: "Skylane Cloud", category: "Cloud", client: "Skylane Logistics", image: p4, description: "Multi-region Kubernetes platform powering global logistics with 99.99% uptime.", tags: ["Kubernetes", "Terraform", "GCP"] },
  { id: 5, title: "Northwind ERP", category: "ERP", client: "Northwind Group", image: p5, description: "Unified ERP rollout across 14 countries — finance, HR and supply chain on one platform.", tags: ["Odoo", "PostgreSQL", "Airflow"] },
  { id: 6, title: "Lumen Brand System", category: "UI/UX", client: "Lumen Studio", image: p6, description: "End-to-end brand and design system supporting 30+ products and 200+ designers.", tags: ["Figma", "Storybook", "Tokens"] },
];

export const portfolioCategories = ["All", "Web App", "Mobile", "E-commerce", "Cloud", "ERP", "UI/UX"];
