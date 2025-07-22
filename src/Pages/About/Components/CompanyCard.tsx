import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";
import BuildIcon from "@mui/icons-material/Build";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

interface CompanyCardProps {
  title: string;
  description: string;
  icon: "Build" | "Visibility" | "ThumbUp";
}

const CompanyCard: React.FC<CompanyCardProps> = ({ title, description, icon }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Hover Animation
    const card = cardRef.current;
    if (card) {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }
  }, []);

  // Map icon prop to the corresponding MUI icon component
  const renderIcon = () => {
    switch (icon) {
      case "Build":
        return <BuildIcon sx={{ fontSize: { xs: "24px", sm: "25px", md: "30px" }, color: "#FFFFFF" }} />; // Responsive icon size
      case "Visibility":
        return <VisibilityIcon sx={{ fontSize: { xs: "24px", sm: "25px", md: "30px" }, color: "#FFFFFF" }} />;
      case "ThumbUp":
        return <ThumbUpIcon sx={{ fontSize: { xs: "24px", sm: "25px", md: "30px" }, color: "#FFFFFF" }} />;
      default:
        return null;
    }
  };

  return (
    <Box
      ref={cardRef}
      sx={{
        background: "#324177", // Slightly lighter dark blue for contrast
        borderRadius: "15px",
        padding: { xs: "12px", sm: "15px", md: "20px" }, // Responsive padding
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: { xs: "200px", sm: "220px", md: "250px" }, // Responsive minHeight
        width: { xs: "100%", sm: "90%", md: "100%" }, // Responsive width
        maxWidth: { xs: "320px", sm: "350px", md: "350px" }, // Constrain width on mobile
        mx: "auto", // Center card on mobile
        boxSizing: "border-box",
      }}
    >
      {/* Icon Placeholder */}
      <Box
        sx={{
          width: { xs: "36px", sm: "40px", md: "50px" }, // Responsive icon container
          height: { xs: "36px", sm: "40px", md: "50px" },
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: { xs: 1.5, md: 2 }, // Responsive margin
        }}
      >
        {renderIcon()}
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          mb: { xs: 1, md: 2 }, // Responsive margin
          fontSize: { xs: "16px", sm: "18px", md: "22px" }, // Responsive font size
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
          color: "#FFFFFF",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "12px", sm: "13px", md: "16px" }, // Responsive font size
          lineHeight: 1.6,
          color: "#FFFFFF",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default CompanyCard;