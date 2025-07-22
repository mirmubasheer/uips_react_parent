// import React, { useEffect, useRef } from "react";
// import Slider from "react-slick";
// import { gsap } from "gsap";
// import { styled } from "@mui/material/styles";
// import { Box, Typography, Rating, useTheme, useMediaQuery } from "@mui/material";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { testimonialpics } from "../../assets";

// // Styled components using @mui with dark blue background and white text
// const TestimonialContainer = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "space-between",
//   alignItems: "center",
//   padding: "50px",
//   background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", // Dark blue gradient
//   minHeight: "400px",
//   // Responsive adjustments
//   [theme.breakpoints.down("md")]: {
//     flexDirection: "column",
//     textAlign: "center",
//     padding: "30px",
//   },
// }));

// const TestimonialContent = styled(Box)(({ theme }) => ({
//   maxWidth: "50%",
//   [theme.breakpoints.down("md")]: {
//     maxWidth: "100%",
//   },
// }));

// const TestimonialTitle = styled(Typography)(({ theme }) => ({
//   fontSize: "2.5rem",
//   fontWeight: "bold",
//   marginBottom: "20px",
//   color: "#ffffff", // White text
//   [theme.breakpoints.down("sm")]: {
//     fontSize: "2rem",
//   },
// }));

// const TestimonialText = styled(Typography)(({ theme }) => ({
//   fontSize: "1.2rem",
//   lineHeight: "1.6",
//   marginBottom: "20px",
//   color: "#ffffff", // White text
//   [theme.breakpoints.down("sm")]: {
//     fontSize: "1rem",
//   },
// }));

// const ReviewerName = styled(Typography)({
//   fontSize: "1.1rem",
//   fontWeight: "bold",
//   marginTop: "10px",
//   color: "#ffffff", // White text
// });

// const ReviewerSource = styled(Typography)({
//   fontSize: "0.9rem",
//   color: "#e2e8f0", // Light gray for subtle contrast
// });

// // Updated TestimonialImage with border radius and shadow
// const TestimonialImage = styled("img")(({ theme }) => ({
//   maxWidth: "40%",
//   height: "auto",
//   borderRadius: "12px", // Added border radius
//   boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)", // Added shadow
//   [theme.breakpoints.down("md")]: {
//     maxWidth: "80%",
//     marginTop: "20px",
//   },
//   [theme.breakpoints.down("sm")]: {
//     maxWidth: "100%",
//   },
// }));

// // Dummy testimonial data
// const testimonials = [
//   {
//     id: 1,
//     text: "I was referred to UIPS by a colleague, and I'm so grateful for the recommendation. Their team's professionalism and expertise made the process smooth and efficient. They understood my requirements and delivered beyond my expectations. Highly recommended!",
//     name: "Abdul Rahman",
//     source: "Google Review",
//     rating: 5,
//   },
//   {
//     id: 2,
//     text: "UIPS exceeded my expectations! The team was incredibly supportive and guided me through every step of the project. Their industrial solutions are top-notch, and their market expertise is impressive.",
//     name: "Fatima Al-Mutairi",
//     source: "Google Review",
//     rating: 5,
//   },
//   {
//     id: 3,
//     text: "Working with UIPS was a fantastic experience. They were patient, understanding, and truly dedicated to providing the best industrial solutions. I highly recommend their services to anyone in the sector!",
//     name: "Omar Bin Khalid",
//     source: "Google Review",
//     rating: 4.5,
//   },
// ];

// const Testimonial: React.FC = () => {
//   const contentRef = useRef<HTMLDivElement>(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   // GSAP animation for the testimonial content
//   useEffect(() => {
//     if (contentRef.current) {
//       gsap.fromTo(
//         contentRef.current,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//       );
//     }
//   }, []);

//   // Slider settings for react-slick
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: false,
//     fade: true,
//     dotsClass: "slick-dots custom-dots", // Custom class for dots styling
//   };

//   return (
//     <Box sx={{ padding: { xs: 2, sm: 3, md: 4 }, backgroundColor: "#0f172a" }}>
//       <TestimonialContainer>
//         {/* Left Side: Testimonial Content with Slider */}
//         <TestimonialContent ref={contentRef}>
//           <TestimonialTitle>What Our Clients Say</TestimonialTitle>
//           <Slider {...sliderSettings}>
//             {testimonials.map((testimonial) => (
//               <Box key={testimonial.id}>
//                 <TestimonialText>{testimonial.text}</TestimonialText>
//                 <Rating
//                   value={testimonial.rating}
//                   readOnly
//                   precision={0.5}
//                   sx={{ color: "#FFD700" }} // Golden stars
//                 />
//                 <ReviewerName>{testimonial.name}</ReviewerName>
//                 <ReviewerSource>{testimonial.source}</ReviewerSource>
//               </Box>
//             ))}
//           </Slider>
//         </TestimonialContent>

