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
    description: 'UIPS is involved in Construction of Industrial Buildings, Plants, Commercial & Residential Complex which include Site Development, Infrastructure and Utilities.',
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
    description: 'UIPS had launched a separate Fiber Optic & Networking division that caters the caters the need of its clients. Our Expertise has the skills & experience to handle any size.',
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
    description: 'UIPS is one of the Leading Electrical Contractor in Saudi Arabia which serves the Industrial, Commercial and Utility sector in the field of Power Generation, Transmission and Distribution.',
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
    title: 'Power Solutions',
    description: 'Design, Construction, Testing & Commissioning of Power House using Generators & Turbines from 1 MW to 30 MW along with all protection & control gears.',
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
    title: 'Plant Shutdowns',
    description: 'UIPS is specialized in ARAMCO, SABIC, SEC and other basic industrial plant shutdowns in Electrical, Instrumentation and Mechanical divisions.',
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
    description: 'Supply, Installation, Testing and Commissioning of Motors / Pumps and Other Equipment’s, Process / Utility Piping Works, Steel Structure Works and Industrial HVAC Works.',
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