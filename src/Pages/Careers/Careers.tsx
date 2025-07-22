import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Grid, IconButton, Stack } from '@mui/material';
import { ViewList, ViewModule } from '@mui/icons-material';
import gsap from 'gsap';
import JobCard from './Components/JobCard';
import ListViewJobCard from './Components/ListViewJobCard';
import CareerForm from './Components/CareerForm';
import PaginationControls from '../../components/Pagination/PaginationControls';
import { jobs, Job } from '../../assets/data/jobs';

const JOBS_PER_PAGE = 7;

const Careers: React.FC = () => {
  const jobsRef = useRef<HTMLDivElement | null>(null);
  const [view, setView] = useState<'list' | 'grid'>('list');
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [page, setPage] = useState(1);

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
  }, [view, page]);

  const handleApplyClick = (role: string) => {
    setSelectedRole(role);
    const headingElement = document.getElementById('career-form-heading');
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    if (jobsRef.current) {
      jobsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const paginatedJobs = jobs.slice((page - 1) * JOBS_PER_PAGE, page * JOBS_PER_PAGE);
  const pageCount = Math.ceil(jobs.length / JOBS_PER_PAGE);

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        background: 'rgba(50, 65, 119, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box mb={{ xs: 6, sm: 8, md: 10 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'center' },
              justifyContent: { xs: 'center', md: 'space-between' },
              gap: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: { xs: 3, md: 4 },
                color: '#1e2a44',
                fontWeight: 600,
                fontFamily: '"Kanit", sans-serif',
                textAlign: 'center',
                position: 'relative',
                display: 'inline-block',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
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
            <Stack direction="row" spacing={1} sx={{ justifyContent: { xs: 'center', md: 'flex-end' } }}>
              <IconButton
                onClick={() => {
                  setView('grid');
                  setPage(1); // Reset to first page when switching to grid view
                }}
                sx={{
                  bgcolor: view === 'grid' ? '#324177' : 'transparent',
                  color: view === 'grid' ? '#f1f5f9' : '#1e2a44',
                  border: '1px solid #324177',
                  '&:hover': {
                    bgcolor: '#324177',
                    color: '#f1f5f9',
                  },
                }}
                aria-label="Grid View"
              >
                <ViewModule />
              </IconButton>
              <IconButton
                onClick={() => {
                  setView('list');
                  setPage(1); // Reset to first page when switching to list view
                }}
                sx={{
                  bgcolor: view === 'list' ? '#324177' : 'transparent',
                  color: view === 'list' ? '#f1f5f9' : '#1e2a44',
                  border: '1px solid #324177',
                  '&:hover': {
                    bgcolor: '#324177',
                    color: '#f1f5f9',
                  },
                }}
                aria-label="List View"
              >
                <ViewList />
              </IconButton>
            </Stack>
          </Box>
          {view === 'grid' ? (
            <Grid
              container
              spacing={{ xs: 2, sm: 3, md: 3 }}
              ref={jobsRef}
              sx={{ justifyContent: 'center' }}
            >
              {jobs.map((job: Job) => (
                <Grid item xs={12} sm={6} md={4} key={job.id}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: '300px' }}>
                    <JobCard job={job} onApplyClick={() => handleApplyClick(job.role)} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box>
              <Box ref={jobsRef} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {paginatedJobs.map((job: Job) => (
                  <ListViewJobCard key={job.id} job={job} onApplyClick={() => handleApplyClick(job.role)} />
                ))}
              </Box>
              <PaginationControls
                page={page}
                count={pageCount}
                onChange={handlePageChange}
              />
            </Box>
          )}
        </Box>

        <Box mt={{ xs: 6, sm: 8, md: 10 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography
              id="career-form-heading"
              variant="h4"
              sx={{
                mb: { xs: 3, md: 4 },
                color: '#1e2a44',
                fontWeight: 600,
                fontFamily: '"Kanit", sans-serif',
                textAlign: 'center',
                position: 'relative',
                display: 'inline-block',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
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
          <CareerForm selectedRole={selectedRole} />
        </Box>
      </Container>
    </Box>
  );
};

export default Careers;