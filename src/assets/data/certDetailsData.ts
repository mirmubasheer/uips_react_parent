export interface CertDetail {
    title: string;
    content: string;
    image: keyof typeof import("../../assets").certification;
    imageAlt: string;
  }
  
  export const certDetail: CertDetail = {
    title: 'Quality Excellence',
    content: 'Our ISO 9001:2015 certification ensures top-tier quality management, streamlining processes and boosting customer satisfaction.',
    image: 'cer1',
    imageAlt: 'Quality Management',
  };