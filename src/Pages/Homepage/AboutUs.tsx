import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
// import { clientImage } from "../../assets"; // Placeholder image path, replace with your actual image path.

const AboutUs: React.FC = () => {
  const imageRef = useRef(null);

  // GSAP Shine Effect on Hover
  useEffect(() => {
    const shineEffect = () => {
      const shine = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      shine.fromTo(
        imageRef.current,
        { backgroundPosition: "0% 0%" },
        {
          backgroundPosition: "100% 100%",
          duration: 1,
          ease: "power2.out",
        }
      );
    };
    shineEffect();
  }, []);

  return (
    <Box
      sx={{
        padding: "80px 0",
        backgroundColor: "#f3f4f6",
        px: { xs: 2, sm: 4, md: 6, lg: 8 }, // Added responsive padding for left and right
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Left Column: Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "left", padding: "20px", position: "relative" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#25358d",
                marginBottom: "20px",
                fontSize: "2.5rem",
                letterSpacing: "1px",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#1a2467",
                lineHeight: "1.8",
                fontSize: "1.1rem",
                marginBottom: "20px",
              }}
            >
              We are a leading industrial company based in Saudi Arabia, offering
              innovative solutions for the construction and manufacturing sectors. Our
              mission is to provide cutting-edge technology to enhance the industrial
              landscape.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#1a2467",
                lineHeight: "1.8",
                fontSize: "1.1rem",
                marginBottom: "20px",
              }}
            >
              With decades of experience, we pride ourselves on our commitment to
              quality, sustainability, and efficiency. Our team of experts works tirelessly
              to deliver excellence in every project we undertake.
            </Typography>

            <Box
              sx={{
                position: "absolute",
                top: "10%",
                right: "-15px",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#25358d",
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              SA
            </Box>
          </Box>
        </Grid>

        {/* Right Column: Image with Hover Shine Effect */}
        <Grid item xs={12} md={6}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{ position: "relative", overflow: "hidden", borderRadius: "10px" }}
          >
            <Box
              ref={imageRef}
              sx={{
                // backgroundImage: `url(${clientImage})`, // Add your actual image path
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                position: "relative",
                borderRadius: "10px",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  filter: "brightness(0.8)",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2) 50%, transparent 100%)",
                  zIndex: 10,
                  opacity: 0,
                  pointerEvents: "none",
                }}
              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
