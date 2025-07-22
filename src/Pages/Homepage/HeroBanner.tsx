// import { useCallback, useEffect, useState, memo } from "react";
// import Slider from "react-slick";
// import { Box, Typography, Button, Grid } from "@mui/material";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { useInView } from "react-intersection-observer";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Typical from "react-typical";
// import CircleModel from "../../components/CircleModel/CircleModel";
// import slides from "../../assets/data/slides";

// interface Slide {
//   id: string;
//   image: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   buttonText: string;
// }

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 1000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3500,
//   fade: true,
//   cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
//   customPaging: () => (
//     <Box
//       sx={{
//         width: { xs: 6, md: 8 },
//         height: { xs: 6, md: 8 },
//         borderRadius: "50%",
//         background: "rgba(255, 255, 255, 0.5)",
//         transition: "all 0.3s ease",
//         "&:hover": { background: "#fff", transform: "scale(1.2)" },
//       }}
//     />
//   ),
// };

// const textVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const containerStyles = {
//   height: "100vh",
//   width: "100%",
//   position: "relative",
//   overflow: "hidden",
//   color: "#fff",
//   background: "linear-gradient(135deg, #0a0f2d 0%, #1a2467 100%)",
// } as const;

// const slideStyles = {
//   height: "100vh",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-start",
//   textAlign: { xs: "center", md: "left" },
//   px: { xs: "3%", sm: "4%", md: "6%" },
//   position: "relative",
//   pt: { xs: "80px", sm: "100px", md: "20px" },
// } as const;

// const backgroundStyles = {
//   position: "absolute",
//   inset: 0,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   transformOrigin: "center",
//   zIndex: -1,
//   filter: "brightness(0.9)",
//   willChange: "transform",
// } as const;

// const overlayStyles = {
//   position: "absolute",
//   inset: 0,
//   background: "linear-gradient(45deg, rgba(0, 10, 30, 0.8) 0%, rgba(37, 53, 141, 0.3) 100%)",
//   zIndex: -1,
//   opacity: 0.85,
// } as const;

// const buttonStyles = {
//   mt: { xs: 2, sm: 2.5, md: 3 },
//   px: { xs: 3, sm: 3.5, md: 4 },
//   py: { xs: 0.8, sm: 1, md: 1.2 },
//   fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
//   fontWeight: 600,
//   background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
//   borderRadius: "50px",
//   boxShadow: "0 6px 15px rgba(59, 130, 246, 0.4)",
//   textTransform: "uppercase",
//   letterSpacing: 1,
//   transition: "all 0.3s ease",
//   "&:hover": {
//     background: "linear-gradient(90deg, #60a5fa, #93c5fd)",
//     transform: "translateY(-2px)",
//     boxShadow: "0 10px 25px rgba(59, 130, 246, 0.6)",
//   },
// } as const;

// const SlideContent: React.FC<{ slide: Slide; index: number; currentIndex: number }> = memo(
//   ({ slide, index, currentIndex }) => (
//     <Grid
//       container
//       spacing={{ xs: 1, sm: 2, md: 4 }}
//       alignItems="center"
//       justifyContent="space-between"
//       sx={{
//         position: "relative",
//         zIndex: 2,
//         width: "100%",
//         maxWidth: "1400px",
//         mx: "auto",
//         paddingTop: { xs: "60px", sm: "80px", md: "40px" },
//       }}
//     >
//       <Grid
//         item
//         xs={12}
//         md={6}
//         sx={{
//           marginTop: { xs: "0%", sm: "2%", md: "8%" },
//           paddingLeft: { xs: "3%", sm: "4%", md: 3 },
//           paddingRight: { xs: "3%", sm: "4%", md: 3 },
//           marginLeft: { xs: "0px", md: "-30px", lg: "-20px" },
//           maxWidth: { xs: "100%", md: "700px" },
//         }}
//       >
//         <motion.div variants={textVariants} initial="hidden" animate="visible">
//           <Typography
//             variant="h3"
//             sx={{
//               fontWeight: "bold",
//               letterSpacing: 2,
//               textTransform: "uppercase",
//               color: "#fff",
//               fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2.2rem" },
//               background: "linear-gradient(45deg, #fff, #60a5fa)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               textShadow: "0 2px 8px rgba(255, 255, 255, 0.3)",
//               whiteSpace: "normal",
//               wordBreak: "break-word",
//               maxWidth: "100%",
//             }}
//           >
//             <Typical
//               key={currentIndex}
//               steps={[slide.title, 2000]}
//               wrapper="span"
//               style={{ display: "inline-block", whiteSpace: "normal" }}
//             />
//           </Typography>
//         </motion.div>