//         {/* Right Side: Static Image */}
//         <TestimonialImage
//           src={testimonialpics.testimonial01}
//           alt="Testimonial Illustration"
//         />
//       </TestimonialContainer>

//       {/* Custom CSS for slick dots */}
//       <style>
//         {`
//           .custom-dots li button:before {
//             color: #ffffff !important; /* White dots */
//             opacity: 0.5;
//           }
//           .custom-dots li.slick-active button:before {
//             opacity: 1;
//             color: #ffffff !important;
//           }
//         `}
//       </style>
//     </Box>
//   );
// };

// export default Testimonial;


// import React from 'react';
// import { Box, Container, Grid, Typography, Avatar } from '@mui/material';
// import { keyframes } from '@mui/material/styles';
// import Slider from 'react-slick';
// import StarIcon from '@mui/icons-material/Star';
// import { testimonialpics } from '../../assets';

// // Import slick carousel styles
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// // Define the bounce animation using MUI's keyframes
// const bounceAnimation = keyframes`
//   0%, 100% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-20px);
//   }
// `;

// // Star rating component
// interface StarRatingProps {
//   rating: number;
// }

// const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
//   return (
//     <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//       {[...Array(5)].map((_, index) => (
//         <StarIcon
//           key={index}
//           sx={{
//             color: index < rating ? '#3B82F6' : '#4B5EAA',
//           }}
//         />
//       ))}
//     </Box>
//   );
// };

// const Testimonial: React.FC = () => {
//   const largeImageSrc = testimonialpics.testimonial01;
//   const smallImageSrc = testimonialpics.testimonial02;

//   const testimonials = [
//     {
//       clientImageSrc: 'https://via.placeholder.com/60',
//       clientName: 'Alexan Micelito',
//       clientRole: 'Senior Manager',
//       testimonial:
//         "Home is where love resides, memories are created, and dreams are nurtured. I've found my sanctuary in this beautiful property.",
//       rating: 5,
//     },
//     {
//       clientImageSrc: 'https://via.placeholder.com/60',
//       clientName: 'Jane Doe',
//       clientRole: 'Marketing Specialist',
//       testimonial:
//         'The service I received was outstanding. The attention to detail made my home-buying experience truly exceptional!',
//       rating: 4,
//     },
//     {
//       clientImageSrc: 'https://via.placeholder.com/60',
//       clientName: 'John Smith',
//       clientRole: 'Entrepreneur',
//       testimonial:
//         'Fantastic property! I am impressed with the professionalism of the team and the quality of the homes.',
//       rating: 5,
//     },
//     {
//       clientImageSrc: 'https://via.placeholder.com/60',
//       clientName: 'Emily Johnson',
//       clientRole: 'Designer',
//       testimonial:
//         'The process was smooth, and the team made sure all my questions were answered. A great experience!',
//       rating: 4,
//     },
//   ];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     appendDots: (dots: React.ReactNode) => (
//       <Box
//         sx={{
//           bottom: '-40px',
//           '& li.slick-active button:before': {
//             color: '#3B82F6',
//           },
//           '& li button:before': {
//             color: '#A5B4FC',
//             fontSize: '12px',
//           },
//         }}
//       >
//         {dots}
//       </Box>
//     ),
//   };

//   return (
//     <Box
//       sx={{
//         px: { xs: 2, sm: 4, md: 6, lg: 8 },
//         py: 4,
//         bgcolor: 'transparent',
//         background: 'linear-gradient(to bottom, #0F1A33, #1E2A44)',
//         color: '#A3BFFA',
//       }}
//     >
//       <Container>
//         <Grid container spacing={4} alignItems="center">
//           {/* Left side - Testimonial slider */}
//           <Grid item xs={12} md={6}>
//             <Typography variant="h4" sx={{ mb: 2, mt: 20, color: '#A3BFFA' }}>
//               What Our Clients Say
//             </Typography>

//             <Box sx={{ overflow: 'hidden', height: '400px', textAlign: 'center', mt: 6, width: '700px' }}>
//               <Slider {...sliderSettings}>
//                 {testimonials.map((testimonial, index) => (
//                   <Box key={index} sx={{ px: 2, position: 'relative', overflow: 'hidden' }}>
//                     {/* Large decorative quote behind the text */}
//                     <Typography
//                       variant="h2"
//                       sx={{
//                         fontSize: '4rem',
//                         fontWeight: 'bold',
//                         color: 'rgba(59, 130, 246, 0.1)',
//                         position: 'absolute',
//                         top: '-30px',
//                         left: '-10px',
//                         zIndex: -1,
//                       }}
//                     >
//                       ”
//                     </Typography>

