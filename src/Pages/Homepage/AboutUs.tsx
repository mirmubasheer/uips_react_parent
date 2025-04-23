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
  const baseHue = 220;
  const saturation = 70;
  const lightnessStart = 15;
  const lightnessEnd = 35;
  const lightness = lightnessStart + (index / (total - 1)) * (lightnessEnd - lightnessStart);
  return `linear-gradient(135deg, hsl(${baseHue}, ${saturation}%, ${lightnessStart}%) 0%, hsl(${baseHue}, ${saturation}%, ${lightness}%) 100%)`;
};

// Preload first image
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

    return (
      <Box
        ref={ref}
        sx={{
          minHeight: "100vh",
          width: "100%",
          maxWidth: "100%", // Prevent overflow
          boxSizing: "border-box", // Include padding in width
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: generateBackgroundColor(index, total),
          padding: { xs: "10px 10px 5px", md: "40px" }, // Reduced bottom padding for mobile
          scrollSnapAlign: "start",
          opacity: inView ? 1 : 0,
          transition: shouldReduceMotion ? "none" : "opacity 0.5s ease",
          overflowX: "hidden", // Prevent horizontal scroll
        }}
      >
        {inView && (
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: isMobile ? "90vw" : "1000px", // Responsive maxWidth
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <Box sx={{ flex: 1, pr: isMobile ? 0 : 4, mb: isMobile ? 2 : 0 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#A5B4FC",
                  fontSize: { xs: "20px", md: "32px" }, // Smaller font for mobile
                  textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",
                  wordBreak: "break-word", // Prevent text overflow
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
                    color: "#D1D5DB",
                    fontSize: { xs: "12px", md: "20px" }, // Smaller font for mobile
                    lineHeight: 1.6,
                    wordBreak: "break-word", // Prevent text overflow
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                flex: 1,
                width: isMobile ? "80%" : "400px", // Reduced image width for mobile
                maxWidth: "100%", // Prevent image overflow
                height: isMobile ? "200px" : "300px", // Slightly smaller height for mobile
                display: "flex",
                justifyContent: "center",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                margin: isMobile ? "0 auto" : "0", // Center image in mobile
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
    // Preload first image
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
        maxWidth: "100%", // Prevent overflow
        background: "#0F172A",
        display: "flex",
        flexDirection: "column",
        scrollSnapType: isMobile ? "y mandatory" : "y proximity",
        overflowY: "auto",
        overflowX: "hidden", // Prevent horizontal scroll
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        position: "relative",
        zIndex: 3, // Match HomePage zIndex
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
            background: "#0F172A",
          }}
        >
          <Typography variant="h6" sx={{ color: "#D1D5DB" }}>
            No sections available
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default memo(AboutUs);