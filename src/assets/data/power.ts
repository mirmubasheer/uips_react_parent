import { powerProjectImages } from "../../assets";

interface Project {
  id: number;
  projectname: string;
  slug: string;
  description: string;
  monthyear: string;
  duration: string;
  client: string;
  povalue: string;
  totalmanhour: string;
  location: string;
  status: string;
  images: unknown[];
  division: string;
}

interface PowerDivision {
  name: string;
  description: string;
  clients: string[];
  img: string;
  projects: Project[];
}

const powerData: PowerDivision = {
  name: "Power",
  description:
    "The Power Division specializes in delivering cutting-edge solutions for power generation, distribution, and management, catering to industrial and energy sectors. Our expertise includes power plant installations, substation upgrades, power factor corrections, and renewable energy integrations, ensuring reliable and efficient power systems. We partner with industry leaders to execute high-impact projects under stringent timelines, maintaining the highest standards of safety and quality.",
  clients: [
    "L&T - ARAMCO",
    "UNITED - SABIC",
    "TASNEE-ROWAD",
    "TASNEE",
    "EATON",
    "ARAMCO SHELL - SATORP",
    "ABB-SADAF SABIC",
    "SAUDI KAYAN SABIC",
    "MASA - MARAFIQ",
    "MA'ADEN",
  ],
  img: "powerimg",
  projects: [
    {
      id: 1,
      projectname: "CDC ARAMCO",
      slug: "cdc-aramco",
      description:
        "Upgraded power distribution systems for ARAMCO’s central data center, enhancing reliability and capacity at the Dhahran facility.",
      monthyear: "Jul-15",
      duration: "8 MONTHS",
      client: "L&T - ARAMCO",
      povalue: "8,246,000.00",
      totalmanhour: "25,000.00",
      location: "Dhahran",
      status: "COMPLETED",
      images: powerProjectImages.power_1,
      division: "Power",
    },
    {
      id: 2,
      projectname: "SABIC UNITED POWER FACTOR CORRECTION",
      slug: "sabic-united-power-factor-correction",
      description:
        "Implemented power factor correction systems to optimize electrical efficiency at UNITED - SABIC’s Jubail facility.",
      monthyear: "Aug-21",
      duration: "5 MONTHS",
      client: "UNITED - SABIC",
      povalue: "2,800,000.00",
      totalmanhour: "10,000.00",
      location: "Jubail",
      status: "COMPLETED",
      images: powerProjectImages.power_2,
      division: "Power",
    },
    {
      id: 3,
      projectname: "32 MW POWER HOUSE (RP 80180, RP90026, RP 80214)",
      slug: "32mw-power-house",
      description:
        "Designed and commissioned a 32 MW power house, enhancing power supply reliability for TASNEE-ROWAD’s facilities across Dammam and Riyadh.",
      monthyear: "Jul-07",
      duration: "22 MONTHS",
      client: "TASNEE-ROWAD",
      povalue: "41,000,000.00",
      totalmanhour: "15,000.00",
      location: "Dammam - Riyadh",
      status: "COMPLETED",
      images: powerProjectImages.power_3,
      division: "Power",
    },
    {
      id: 4,
      projectname: "10 MW POWER HOUSE RENTAL 4 MONTHS",
      slug: "10mw-power-house-rental",
      description:
        "Provided a 10 MW temporary power house rental to support TASNEE’s operational needs at the Jubail facility.",
      monthyear: "Oct-06",
      duration: "4 MONTHS",
      client: "TASNEE",
      povalue: "5,000,000.00",
      totalmanhour: "7,500.00",
      location: "Jubail",
      status: "COMPLETED",
      images: powerProjectImages.power_4,
      division: "Power",
    },
    {
      id: 5,
      projectname: "POWER FACTOR IMPROVEMENT",
      slug: "power-factor-improvement",
      description:
        "Upgraded power factor correction systems to enhance electrical efficiency at EATON’s Jubail facility, achieving near-completion by December 2024.",
      monthyear: "Dec-23",
      duration: "6 MONTHS",
      client: "EATON",
      povalue: "1,800,000.00",
      totalmanhour: "8,000.00",
      location: "Jubail",
      status: "ON-GOING",
      images: powerProjectImages.power_5,
      division: "Power",
    },
  ],
};

export default powerData;