//                     <Typography
//                       sx={{
//                         width: '550px',
//                         fontSize: '0.5rem',
//                         mb: 2,
//                         zIndex: 1,
//                         whiteSpace: 'normal',
//                         overflow: 'hidden',
//                         textOverflow: 'ellipsis',
//                         display: '-webkit-box',
//                         WebkitBoxOrient: 'vertical',
//                         WebkitLineClamp: 3,
//                         color: '#A3BFFA',
//                       }}
//                     >
//                       {testimonial.testimonial}
//                     </Typography>

//                     {/* Star rating */}
//                     <StarRating rating={testimonial.rating} />

//                     {/* Client details */}
//                     <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
//                       <Avatar
//                         src={testimonial.clientImageSrc}
//                         alt={testimonial.clientName}
//                         sx={{ width: 50, height: 50, mr: 2, border: '2px solid #60A5FA' }}
//                       />
//                       <Box>
//                         <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#A3BFFA' }}>
//                           {testimonial.clientName}
//                         </Typography>
//                         <Typography variant="body2" sx={{ color: '#CBD5E1', fontSize: '0.8rem' }}>
//                           {testimonial.clientRole}
//                         </Typography>
//                       </Box>
//                     </Box>
//                   </Box>
//                 ))}
//               </Slider>
//             </Box>
//           </Grid>

//           {/* Right side - Images */}
//           <Grid item xs={12} md={5}>
//             <Box sx={{ position: 'relative' }}>
//               {/* Large image with polygon and shine effect */}
//               <Box
//                 sx={{
//                   mb: 6,
//                   position: 'relative',
//                   overflow: 'hidden',
//                   borderRadius: '20px 0 20px 20px',
//                   clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
//                   '&:hover .shine': {
//                     transform: 'translateX(100%)',
//                   },
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={largeImageSrc}
//                   alt="Property"
//                   sx={{
//                     width: '90%',
//                     height: '350px',
//                     display: 'block',
//                     borderRadius: '10px',
//                   }}
//                 />
//                 <Box
//                   className="shine"
//                   sx={{
//                     content: '""',
//                     position: 'absolute',
//                     top: 0,
//                     left: '-100%',
//                     width: '100%',
//                     height: '100%',
//                     background:
//                       'linear-gradient(120deg, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0.5) 50%, rgba(59, 130, 246, 0) 100%)',
//                     transform: 'translateX(-100%)',
//                     transition: 'transform 0.6s ease',
//                   }}
//                 />
//               </Box>

//               {/* Small image with polygon and shine effect */}
//               <Box
//                 sx={{
//                   width: '50%',
//                   position: 'absolute',
//                   bottom: -50,
//                   right: -30,
//                   borderRadius: '10px',
//                   animation: `${bounceAnimation} 2s infinite`,
//                   overflow: 'hidden',
//                   clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
//                   '&:hover .shine': {
//                     transform: 'translateX(100%)',
//                   },
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={smallImageSrc}
//                   alt="Interior"
//                   sx={{
//                     width: '100%',
//                     height: '200px',
//                     display: 'block',
//                     borderRadius: '10px',
//                   }}
//                 />
//                 <Box
//                   className="shine"
//                   sx={{
//                     content: '""',
//                     position: 'absolute',
//                     top: 0,
//                     left: '-100%',
//                     width: '100%',
//                     height: '100%',
//                     background:
//                       'linear-gradient(120deg, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0.5) 50%, rgba(59, 130, 246, 0) 100%)',
//                     transform: 'translateX(-100%)',
//                     transition: 'transform 0.6s ease',
//                   }}
//                 />
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Testimonial;

import React from 'react';
import { Box, Container, Grid, Typography, Avatar } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import Slider from 'react-slick';
import StarIcon from '@mui/icons-material/Star';
import { testimonialpics } from '../../assets';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Bounce animation
const bounceAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
    {[...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        sx={{
          color: index < rating ? '#FFD700' : 'white',
          fontSize: { xs: '18px', sm: '20px', md: '24px' },
        }}
      />
    ))}
  </Box>
);

