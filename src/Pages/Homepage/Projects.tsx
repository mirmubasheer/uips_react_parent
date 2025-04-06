import React, { useEffect, useRef } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectsData from '../../assets/data/Projects.json';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Styled components
const ProjectCard = styled(Card)(({ theme }) => ({
  maxWidth: '280px', // Reduced width for the card (previously wider due to Slider)
  height: '360px',
  background: 'linear-gradient(160deg, #1E2A44 0%, #2D3E66 100%)',
  borderRadius: '12px',
  overflow: 'hidden',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
  border: '1px solid rgba(59, 130, 246, 0.2)',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
    background: 'linear-gradient(160deg, #2D3E66 0%, #3B82F6 100%)',
  },
  margin: '0 8px', // Reduced margin for tighter spacing
  [theme.breakpoints.down('sm')]: {
    maxWidth: '240px', // Even smaller on mobile
  },
}));

const ProjectsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(to bottom, #0F1A33, #1E2A44)',
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
    zIndex: 0,
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: '#A5B4FC',
  marginBottom: theme.spacing(3),
  textTransform: 'uppercase',
  letterSpacing: '2px',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
}));

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const Projects: React.FC = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      sliderRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Increased to show more cards with smaller width
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true, // Enable center mode for better spacing
    centerPadding: '20px', // Add padding to the sides
    customPaging: () => (
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: '#A5B4FC',
          opacity: 0.6,
          transition: 'opacity 0.3s ease',
          '&.slick-active': { opacity: 1, background: '#3B82F6' },
        }}
      />
    ),
    dotsClass: 'slick-dots custom-dots',
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, centerPadding: '15px' },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: '10px' },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, centerPadding: '5px' },
      },
    ],
  };

  const handleCardClick = (slug: string) => {
    navigate(`/project/${slug}`);
  };

  const arrowVariants = {
    rest: { x: 0 },
    hover: { x: 6, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <ProjectsContainer>
        <Typography
           variant="h3"
           sx={{
             textAlign: 'center',
             mb: 4,
             fontWeight: 300,
             color: '#A3BFFA',
             textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)',
           }}
         >
           UIPS Major Projects
         </Typography>
      <Box ref={sliderRef} sx={{ px: 0, position: 'relative', zIndex: 1 }}>
        <Slider {...settings}>
          {projectsData.slice(0, 8).map((project: Project) => (
            <Box key={project.id} sx={{ py: 2 }}>
              <ProjectCard>
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    filter: 'brightness(0.9) contrast(1.1)',
                    transition: 'filter 0.3s ease',
                    '&:hover': { filter: 'brightness(1.05) contrast(1.15)' },
                  }}
                />
                <CardContent sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      color: '#E0E7FF',
                      fontWeight: 500,
                      fontFamily: '"Roboto", Arial, sans-serif',
                      letterSpacing: '0.3px',
                      fontSize: '1.1rem',
                      marginBottom: 0,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    style={{ alignSelf: 'flex-start', marginTop: '12px' }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleCardClick(project.slug)}
                      sx={{
                        marginTop: '50px',
                        background: 'linear-gradient(90deg, #3B82F6, #60A5FA)',
                        color: '#fff',
                        borderRadius: '20px',
                        textTransform: 'none',
                        fontSize: '0.85rem',
                        padding: '6px 20px',
                        boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
                        minWidth: '140px',
                        '&:hover': {
                          background: 'linear-gradient(90deg, #60A5FA, #93C5FD)',
                          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.5)',
                        },
                      }}
                      endIcon={
                        <motion.div variants={arrowVariants}>
                          <ArrowForwardIcon sx={{ fontSize: '1rem' }} />
                        </motion.div>
                      }
                    >
                      Details
                    </Button>
                  </motion.div>
                </CardContent>
              </ProjectCard>
            </Box>
          ))}
        </Slider>
      </Box>
      <style>{`
        .custom-dots li {
          margin: 0 4px;
        }
      `}</style>
    </ProjectsContainer>
  );
};

export default Projects;