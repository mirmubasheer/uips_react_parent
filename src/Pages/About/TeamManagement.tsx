import React, { useEffect, useRef } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import gsap from 'gsap';
import { management } from '../../assets/data/management'; // Import from local management.ts

const TeamManagement: React.FC = () => {
  const teamRef = useRef<HTMLDivElement | null>(null);

  // GSAP animation for fade-in and slight scale effect
  useEffect(() => {
    if (teamRef.current) {
      gsap.fromTo(
        teamRef.current.children,
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  // Array of management keys (m1 to m8)
  const teamKeys = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8'];

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 3, md: 4 },
        background: 'linear-gradient(180deg, #334155 0%, #475569 100%)',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 6,
          color: '#f1f5f9',
          position: 'relative',
          display: 'inline-block',
          fontWeight: 'bold',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
            borderRadius: '2px',
          },
        }}
      >
        Management
      </Typography>
      <Grid container spacing={4} ref={teamRef} justifyContent="center">
        {teamKeys.map((key, index) =>
          management[key] ? (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  bgcolor: '#1e293b',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s', // Only shadow changes on hover
                  '&:hover': {
                    boxShadow: { md: '0 8px 24px rgba(0, 0, 0, 0.3)' }, // Shadow effect only
                  },
                  border: '1px solid',
                  borderColor: '#475569',
                  width: '260px', // Fixed width
                  height: '360px', // Fixed height
                  mx: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '200px', // Fixed image height
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex', // Center the image
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: '#000', // Optional: background for empty space
                  }}
                >
                  <Box
                    component="img"
                    src={management[key].image}
                    alt={management[key].name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover', // Full image fits without cropping
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    p: 2,
                    height: '160px', // Fixed text area height (total height - image height)
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    overflow: 'hidden', // Handles long content
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#f1f5f9',
                      fontWeight: 'medium',
                      fontSize: '1.25rem',
                      mb: 1,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'wrap', // Prevents name from wrapping
                    }}
                  >
                    {management[key].name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#94a3b8',
                      fontStyle: 'italic',
                      fontSize: '0.875rem',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2, // Limits to 2 lines
                      WebkitBoxOrient: 'vertical', // Truncates long designations
                    }}
                  >
                    {management[key].designation}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ) : null
        )}
      </Grid>
    </Box>
  );
};

export default TeamManagement;