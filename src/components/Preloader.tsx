import React from 'react';
import { Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';

// Updated animation with faster and smoother flipping effect
const flipAnimation = keyframes`
  0% { transform: rotateY(0); opacity: 0.3; }
  50% { transform: rotateY(90deg); opacity: 0.8; }
  100% { transform: rotateY(0); opacity: 1; }
`;

// Styled component for each letter with animation and fixed font size
const AnimatedLetter = styled(Box)<{ delay: number }>`
  display: inline-block;
  font-size: 80px; 
  font-weight: 700;
  margin: 0 0.3rem;
  color: #222;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  animation: ${flipAnimation} 1s ease-in-out infinite;
  animation-delay: ${({ delay }) => `${delay}s`};
`;

const Preloader: React.FC = () => {
  // Letters to animate
  const letters = ['U','I','P','S'];

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgcolor="#e0e0e0"
  >
      {letters.map((letter, index) => (
        <AnimatedLetter key={index} delay={index * 0.2}> {/* Increased delay multiplier */}
          {letter}
        </AnimatedLetter>
      ))}
    </Box>
  );
};

export default Preloader;
