import React from 'react';
import HeaderAll from '../../components/HeaderAll/HeaderAll';
import ProjectsFindAll from './ProjectsFindAll';
import { Box } from '@mui/material';
import { projectbanner } from '../../assets/'; // Adjust path as needed

const Services: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
  ];

  return (
    <Box sx={{ overflow: 'hidden', backgroundColor: 'transparent' }}>
      <HeaderAll 
        imageSrc={projectbanner.bannerp} 
        title="Services" 
        breadcrumbItems={breadcrumbItems} 
      />
      <ProjectsFindAll />
    </Box>
  );
};

export default Services;