const Testimonial: React.FC = () => {
  const largeImageSrc = testimonialpics.testimonial01;
  const smallImageSrc = testimonialpics.testimonial02;

  const testimonials = [
    { clientImageSrc: '', clientName: 'Syed Danish Hassan', testimonial: 'UIPS provided excellent industrial solutions! Very reliable team.', rating: 5 },
    { clientImageSrc: '', clientName: 'Mehboob Khan', testimonial: 'Great work by UIPS! Professional and efficient service.', rating: 5 },
    { clientImageSrc: '', clientName: 'Massarat Ali', testimonial: 'Amazing experience with UIPS! Top-quality support.', rating: 5 },
    { clientImageSrc: '', clientName: 'Sedawy Moha', testimonial: 'UIPS is the best! Fast and trustworthy service.', rating: 5 },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: React.ReactNode) => (
      <Box
        sx={{
          bottom: '-40px',
          '& li.slick-active button:before': { color: '#3B82F6' },
          '& li button:before': { color: '#A5B4FC', fontSize: '12px' },
        }}
      >
        {dots}
      </Box>
    ),
  };

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        py: { xs: 4, sm: 6, md: 8 },
        bgcolor: 'transparent',
       background: 'rgba(50, 65, 119, 0.8)',
        color: '#A3BFFA',
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left - Testimonial slider */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                mt: { xs: 4, md: 20 },
                color: 'white',
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              What Our Clients Say
            </Typography>

            <Box
              sx={{
                overflow: 'hidden',
                height: { xs: 'auto', md: '400px' },
                textAlign: 'center',
                mt: { xs: 4, md: 6 },
                width: { xs: '100%', md: '700px' },
              }}
            >
              <Slider {...sliderSettings}>
                {testimonials.map((testimonial, index) => (
                  <Box key={index} sx={{ px: 2, position: 'relative', overflow: 'hidden' }}>
                    {/* Decorative quote */}
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: '3rem', md: '4rem' },
                        fontWeight: 'bold',
                        color: 'rgba(59, 130, 246, 0.1)',
                        position: 'absolute',
                        top: '-30px',
                        left: '-10px',
                        zIndex: -1,
                      }}
                    >
                      ”
                    </Typography>

                    {/* Testimonial text */}
                    <Typography
                      sx={{
                        maxWidth: { xs: '100%', sm: '90%', md: '550px' },
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        mb: 2,
                        zIndex: 1,
                        whiteSpace: 'normal',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                        color: 'white',
                        mx: 'auto',
                      }}
                    >
                      {testimonial.testimonial}
                    </Typography>

                    <StarRating rating={testimonial.rating} />

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                      <Avatar
                        src={testimonial.clientImageSrc}
                        alt={testimonial.clientName}
                        sx={{
                          width: { xs: 40, sm: 50 },
                          height: { xs: 40, sm: 50 },
                          mr: 2,
                          border: '2px solid #324177',
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 'bold',
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                          color: 'white',
                        }}
                      >
                        {testimonial.clientName}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Grid>

          {/* Right - Images */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative', textAlign: { xs: 'center', md: 'right' } }}>
              {/* Large image */}
              <Box
                sx={{
                  mb: 6,
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '20px 0 20px 20px',
                  clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
                  mx: { xs: 'auto', md: 0 },
                  width: { xs: '100%', sm: '80%', md: '90%' },
                  '&:hover .shine': {
                    transform: 'translateX(100%)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={largeImageSrc}
                  alt="Property"
                  sx={{
                    width: '100%',
                    height: { xs: '250px', sm: '300px', md: '350px' },
                    display: 'block',
                    borderRadius: '10px',
                  }}
                />
                <Box
                  className="shine"
                  sx={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background:
                      'linear-gradient(120deg,  rgba(59, 130, 246, 0.4) 0%,  rgba(59, 130, 246, 0.4) 50%,  rgba(59, 130, 246, 0.4) 100%)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.6s ease',
                  }}
                />
              </Box>

              {/* Small image */}
              <Box
                sx={{
                  width: { xs: '60%', sm: '50%' },
                  position: 'absolute',
                  bottom: { xs: -30, sm: -40, md: -50 },
                  right: { xs: '20%', md: -30 },
                  borderRadius: '10px',
                  animation: `${bounceAnimation} 2s infinite`,
                  overflow: 'hidden',
                  clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
                  '&:hover .shine': {
                    transform: 'translateX(100%)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={smallImageSrc}
                  alt="Interior"
                  sx={{
                    width: '100%',
                    height: { xs: '150px', sm: '180px', md: '200px' },
                    display: 'block',
                    borderRadius: '10px',
                  }}
                />
                <Box
                  className="shine"
                  sx={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background:
                      'linear-gradient(120deg, rgba(59, 130, 246, 0) 0%,  rgba(59, 130, 246, 0.4) 50%, rgba(59, 130, 246, 0) 100%)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.6s ease',
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonial;
