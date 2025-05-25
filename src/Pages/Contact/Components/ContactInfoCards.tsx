import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const contactInfo = [
  {
    icon: <EmailIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
    title: 'Email Us',
    content: 'info@uips-sa.com',
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
    title: 'Our Address',
    content: 'Al-Meflah Building, 5th Floor Suite 4B, 7th Cross, King Abdul Aziz Road',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
    title: 'Call Us',
    content: ' + 966 13 346 7677',
  },
];

const ContactInfoCards: React.FC = () => {
  return (
    <Box
      sx={{
        my: { xs: 3, sm: 4, md: 6 }, // Added gap above and below
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
        sx={{
          width: '100%',
          maxWidth: '100%',
          justifyContent: 'center',
        }}
      >
        {contactInfo.map((info, index) => (
          
          <Grid
            item
            xs={12}
            sm={4}
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center', // Center cards within grid item
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center', // Center content vertically
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
                maxWidth: { xs: '250px', sm: '280px', md: '300px' }, // Responsive width
                minHeight: { xs: '250px', sm: '280px', md: '300px' }, // Equal height to width for square
                boxSizing: 'border-box',
              }}
            >
              {info.icon}
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  mb: 1,
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                  fontSize: { xs: '18px', sm: '20px', md: '22px' }, // Responsive font size
                }}
              >
                {info.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#FFFFFF',
                  fontSize: { xs: '14px', sm: '15px', md: '16px' }, // Responsive font size
                }}
              >
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