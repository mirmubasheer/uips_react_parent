import React from 'react';
import { Box, Container } from '@mui/material';
import ContactFormSection from './Components/ContactFormSection';
import ContactInfoCards from './Components/ContactInfoCards';

const Contact: React.FC = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #0F1A33, #1E2A44)',
        width: '100%',
        overflowX: 'hidden',
        boxSizing: 'border-box',
        color: 'white',
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4, md: 5 }, px: { xs: 2, sm: 4, md: 8 } }}>
        <ContactFormSection />
        <ContactInfoCards />
      </Container>
    </Box>
  );
};

export default React.memo(Contact);