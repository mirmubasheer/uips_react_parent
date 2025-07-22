import React from 'react';
import { Box, Container } from '@mui/material';
import ContactFormSection from './Components/ContactFormSection';
import ContactInfoCards from './Components/ContactInfoCards';
import MapSection from './Components/MapSection';

const Contact: React.FC = () => {
  return (
    <Box
      sx={{
        background: 'rgba(50, 65, 119, 0.1)',
        width: '100%',
        overflowX: 'hidden',
        boxSizing: 'border-box',
        color: 'white',
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4, md: 5 }, px: { xs: 2, sm: 4, md: 8 } }}>
        <ContactFormSection />
        <ContactInfoCards />
        <MapSection />
      </Container>
    </Box>
  );
};

export default React.memo(Contact);