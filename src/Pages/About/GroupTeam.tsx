import React, { useEffect, useState } from 'react';
import { Box, Container, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

interface GroupTeamProps {
  slug: string;
}

const GroupTeam: React.FC<GroupTeamProps> = ({ slug }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/gallery/${slug}`);
  };

  // Example group cover images
  const images = [
    'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1581092160626-1ee9d99c50e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the image index automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Cleanup the interval when component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ backgroundColor: 'white', py: 6, position: 'relative' }}>
      <Container>
        {/* Displaying the current image */}
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '10px',
          }}
        >
          <img
            src={images[currentIndex]}
            alt={`Group Image ${currentIndex + 1}`}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '10px',
              transition: 'transform 1s ease-in-out', // Smooth transition
            }}
          />
        </Box>

        {/* Arrow Button */}
        <IconButton
          onClick={handleNavigate}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 20,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255,255,255,0.8)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,1)',
            },
            zIndex: 10,
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Container>
    </Box>
  );
};

export default GroupTeam;
