import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  image: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string;
  tags: string[];
}

export const portfolio: Project[] = [
  { 
    id: 1, 
    title: "Luxbury Properties", 
    category: "Real Estate", 
    client: "Luxbury Group", 
    image: p1, 
    description: "A premium real estate platform delivering a high-end digital experience for luxury property buyers.",
    fullDescription: "Luxbury Properties is a comprehensive digital solution designed for high-end real estate transactions. The platform caters to a sophisticated audience looking for exclusive properties, requiring a seamless, elegant, and highly functional user interface.",
    challenge: "The primary challenge was to create a digital experience that mirrors the luxury of the physical properties while maintaining high performance and complex search capabilities.",
    solution: "We implemented a custom-built search engine with advanced filtering, integrated high-resolution 3D virtual tours, and a personalized 'Concierge' dashboard for buyers.",
    results: "35% increase in lead generation and a significant reduction in time-to-close for high-value properties.",
    tags: ["React", "Maps API", "Premium Design"] 
  },
  { 
    id: 2, 
    title: "Arkstone Reality", 
    category: "Real Estate", 
    client: "Arkstone Realty", 
    image: p2, 
    description: "A conversion-driven real estate website designed to simplify property discovery with smart filtering.",
    fullDescription: "Arkstone Reality focuses on the mid-to-high range residential market, where speed of information and ease of contact are paramount. The site was built to prioritize lead capture and mobile accessibility.",
    challenge: "High bounce rates on previous mobile platforms and a cluttered search experience that overwhelmed potential buyers.",
    solution: "A mobile-first redesign with a simplified 'three-tap' inquiry process and intelligent property recommendations based on user behavior.",
    results: "Mobile conversions increased by 50% within the first three months of launch.",
    tags: ["Conversion Optimized", "Mobile First", "Tailwind"] 
  },
  { 
    id: 3, 
    title: "Bihar Disaster Portal", 
    category: "Government", 
    client: "Government of Bihar", 
    image: p3, 
    description: "A public-focused disaster management portal providing real-time information and emergency resources.",
    fullDescription: "This critical infrastructure project was developed to provide citizens and government officials with a unified dashboard during natural disasters, particularly floods and earthquakes.",
    challenge: "Maintaining system stability during extreme traffic spikes and ensuring accessibility for users with limited internet connectivity.",
    solution: "We used a lightweight, high-availability architecture with edge caching and a low-bandwidth version of the site for rural areas.",
    results: "Successfully managed over 1 million concurrent users during the 2023 monsoon season without downtime.",
    tags: ["Real-time Data", "Accessibility", "Information Architecture"] 
  },
  { 
    id: 4, 
    title: "EQMDRX / EQMD", 
    category: "Medical", 
    client: "EQMD Health", 
    image: p4, 
    description: "Medical platforms delivering accurate medicine details and dosage information via structured search.",
    fullDescription: "EQMD is a twin-platform project consisting of EQMDRX (for medical professionals) and EQMD (for general consumers), providing a verified database of pharmaceutical information.",
    challenge: "Organizing vast amounts of complex medical data into a user-friendly format that ensures zero misinformation.",
    solution: "A robust CMS with multi-level verification workflows and a 'Symptom-to-Medicine' intelligent search algorithm.",
    results: "Became a top-rated medical reference tool in the region with over 500k active monthly users.",
    tags: ["Healthcare", "Data Structure", "Clean UI"] 
  },
  { 
    id: 5, 
    title: "VSQURE", 
    category: "Medical", 
    client: "VSQURE Hospitals", 
    image: p5, 
    description: "A hospital informative platform improving patient interaction through doctor profiles and inquiries.",
    fullDescription: "VSQURE is a digital gateway for one of the leading multi-specialty hospital chains, focusing on patient education and streamlined appointment scheduling.",
    challenge: "Long wait times and patient frustration due to manual appointment booking and lack of online information.",
    solution: "Integrated a real-time doctor availability calendar and a comprehensive medical knowledge base for common ailments.",
    results: "Administrative overhead reduced by 25% and patient satisfaction scores improved by 40%.",
    tags: ["Patient Portal", "Trust Design", "UX Architecture"] 
  },
  { 
    id: 6, 
    title: "Proton Marketplace", 
    category: "Service Marketplace", 
    client: "Proton Services", 
    image: p6, 
    description: "A service marketplace connecting customers with vendors, featuring service booking flows.",
    fullDescription: "Proton Marketplace is an end-to-end platform where service providers (plumbers, electricians, etc.) can list their services and customers can book them instantly.",
    challenge: "Building trust between unknown service providers and customers while managing complex scheduling.",
    solution: "Implemented a rigorous vendor verification system, escrow payments, and a dual-review system for both parties.",
    results: "Grew to 2,000+ verified vendors and 10,000+ successful bookings in the first year.",
    tags: ["Dual System", "Booking Flow", "Vendor Dashboard"] 
  },
  { 
    id: 7, 
    title: "Radha Laboratory", 
    category: "Medical", 
    client: "Radha Lab", 
    image: p1, 
    description: "A simplified lab test booking website focused on speed and ease of use.",
    fullDescription: "Radha Laboratory's digital platform allows users to book blood tests and diagnostics from the comfort of their home, with automatic report delivery.",
    challenge: "The complexity of selecting the right test packages and the anxiety associated with medical diagnostics.",
    solution: "Simplified 'Package-based' test selection and a visual progress tracker for the entire testing lifecycle.",
    results: "Home collection bookings increased by 60%, significantly expanding the lab's reach.",
    tags: ["Booking System", "Minimal UX", "Healthcare"] 
  },
  { 
    id: 8, 
    title: "Dotted Clothing", 
    category: "E-commerce", 
    client: "Dotted Brand", 
    image: p2, 
    description: "A visually driven fashion e-commerce platform with product catalogs and optimized checkout.",
    fullDescription: "Dotted is a direct-to-consumer fashion brand that needed a website reflecting its minimalist and 'essential' aesthetic while driving high sales volume.",
    challenge: "Creating a high-performance e-commerce site with rich animations that didn't compromise on page load speed.",
    solution: "Next-gen image optimization, lazy-loading of non-critical assets, and a one-page checkout system.",
    results: "Average session duration increased by 2 minutes and cart abandonment dropped by 18%.",
    tags: ["Fashion", "E-commerce", "Conversion Focus"] 
  },
  { 
    id: 9, 
    title: "Event Hub", 
    category: "Service Marketplace", 
    client: "Event Hub Inc", 
    image: p3, 
    description: "A multi-vendor event service platform where providers can register and customers can book.",
    fullDescription: "Event Hub simplifies event planning by bringing together caterers, decorators, and venues under one digital roof.",
    challenge: "Managing varied pricing models and availability calendars across different service categories.",
    solution: "A flexible 'Dynamic Quote' engine that allows vendors to provide custom pricing based on event requirements.",
    results: "Successfully powered over 500 large-scale corporate and private events in its first six months.",
    tags: ["Multi-vendor", "Marketplace", "Event Tech"] 
  },
  { 
    id: 10, 
    title: "Nexora Enterprise ERP", 
    category: "ERP", 
    client: "Global Logistics Ltd", 
    image: p4, 
    description: "A high-scale ERP solution for managing global supply chains with real-time tracking.",
    fullDescription: "A massive enterprise project designed to automate the logistics and inventory management for a multi-national corporation.",
    challenge: "Integrating with legacy warehouse hardware and synchronizing data across 12 different time zones.",
    solution: "Developed a custom API layer to bridge legacy systems with a modern React-based cloud dashboard.",
    results: "Inventory accuracy improved to 99.8% and manual data entry reduced by 70%.",
    tags: ["Enterprise", "Supply Chain", "Automation"] 
  },
  { 
    id: 11, 
    title: "Urban Zen Store", 
    category: "UI/UX E-commerce", 
    client: "Urban Zen", 
    image: p5, 
    description: "A boutique e-commerce experience focused on minimalist UI and emotional UX.",
    fullDescription: "Urban Zen is a concept store focused on wellness products. The digital experience was designed to be as calming and intuitive as the products themselves.",
    challenge: "Breaking away from standard grid-based e-commerce layouts without confusing the user.",
    solution: "A fluid, asymmetrical layout with organic scroll animations and a 'calm' color palette.",
    results: "Won several UI/UX design awards and saw a 45% increase in customer dwell time.",
    tags: ["Premium UI", "UX Strategy", "Animation"] 
  },
  { 
    id: 12, 
    title: "OmniCore Solutions", 
    category: "ERP", 
    client: "OmniCore Mfg", 
    image: p6, 
    description: "Unified manufacturing ERP integrating HR, Finance, and Production lines.",
    fullDescription: "OmniCore is a comprehensive management suite for medium-to-large scale manufacturing plants, focusing on predictive maintenance and production efficiency.",
    challenge: "Presenting massive amounts of real-time sensor data in a way that is actionable for floor managers.",
    solution: "A high-performance dashboard with data visualization (graphs, heatmaps) and AI-driven anomaly detection.",
    results: "Production downtime decreased by 15% due to better predictive alerts.",
    tags: ["Manufacturing", "Big Data", "Scalability"] 
  },
];

export const portfolioCategories = ["All", "Real Estate", "Government", "Medical", "Service Marketplace", "E-commerce", "ERP", "UI/UX E-commerce"];
