import React, { useLayoutEffect, useRef, useMemo } from 'react';
import { Box, Typography, Grid, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { gsap } from 'gsap';
import { wq } from '../../assets';

const SectionContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #ffffff 0%, #f5f6fa 100%)',
  width: '100%',
  overflowX: 'hidden',
  color: '#1e2a44',
  boxSizing: 'border-box',
  padding: theme.spacing(4, 2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8, 4),
  },
}));

const FullSection = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  willChange: 'opacity, transform',
  marginBottom: theme.spacing(16),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    marginBottom: theme.spacing(6),
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  maxWidth: 600,
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: '100%',
  height: 300,
  borderRadius: '16px',
  objectFit: 'cover',
  [theme.breakpoints.up('sm')]: {
    maxWidth: 500,
  },
  [theme.breakpoints.down('sm')]: {
    height: 200,
    marginTop: theme.spacing(2),
  },
}));

const WhatWeDo: React.FC = React.memo(() => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const whatWeDoContentRef = useRef<HTMLDivElement>(null);
  const whatWeDoImageRef = useRef<HTMLDivElement>(null);
  const qualityContentRef = useRef<HTMLDivElement>(null);
  const qualityImageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.from([whatWeDoContentRef.current, qualityContentRef.current], {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.out',
      });

      gsap.from([whatWeDoImageRef.current, qualityImageRef.current], {
        opacity: 0,
        x: 50,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderWhatWeDoText = useMemo(() => (
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
        lineHeight: 1.8,
        color: '#1e2a44',
        textAlign: { xs: 'center', sm: 'justify', md:'justify' },
      }}
    >
      At UIPS Co., we specialize in delivering end-to-end Utilities and Industrial Power Solutions tailored to complex industrial needs. Our core services encompass Civil and Steel Structure works, Mechanical Works, Electrical and Instrumentation systems, Piping works, and comprehensive Maintenance services. We support a wide range of sectors including Energy, Oil & Gas, Water, Infrastructure and Manufacturing, ensuring reliable performance, Safety and Operational Excellence across every project.
    </Typography>
  ), []);

  const renderQualityText = useMemo(() => (
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
        lineHeight: 1.8,
        color: '#1e2a44',
        textAlign: { xs: 'center', sm: 'justify',  md:'justify' },
      }}
    >
      UIPS considers satisfying client requirements and achieving the prime project objectives as an essential quality issue. We operate a total quality management system, fully supported by the management and staff.
    </Typography>
  ), []);

  return (
    <SectionContainer ref={sectionRef}>
      {/* What We Do Section */}
      <FullSection container spacing={4}>
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <ContentBox ref={whatWeDoContentRef}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
                color: '#1e2a44',
              }}
            >
              What We Do?
            </Typography>
            {renderWhatWeDoText}
          </ContentBox>
        </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <StyledCardMedia
            ref={whatWeDoImageRef}
            component="img"
            image={wq.w1}
            alt="Power Distribution System"
          />
        </Grid>
      </FullSection>

      {/* Quality Section */}
      <FullSection container spacing={4}>
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <StyledCardMedia
            ref={qualityImageRef}
            component="img"
            image={wq.q1}
            alt="Quality Assurance"
          />
        </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <ContentBox ref={qualityContentRef}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
                color: '#1e2a44',
              }}
            >
              Quality
            </Typography>
            {renderQualityText}
          </ContentBox>
        </Grid>
      </FullSection>
    </SectionContainer>
  );
});

export default WhatWeDo;