//         <motion.div
//           variants={textVariants}
//           initial="hidden"
//           animate="visible"
//           transition={{ delay: 0.3 }}
//         >
//           <Typography
//             variant="h6"
//             sx={{
//               mt: { xs: 1, sm: 1.2, md: 1.5 },
//               fontWeight: 300,
//               color: "rgba(255, 255, 255, 0.9)",
//               fontSize: { xs: "0.8rem", sm: "1rem", md: "1.5rem" },
//               lineHeight: 1.5,
//               textShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
//               whiteSpace: "normal",
//               wordBreak: "break-word",
//               maxWidth: "100%",
//             }}
//           >
//             {slide.subtitle}
//           </Typography>
//         </motion.div>

//         <motion.div
//           variants={textVariants}
//           initial="hidden"
//           animate="visible"
//           transition={{ delay: 0.6 }}
//         >
//           <Typography
//             variant="body1"
//             sx={{
//               mt: { xs: 1.5, sm: 1.8, md: 2 },
//               lineHeight: 1.6,
//               color: "rgba(255, 255, 255, 0.85)",
//               fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1.1rem" },
//               whiteSpace: "normal",
//               wordBreak: "break-word",
//               maxWidth: "100%",
//             }}
//           >
//             {slide.description}
//           </Typography>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.9 }}
//         >
//           <Button variant="contained" sx={buttonStyles}>
//             {slide.buttonText}
//           </Button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 1.2 }}
//         >
//           <Box
//             component="div"
//             sx={{
//               fontFamily: '"Kanit", Roboto, Arial, sans-serif',
//               fontSize: { xs: "80px", sm: "100px", md: "150px" },
//               fontWeight: "500",
//               textTransform: "uppercase",
//               lineHeight: "1",
//               background: "transparent",
//               WebkitTextFillColor: "transparent",
//               WebkitTextStroke: {
//                 xs: "0.5px rgba(255, 255, 255, 0.20)",
//                 md: "1px rgba(255, 255, 255, 0.20)",
//               },
//               margin: { xs: "-0.05em 0", md: "-0.1em 0 -0.10em 0" },
//               display: "block",
//               color: "#ffffff",
//             }}
//           >
//             UIPS
//           </Box>
//         </motion.div>
//       </Grid>

//       <Grid
//         item
//         xs={12}
//         md={6}
//         display="flex"
//         justifyContent={{ xs: "flex-end", sm: "flex-end", md: "center" }}
//         alignItems="center"
//         sx={{
//           paddingRight: { xs: "3%", sm: "4%", md: 2 },
//           paddingLeft: { xs: "150px", sm: "4%", md: 2 },
//           marginTop: { xs: "-90px", sm: "30px", md: "0px" },
//         }}
//       >
//         <Box
//           sx={{
//             width: { xs: "90%", sm: "70%", md: "100%" },
//             height: { xs: "auto", md: "450px" },
//             maxWidth: { xs: "700px", sm: "300px", md: "450px" },
//             aspectRatio: "1 / 1",
//           }}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
//             animate={{ opacity: 1, scale: 1, rotate: 0 }}
//             transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
//           >
//             <CircleModel />
//           </motion.div>
//         </Box>
//       </Grid>
//     </Grid>
//   )
// );

// const HeroBanner: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

//   const animateZoomEffect = useCallback(
//     (newIndex: number) => {
//       if (!inView) return;
//       gsap.killTweensOf(`.slide-${newIndex} .slide-bg`);
//       gsap.fromTo(
//         `.slide-${newIndex} .slide-bg`,
//         { scale: 1 },
//         {
//           scale: 1.1,
//           duration: 5,
//           ease: "power1.inOut",
//           yoyo: true,
//           repeat: -1,
//         }
//       );
//     },
//     [inView]
//   );

//   useEffect(() => {
//     if (inView) animateZoomEffect(currentIndex);
//   }, [currentIndex, inView, animateZoomEffect]);

//   return (
//     <Box sx={containerStyles} ref={ref}>
//       <Slider
//         {...sliderSettings}
//         beforeChange={(_oldIndex, newIndex) => {
//           setCurrentIndex(newIndex);
//           animateZoomEffect(newIndex);
//         }}
//       >
//         {slides.map((slide: Slide, index: number) => (
//           <Box key={slide.id} className={`slide-${index}`} sx={slideStyles}>
//             <Box
//               className="slide-bg"
//               sx={{ ...backgroundStyles, backgroundImage: `url(${slide.image})` }}
//             />
//             <Box sx={overlayStyles} />
//             <SlideContent slide={slide} index={index} currentIndex={currentIndex} />
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default HeroBanner;




import { useCallback, useEffect, useState, memo } from "react";
import Slider from "react-slick";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typical from "react-typical";
import CircleModel from "../../components/CircleModel/CircleModel";
import slides from "../../assets/data/slides";

interface Slide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  route?: string | null; // Added route property
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  fade: true,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  customPaging: () => (
    <Box
      sx={{
        width: { xs: 6, md: 8 },
        height: { xs: 6, md: 8 },
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.5)",
        transition: "all 0.3s ease",
        "&:hover": { background: "#fff", transform: "scale(1.2)" },
      }}
    />
  ),
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerStyles = {
  height: "100vh",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  color: "#fff",
  background: "linear-gradient(135deg, #0a0f2d 0%, #1a2467 100%)",
} as const;

const slideStyles = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  textAlign: { xs: "center", md: "left" },
  px: { xs: "3%", sm: "4%", md: "3%" },
  position: "relative",
  pt: { xs: "80px", sm: "100px", md: "20px" },
} as const;

const backgroundStyles = {
  position: "absolute",
  inset: 0,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transformOrigin: "center",
  zIndex: -1,
  filter: "brightness(0.9)",
  willChange: "transform",
} as const;

const overlayStyles = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(45deg, rgba(0, 10, 30, 0.9) 0%, rgba(1, 1, 1, 0.0) 100%)",
  zIndex: -1,
  opacity: 0.85,
} as const;

const buttonStyles = {
  mt: { xs: 2, sm: 2.5, md: 3 },
  px: { xs: 3, sm: 3.5, md: 4 },
  py: { xs: 0.8, sm: 1, md: 1.2 },
  fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
  fontWeight: 600,
  background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
  borderRadius: "50px",
  boxShadow: "0 6px 15px rgba(59, 130, 246, 0.4)",
  textTransform: "uppercase",
  letterSpacing: 1,
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(90deg, #60a5fa, #93c5fd)",
    transform: "translateY(-2px)",
    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.6)",
  },
} as const;

const SlideContent: React.FC<{ slide: Slide; index: number; currentIndex: number }> = memo(
  ({ slide, index, currentIndex }) => {
    // Determine if the route is external (starts with http:// or https://)
    const isExternal = slide.route && slide.route.startsWith("http");

    return (
      <Grid
        container
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1400px",
          mx: "auto",
          paddingTop: { xs: "60px", sm: "80px", md: "40px" },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            marginTop: { xs: "0%", sm: "2%", md: "8%" },
            paddingLeft: { xs: "3%", sm: "4%", md: 3 },
            paddingRight: { xs: "3%", sm: "4%", md: 3 },
            marginLeft: { xs: "0px", md: "-30px", lg: "-20px" },
            maxWidth: { xs: "100%", md: "700px" },
          }}
        >
          <motion.div variants={textVariants} initial="hidden" animate="visible">
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#fff",
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2.2rem" },
                background: "linear-gradient(45deg, #fff, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 2px 8px rgba(255, 255, 255, 0.3)",
                whiteSpace: "normal",
                wordBreak: "break-word",
                maxWidth: "100%",
              }}
            >
              <Typical
                key={currentIndex}
                steps={[slide.title, 2000]}
                wrapper="span"
                style={{ display: "inline-block", whiteSpace: "normal" }}
              />
            </Typography>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <Typography
              variant="h6"
              sx={{
                mt: { xs: 1, sm: 1.2, md: 1.5 },
                fontWeight: 300,
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: { xs: "0.8rem", sm: "1rem", md: "1.5rem" },
                lineHeight: 1.5,
                textShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
                whiteSpace: "normal",
                wordBreak: "break-word",
                maxWidth: "100%",
              }}
            >
              {slide.subtitle}
            </Typography>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <Typography
              variant="body1"
              sx={{
                mt: { xs: 1.5, sm: 1.8, md: 2 },
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.85)",
                fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1.1rem" },
                whiteSpace: "normal",
                wordBreak: "break-word",
                maxWidth: "100%",
              }}
            >
              {slide.description}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {slide.route ? (
              isExternal ? (
                <Button
                  component="a"
                  href={slide.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={buttonStyles}
                >
                  {slide.buttonText}
                </Button>
              ) : (
                <Button
                  component={Link}
                  to={slide.route}
                  variant="contained"
                  sx={buttonStyles}
                >
                  {slide.buttonText}
                </Button>
              )
            ) : (
              <Button variant="contained" sx={buttonStyles}>
                {slide.buttonText}
              </Button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Box
              component="div"
              sx={{
                fontFamily: '"Kanit", Roboto, Arial, sans-serif',
                fontSize: { xs: "80px", sm: "100px", md: "150px" },
                fontWeight: "500",
                textTransform: "uppercase",
                lineHeight: "1",
                background: "transparent",
                WebkitTextFillColor: "transparent",
                WebkitTextStroke: {
                  xs: "0.5px rgba(255, 255, 255, 0.20)",
                  md: "1px rgba(255, 255, 255, 0.20)",
                },
                margin: { xs: "-0.05em 0", md: "-0.1em 0 -0.10em 0" },
                display: "block",
                color: "#ffffff",
              }}
            >
              UIPS
            </Box>
          </motion.div>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent={{ xs: "flex-end", sm: "flex-end", md: "center" }}
          alignItems="center"
          sx={{
            paddingRight: { xs: "3%", sm: "4%", md: 2 },
            paddingLeft: { xs: "150px", sm: "4%", md: 2 },
            marginTop: { xs: "-90px", sm: "30px", md: "0px" },
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", sm: "70%", md: "100%" },
              height: { xs: "auto", md: "450px" },
              maxWidth: { xs: "700px", sm: "300px", md: "450px" },
              aspectRatio: "1 / 1",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <CircleModel />
            </motion.div>
          </Box>
        </Grid>
      </Grid>
    );
  }
);

const HeroBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const animateZoomEffect = useCallback(
    (newIndex: number) => {
      if (!inView) return;
      gsap.killTweensOf(`.slide-${newIndex} .slide-bg`);
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
    },
    [inView]
  );

  useEffect(() => {
    if (inView) animateZoomEffect(currentIndex);
  }, [currentIndex, inView, animateZoomEffect]);

  return (
    <Box sx={containerStyles} ref={ref}>
      <Slider
        {...sliderSettings}
        beforeChange={(_oldIndex, newIndex) => {
          setCurrentIndex(newIndex);
          animateZoomEffect(newIndex);
        }}
      >
        {slides.map((slide: Slide, index: number) => (
          <Box key={slide.id} className={`slide-${index}`} sx={slideStyles}>
            <Box
              className="slide-bg"
              sx={{ ...backgroundStyles, backgroundImage: `url(${slide.image})` }}
            />
            <Box sx={overlayStyles} />
            <SlideContent slide={slide} index={index} currentIndex={currentIndex} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroBanner;