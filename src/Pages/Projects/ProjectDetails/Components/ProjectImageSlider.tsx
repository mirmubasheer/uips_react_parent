import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { Box, Container } from "@mui/material";
import gsap from "gsap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProjectImageSliderProps {
  images: any[]; // Changed from string[] to any[] to accept image modules
}

const ProjectImageSlider: React.FC<ProjectImageSliderProps> = ({ images }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // GSAP animation for fade-in
  useEffect(() => {
    if (sliderRef.current) {
      gsap.fromTo(
        sliderRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  // Fallback if images array is empty
  const displayImages = images.length > 0 ? images : [];

  return (
    <Box
      sx={{
        width: "100%",
        mb: { xs: 4, md: 6 },
        px: { xs: 2, sm: 0 },
      }}
    >
      <Container maxWidth="md" ref={sliderRef}>
        <Slider {...settings}>
          {displayImages.map((image, index) => (
            <Box key={index}>
              <Box
                component="img"
                src={image} // Changed from `/images/${image}` to `image` to use module directly
                alt={`Project image ${index + 1}`}
                sx={{
                  width: "100%",
                  height: { xs: "300px", md: "400px" },
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default ProjectImageSlider;