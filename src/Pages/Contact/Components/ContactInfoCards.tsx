import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const contactInfo = [
  {
    icon: <EmailIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
    title: 'Email Us',
    content: 'info@example.com',
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
    title: 'Our Address',
    content: '123 Business Ave, Suite 100, City, Country',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
    title: 'Call Us',
    content: '+1 (123) 456-7890',
  },
];

const ContactInfoCards: React.FC = () => {
  return (
    <Box sx={{ mb: 4, width: '100%', maxWidth: '100%' }}>
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
        sx={{ width: '100%', maxWidth: '100%', justifyContent: 'center' }}
      >
        {contactInfo.map((info, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: { xs: 2, sm: 3 },
                backgroundColor: '#1E2A44',
                borderRadius: 2,
                textAlign: 'center',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: '#2A3A55',
                },
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              {info.icon}
              <Typography
                variant="h6"
                sx={{ mt: 2, mb: 1, fontWeight: 'bold', color: '#FFFFFF' }}
              >
                {info.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>
                {info.content}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default React.memo(ContactInfoCards);