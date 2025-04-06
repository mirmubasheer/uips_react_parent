import React from 'react';
import HeaderAll from '../../components/HeaderAll/HeaderAll';
import ProjectsFindAll from './ProjectsFindAll';
import { Box } from '@mui/material';
import { projectbanner } from '../../assets/'; // Adjust path as needed

const Projects: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
  ];

  return (
    <Box sx={{ overflow: 'hidden', backgroundColor: 'transparent' }}>
      <HeaderAll 
        imageSrc={projectbanner.bannerp} 
        title="Projects" 
        breadcrumbItems={breadcrumbItems} 
      />
      <ProjectsFindAll />
    </Box>
  );
};

export default Projects;