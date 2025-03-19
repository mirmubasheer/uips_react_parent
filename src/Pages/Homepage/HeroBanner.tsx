import { useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import gsap from "gsap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/fonts/Kanit/Kanit-Regular.ttf";
import slides from "../../assets/data/slides";
import Typical from "react-typical";
import CircleModel from "../../components/CircleModel/CircleModel";

const HeroBanner = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoized function for background zoom effect
  const animateZoomEffect = useCallback((newIndex: number) => {
    gsap.killTweensOf(".slide-bg");
    gsap.fromTo(
      `.slide-${newIndex} .slide-bg`,
      { scale: 1 },
      {
        scale: 1.1,
        duration: 5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      }
    );
  }, []);

  useEffect(() => {
    animateZoomEffect(0);
  }, [animateZoomEffect]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "ease-in-out",
    beforeChange: (_oldIndex: number, newIndex: number) => {
      setCurrentIndex(newIndex);
      animateZoomEffect(newIndex);
    },
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
        top: 0,
        left: 0,
        overflow: "hidden",
        color: "#fff",
        
      }}
    >
      <Slider {...sliderSettings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <Box
            key={slide.id}
            className={`slide-${index}`}
            sx={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              textAlign: "left",
              px: { xs: "5%", sm: "6%", md: "8%" },
              position: "relative",
            }}
          >
            {/* Background Image */}
            <Box
              className="slide-bg"
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transformOrigin: "center",
                zIndex: -1,
              }}
            />

            {/* Dark Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "rgba(0, 10, 30, 0.6)",
                zIndex: -1, // Keep it behind content
              }}
            />

            {/* Grid Layout for Content & Circle Model */}
            <Grid
              container
              spacing={6}
              alignItems="center"
              justifyContent="space-between"
              sx={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                maxWidth: "1700px",
                mx: "auto",
              }}
            >
              {/* Left Side: Text Content */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  paddingLeft: { xs: 2, sm: 3, md: 4 },
                  paddingRight: { xs: 2, sm: 3, md: 4 },
                  // Move content more to the left for larger screens
                  marginLeft: { md: "-40px", lg: "-60px" }, 
                }}
              >
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                  <Typography variant="h3" sx={{ fontWeight: "bold", letterSpacing: 2, textTransform: "uppercase", color: "#fff" }}>
                    <Typical key={currentIndex} steps={[slide.title, 2000]} wrapper="span" loop={1} />
                  </Typography>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                  <Typography variant="h6" sx={{ mt: 1, fontWeight: 300, color: "#fff" }}>
                    {slide.subtitle}
                  </Typography>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8 }}>
                  <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: "#fff" }}>
                    {slide.description}
                  </Typography>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1 }}>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      px: 4,
                      py: 1.5,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      background: "linear-gradient(90deg, #25358d, #1a2467)",
                      borderRadius: "30px",
                      boxShadow: "0px 6px 15px rgba(37, 53, 141, 0.8)",
                      "&:hover": {
                        background: "linear-gradient(90deg, #0088cc, #00bcd4)",
                        
                      },
                    }}
                  >
                    {slide.buttonText}
                  </Button>
                </motion.div>
              </Grid>

              {/* Right Side: 3D Circle Model */}
              <Grid item xs={12} md={6} display="flex" justifyContent="center" sx={{ paddingRight: { xs: 2, sm: 3, md: 4 } }}>
                <CircleModel />
              </Grid>
            </Grid>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroBanner;
