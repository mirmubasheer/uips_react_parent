interface SEOData {
  title: string;
  description: string;
}

const defaultTitle = "UIPS | EPC Contracting & Industrial Solutions";
const defaultDescription = "UIPS provides expert EPC contracting services across Civil, Mechanical, Electrical, Instrumentation, and IT sectors.";

const seoData: Record<string, SEOData> = {
  '/': {
    title: "UIPS | Home",
    description: "Welcome to UIPS — Your trusted partner in EPC contracting, industrial services, and IT solutions.",
  },
  '/about': {
    title: "About Us | UIPS",
    description: "Discover UIPS — A leading EPC contractor delivering solutions in civil, electrical, mechanical, and IT sectors.",
  },
  '/projects': {
    title: "Major Projects | UIPS",
    description: "Explore UIPS's major projects across oil & gas, industrial, and infrastructure sectors.",
  },
  '/all-projects': {
    title: "All Projects by Client | UIPS",
    description: "View all UIPS projects categorized by client and sector, from Aramco to industrial clients.",
  },
  '/gallery': {
    title: "Project Gallery | UIPS",
    description: "Browse images of our successful EPC and IT projects across Saudi Arabia.",
  },
  '/career': {
    title: "Careers | UIPS",
    description: "Join UIPS and grow your career in civil, electrical, mechanical, or IT engineering fields.",
  },
  '/contact': {
    title: "Contact Us | UIPS",
    description: "Get in touch with UIPS for business inquiries, partnerships, or service requests.",
  },
  '/certificates': {
    title: "Certifications & Approvals | UIPS",
    description: "View UIPS certifications, approvals, and achievements from leading clients and authorities.",
  },
};

export const getSEOData = (path: string): SEOData => {
  return seoData[path] || { title: defaultTitle, description: defaultDescription };
};
