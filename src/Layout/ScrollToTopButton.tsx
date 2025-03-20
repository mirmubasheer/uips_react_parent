// ScrollToTopButton.tsx
import React, { useState, useEffect } from 'react';
import { Box, IconButton, CircularProgress, useMediaQuery } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollProgress(scrolled);

    // Show button after scrolling down 100px
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 30,
        zIndex: 1000,
        borderRadius: '50%',
        width: isSmallScreen ? 38 : 50,
        height: isSmallScreen ? 38 : 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'white',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        border: '2px solid #30779d',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(-10px)' : 'translateY(50px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      <CircularProgress
        variant="determinate"
        value={scrollProgress}
        size={isSmallScreen ? 38 : 50}
        thickness={3}
        sx={{
          color: '#30779d',
          position: 'absolute',
        }}
      />
      <IconButton
        onClick={scrollToTop}
        sx={{
          color: '#30779d',
          bgcolor: 'white',
          borderRadius: '50%',
          zIndex: 2,
          '&:hover': {
            bgcolor: 'rgba(48, 119, 157, 0.1)',
          },
        }}
      >
        <ArrowUpwardIcon fontSize={isSmallScreen ? 'small' : 'medium'} />
      </IconButton>
    </Box>
  );
};

export default ScrollToTopButton;
