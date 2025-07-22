// import React, { useRef, useEffect, useState, memo } from "react";
// import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useReducedMotion } from "framer-motion";
// import aboutData from "../../assets/data/About";
// import { AboutSectionImages } from "../../assets";

// type SectionType = {
//   title: string;
//   image: keyof typeof AboutSectionImages;
//   content: string[];
// };

// const generateBackgroundColor = (index: number, total: number) => {
//   const baseHue = 220; // Blue hue to match other components
//   const saturation = 20; // Match ClientBar saturation
//   const lightnessStart = 90; // Match ClientBar start lightness
//   const lightnessEnd = 95; // Match ClientBar end lightness
//   const lightness = lightnessStart + (index / (total - 1)) * (lightnessEnd - lightnessStart);
//   return `linear-gradient(135deg, hsl(${baseHue}, ${saturation}%, ${lightnessStart}%) 0%, hsl(${baseHue}, ${saturation}%, ${lightness}%) 100%)`;
// };

// const preloadImages = (images: string[], count: number) => {
//   images.slice(0, count).forEach((src) => {
//     const link = document.createElement("link");
//     link.rel = "preload";
//     link.as = "image";
//     link.href = src;
//     document.head.appendChild(link);
//   });
// };

// const AboutSection: React.FC<{ section: SectionType; index: number; total: number }> = memo(
//   ({ section, index, total }) => {
//     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
//     const shouldReduceMotion = useReducedMotion();
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//     const isReversed = index === 1; // Reverse layout for second section

//     return (
//       <Box
//         ref={ref}
//         sx={{
//           minHeight: { xs: "60vh", md: "70vh" },
//           width: "100%",
//           maxWidth: "100%",
//           boxSizing: "border-box",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           background: generateBackgroundColor(index, total),
//           padding: { xs: "12px 12px 8px", md: "30px" },
//           scrollSnapAlign: "start",
//           opacity: inView ? 1 : 0,
//           transition: shouldReduceMotion ? "none" : "opacity 0.5s ease",
//           overflowX: "hidden",
//         }}
//       >
//         {inView && (
//           <motion.div
//             whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
//             transition={{ duration: 0.3 }}
//             style={{
//               display: "flex",
//               flexDirection: isMobile ? "column" : isReversed ? "row-reverse" : "row",
//               alignItems: "center",
//               justifyContent: "space-between",
//               width: "100%",
//               maxWidth: isMobile ? "90vw" : "1000px",
//               textAlign: isMobile ? "center" : "left", // Always left-align text for desktop
//             }}
//           >
//             <Box
//               sx={{
//                 flex: 1,
//                 pr: isMobile ? 0 : isReversed ? 0 : 4,
//                 pl: isMobile ? 0 : isReversed ? 4 : 0,
//                 mb: isMobile ? 2 : 0,
//                 textAlign: "left", // Ensure text starts from left
//               }}
//             >
//               <Typography
//                 variant="h4"
//                 sx={{
//                   fontWeight: "bold",
//                   color: "#1e2a44",
//                   fontSize: { xs: "20px", md: "32px" },
//                   textShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
//                   wordBreak: "break-word",
//                   borderBottom: "3px solid #1e2a44",
//                   pb: 1,
//                   mb: 2,
//                   display: "inline-block",
//                 }}
//               >
//                 {section.title}
//               </Typography>
//               {section.content.map((paragraph, idx) => (
//                 <Typography
//                   key={idx}
//                   variant="body1"
//                   sx={{
//                     mt: 2,
//                     color: "#1e2a44",
//                     fontSize: { xs: "12px", md: "20px" },
//                     lineHeight: 1.6,
//                     wordBreak: "break-word",
//                     textAlign: "left", // Ensure content starts from left
//                   }}
//                 >
//                   {paragraph}
//                 </Typography>
//               ))}
//             </Box>
//             <Box
//               sx={{
//                 flex: 1,
//                 width: isMobile ? "80%" : "400px",
//                 maxWidth: "100%",
//                 height: isMobile ? "200px" : "300px",
//                 display: "flex",
//                 justifyContent: "center",
//                 boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
//                 margin: isMobile ? "0 auto" : "0",
//               }}
//             >
//               <img
//                 src={AboutSectionImages[section.image]}
//                 alt={section.title}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   borderRadius: "2px",
//                   filter: "brightness(0.9) contrast(1.1)",
//                 }}
//                 loading={index === 0 ? "eager" : "lazy"}
//               />
//             </Box>
//           </motion.div>
//         )}
//       </Box>
//     );
//   },
//   (prevProps, nextProps) =>
//     prevProps.section.title === nextProps.section.title &&
//     prevProps.index === nextProps.index &&
//     prevProps.total === nextProps.total
// );

// const AboutUs: React.FC = () => {
//   const [sections, setSections] = useState<SectionType[]>([]);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   useEffect(() => {
//     setSections(aboutData);
//     const imageKeys = aboutData.length > 0 ? [AboutSectionImages[aboutData[0].image]] : [];
//     preloadImages(imageKeys, 1);
//     return () => {
//       const links = document.querySelectorAll('link[rel="preload"][as="image"]');
//       links.forEach((link) => link.remove());
//     };
//   }, []);

