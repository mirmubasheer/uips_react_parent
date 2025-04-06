import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import upcomingData from "../../assets/data/upcoming.json";

interface CardData {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

const generateBackgroundColor = (index: number, total: number) => {
  const baseHue = 220; // Blue hue
  const saturation = 70; // Strong saturation for richness
  const lightnessStart = 15; // Dark base
  const lightnessEnd = 35; // Lighter end
  const lightness =
    total === 1
      ? lightnessStart
      : lightnessStart + (index / (total - 1)) * (lightnessEnd - lightnessStart);
  return `linear-gradient(135deg, hsl(${baseHue}, ${saturation}%, ${lightnessStart}%) 0%, hsl(${baseHue}, ${saturation}%, ${lightness}%) 100%)`;
};

const Upcoming: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % upcomingData.length);
        setFlipped(false);
      }, 600);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      gsap.set(cardRef.current, { transformStyle: "preserve-3d" });
    }
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotateX: flipped ? 180 : 0,
        duration: 0.6,
        ease: "power2.inOut",
      });
    }
  }, [flipped]);

  const { title, description, buttonText, imageUrl } = upcomingData[currentIndex];

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: generateBackgroundColor(0, 2), // Darker blue gradient for outer box
        padding: { xs: 2, md: 2 },
      }}
    >
      <Box
        width={{ xs: "100%", sm: 800, md: 1000 }}
        height={{ xs: 400, sm: 450 }}
        sx={{ perspective: 1000, maxWidth: "100%" }}
      >
        <Typography
            variant="h4"
            sx={{
            textAlign: "center",
            fontWeight: 600,
            background: "linear-gradient(to right, #94a3b8, #e2e8f0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2, // Reduced margin
            }}
        >
            Our Recent Projects
        </Typography>
        <Box
          ref={cardRef}
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformOrigin: "center",
            transition: "transform 0.6s",
          }}
        >
         <Card
        sx={{
            width:  { xs: "100%", sm: "50%", md:"100%" },
            height:{ xs: "100%", sm: "50%", md:"80%" },
            position: "absolute",
            backfaceVisibility: "hidden",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            borderRadius: 3,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            background: generateBackgroundColor(1, 2), // Lighter blue gradient for card
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: { xs: "2%", sm: "5%", md: "1%"},
        }}
        >

            {/* Left Side - Image */}
            <Box
              sx={{
                width: { xs: "100%", sm: "40%" },
                height: { xs: "50%", sm: "100%" },
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3))",
                },
              }}
            >
              <img
                src={imageUrl}
                alt={title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />
            </Box>

            {/* Right Side - Content */}
            <CardContent
              sx={{
                width: { xs: "100%", sm: "60%" },
                textAlign: "left",
                padding: { xs: 2, sm: 3 },
                color: "#ffffff",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  background: "linear-gradient(to right, #ffffff, #dbeafe)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                mt={1}
                sx={{
                  color: "#dbeafe",
                  opacity: 0.9,
                  lineHeight: 1.6,
                }}
              >
                {description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  background: "linear-gradient(45deg, #3b82f6 0%, #60a5fa 100%)",
                  color: "white",
                  padding: "8px 20px",
                  borderRadius: 2,
                  boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(59, 130, 246, 0.5)",
                    background: "linear-gradient(45deg, #2563eb 0%, #3b82f6 100%)",
                  },
                }}
                endIcon={<ArrowForward />}
              >
                {buttonText}
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Upcoming;