import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import { gsap } from "gsap";
import CompanyCard from "./Components/CompanyCard";

const AboutCompany: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const headerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Animations with slight enhancements for smoothness
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    gsap.fromTo(
      introRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.4, ease: "power3.out" }
    );

    gsap.fromTo(
      cardsRef.current?.children,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        ease: "elastic.out(1, 0.75)",
        delay: 0.8,
      }
    );
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "#0A1B4A", // Darker blue shade
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: "30px 10px", sm: "40px 15px", md: "80px 0px" }, // Enhanced mobile padding
        color: "#FFFFFF",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <Box
        ref={headerRef}
        sx={{
          mb: { xs: 4, sm: 6, md: 8 },
          position: "relative",
          width: { xs: "90%", sm: "80%", md: "auto" }, // Center header on mobile
          maxWidth: "1200px",
          mx: "auto", // Center horizontally
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#FFFFFF",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: "24px", sm: "28px", md: "40px" }, // Responsive font size
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            position: "relative",
            display: "inline-block",
          }}
        >
          About the Company
        </Typography>
        <Box
          sx={{
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "40px", sm: "50px", md: "60px" }, // Responsive underline width
            height: "4px",
            background: "linear-gradient(90deg, #3B82F6, #60A5FA)",
            borderRadius: "2px",
          }}
        />
      </Box>

      {/* Message Box with V-shape */}
      <Box
        ref={introRef}
        sx={{
          position: "relative",
          width: { xs: "95%", sm: "90%", md: "900px" }, // Responsive width
          maxWidth: "900px",
          mx: "auto", // Center horizontally
          background: "#1A2B6A", // Slightly lighter dark blue for contrast
          borderRadius: "15px 15px 0 0",
          padding: { xs: "15px 10px", sm: "20px 15px", md: "25px" }, // Responsive padding
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          mb: 2,
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: { xs: "-30px", md: "-40px" }, // Scale down V-shape on mobile
            left: "50%",
            transform: "translateX(-50%)",
            borderLeft: { xs: "25px solid transparent", sm: "30px solid transparent", md: "40px solid transparent" }, // Responsive V-shape
            borderRight: { xs: "25px solid transparent", sm: "30px solid transparent", md: "40px solid transparent" },
            borderTop: { xs: "25px solid #1A2B6A", sm: "30px solid #1A2B6A", md: "40px solid #1A2B6A" },
            zIndex: 1,
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "13px", sm: "14px", md: "20px" }, // Responsive font size
            lineHeight: 1.6,
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
            color: "#FFFFFF",
          }}
        >
          Utilities and Industrial Power Services (UIPS) is a 100% Saudi owned ISO 9001:2008 Certified EPC company based in Al-Khobar, Saudi Arabia. The company was established in June 2003 to cater Industrial & Building sector.
        </Typography>
      </Box>

      {/* Cards Section */}
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }} // Responsive spacing
        ref={cardsRef}
        sx={{
          width: { xs: "95%", sm: "90%", md: "1200px" }, // Responsive width
          maxWidth: "1200px",
          mx: "auto", // Center horizontally
          justifyContent: "center",
          flexWrap: { xs: "wrap", md: "nowrap_slow" },
          paddingTop: { xs: "60px", sm: "80px", md: "100px" }, // Responsive paddingTop
        }}
      >
        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <CompanyCard
            title="What We Do ?"
            description="We design, supply & provide construction & installation services in the field of Civil, Electrical, Power Division, Instrumentation, Mechanical, Fiber optic & Plant shutdowns."
            icon="Build"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <CompanyCard
            title="Vision"
            description="To be recognized EPC contractors. “We will deliver excellence exceeding our commitments.”"
            icon="Visibility"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <CompanyCard
            title="About Goal"
            description="UIPS Goal focus is on customer satisfaction by providing efficient solutions & services with the quality & safety standards. Go to Settings to activate Windows."
            icon="ThumbUp"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutCompany;