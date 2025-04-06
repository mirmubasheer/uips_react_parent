// import React, { useRef, useEffect } from "react";
// import { Box, Typography, Grid } from "@mui/material";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { AboutSectionImages } from "../../assets";

// const AboutUs: React.FC = () => {
//   const imageRef = useRef<HTMLDivElement | null>(null); // Reference for image container
//   const shineRef = useRef<HTMLDivElement | null>(null); // Reference for the shine effect

//   // GSAP Shine Effect on Hover
//   useEffect(() => {
//     // Ensure both references are available
//     if (imageRef.current && shineRef.current) {
//       const shineEffect = gsap.timeline({ paused: true });

//       shineEffect.fromTo(
//         shineRef.current,
//         { left: "-100%" }, // Start position (outside of container)
//         {
//           left: "100%", // End position (move to the right)
//           duration: 0.6,
//           ease: "power2.out",
//         }
//       );

//       // Trigger the animation when hovering over the image
//       const handleMouseEnter = () => {
//         shineEffect.restart(); // Restart the animation every time the mouse enters
//       };

//       // Reverse the animation when the mouse leaves
//       const handleMouseLeave = () => {
//         shineEffect.reverse(); // Reverse the animation when the mouse leaves
//       };

//       // Attach events to image container
//       const imageElement = imageRef.current;
//       imageElement.addEventListener("mouseenter", handleMouseEnter);
//       imageElement.addEventListener("mouseleave", handleMouseLeave);

//       // Cleanup on component unmount
//       return () => {
//         imageElement.removeEventListener("mouseenter", handleMouseEnter);
//         imageElement.removeEventListener("mouseleave", handleMouseLeave);
//       };
//     }
//   }, []);

//   return (
//     <Box
//       sx={{
//         padding: "100px 0",
//         backgroundColor: "#f3f4f6",
//         px: { xs: 2, sm: 4, md: 6, lg: 8 },
//       }}
//     >
//       <Grid container spacing={4} justifyContent="center">
//         {/* Left Column: Content */}
//         <Grid item xs={12} md={6}>
//           <Box sx={{ textAlign: "left", padding: "20px", position: "relative" }}>
//             <Typography
//               variant="h3"
//               sx={{
//                 fontWeight: "bold",
//                 color: "#25358d",
//                 marginBottom: "20px",
//                 fontSize: "2.5rem",
//                 letterSpacing: "1px",
//               }}
//             >
//               About Us
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 color: "#1a2467",
//                 lineHeight: "1.8",
//                 fontSize: "1.1rem",
//                 marginBottom: "20px",
//               }}
//             >
//               We are a leading industrial company based in Saudi Arabia, offering
//               innovative solutions for the construction and manufacturing sectors. Our
//               mission is to provide cutting-edge technology to enhance the industrial
//               landscape.
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 color: "#1a2467",
//                 lineHeight: "1.8",
//                 fontSize: "1.1rem",
//                 marginBottom: "20px",
//               }}
//             >
//               With decades of experience, we pride ourselves on our commitment to
//               quality, sustainability, and efficiency. Our team of experts works tirelessly
//               to deliver excellence in every project we undertake.
//             </Typography>
//           </Box>
//         </Grid>

//         {/* Right Column: Image with GSAP Shine Effect */}
//         <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             style={{
//               position: "relative",
//               overflow: "hidden",
//               borderRadius: "20px 20px 20px 20px",
//               width: "100%",
//               maxWidth: "450px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 1.0)", // Add box shadow here
//             }}
            
//             ref={imageRef} // Reference to image container
//           >
//             <Box
//               sx={{
//                 width: "100%",
//                 height: "350px", // Set height for the image container
//                 backgroundImage: `url(${AboutSectionImages.About01})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 borderRadius: "20px 0 20px 20px",
//                 position: "relative",
//                 transition: "transform 0.3s ease",
//               }}
//             >
//               {/* Shine Layer */}
//               <Box
//                 ref={shineRef}
//                 sx={{
//                   content: '""',
//                   position: "absolute",
//                   top: 0,
//                   left: "-100%", // Start from outside of the container
//                   width: "100%",
//                   height: "100%",
//                   background:
//                     "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
//                   transform: "translateX(-100%)",
//                   transition: "transform 0.6s ease",
//                 }}
//                 className="shine"
//               />
//             </Box>
//           </motion.div>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default AboutUs;



