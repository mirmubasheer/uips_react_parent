import React, { useEffect, useRef } from 'react';
import { Box, Card, Typography, useTheme } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import divisionsData from '../../assets/data/Divisions.json';
import { Alldivisions } from '../../assets/';

gsap.registerPlugin(ScrollTrigger);

interface Division {
  title: string;
  description: string;
  image: string;
}

const imageMap = {
  electrical: Alldivisions.electrical,
  it: Alldivisions.it,
  civil: Alldivisions.civil,
  power: Alldivisions.power,
  plant: Alldivisions.plant,
  mechanical: Alldivisions.mechanical,
};

const Division: React.FC = () => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const divisions: Division[] = divisionsData;

  useEffect(() => {
    const cards = cardRefs.current;

    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
          }
        );
      }
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        py: 6,
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        minHeight: 'auto', // Changed from 100vh to auto for better responsiveness
        overflow: 'hidden',
      }}
    >
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
        Our Divisions
      </Typography>

      <Box
        sx={{
          maxWidth: { xs: '100%', sm: 900, md: 1100 }, // Adjusted maxWidth for responsiveness
          mx: 'auto',
          px: { xs: 2, sm: 3 }, // Responsive padding
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',           // 1 column on extra small screens
            sm: 'repeat(2, 1fr)', // 2 columns on small screens
            md: 'repeat(3, 1fr)', // 3 columns on medium and larger
          },
          gap: { xs: 2, sm: 3, md: 4 }, // Responsive gap
        }}
      >
        {divisions.map((division, index) => (
          <motion.div
            key={division.title}
            ref={(el) => (cardRefs.current[index] = el)}
            whileHover={{ y: -8 }} // Slightly reduced hover lift
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Card
              sx={{
                height: 300, // Reduced from 350px for a zoomed-out feel
                width: '100%', // Full width within grid cell
                maxWidth: 320, // Cap width for consistency
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                mx: 'auto', // Center card in grid cell
              }}
            >
              <Box
                sx={{
                  height: 150, // Reduced from 180px for smaller appearance
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={imageMap[division.image]}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  p: 2, // Reduced padding slightly
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 0.5, // Reduced margin
                    color: '#F1F5F9',
                    fontWeight: 500,
                    fontFamily: 'Roboto, Arial, sans-serif',
                    fontSize: { xs: '1rem', sm: '1.1rem' }, // Responsive title size
                  }}
                >
                  {division.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#CBD5E1',
                    lineHeight: 1.5,
                    fontSize: { xs: '0.8rem', sm: '0.9rem' }, // Responsive text size
                    fontFamily: 'Roboto, Arial, sans-serif',
                  }}
                >
                  {division.description}
                </Typography>
              </Box>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Division;