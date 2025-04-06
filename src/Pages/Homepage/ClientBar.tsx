import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { clientlogos } from "../../assets"; // Importing client logos as an array

const ClientBar: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 900, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 400, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        background: 'linear-gradient(90deg, #FFFFFF 0%, #F7FAFC 100%)',
        padding: "20px 0",
        position: "relative",
        '&:before': {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(209, 213, 219, 0.2) 0%, transparent 70%)',
          zIndex: 0,
        },
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          color: '#2D3748',
          fontWeight: 600,
          mb: 2,
          textTransform: "uppercase",
          letterSpacing: "2px",
          position: "relative",
          zIndex: 1,
          fontSize: { xs: "18px", sm: "20px" },
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
          fontFamily: 'Roboto, Arial, sans-serif', // Fallback
        }}
      >
        Our Esteemed Clients
      </Typography>

      <Box sx={{ position: "relative", zIndex: 1, px: { xs: 1, sm: 2, md: 4, lg: 6 } }}>
        <Slider {...settings}>
          {clientlogos.concat(clientlogos).map((logo, index) => (
            <Box
              key={index}
              sx={{
                display: "flex !important",
                justifyContent: "center",
                alignItems: "center",
                padding: "8px",
                transition: "all 0.3s ease",
                '&:hover': {
                  transform: "scale(1.1)",
                  filter: "brightness(1.1) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))",
                },
              }}
            >
              <Box
                component="img"
                src={logo}
                alt={`Client ${index + 1}`}
                sx={{
                  width: { xs: "60px", sm: "80px", md: "100px" },
                  maxWidth: "110px",
                  height: "auto",
                  objectFit: "contain",
                  filter: "grayscale(10%) brightness(0.95)",
                  transition: "filter 0.3s ease, transform 0.3s ease",
                  borderRadius: "10px",
                  boxShadow: '0 3px 12px rgba(0, 0, 0, 0.1)',
                  background: 'rgba(255, 255, 255, 0.8)',
                  p: 0.75,
                  border: '1px solid rgba(229, 231, 235, 0.5)',
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ClientBar;