// AboutUs.tsx
import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import data from "../../assets/data/About.json"; // Import JSON data
import { AboutSectionImages } from "../../assets/"; // Import images

gsap.registerPlugin(ScrollTrigger);

type SectionType = {
  title: string;
  image: keyof typeof AboutSectionImages;
  content: string[];
};

const generateBackgroundColor = (index: number, total: number) => {
  // Dark blue shade gradient: from deep navy to lighter navy
  const baseHue = 220; // Blue hue
  const saturation = 70; // Strong saturation for richness
  const lightnessStart = 15; // Dark base
  const lightnessEnd = 35; // Lighter end
  const lightness = lightnessStart + (index / (total - 1)) * (lightnessEnd - lightnessStart);
  return `linear-gradient(135deg, hsl(${baseHue}, ${saturation}%, ${lightnessStart}%) 0%, hsl(${baseHue}, ${saturation}%, ${lightness}%) 100%)`;
};

const AboutUs: React.FC = () => {
  const [sections, setSections] = useState<SectionType[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check for mobile screen

  useEffect(() => {
    setSections(data);
  }, []);

  useEffect(() => {
    if (!isMobile && containerRef.current && scrollContainerRef.current && sections.length > 1) {
      const totalWidth = sections.length * window.innerWidth;

      gsap.to(scrollContainerRef.current, {
        x: () => -totalWidth + window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: (progress) => {
              const snapPoints = sections.map((_, i) => i / (sections.length - 1));
              return snapPoints.reduce((prev, curr) =>
                Math.abs(curr - progress) < Math.abs(prev - progress) ? curr : prev
              );
            },
            duration: 0.6,
            delay: 0.1,
            ease: "power3.out",
          },
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [sections, isMobile]);

  return (
    <Box
      ref={containerRef}
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        background: '#0F172A', // Dark slate base for the container
      }}
    >
      <Box
        ref={scrollContainerRef}
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: isMobile ? "100%" : `${sections.length * 100}vw`,
          height: "100vh",
          scrollSnapType: isMobile ? "y mandatory" : "x mandatory",
          overflowX: isMobile ? "visible" : "auto",
          overflowY: isMobile ? "auto" : "hidden",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {sections.map((section, index) => (
          <Box
            key={index}
            sx={{
              flex: isMobile ? "0 0 auto" : "0 0 100vw",
              height: isMobile ? "auto" : "100vh",
              minHeight: isMobile ? "100vh" : "auto",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "center",
              alignItems: "center",
              background: generateBackgroundColor(index, sections.length), // Dynamic dark blue gradient
              scrollSnapAlign: isMobile ? "start" : "center",
              padding: isMobile ? "20px" : "0",
              borderRight: !isMobile && index < sections.length - 1 ? '1px solid rgba(59, 130, 246, 0.2)' : 'none', // Subtle divider
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                maxWidth: "1000px",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              {/* Left Side: Content */}
              <Box sx={{ flex: 1, pr: isMobile ? 0 : 4, mb: isMobile ? 3 : 0 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: '#A5B4FC', // Soft indigo for titles
                    fontSize: isMobile ? "24px" : "32px",
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)', // Subtle shadow
                  }}
                >
                  {section.title}
                </Typography>
                {section.content.map((paragraph, idx) => (
                  <Typography
                    key={idx}
                    variant="body1"
                    sx={{
                      mt: 2,
                      color: '#D1D5DB', // Light gray for content
                      fontSize: isMobile ? "14px" : "16px",
                      lineHeight: 1.6,
                    }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Box>

              {/* Right Side: Image (Responsive for Mobile) */}
              <Box
                sx={{
                  flex: 1,
                  width: isMobile ? "100%" : "400px",
                  height: isMobile ? "250px" : "300px",
                  display: "flex",
                  justifyContent: "center",
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', // Subtle image shadow
                }}
              >
                <img
                  src={AboutSectionImages[section.image]}
                  alt={section.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "15px",
                    filter: 'brightness(0.9) contrast(1.1)', // Enhance image slightly
                  }}
                />
              </Box>
            </motion.div>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AboutUs;
