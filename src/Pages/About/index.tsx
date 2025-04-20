import React from 'react';
import HeaderAll from '../../components/HeaderAll/HeaderAll';
import Brief from '../../Pages/About/Brief'; // Adjust path
import { Box } from '@mui/material';
import { AboutSectionImages } from '../../assets/'; // Adjust path
import Team from './Team';
// import GroupTeam from './GroupTeam';
import TeamManagement from './TeamManagement';

const AboutUsPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
  ];

  return (
    <Box sx={{ overflow: 'hidden', backgroundColor: 'transparent' }}>
      <HeaderAll 
        imageSrc={AboutSectionImages.AboutB} 
        title="About Us" 
        breadcrumbItems={breadcrumbItems} 
      />
      <Brief />
      <Team />
      <TeamManagement/>
      {/* <GroupTeam slug={''} images={[]}/> */}
    </Box>
  );
};

export default AboutUsPage;