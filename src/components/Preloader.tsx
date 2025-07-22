import React from 'react';
import { Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';

// Updated animation with faster and smoother flipping effect
const flipAnimation = keyframes`
  0% { transform: rotateY(0); opacity: 0.3; }
  50% { transform: rotateY(90deg); opacity: 0.8; }
  100% { transform: rotateY(0); opacity: 1; }
`;

// Styled component for the flipping logo
const AnimatedLogo = styled('img')<{ delay: number }>`
  width: 250px; 
  height: auto;
  object-fit: contain;
  animation: ${flipAnimation} 1s ease-in-out infinite;
  animation-delay: ${({ delay }) => `${delay}s`};

`;

const Preloader: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#e0e0e0"
    >
      <AnimatedLogo
        src="/assets/images/preloader/uips_logo.png" /* Replace with actual path to logo.png */
        alt="Logo"
        delay={0} /* Single image, no incremental delay needed */
      />
    </Box>
  );
};

export default Preloader;