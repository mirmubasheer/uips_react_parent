import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Job {
  id: number;
  role: string;
  experience: string;
  field: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  status: 'Urgent' | 'Hiring';
}

interface ListViewJobCardProps {
  job: Job;
  onApplyClick: () => void;
}

const ListViewJobCard: React.FC<ListViewJobCardProps> = ({ job, onApplyClick }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'flex-start', sm: 'center' },
        background: '#ffffff',
        border: '1px solid #cbd5e1',
        borderRadius: '8px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          transform: { sm: 'translateY(-4px)' },
          boxShadow: { sm: '0 6px 16px rgba(0, 0, 0, 0.15)' },
        },
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '2fr 1fr 1fr 1fr 1fr 1fr' },
          width: '100%',
          alignItems: 'center',
          gap: 0,
          flex: 1,
        }}
      >
        <Box
          sx={{
            p: { xs: 1.5, sm: 2 },
            borderRight: { sm: '1px solid #cbd5e1' },
            borderBottom: { xs: '1px solid #cbd5e1', sm: 'none' },
            background: '#ffffff',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#1e2a44',
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              fontFamily: '"Kanit", sans-serif',
              lineHeight: 1.4,
            }}
          >
            {job.role}
          </Typography>
        </Box>
        <Box
          sx={{
            p: { xs: 1.5, sm: 2 },
            borderRight: { sm: '1px solid #cbd5e1' },
            borderBottom: { xs: '1px solid #cbd5e1', sm: 'none' },
            background: '#ffffff',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#475569',
              fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem' },
              lineHeight: 1.5,
            }}
          >
            {job.experience}
          </Typography>
        </Box>
        <Box
          sx={{
            p: { xs: 1.5, sm: 2 },
            borderRight: { sm: '1px solid #cbd5e1' },
            borderBottom: { xs: '1px solid #cbd5e1', sm: 'none' },
            background: '#ffffff',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#475569',
              fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem' },
              lineHeight: 1.5,
            }}
          >
            {job.location || 'Not specified'}
          </Typography>
        </Box>
        <Box
          sx={{
            p: { xs: 1.5, sm: 2 },
            borderRight: { sm: '1px solid #cbd5e1' },
            borderBottom: { xs: '1px solid #cbd5e1', sm: 'none' },
            background: '#ffffff',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#475569',
              fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem' },
              lineHeight: 1.5,
            }}
          >
            {job.field}
          </Typography>
        </Box>
        <Box
          sx={{
            p: { xs: 1.5, sm: 2 },
            borderRight: { sm: '1px solid #cbd5e1' },
            borderBottom: { xs: '1px solid #cbd5e1', sm: 'none' },
            background: '#ffffff',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#475569',
              fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem' },
              lineHeight: 1.5,
            }}
          >
            {job.type}
          </Typography>
        </Box>
        <Box
          sx={{
            p: { xs: 1.5, sm: 2 },
            borderRight: { sm: '1px solid #cbd5e1' },
            borderBottom: { xs: '1px solid #cbd5e1', sm: 'none' },
            background: '#ffffff',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: job.status === 'Urgent' ? '#dc2626' : '#2563eb',
              fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem' },
              fontWeight: 'medium',
              lineHeight: 1.5,
            }}
          >
            {job.status}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          p: { xs: 1.5, sm: 2 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'flex-end' },
          borderTop: { xs: '1px solid #cbd5e1', sm: 'none' },
          background: '#ffffff',
        }}
      >
        <Button
          variant="contained"
          onClick={onApplyClick}
          sx={{
            bgcolor: '#324177',
            color: '#ffffff',
            textTransform: 'none',
            px: { xs: 2, md: 3 },
            py: { xs: 0.75, md: 1 },
            fontSize: { xs: '0.875rem', md: '0.9375rem' },
            borderRadius: '6px',
            width: { xs: '100%', sm: 'auto' },
            fontFamily: '"Roboto", sans-serif',
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              bgcolor: 'white',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
              color: 'black',
            },
          }}
        >
          Apply Now
        </Button>
      </Box>
    </Box>
  );
};

export default ListViewJobCard;