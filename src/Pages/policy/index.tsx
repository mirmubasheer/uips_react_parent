import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import HeaderAll from '../../components/HeaderAll/HeaderAll';
import { certification } from '../../assets';
import Policy from './Policy';

const useImagePreload = (imageSrc: string): boolean => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsLoaded(true);
  }, [imageSrc]);

  return isLoaded;
};

const PolicyWrapper: React.FC = () => {
  const isBannerLoaded = useImagePreload(certification.bannercert);
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Safety & Quality Policy', href: '/policy' },
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #0F1A33, #1E2A44)',
        width: '100%',
        overflowX: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {isBannerLoaded ? (
        <HeaderAll
          imageSrc={certification.bannercert}
          title="Safety & Quality Policy"
          breadcrumbItems={breadcrumbItems}
          loading="lazy"
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: { xs: 200, sm: 300 }, // Responsive height for banner placeholder
            background: 'linear-gradient(to right, #0F1A33, #1E2A44)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            overflowX: 'hidden',
          }}
        >
          Loading Banner...
        </Box>
      )}
      <Policy />
    </Box>
  );
};

export default PolicyWrapper;