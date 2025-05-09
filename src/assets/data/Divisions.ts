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
    description: 'UIPS Saudi Arabia excels in civil construction for industrial and commercial projects, delivering precise site development and infrastructure.',
    image: 'civil',
    detailedDescription:
      'UIPS Saudi Arabia specializes in civil construction of industrial buildings, plants, commercial, and residential complexes, including site development, infrastructure, and utilities. Our Civil Division delivers high-quality roads, bridges, and buildings with a focus on sustainability, precision, and compliance with Saudi Arabia’s industry standards. We provide end-to-end project management, structural engineering, and environmental assessments to ensure durable, efficient infrastructure solutions for clients across the Kingdom.',
    whatWeDo:
      'We design, construct, and maintain civil infrastructure, ensuring durability and compliance with industry standards.',
    expertise:
      'Site development, structural engineering, project management, and environmental assessments.',
    checklist: ['Site Development', 'Building Construction', 'Infrastructure Design', 'Utility Installation'],
  },
  {
    title: 'IT',
    description: 'UIPS Saudi Arabia provides advanced IT solutions, specializing in fiber optic networking and cybersecurity for reliable business systems.',
    image: 'it',
    detailedDescription:
      'UIPS Saudi Arabia’s IT Division, launched to meet client needs, excels in fiber optic and networking solutions, offering cutting-edge cybersecurity and system integration services. Our expertise ensures secure, scalable IT infrastructure for businesses across Saudi Arabia. With skills to handle projects of any size, we implement networks, servers, and protocols that empower organizations with reliable, high-performance technology tailored to the Kingdom’s dynamic market.',
    whatWeDo:
      'We implement and maintain IT infrastructure, including networks, servers, and cybersecurity protocols.',
    expertise:
      'Fiber optic installations, system monitoring, cybersecurity implementation, and network configuration.',
    checklist: ['Fiber Optic Installation', 'System Monitoring', 'Cybersecurity Implementation', 'Network Configuration'],
  },
  {
    title: 'Electrical',
    description: 'UIPS Saudi Arabia, a top electrical contractor, delivers power generation and transmission solutions for industrial and utility sectors.',
    image: 'electrical',
    detailedDescription:
      'UIPS Saudi Arabia, a leading electrical contractor, serves industrial, commercial, and utility sectors with expertise in power generation, transmission, and distribution. Our Electrical Division provides end-to-end solutions, including installation of transmission lines, safety audits, and control gear setup. We ensure efficient, reliable, and safe electrical systems for clients like ARAMCO and SEC, meeting Saudi Arabia’s rigorous energy standards with precision and innovation.',
    whatWeDo:
      'We install and maintain electrical systems, including transmission lines and distribution networks.',
    expertise:
      'Electrical shutdowns, safety audits, distribution network maintenance, and control gear setup.',
    checklist: ['Transmission Line Installation', 'Electrical Safety Audits', 'Distribution Network Maintenance', 'Control Gear Setup'],
  },
  {
    title: 'Power Solutions',
    description: 'UIPS Saudi Arabia designs and commissions power generation systems from 1 MW to 30 MW for reliable industrial power solutions.',
    image: 'power',
    detailedDescription:
      'UIPS Saudi Arabia’s Power Division focuses on design, construction, testing, and commissioning of power houses using generators and turbines from 1 MW to 30 MW, complete with protection and control gears. We provide sustainable power generation and distribution solutions for industrial and utility-scale applications in Saudi Arabia. Our expertise in turbine commissioning, generator installation, and system integration ensures reliable, efficient energy for clients across the Kingdom.',
    whatWeDo:
      'We design and commission power generation systems, including generators and transmission networks.',
    expertise:
      'Power generation setup, turbine commissioning, generator installation, and system integration.',
    checklist: ['Power Generation Setup', 'Generator Installation', 'Turbine Commissioning', 'Electrical Shutdown'],
  },
  {
    title: 'Plant Shutdowns',
    description: 'UIPS Saudi Arabia specializes in ARAMCO and SABIC plant shutdowns, offering expert electrical and mechanical services.',
    image: 'plant',
    detailedDescription:
      'UIPS Saudi Arabia is a leader in industrial plant shutdowns for ARAMCO, SABIC, SEC, and other facilities, specializing in electrical, instrumentation, and mechanical services. Our Plant Division ensures operational efficiency and longevity through commissioning, maintenance, and overhaul of industrial equipment. With expertise in motor installation, pump commissioning, and piping works, we deliver reliable solutions that meet Saudi Arabia’s stringent industrial standards.',
    whatWeDo:
      'We provide commissioning, maintenance, and overhaul services for industrial plants and equipment.',
    expertise:
      'Motor installation, pump commissioning, piping works, and instrumentation calibration.',
    checklist: ['Motor Installation', 'Pump Commissioning', 'Piping Works', 'Instrumentation Calibration'],
  },
  {
    title: 'Mechanical',
    description: 'UIPS Saudi Arabia’s Mechanical Division delivers precise engineering for petrochemical and energy facilities, ensuring durability and safety.',
    image: 'mechanical',
    detailedDescription:
      'UIPS Saudi Arabia’s Mechanical Division specializes in comprehensive mechanical engineering solutions, including design, fabrication, installation, and maintenance of industrial systems and equipment. We excel in delivering high-precision mechanical services for petrochemical plants, refineries, and energy facilities, ensuring durability, efficiency, and compliance with rigorous safety standards. Our experienced team collaborates with industry leaders to execute complex projects, from piping systems to heavy machinery upgrades, driving operational excellence and reliability in Saudi Arabia’s industrial sector.',
    whatWeDo:
      'We install and maintain mechanical systems, including HVAC and industrial piping, for optimal performance.',
    expertise:
      'HVAC system setup, mechanical overhaul, piping works, and system commissioning.',
    checklist: ['HVAC System Setup', 'Mechanical Overhaul', 'Piping Works', 'Turbine Commissioning'],
  },
];