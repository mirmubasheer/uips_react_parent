interface SEOData {
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
  