import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { clientlogos } from "../../assets"; // ✅ Importing client logos as an array

const ClientBar: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#f8f9fa",
        padding: "20px 0",
        px: { xs: 2, sm: 4, md: 6, lg: 8 }, // Added responsive padding for left and right
      }}
    >
      <Slider {...settings}>
        {/* No need to check Array.isArray(clientlogos) anymore */}
        {clientlogos.concat(clientlogos).map((logo, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              style={{
                width: "120px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ClientBar;
