import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { gsap } from "gsap";
import { styled } from "@mui/material/styles";
import { Box, Typography, Rating, useTheme, useMediaQuery } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { testimonialpics } from "../../assets";

// Styled components using @mui with dark blue background and white text
const TestimonialContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "50px",
  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", // Dark blue gradient
  minHeight: "400px",
  // Responsive adjustments
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    padding: "30px",
  },
}));

const TestimonialContent = styled(Box)(({ theme }) => ({
  maxWidth: "50%",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const TestimonialTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#ffffff", // White text
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const TestimonialText = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  lineHeight: "1.6",
  marginBottom: "20px",
  color: "#ffffff", // White text
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const ReviewerName = styled(Typography)({
  fontSize: "1.1rem",
  fontWeight: "bold",
  marginTop: "10px",
  color: "#ffffff", // White text
});

const ReviewerSource = styled(Typography)({
  fontSize: "0.9rem",
  color: "#e2e8f0", // Light gray for subtle contrast
});

// Updated TestimonialImage with border radius and shadow
const TestimonialImage = styled("img")(({ theme }) => ({
  maxWidth: "40%",
  height: "auto",
  borderRadius: "12px", // Added border radius
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)", // Added shadow
  [theme.breakpoints.down("md")]: {
    maxWidth: "80%",
    marginTop: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

// Dummy testimonial data
const testimonials = [
  {
    id: 1,
    text: "I was referred to UIPS by a colleague, and I'm so grateful for the recommendation. Their team's professionalism and expertise made the process smooth and efficient. They understood my requirements and delivered beyond my expectations. Highly recommended!",
    name: "Abdul Rahman",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 2,
    text: "UIPS exceeded my expectations! The team was incredibly supportive and guided me through every step of the project. Their industrial solutions are top-notch, and their market expertise is impressive.",
    name: "Fatima Al-Mutairi",
    source: "Google Review",
    rating: 5,
  },
  {
    id: 3,
    text: "Working with UIPS was a fantastic experience. They were patient, understanding, and truly dedicated to providing the best industrial solutions. I highly recommend their services to anyone in the sector!",
    name: "Omar Bin Khalid",
    source: "Google Review",
    rating: 4.5,
  },
];

const Testimonial: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // GSAP animation for the testimonial content
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    dotsClass: "slick-dots custom-dots", // Custom class for dots styling
  };

  return (
    <Box sx={{ padding: { xs: 2, sm: 3, md: 4 }, backgroundColor: "#0f172a" }}>
      <TestimonialContainer>
        {/* Left Side: Testimonial Content with Slider */}
        <TestimonialContent ref={contentRef}>
          <TestimonialTitle>What Our Clients Say</TestimonialTitle>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <Box key={testimonial.id}>
                <TestimonialText>{testimonial.text}</TestimonialText>
                <Rating
                  value={testimonial.rating}
                  readOnly
                  precision={0.5}
                  sx={{ color: "#FFD700" }} // Golden stars
                />
                <ReviewerName>{testimonial.name}</ReviewerName>
                <ReviewerSource>{testimonial.source}</ReviewerSource>
              </Box>
            ))}
          </Slider>
        </TestimonialContent>

        {/* Right Side: Static Image */}
        <TestimonialImage
          src={testimonialpics.testimonial01}
          alt="Testimonial Illustration"
        />
      </TestimonialContainer>

      {/* Custom CSS for slick dots */}
      <style>
        {`
          .custom-dots li button:before {
            color: #ffffff !important; /* White dots */
            opacity: 0.5;
          }
          .custom-dots li.slick-active button:before {
            opacity: 1;
            color: #ffffff !important;
          }
        `}
      </style>
    </Box>
  );
};

export default Testimonial;