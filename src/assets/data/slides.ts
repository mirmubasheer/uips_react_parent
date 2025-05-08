import { herosectionimages } from "../../assets";

const slides = [
    {
        id: 1,
        image: herosectionimages.hero1, // K Image
        title: "INDUSTRIAL EXCELLENCE",
        subtitle: "Innovating Manufacturing & Production",
        description: "We provide cutting-edge industrial solutions to enhance efficiency, safety, and scalability in manufacturing and production sectors.",
        buttonText: "Discover More",
        route: "/civil", // Internal route to projects page
    },
    {
        id: 2,
        image: herosectionimages.hero2, // Civil Engineering Image
        title: "CIVIL ENGINEERING EXPERTISE",
        subtitle: "Building the Future with Precision",
        description: "Our civil engineering services ensure robust, sustainable, and innovative infrastructure solutions tailored for modern development.",
        buttonText: "Explore Projects",
        route: "/civil", // Internal route to civil division detail
    },
    {
        id: 3,
        image: herosectionimages.hero3, // Electrical Engineering Image
        title: "ELECTRICAL ENGINEERING SOLUTIONS",
        subtitle: "Powering the World with Innovation",
        description: "We specialize in efficient and reliable electrical systems designed for industrial, commercial, and residential applications.",
        buttonText: "Learn More",
        route: "/electrical", // Internal route to electrical division detail
    },
    {
        id: 4,
        image: herosectionimages.hero4, // IT Division Image
        title: "IT SOLUTIONS & TECHNOLOGY",
        subtitle: "Transforming Businesses with Digital Innovation",
        description: "Our IT division delivers cutting-edge software, cloud, and cybersecurity solutions to optimize and secure your digital ecosystem.",
        buttonText: "Get in Touch",
        route: "/contact", // Internal route to contact page
    },
];

export default slides;