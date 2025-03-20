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
          pt: { xs: "100px", md: "0" }, // Prevents content from overlapping the header on mobile
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
            zIndex: -1,
          }}
        />
<Grid
  container
  spacing={{ xs: 3, md: 6 }} // Reduce gap in mobile view
  alignItems="center"
  justifyContent="space-between"
  sx={{
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "1700px",
    mx: "auto",
    paddingTop: { xs: "80px", sm: "100px", md: "0px" }, // Prevent overlap with header
  }}
>
  {/* Left Side: Text Content */}
  <Grid
    item
    xs={12}
    md={6}
    sx={{
      marginTop:{ xs: "1%", sm: "6%", md: "8%" },
      paddingLeft: { xs: "5%", sm: "6%", md: 4 },
      paddingRight: { xs: "5%", sm: "6%", md: 4 },
      marginLeft: { xs: "0px", md: "-40px", lg: "-30px" }, // Align left in mobile
    }}
  >
    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
      <Typography variant="h3" sx={{ fontWeight: "regular", letterSpacing: 2, textTransform: "uppercase", color: "#fff", fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}>
        <Typical key={currentIndex} steps={[slide.title, 2000]} wrapper="span" loop={1} />
      </Typography>
    </motion.div>

    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}>
      <Typography variant="h6" sx={{ mt: 1, fontWeight: 300, color: "#fff", fontSize: { xs: "1rem", md: "1.1rem" } }}>
        {slide.subtitle}
      </Typography>
    </motion.div>

    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8 }}>
      <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: "#fff", fontSize: { xs: "1.0rem", md: "1.1rem" } }}>
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
          fontSize: { xs: "0.8rem", sm: "1rem" },
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
{/* Right Side: Circle Model */}
<Grid
  item
  xs={12}
  md={6}
  display="flex"
  justifyContent="center"
  sx={{
    paddingRight: { xs: "5%", sm: "6%", md: 4 },
    marginTop: { xs: "-60px", md: "20px" }, // Bring model closer to content on mobile
  }}
>
  <Box
    sx={{
      width: { xs: "80%", sm: "90%", md: "120%" }, // Increase size on desktop
      height: "100%",
      maxWidth: { xs: "400px", md: "500px" }, // Increase max width on desktop
    }}
  >
    <CircleModel />
  </Box>
</Grid>

</Grid>

      </Box>
    ))}
  </Slider>
</Box>

  );
};

export default HeroBanner;
