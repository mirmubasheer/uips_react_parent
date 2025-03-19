import React from "react";
import { Box, Typography, IconButton, Link } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material"; // Import icons

const TopHeader: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white", // Keep text color white for all elements
        padding: "5px 20px", // Reduced padding to decrease height
        fontSize: "9px", // Reduced font size to decrease overall height
        position: "fixed", // Keep it fixed on top
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2, // Ensure it stays on top of other content
        background: "linear-gradient(90deg, #25358d, #1a2467)",
        height:"25px"
      }}
    >
{/* Left Side: Contact Info */}
<Box sx={{ display: "flex", alignItems: "center", marginLeft: "20px" }}> {/* Added marginLeft here */}
  <Typography variant="body2" sx={{ marginRight: 2, color: "white", fontSize: "0.85rem" }}>
    Call Us Today:{" "}
    <strong>
      <Link
        href="tel:+966138968061"
        sx={{ color: "white", textDecoration: "none" }}
      >
        +966 13 8968061
      </Link>
    </strong>{" "}
    |{" "}
    <Link
      href="mailto:info@uips-sa.com"
      sx={{ color: "white", textDecoration: "none" }}
    >
      info@uips-sa.com
    </Link>
  </Typography>
</Box>


      {/* Right Side: Social Media Icons */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          component={Link}
          href="https://facebook.com"
          target="_blank"
          sx={{ color: "white", marginLeft: 1 }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          component={Link}
          href="https://instagram.com"
          target="_blank"
          sx={{ color: "white", marginLeft: 1 }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          component={Link}
          href="https://wa.me/966138968061"
          target="_blank"
          sx={{ color: "white", marginLeft: 1 }}
        >
          <WhatsApp />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopHeader;
