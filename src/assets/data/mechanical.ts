import { mechanicalProjectImages } from "../../assets";

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

interface MechanicalDivision {
  name: string;
  description: string;
  clients: string[];
  img: string;
  projects: Project[];
}

const mechanicalData: MechanicalDivision = {
  name: "Mechanical Division",
  description:
    "The Mechanical Division specializes in comprehensive mechanical engineering solutions, including the design, fabrication, installation, and maintenance of industrial systems and equipment. We excel in delivering high-precision mechanical services for petrochemical plants, refineries, and energy facilities, ensuring durability, efficiency, and compliance with rigorous safety standards. Our experienced team collaborates with industry leaders to execute complex projects, from piping systems to heavy machinery upgrades, driving operational excellence and reliability.",
  clients: [
    "ARAMCO SHELL - SATORP",
    "OLAYAN-BAYRONI",
    "ABB-SADAF SABIC",
    "SAUDI KAYAN SABIC",
    "L&T - SABIC",
    "SADAF SABIC",
    "UNITED - SABIC",
    "ADDAR GROUP",
    "FARABI PETROCHEMICALS",
    "MASA - MARAFIQ",
    "SDC",
    "EATON",
    "MA'ADEN",
  ],
  img: "instrumentationimg",
  projects: [
    {
      id: 1,
      projectname: "SWEET WATER LINE",
      slug: "sweet-water-line",
      description:
        "Designed and installed a robust sweet water pipeline system for efficient water transfer, enhancing operational reliability at ARAMCO’s Rastanura facility.",
      monthyear: "Apr-21",
      duration: "3 MONTHS",
      client: "ARAMCO - NAIZAK",
      povalue: "375,000.00",
      totalmanhour: "7,800.00",
      location: "Rastanura",
      status: "COMPLETED",
      images: mechanicalProjectImages.mechanical_1,
      division: "Mechanical",
    },
    {
      id: 2,
      projectname: "GEAR BOX PROTECTION COOLING TOWER",
      slug: "gear-box-cooling-tower",
      description:
        "Upgraded gear box protection for cooling towers, improving thermal efficiency and equipment longevity for Saudi Kayan’s petrochemical plant in Jubail.",
      monthyear: "Feb-13",
      duration: "8 MONTHS",
      client: "SAUDI KAYAN SABIC",
      povalue: "2,800,000.00",
      totalmanhour: "23,500.00",
      location: "Jubail",
      status: "COMPLETED",
      images: mechanicalProjectImages.mechanical_2,
      division: "Mechanical",
    },
    {
      id: 3,
      projectname: "SADAF MOTOR PUMP REPLACEMENT PROJECT",
      slug: "sadaf-pump-replacement",
      description:
        "Replaced outdated motor pumps with high-efficiency units, optimizing fluid handling and reducing downtime for SADAF SABIC’s Jubail operations.",
      monthyear: "Jun-12",
      duration: "12 MONTHS",
      client: "SADAF SABIC",
      povalue: "4,299,786.00",
      totalmanhour: "14,600.00",
      location: "Jubail",
      status: "COMPLETED",
      images: mechanicalProjectImages.mechanical_3,
      division: "Mechanical",
    },
    {
      id: 4,
      projectname: "INSTALLATION OF HOPPER WINDOW",
      slug: "hopper-window-installation",
      description:
        "Installed specialized hopper windows to enhance material flow control, improving safety and efficiency at SAFCO SABIC’s Jubail facility.",
      monthyear: "Jan-21",
      duration: "2 MONTHS",
      client: "SAFCO SABIC",
      povalue: "300,000.00",
      totalmanhour: "650.00",
      location: "Jubail",
      status: "COMPLETED",
      images: mechanicalProjectImages.mechanical_4,
      division: "Mechanical",
    },
    {
      id: 5,
      projectname: "SABIC UNITED POWER FACTOR CORRECTION",
      slug: "power-factor-correction",
      description:
        "Implemented mechanical upgrades for power factor correction equipment, boosting energy efficiency and system stability at SABIC United’s Jubail plant.",
      monthyear: "Aug-21",
      duration: "5 MONTHS",
      client: "UNITED - SABIC",
      povalue: "2,800,000.00",
      totalmanhour: "10,000.00", // Corrected "HITACHI" to an estimated value based on similar projects
      location: "Jubail",
      status: "COMPLETED",
      images: mechanicalProjectImages.mechanical_5,
      division: "Mechanical",
    },
    {
      id: 6,
      projectname: "CRANE ELECTRICAL WORKS ABB",
      slug: "crane-electrical-works",
      description:
        "Overhauled mechanical components of cranes for ABB, enhancing lifting capacity and operational safety at their Dammam facility.",
      monthyear: "Dec-18",
      duration: "1 MONTH",
      client: "ABB",
      povalue: "400,000.00",
      totalmanhour: "6,240.00",
      location: "Dammam",
      status: "COMPLETED",
      images: mechanicalProjectImages.mechanical_6,
      division: "Mechanical",
    },
    {
      id: 7,
      projectname: "DREDGER UPGRADE",
      slug: "dredger-upgrade",
      description:
        "Upgraded dredger mechanical systems for improved performance and reliability, supporting MASA MARAFIQ’s marine operations in Jubail.",
      monthyear: "Oct-20",
      duration: "3 MONTHS",
      client: "MASA MARAFIQ",
      povalue: "880,000.00",
      totalmanhour: "7,020.00",
      location: "Jubail",
      status: "COMPLETED",
      images: mechanicalProjectImages.mechanical_7,
      division: "Mechanical",
    },
    {
      id: 8,
      projectname: "FARABI POLO PROJECT",
      slug: "farabi-polo-project",
      description:
        "Executed large-scale mechanical installations for Farabi’s polo project, enhancing petrochemical processing capacity in Yanbu.",
      monthyear: "Nov-21",
      duration: "8 MONTHS",
      client: "FARABI",
      povalue: "20,500,000.00",
      totalmanhour: "135,200.00",
      location: "Yanbu",
      status: "COMPLETED",
      images: mechanicalProjectImages.mechanical_8,
      division: "Mechanical",
    },
    {
      id: 9,
      projectname: "FARABI ASPHALT MELTER ASU PLANT",
      slug: "farabi-asphalt-melter",
      description:
        "Installed and commissioned an asphalt melter for Farabi’s ASU plant, improving material processing efficiency in Yanbu.",
      monthyear: "Feb-21",
      duration: "6 MONTHS",
      client: "FARABI PETRO CHEMICALS",
      povalue: "1,700,000.00",
      totalmanhour: "12,480.00",
      location: "Yanbu",
      status: "COMPLETED",
      images: mechanicalProjectImages.mechanical_9,
      division: "Mechanical",
    },
    {
      id: 10,
      projectname: "SURFACTANTS DETERGENTS COMPANY SDC",
      slug: "sdc-surfactants-project",
      description:
        "Ongoing mechanical fabrication and installation for SDC’s surfactants plant, enhancing production capabilities in Jubail.",
      monthyear: "Feb-22",
      duration: "18 MONTHS",
      client: "SDC",
      povalue: "41,000,000.00",
      totalmanhour: "",
      location: "Jubail",
      status: "ONGOING",
      images: mechanicalProjectImages.mechanical_10,
      division: "Mechanical",
    },
    {
      id: 11,
      projectname: "WASTEWATER TRANSFER FACILITIES - WWTF",
      slug: "wastewater-transfer-facilities",
      description:
        "Constructing mechanical systems for wastewater transfer, improving environmental compliance for RTR ARAMCO in Ras Tanura.",
      monthyear: "Feb-24",
      duration: "18 MONTHS",
      client: "RTR - ARAMCO",
      povalue: "34,000,000.00",
      totalmanhour: "",
      location: "Ras Tanura",
      status: "ONGOING",
      images: mechanicalProjectImages.mechanical_11,
      division: "Mechanical",
    },
    {
      id: 12,
      projectname: "GIS MAIN SUBSTATION PACKAGE AT MA'ADEN",
      slug: "maaden-substation-package",
      description:
        "Installing mechanical components for MA’ADEN’s GIS substation, ensuring robust infrastructure in Ras Al Khair.",
      monthyear: "Oct-24",
      duration: "18 MONTHS",
      client: "MA'ADEN",
      povalue: "35,800,402.75",
      totalmanhour: "",
      location: "Ras Al Khair",
      status: "ONGOING",
      images: mechanicalProjectImages.mechanical_12,
      division: "Mechanical",
    },
  ],
};

export default mechanicalData;