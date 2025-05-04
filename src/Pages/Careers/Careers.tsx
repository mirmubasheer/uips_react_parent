import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import gsap from 'gsap';
import JobCard from './Components/JobCard';
import CareerForm from './Components/CareerForm';
import { jobs, Job } from '../../assets/data/jobs'; // Updated path

const Careers: React.FC = () => {
  const jobsRef = useRef<HTMLDivElement | null>(null);

  // GSAP animation for jobs section
  useEffect(() => {
    if (jobsRef.current) {
      gsap.fromTo(
        jobsRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  const handleApplyClick = () => {
    const headingElement = document.getElementById('career-form-heading');
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(to bottom, #0F1A33, #1E2A44)',

        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Jobs Section */}
        <Box mb={{ xs: 8, md: 10 }}> {/* Reduced from mb={28} for better spacing */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                color: '#f1f5f9',
                fontWeight: 600,
                fontFamily: '"Kanit", sans-serif',
                textAlign: 'center',
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                  borderRadius: '2px',
                },
              }}
            >
              Join Our Team
            </Typography>
          </Box>
          <Grid container spacing={3} ref={jobsRef}>
            {jobs.map((job: Job) => (
              <Grid item xs={12} sm={6} md={4} key={job.id}>
                <JobCard job={job} onApplyClick={handleApplyClick} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Form Section */}
        <Box mt={8}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography
              id="career-form-heading"
              variant="h4"
              sx={{
                mb: 4,
                color: '#f1f5f9',
                fontWeight: 600,
                fontFamily: '"Kanit", sans-serif',
                textAlign: 'center',
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                  borderRadius: '2px',
                },
              }}
            >
              Submit Your Application
            </Typography>
          </Box>
          <CareerForm />
        </Box>
      </Container>
    </Box>
  );
};

export default Careers;