interface SEOData {
<<<<<<< HEAD
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
=======
    title: string;
    description: string;
  }
  
  const defaultTitle = "UIPS | Real Estate Solutions";
  const defaultDescription = "UIPS offers innovative real estate services including projects, gallery, careers, and more.";
  
  const seoData: Record<string, SEOData> = {
    '/': {
      title: "UIPS | Home",
      description: "Welcome to UIPS — Explore our premier real estate projects and services.",
    },
    '/about': {
      title: "About Us | UIPS",
      description: "Learn more about UIPS, our mission, vision, and real estate expertise.",
    },
    '/projects': {
      title: "Our Projects | UIPS",
      description: "Browse our diverse real estate projects designed to meet every need.",
    },
    '/all-projects': {
      title: "All Projects by Client | UIPS",
      description: "Explore all our projects categorized by clients and sectors.",
    },
    '/gallery': {
      title: "Gallery | UIPS",
      description: "View our project gallery showcasing architectural excellence.",
    },
    '/career': {
      title: "Careers | UIPS",
      description: "Join UIPS and build a fulfilling career in the real estate industry.",
    },
    '/contact': {
      title: "Contact Us | UIPS",
      description: "Get in touch with UIPS for inquiries, collaborations, or feedback.",
    },
    '/certificates': {
      title: "Certificates | UIPS",
      description: "Explore UIPS certifications and awards for excellence.",
    },
  };
  
  export const getSEOData = (path: string): SEOData => {
    return seoData[path] || { title: defaultTitle, description: defaultDescription };
  };
  
>>>>>>> 8dee186251d3eb12897dbdf4e2cca75dd28416d8
