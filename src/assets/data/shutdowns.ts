import { plantShutdownProjectImages } from "..";

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

interface PlantShutdownDivision {
  name: string;
  description: string;
  clients: string[];
  img: string;
  projects: Project[];
}

const shutdowns: PlantShutdownDivision = {
  name: "Plant Shutdowns/Turnarounds",
  description:
    "We specialize in delivering comprehensive solutions for plant shutdowns and turnarounds, ensuring efficient execution of maintenance, upgrades, and infrastructure optimization for industrial facilities. Our services include structural repairs, equipment replacement, and system enhancements, all designed to minimize downtime and maximize operational reliability. With extensive experience in the petrochemical and energy sectors, we collaborate with industry leaders to manage complex projects under tight schedules, upholding the highest standards of safety and quality. Our proven expertise ensures tailored, dependable solutions that keep your facility performing at its best.",
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
  img: "plantimg",
  projects: [
    {
      id: 1,
      projectname: "RECTIFIER SHUTDOWN",
      slug: "rectifier-shutdown", // Corrected slug to match projectname, not "network-upgrade"
      description:
        "Executed a comprehensive rectifier shutdown to perform critical maintenance and upgrades, ensuring operational reliability at ABB SADAF SABIC’s Jubail facility.", // Added description since it was empty
      monthyear: "Mar-15",
      duration: "1 MONTH",
      client: "ABB SADAF SABIC",
      povalue: "5,653,000.00",
      totalmanhour: "10,000.00",
      location: "Jubail",
      status: "COMPLETED",
      images: plantShutdownProjectImages.plant_shutdown_1,
      division: "Shutdowns",
    },
  ],
};

export default shutdowns;