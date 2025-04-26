import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import HeaderAll from '../../components/HeaderAll/HeaderAll';
import { contactB } from '../../assets';
import Certification from './certification';

const useImagePreload = (imageSrc: string) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsLoaded(true);
  }, [imageSrc]);

  return isLoaded;
};

const CertificateWrapper: React.FC = () => {
  const isBannerLoaded = useImagePreload(contactB.contactBanner);
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
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
          imageSrc={contactB.contactBanner}
          title="Contact Us"
          breadcrumbItems={breadcrumbItems}
          loading="lazy"
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: 64,
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
      <Certification />
    </Box>
  );
};

export default CertificateWrapper;