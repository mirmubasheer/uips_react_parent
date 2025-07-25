interface SectionType {
  title: string;
  image: keyof typeof import("../../assets").AboutSectionImages;
  content: string[];
}

const aboutData: SectionType[] = [
  {
    title: "About Us",
    image: "About02",
    content: [
      "Utilities & Industrial Power Services (UIPS) is an Indian-Saudi based company headquartered in Al-Khobar, Saudi Arabia. The company was established in June 2003 to cater Industrial & Building sector.",
    ],
  },
  {
    title: "About The Company",
    image: "About03",
    content: [
      "The company is a Saudi based Engineering, Procurement and Installation Contracting Company with specialized local know-how managed by a high qualified and experienced team of engineers.",
    ],
  },
  {
    title: "Our Goal",
    image: "About04",
    content: [
      "UIPS goal and focus is on Customer satisfaction by providing Quality and Efficient Solutions & Services. We implement and maintain ARAMCO, SABIC, SEC, Royal Commission (RC) and International quality standards",
    ],
  },
];

export default aboutData;