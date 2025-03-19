import React from "react";
import HeroBanner from "../../Pages/Homepage/HeroBanner";
import { Box } from "@mui/material";
import ClientBar from "./ClientBar";
import AboutUs from "./AboutUs"; // Import the AboutUs component

const HomePage = () => {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Client Bar Section */}
      <Box sx={{ position: "relative"}}>
        <ClientBar />
      </Box>

      {/* About Us Section */}
      <Box sx={{ position: "relative" }}>
        <AboutUs /> {/* Here we place the AboutUs component */}
      </Box>
    </Box>
  );
};

export default HomePage;