//   return (
//     <Box
//       ref={containerRef}
//       sx={{
//         minHeight: "100vh",
//         width: "100%",
//         maxWidth: "100%",
//         background: `linear-gradient(to bottom, hsl(220, 20%, 90%) 0%, hsl(220, 20%, 95%))`, // Matched with ClientBar
//         display: "flex",
//         flexDirection: "column",
//         scrollSnapType: isMobile ? "y mandatory" : "y proximity",
//         overflowY: "auto",
//         overflowX: "hidden",
//         scrollbarWidth: "none",
//         "&::-webkit-scrollbar": {
//           display: "none",
//         },
//         position: "relative",
//         zIndex: 3,
//       }}
//     >
//       {sections.length > 0 ? (
//         sections.map((section, index) => (
//           <AboutSection
//             key={section.title}
//             section={section}
//             index={index}
//             total={sections.length}
//           />
//         ))
//       ) : (
//         <Box
//           sx={{
//             minHeight: "100vh",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             background: "hsl(220, 20%, 90%)",
//           }}
//         >
//           <Typography variant="h6" sx={{ color: "#1e2a44" }}>
//             No sections available
//           </Typography>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default memo(AboutUs);







import React, { useRef, useEffect, useState, memo } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "framer-motion";
import aboutData from "../../assets/data/About";
import { AboutSectionImages } from "../../assets";

type SectionType = {
  title: string;
  image: keyof typeof AboutSectionImages;
  content: string[];
};

const generateBackgroundColor = (index: number, total: number) => {
  const baseColor = "rgba(50, 65, 119, 0.1)"; // Slight layer of #324177
  return baseColor;
};

const preloadImages = (images: string[], count: number) => {
  images.slice(0, count).forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
};

const AboutSection: React.FC<{ section: SectionType; index: number; total: number }> = memo(
  ({ section, index, total }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const shouldReduceMotion = useReducedMotion();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isReversed = index === 1; // Reverse layout for second section

    return (
      <Box
        ref={ref}
        sx={{
          minHeight: { xs: "60vh", md: "70vh" },
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: generateBackgroundColor(index, total),
          padding: { xs: "12px 12px 8px", md: "30px" },
          scrollSnapAlign: "start",
          opacity: inView ? 1 : 0,
          transition: shouldReduceMotion ? "none" : "opacity 0.5s ease",
          overflowX: "hidden",
        }}
      >
        {inView && (
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : isReversed ? "row-reverse" : "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: isMobile ? "90vw" : "1000px",
              textAlign: isMobile ? "center" : "left", // Always left-align text for desktop
            }}
          >
            <Box
              sx={{
                flex: 1,
                pr: isMobile ? 0 : isReversed ? 0 : 4,
                pl: isMobile ? 0 : isReversed ? 4 : 0,
                mb: isMobile ? 2 : 0,
                textAlign: "left", // Ensure text starts from left
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#ffffff", // Changed to white
                  fontSize: { xs: "20px", md: "32px" },
                  textShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
                  wordBreak: "break-word",
                  borderBottom: "3px solid #ffffff", // Changed border to white for consistency
                  pb: 1,
                  mb: 2,
                  display: "inline-block",
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
                    color: "#ffffff", // Changed to white
                    fontSize: { xs: "12px", md: "20px" },
                    lineHeight: 1.6,
                    wordBreak: "break-word",
                    textAlign: "left", // Ensure content starts from left
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                flex: 1,
                width: isMobile ? "80%" : "400px",
                maxWidth: "100%",
                height: isMobile ? "200px" : "300px",
                display: "flex",
                justifyContent: "center",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                margin: isMobile ? "0 auto" : "0",
              }}
            >
              <img
                src={AboutSectionImages[section.image]}
                alt={section.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "2px",
                  filter: "brightness(0.9) contrast(1.1)",
                }}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </Box>
          </motion.div>
        )}
      </Box>
    );
  },
  (prevProps, nextProps) =>
    prevProps.section.title === nextProps.section.title &&
    prevProps.index === nextProps.index &&
    prevProps.total === nextProps.total
);

const AboutUs: React.FC = () => {
  const [sections, setSections] = useState<SectionType[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setSections(aboutData);
    const imageKeys = aboutData.length > 0 ? [AboutSectionImages[aboutData[0].image]] : [];
    preloadImages(imageKeys, 1);
    return () => {
      const links = document.querySelectorAll('link[rel="preload"][as="image"]');
      links.forEach((link) => link.remove());
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100%",
        background: "rgba(50, 65, 119, 0.8)", // Slight layer of #324177
        display: "flex",
        flexDirection: "column",
        scrollSnapType: isMobile ? "y mandatory" : "y proximity",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        position: "relative",
        zIndex: 3,
      }}
    >
      {sections.length > 0 ? (
        sections.map((section, index) => (
          <AboutSection
            key={section.title}
            section={section}
            index={index}
            total={sections.length}
          />
        ))
      ) : (
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(50, 65, 119, 0.1)", // Slight layer of #324177
          }}
        >
          <Typography variant="h6" sx={{ color: "#ffffff" }}> {/* Changed to white */}
            No sections available
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default memo(AboutUs);