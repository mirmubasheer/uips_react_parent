import React from 'react';
import HeaderAll from '../../components/HeaderAll/HeaderAll';
import { Box } from '@mui/material';
import { galleryGroup } from '../../assets';
import Gallery from './Gallery';

// Move breadcrumbItems outside the component to prevent re-creation on every render
const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Gallery', href: '/gallery' },
];

const GalleryWrapper: React.FC = () => {
  return (
    <Box sx={{ overflow: 'hidden', backgroundColor: 'transparent' }}>
      <HeaderAll 
        imageSrc={galleryGroup.g1} 
        title="Gallery" 
        breadcrumbItems={breadcrumbItems} 
      />
      <Gallery />
    </Box>
  );
};

export default React.memo(GalleryWrapper);