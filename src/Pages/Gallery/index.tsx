import React from 'react';
import HeaderAll from '../../components/HeaderAll/HeaderAll';

import { Box } from '@mui/material';
import { AboutSectionImages } from '../../assets';
import Gallery from './Gallery';



const GalleryWrapper: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery' },
  ];

  return (
    <Box sx={{ overflow: 'hidden', backgroundColor: 'transparent' }}>
      <HeaderAll 
        imageSrc={AboutSectionImages.AboutB} 
        title="Gallery" 
        breadcrumbItems={breadcrumbItems} 
      />
     <Gallery/>
    </Box>
  );
};

export default GalleryWrapper;