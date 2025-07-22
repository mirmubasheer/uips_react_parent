import React, { useEffect } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from 'framer-motion';
import { certDetail } from '../../../assets/data/certDetailsData';
import { certification } from '../../../assets'; // Import certification object

// Preload image
const preloadImages = (src: string) => {
  console.log(`Preloading image: ${src}`);
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

const CertDetails: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const imageSrc = certification[certDetail.image]; // Resolve 'cer1' to actual image

  useEffect(() => {
    preloadImages(imageSrc);
    return () => {
      const links = document.querySelectorAll('link[rel="preload"][as="image"]');
      links.forEach((link) => link.remove());
    };
  }, [imageSrc]);

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // background: 'linear-gradient(135deg, hsl(220, 70%, 15%) 0%, hsl(220, 70%, 35%) 100%)',
        background: 'rgba(50, 65, 119, 0.2)',

        padding: { xs: '10px 10px 5px', md: '40px' },
        scrollSnapAlign: 'start',
        opacity: inView ? 1 : 0,
        transition: shouldReduceMotion ? 'none' : 'opacity 0.5s ease',
        overflowX: 'hidden',
      }}
    >
      {inView && (
        <motion.div
          whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
          transition={{ duration: 0.3 }}
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: isMobile ? '90vw' : '1000px',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <Box sx={{ flex: 1, pr: isMobile ? 0 : 4, mb: isMobile ? 2 : 0 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                // color: '#A5B4FC',
                color: '#1e2a44',
                fontSize: { xs: '20px', md: '32px' },
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
                wordBreak: 'break-word',
              }}
            >
              {certDetail.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                // color: '#D1D5DB',
                color: '#1e2a44',
                fontSize: { xs: '12px', md: '20px' },
                lineHeight: 1.6,
                wordBreak: 'break-word',
              }}
            >
              {certDetail.content}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              width: isMobile ? '80%' : '400px',
              maxWidth: '100%',
              height: isMobile ? '200px' : '300px',
              display: 'flex',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
              margin: isMobile ? '0 auto' : '0',
            }}
          >
            <img
              src={imageSrc}
              alt={certDetail.imageAlt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '15px',
                filter: 'brightness(0.9) contrast(1.1)',
              }}
              loading="eager"
              onLoad={() => console.log(`Image loaded successfully: ${imageSrc}`)}
              onError={() => console.log(`Image failed to load: ${imageSrc}`)}
            />
          </Box>
        </motion.div>
      )}
    </Box>
  );
};

export default CertDetails;