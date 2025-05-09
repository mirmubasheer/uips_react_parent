import React, { useEffect, useRef } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { gsap } from 'gsap';
import { policyData, PolicySection } from '../../assets/data/PolicyContent';

const Policy: React.FC = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const fullContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(introRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'power3.out',
      delay: 0.3,
    });

    gsap.from(fullContentRef.current?.querySelectorAll('h2, h3, p, li'), {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.6,
    });
  }, []);

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #0A1B2F, #1E2A44)',
        padding: '80px 0',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        {/* Intro Section */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box ref={introRef}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: '#fff',
                  mb: '24px',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: -5,
                    width: '100%',
                    height: 4,
                    borderRadius: 2,
                    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                  },
                }}
              >
                {policyData.sections[0]?.title}
              </Typography>
              {policyData.sections[0]?.content.map((paragraph, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  paragraph
                  sx={{ color: '#fff', lineHeight: 1.8 }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Image + Caption */}
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Box ref={imageRef}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'transparent',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                  transition: 'transform 0.3s ease',
                  margin: '0 auto',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <img
                  src={policyData.image.url}
                  alt={policyData.image.alt}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" sx={{ color: '#fff' }}>
                  Awarded By SADAF – SABIC
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Main Content */}
        <Box mt={8} ref={fullContentRef}>
          {policyData.sections.slice(1).map((section: PolicySection, index: number) => (
            <Box key={index} sx={{ mb: section.title ? 5 : 3 }}>
              {section.title && (
                <Typography variant="h3" gutterBottom fontWeight={700} sx={{ color: '#fff' }}>
                  {section.title}
                </Typography>
              )}
              {section.content.map((paragraph, pIndex) => (
                <Typography
                  key={pIndex}
                  variant="body1"
                  paragraph
                  sx={{ color: '#fff', lineHeight: 1.8 }}
                >
                  {paragraph}
                </Typography>
              ))}
              {section.list && (
                <Box
                  component={section.listType === 'ordered' ? 'ol' : 'ul'}
                  sx={{ pl: 4, mt: 2 }}
                >
                  {section.list.map((item, lIndex) => (
                    <Typography
                      key={lIndex}
                      variant="body1"
                      component="li"
                      sx={{ color: '#fff', lineHeight: 1.8 }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Policy;
