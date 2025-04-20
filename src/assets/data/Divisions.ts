// src/data/Divisions.ts

export interface Division {
  title: string;
  description: string;
  image: keyof typeof import('../../assets').Alldivisions; // Matches Alldivisions keys
  detailedDescription: string;
  whatWeDo: string;
  expertise: string;
  checklist: string[];
}

export const divisions: Division[] = [
  {
    title: 'Civil',
    description: 'Comprehensive civil engineering solutions for infrastructure and industrial projects.',
    image: 'civil',
    detailedDescription:
      'Our Civil division specializes in delivering high-quality infrastructure and industrial projects, including roads, bridges, and buildings, with a focus on sustainability and precision.',
    whatWeDo:
      'We design, construct, and maintain civil infrastructure, ensuring durability and compliance with industry standards.',
    expertise:
      'Site development, structural engineering, project management, and environmental assessments.',
    checklist: ['Site Development', 'Building Construction', 'Infrastructure Design', 'Utility Installation'],
  },
  {
    title: 'IT',
    description: 'Advanced IT and networking solutions for modern enterprises.',
    image: 'it',
    detailedDescription:
      'Our IT division provides cutting-edge networking, cybersecurity, and system integration services to empower businesses with reliable and secure technology.',
    whatWeDo:
      'We implement and maintain IT infrastructure, including networks, servers, and cybersecurity protocols.',
    expertise:
      'Fiber optic installations, system monitoring, cybersecurity implementation, and network configuration.',
    checklist: ['Fiber Optic Installation', 'System Monitoring', 'Cybersecurity Implementation', 'Network Configuration'],
  },
  {
    title: 'Electrical',
    description: 'Reliable electrical systems for industrial and commercial applications.',
    image: 'electrical',
    detailedDescription:
      'Our Electrical division delivers end-to-end electrical solutions, from power distribution to safety audits, ensuring efficiency and reliability.',
    whatWeDo:
      'We install and maintain electrical systems, including transmission lines and distribution networks.',
    expertise:
      'Electrical shutdowns, safety audits, distribution network maintenance, and control gear setup.',
    checklist: ['Transmission Line Installation', 'Electrical Safety Audits', 'Distribution Network Maintenance', 'Control Gear Setup'],
  },
  {
    title: 'Power',
    description: 'Innovative power generation and distribution systems.',
    image: 'power',
    detailedDescription:
      'Our Power division focuses on sustainable power generation and distribution, providing solutions for industrial and utility-scale applications.',
    whatWeDo:
      'We design and commission power generation systems, including generators and transmission networks.',
    expertise:
      'Power generation setup, turbine commissioning, generator installation, and system integration.',
    checklist: ['Power Generation Setup', 'Generator Installation', 'Turbine Commissioning', 'Electrical Shutdown'],
  },
  {
    title: 'Plant',
    description: 'Specialized solutions for industrial plant operations and maintenance.',
    image: 'plant',
    detailedDescription:
      'Our Plant division supports industrial facilities with mechanical and instrumentation services, ensuring operational efficiency and longevity.',
    whatWeDo:
      'We provide commissioning, maintenance, and overhaul services for industrial plants and equipment.',
    expertise:
      'Motor installation, pump commissioning, piping works, and instrumentation calibration.',
    checklist: ['Motor Installation', 'Pump Commissioning', 'Piping Works', 'Instrumentation Calibration'],
  },
  {
    title: 'Mechanical',
    description: 'Precision mechanical engineering for industrial and HVAC systems.',
    image: 'mechanical',
    detailedDescription:
      'Our Mechanical division offers expertise in HVAC, piping, and mechanical installations, delivering reliable systems for industrial applications.',
    whatWeDo:
      'We install and maintain mechanical systems, including HVAC and industrial piping, for optimal performance.',
    expertise:
      'HVAC system setup, mechanical overhaul, piping works, and system commissioning.',
    checklist: ['HVAC System Setup', 'Mechanical Overhaul', 'Piping Works', 'Turbine Commissioning'],
  },
];