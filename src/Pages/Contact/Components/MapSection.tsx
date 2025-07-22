import React from 'react';
import { Box, Typography } from '@mui/material';

const MapSection: React.FC = () => {
  // Placeholder Google Maps iframe embed link (replace with your actual embed link)
  const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14308.725152514975!2d50.18789635541992!3d26.288222400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e83e5a41033d%3A0x68ab56e13fbff793!2z2KjZhtin2YrYqSDYp9mE2YXZgdmE2K0gQWxtZWZsZWggQnVpbGRpbmc!5e0!3m2!1sen!2ssa!4v1745416818729!5m2!1sen!2ssa';

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', sm: '90%', md: '1200px' }, // Responsive width
        mx: 'auto', // Center horizontally
        my: { xs: 3, sm: 4, md: 5 }, // Responsive vertical spacing
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mt: '50px',
          mb: { xs: 2, sm: 3 },
          fontWeight: 'bold',
          // color: '#FFFFFF',
            color: '#1e2a44',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
          fontSize: { xs: '20px', sm: '24px', md: '28px' }, // Responsive font size
        }}
      >
        Our Location
      </Typography>
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: '800px', md: '1000px' }, // Constrain iframe width
          // backgroundColor: '#1E2A44', // Match ContactInfoCards background
        background: 'linear-gradient(160deg, #324177 0%, #2D3E66 100%)',

          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          p: { xs: 1.5, sm: 2 }, // Padding for border frame
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
          },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            paddingBottom: { xs: '56.25%', sm: '50%', md: '45%' }, // Responsive aspect ratio (16:9 or similar)
            height: 0,
            overflow: 'hidden',
          }}
        >
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0, border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Our Location"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(MapSection);