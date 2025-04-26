import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Job {
  id: number;
  role: string;
  experience: string;
  field: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  status: 'Urgent' | 'Hiring';
}

interface JobCardProps {
  job: Job;
  onApplyClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onApplyClick }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: { xs: 2.5, sm: 3, md: 3.5 }, // Increased padding slightly
        borderRadius: '12px',
        background: 'linear-gradient(145deg, #0c1c3c 0%, #1e2a5c 100%)',

        height: { xs: '260px', md: '280px' }, // Fixed height for equal size (increased from 200/220px)
        display: 'flex', // Use flexbox to control layout
        flexDirection: 'column', // Stack content vertically
        justifyContent: 'space-between', // Space out content, pin button to bottom
        transition: { md: 'transform 0.3s, box-shadow 0.3s' },
        '&:hover': {
          transform: { md: 'translateY(-5px)' },
          boxShadow: { md: '0 8px 20px rgba(0, 0, 0, 0.3)' }, // Enhanced hover shadow
        },
        border: '1px solid rgba(59, 130, 246, 0.2)',
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            color: '#f1f5f9',
            fontWeight: 'medium',
            mb: 1,
            fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem' }, // Increased from 1/1.125/1.25rem
            fontFamily: '"Kanit", sans-serif',
          }}
        >
          {job.role}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#94a3b8',
            mb: 0.5,
            fontSize: { xs: '0.8125rem',sm: '0.999rem', md: '1rem' }, // Increased from 0.75/0.825/0.875rem
          }}
        >
          Experience: {job.experience}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#94a3b8',
            mb: 0.5,
            fontSize: { xs: '0.8125rem',sm: '0.999rem', md: '1rem' },
          }}
        >
          Field: {job.field}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#94a3b8',
            mb: 0.5,
            fontSize: { xs: '0.8125rem', sm: '0.999rem', md: '1rem' },
          }}
        >
          Type: {job.type}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: job.status === 'Urgent' ? '#f87171' : '#60a5fa',
            mb: 0,
            fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '0.9375rem' },
          }}
        >
          Status: {job.status}
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={onApplyClick}
        sx={{
          bgcolor: '#3b82f6',
          color: '#f1f5f9',
          textTransform: 'none',
          px: { xs: 2.5, md: 3.5 }, // Slightly larger padding
          py: { xs: 0.875, md: 1.125 }, // Slightly taller button
          fontSize: { xs: '0.9375rem', md: '1.0625rem' }, // Increased from 0.875/1rem
          borderRadius: '8px',
          width: { xs: '100%', sm: 'auto' },
          fontFamily: '"Roboto", sans-serif',
          alignSelf: 'flex-start', // Align button to start within flex
          mt: 2, // Space above button
          '&:hover': {
            bgcolor: '#2563eb',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
          },
        }}
      >
        Apply Now
      </Button>
    </Box>
  );
};

export default JobCard;