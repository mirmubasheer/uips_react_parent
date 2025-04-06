import React from "react";
import HeroBanner from "../../Pages/Homepage/HeroBanner";
import { Box } from "@mui/material";
import ClientBar from "./ClientBar";
import AboutUs from "./AboutUs";
import Division from "./Division";
import Projects from "./Projects";
import Motive from "./Motive"; 
import Testimonial from "./Testimonial";
import Upcoming from "./Upcoming";
import GetInTouch from "./GetInTouch";

const HomePage = () => {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Client Bar Section */}
      <Box sx={{ position: "relative" }}>
        <ClientBar />
      </Box>

      {/* Motive Section */}
      <Box sx={{ position: "relative" }}>
        <Motive />
      </Box>

      {/* About Us Section */}
      <Box sx={{ position: "relative" }}>
        <AboutUs />
      </Box>

      {/* Divisions Section */}
      <Box sx={{ position: "relative" }}>
        <Division />
      </Box>

      {/* Projects Section */}
      <Box sx={{ position: "relative" }}>
        <Projects />
      </Box>

          {/* Projects Section */}
      <Box sx={{ position: "relative" }}>
        <Testimonial />
      </Box>

      <Box sx={{ position: "relative" }}>
        <Upcoming />
      </Box>

      <Box sx={{ position: "relative" }}>
        <GetInTouch />
      </Box>
    </Box>
  );
};

export default HomePage;