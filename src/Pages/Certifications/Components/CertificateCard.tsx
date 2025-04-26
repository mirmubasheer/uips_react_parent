import React, { forwardRef } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const StyledCertificateCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  margin: '30px',
  background: 'linear-gradient(145deg, #0c1c3c 0%, #1e2a5c 100%)',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(0, 0, 0, 0.2)',
  borderRadius: '16px',
  border: '1px solid #0c1c3c', // Dark navy border
  overflow: 'hidden',
  transform: 'perspective(1200px)',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'perspective(1200px) translateY(-10px) scale(1.03)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4), 0 6px 15px rgba(0, 0, 0, 0.3)',
    borderColor: '#4b5e9f', // Slightly lighter navy glow on hover
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: 350,
    margin: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 300,
    margin: '15px',
  },
}));

const CertificateImage = styled(CardMedia)({
  height: 250,
  objectFit: 'cover',
  filter: 'brightness(1)',
  transition: 'filter 0.3s ease',
  pointerEvents: 'none',
  [theme => theme.breakpoints.down('sm')]: {
    height: 200,
  },
});

interface CertificateCardProps {
  cert: { title: string; image: string; description: string };
  onClick: () => void;
}

// Use forwardRef to allow ref forwarding
const CertificateCard = forwardRef<HTMLDivElement, CertificateCardProps>(({ cert, onClick }, ref) => {
  return (
    <StyledCertificateCard ref={ref} onClick={onClick}>
      <CertificateImage image={cert.image} title={cert.title} />
      <CardContent sx={{ padding: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: '#ffffff',
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
          }}
        >
          {cert.title}
        </Typography>
        <Typography
          variant="body1"
          color="#a3bffa" // Light blue for contrast
          sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, lineHeight: 1.6 }}
        >
          {cert.description}
        </Typography>
      </CardContent>
    </StyledCertificateCard>
  );
});

export default CertificateCard;