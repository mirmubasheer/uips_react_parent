// src/assets/data/civil.ts
import { civilProjectImages } from "../../assets";

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
  images: unknown[]; // Use `any` for simplicity; replace with `ImageModule[]` if needed
  division: string;
}

interface CivilDivision {
  name: string;
  description: string;
  clients: string[];
  img: string;
  projects: Project[];
}

const civilData: CivilDivision = {
  name: "Civil Division",
  description:
    "Our Civil Division specializes in delivering comprehensive civil engineering solutions, including structural design, construction, and maintenance of industrial facilities. We excel in steel structure fabrication, foundation works, and infrastructure development, ensuring robust and sustainable outcomes for our clients. With extensive experience in the industrial sector, we have successfully collaborated with leading petrochemical and energy companies, providing tailored solutions to meet their complex requirements.",
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
  img: "civilimg",
  projects: [
    {
      id: 1,
      projectname: "GCC E & I- FO - CIVIL STEEL STRUCTURE",
      slug: "gcc-e-i-fo-civil-steel-structure",
      description:
        "Construction of a robust civil steel structure for enhancing industrial infrastructure.",
      monthyear: "May-12",
      duration: "14 MONTHS",
      client: "ARAMCO SHELL - SATORP",
      povalue: "30,000,000.00",
      totalmanhour: "300,000.00",
      location: "Jubail",
      status: "COMPLETED",
      images: civilProjectImages.civil_1,
      division: "Civil",
    },
    {
      id: 2,
      projectname: "EMISSION CONTROL MANAGEMENT",
      slug: "emission-control-management",
      description:
        "Implementation of advanced emission control systems to meet environmental standards.",
      monthyear: "Apr-08",
      duration: "12 MONTHS",
      client: "OLAYAN-BAYRONI",
      povalue: "19,880,000.00",
      totalmanhour: "175,000.00",
      location: "Jubail",
      status: "COMPLETED",
      images: civilProjectImages.civil_2,
      division: "Civil",
    },
    {
      id: 3,
      projectname: "PF IMPROVEMENT (4443-KQZ-401CM001)",
      slug: "pf-improvement-4443-kqz-401cm001",
      description:
        "Power factor improvement project to optimize electrical efficiency.",
      monthyear: "Oct-10",
      duration: "18 MONTHS",
      client: "ABB-SADAF SABIC",
      povalue: "25,000,000.00",
      totalmanhour: "225,000.00",
      location: "Jubail",
      status: "COMPLETED",
      images: civilProjectImages.civil_3,
      division: "Civil",
    },
    {
      id: 4,
      projectname: "GEAR BOX PROTECTION COOLING TOWER",
      slug: "gear-box-protection-cooling-tower",
      description:
        "Installation of protective systems for gear boxes in cooling tower operations.",
      monthyear: "Feb-13",
      duration: "8 MONTHS",
      client: "SAUDI KAYAN SABIC",
      povalue: "2,800,000.00",
      totalmanhour: "23,500.00",
      location: "Jubail",
      status: "COMPLETED",
      images: civilProjectImages.civil_4,
      division: "Civil",
    },
    {
      id: 5,
      projectname: "SUBSTATION EXTENSION LNT",
      slug: "substation-extension-lnt",
      description:
        "Expansion of substation facilities to support increased power demands.",
      monthyear: "Dec-14",
      duration: "8 MONTHS",
      client: "L&T - SABIC",
      povalue: "8,670,000.00",
      totalmanhour: "25,000.00",
      location: "Jubail",
      status: "COMPLETED",
      images: civilProjectImages.civil_5,
      division: "Civil",
    },
    {
      id: 6,
      projectname: "SADAF MOTOR PUMP REPLACEMENT PROJECT",
      slug: "sadaf-motor-pump-replacement-project",
      description:
        "Replacement of motor pumps to enhance operational efficiency.",
      monthyear: "Jun-12",
      duration: "12 MONTHS",
      client: "SADAF SABIC",
      povalue: "4,299,786.00",
      totalmanhour: "14,600.00",
      location: "Jubail",
      status: "COMPLETED",
      images: civilProjectImages.civil_6,
      division: "Civil",
    },
    {
      id: 7,
      projectname: "CIVIL - STRUCTURAL - MECHANICAL - E&I",
      slug: "civil-structural-mechanical-e-i",
      description:
        "Comprehensive civil, structural, mechanical, and electrical/instrumentation works.",
      monthyear: "Aug-21",
      duration: "5 MONTHS",
      client: "UNITED - SABIC",
      povalue: "2,800,000.00",
      totalmanhour: "10,000.00", // Fixed "HITACHI" assumption
      location: "Jubail",
      status: "COMPLETED",
      images: civilProjectImages.civil_7,
      division: "Civil",
    },
    {
      id: 8,
      projectname: "ADDAR CHEMICAL PLANT - SULPHOLANE",
      slug: "addar-chemical-plant-sulpholane",
      description:
        "Construction of a sulpholane unit for the Addar Chemical Plant.",
      monthyear: "Feb-15",
      duration: "24 MONTHS",
      client: "ADDAR GROUP",
      povalue: "45,868,280.00",
      totalmanhour: "1,200,000.00",
      location: "Jubail",
      status: "COMPLETED",
      images: civilProjectImages.civil_8,
      division: "Civil",
    },
    {
      id: 9,
      projectname: "ADDAR CHEMICAL PLANT - SAP & ETP",
      slug: "addar-chemical-plant-sap-etp",
      description:
        "Development of SAP and effluent treatment plant for chemical processing.",
      monthyear: "Jan-17",
      duration: "12 MONTHS",
      client: "ADDAR GROUP",
      povalue: "5,000,000.00",
      totalmanhour: "8,500.00",
      location: "Jubail",
      status: "COMPLETED",
      images: civilProjectImages.civil_9,
      division: "Civil",
    },
    {
      id: 10,
      projectname: "ADDAR CHEMICAL PLANT - SAP & ETP",
      slug: "addar-chemical-plant-sap-etp-phase-2",
      description:
        "Additional phase of SAP and effluent treatment plant expansion.",
      monthyear: "Oct-17",
      duration: "4 MONTHS",
      client: "ADDAR GROUP",
      povalue: "2,180,000.00",
      totalmanhour: "6,500.00",
      location: "Jubail",
      status: "COMPLETED",
      images: civilProjectImages.civil_10,
      division: "Civil",
    },
    {
      id: 11,
      projectname: "EPC - 115 KV CABLE PROJECT",
      slug: "epc-115-kv-cable-project",
      description:
        "Engineering, procurement, and construction of a 115 kV cable network.",
      monthyear: "Nov-17",
      duration: "24 MONTHS",
      client: "FARABI PETROCHEMICALS",
      povalue: "8,000,000.00",
      totalmanhour: "55,000.00",
      location: "Yanbu",
      status: "COMPLETED",
      images: civilProjectImages.civil_11,
      division: "Civil",
    },
    {
      id: 12,
      projectname: "LV CABLE PROCUREMENT & INSTALLATION",
      slug: "lv-cable-procurement-installation",
      description:
        "Procurement and installation of low-voltage cables for power distribution.",
      monthyear: "Apr-19",
      duration: "3 MONTHS",
      client: "MASA - MARAFIQ",
      povalue: "454,000.00",
      totalmanhour: "19,500.00",
      location: "Jubail",
      status: "COMPLETED",
      images: civilProjectImages.civil_12,
      division: "Civil",
    },
    {
      id: 13,
      projectname: "FARABI POLO PROJECT",
      slug: "farabi-polo-project",
      description:
        "Development of a polo facility for Farabi Petrochemicals.",
      monthyear: "Nov-21",
      duration: "8 MONTHS",
      client: "FARABI",
      povalue: "20,500,000.00",
      totalmanhour: "135,200.00",
      location: "Yanbu",
      status: "COMPLETED",
      images: civilProjectImages.civil_13,
      division: "Civil",
    },
    {
      id: 14,
      projectname: "FARABI POLO PROJECT",
      slug: "farabi-polo-project-phase-2",
      description: "Second phase of the polo facility development.",
      monthyear: "Feb-21",
      duration: "6 MONTHS",
      client: "FARABI PETROCHEMICALS",
      povalue: "1,700,000.00",
      totalmanhour: "12,480.00",
      location: "Yanbu",
      status: "COMPLETED",
      images: civilProjectImages.civil_14,
      division: "Civil",
    },
    {
      id: 15,
      projectname: "SURFACTANTS DETERGENTS COMPANY SDC",
      slug: "surfactants-detergents-company-sdc",
      description:
        "Construction of a surfactants and detergents production facility.",
      monthyear: "Feb-22",
      duration: "18 MONTHS",
      client: "SDC",
      povalue: "41,000,000.00",
      totalmanhour: "",
      location: "Jubail",
      status: "ONGOING",
      // endDate: "Mar-2025", // Optional: split status
      images: civilProjectImages.civil_15,
      division: "Civil",
    },
    {
      id: 16,
      projectname: "POWER FACTOR IMPROVEMENT",
      slug: "power-factor-improvement",
      description:
        "Upgrade of power factor systems for improved energy efficiency.",
      monthyear: "Dec-23",
      duration: "6 MONTHS",
      client: "EATON",
      povalue: "1,800,000.00",
      totalmanhour: "",
      location: "Jubail",
      status: "ONGOING",
      // endDate: "Dec-2024",
      images: civilProjectImages.civil_16,
      division: "Civil",
    },
    {
      id: 17,
      projectname: "WASTEWATER TRANSFER FACILITIES - WWTF",
      slug: "wastewater-transfer-facilities-wwtf",
      description: "Development of wastewater transfer infrastructure.",
      monthyear: "Feb-24",
      duration: "18 MONTHS",
      client: "EATON",
      povalue: "34,000,000.00",
      totalmanhour: "",
      location: "Ras Tanura",
      status: "ONGOING",
      // endDate: "Oct-2025",
      images: civilProjectImages.civil_17,
      division: "Civil",
    },
    {
      id: 18,
      projectname: "GIS MAIN SUBSTATION PACKAGE AT MA'ADEN",
      slug: "gis-main-substation-package-maaden",
      description:
        "Installation of a GIS main substation for Ma'aden operations.",
      monthyear: "Oct-24",
      duration: "18 MONTHS",
      client: "MA'ADEN",
      povalue: "35,800,402.75",
      totalmanhour: "",
      location: "Ras Tanura",
      status: "ONGOING",
      // endDate: "Feb-2026",
      images: civilProjectImages.civil_18,
      division: "Civil",
    },
  ],
};

export default civilData;