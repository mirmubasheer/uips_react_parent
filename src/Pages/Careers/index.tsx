import React from 'react';
import HeaderAll from '../../components/HeaderAll/HeaderAll';
import { Box } from '@mui/material';
import { careersBanners } from '../../assets/'; // Adjust path
import Careers from './Careers';


const CareersWrapper: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Careers', href: '/career' },
  ];

  return (
    <Box sx={{ overflow: 'hidden', backgroundColor: 'transparent' }}>
      <HeaderAll 
        imageSrc={careersBanners.careers01} 
        title="Careers" 
        breadcrumbItems={breadcrumbItems} 
      />
    <Careers/>
    </Box>
  );
};

export default CareersWrapper;