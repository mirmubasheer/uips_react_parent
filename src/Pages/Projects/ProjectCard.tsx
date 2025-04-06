// import React, { useRef, useEffect } from 'react';
// import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
// import gsap from 'gsap';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { Project } from '../types';
// import { allp } from '../../assets'; // Assuming this exports an object with image mappings

// interface ProjectCardProps {
//   project: Project;
//   onClick: (slug: string) => void;
// }

// export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (cardRef.current) {
//       gsap.fromTo(
//         cardRef.current,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
//       );
//     }
//   }, []);

//   // Map the image string (e.g., "p1") to the actual image from allp, without fallback
//   const imagePath = allp[project.image as keyof typeof allp];

//   // Log to debug if imagePath is correct
//   console.log('Image Path:', imagePath, 'Project Image:', project.image);

//   return (
//           <Card
//         ref={cardRef}
//         onClick={() => onClick(project.slug)}
//         sx={{
//           backgroundColor: '#2D3A63',
//           color: '#FFFFFF',
//           cursor: 'pointer',
//           borderRadius: 2,
//           boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
//           position: 'relative',
//           overflow: 'hidden',
//           mb: 4,
//           height: '500px',
//           width: '500px',
//           transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
//           '&:hover': {
//             backgroundColor: '#3D4A73',
//             transform: 'scale(1.05)',
//           },
//           zIndex: 10,
//           display: 'flex',
//           flexDirection: 'column',
//         }}
//         className="project-card"
//       >
//         {/* Project Image Section */}
//         <Box sx={{ flex: '1 1 50%', position: 'relative' }}>
//           <Box
//             component="img"
//             src={imagePath}
//             alt={project.name}
//             onError={(e) => {
//               (e.target as HTMLImageElement).src = '/path/to/default-image.jpg';
//               console.error('Image failed to load:', project.image);
//             }}
//             sx={{
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//             }}
//           />
//         </Box>

//         {/* Project Details */}
//         <CardContent
//           sx={{
//             flex: '1 1 50%',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//             px: 2,
//             py: 1.5,
//           }}
//         >
//           <Box>
//             <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 0.5 ,  color: '#B0B0B0' }}>
//               {project.name}
//             </Typography>
//             <Typography variant="body2" sx={{ color: '#B0B0B0' }}>
//               Location: {project.location}
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//             <IconButton sx={{ color: '#FFFFFF' }} aria-label="View project">
//               <ArrowForwardIcon fontSize="medium" />
//             </IconButton>
//           </Box>
//         </CardContent>
//       </Card>

//   );
// };




// ProjectCard.tsx
import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, CardActionArea, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1E3A8A 0%, #2A4D9C 50%, #1E3A8A 100%)',

  borderRadius: '12px',
  width: '320px',
  minHeight: '380px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  // Base 3D effect
  transformStyle: 'preserve-3d',
  transform: 'perspective(1000px) rotateX(2deg) rotateY(-2deg)', // Slight initial tilt
  boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.4), -4px -4px 15px rgba(64, 196, 255, 0.1)', // 3D shadow
  transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
  '&:hover': {
    transform: 'perspective(1000px) translateY(-8px) rotateX(0deg) rotateY(0deg)', // Straightens on hover
    boxShadow: '0 12px 30px rgba(64, 196, 255, 0.3), 0 -4px 15px rgba(0, 0, 0, 0.2)', // Enhanced shadow
  },
  // Bottom border
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(64, 196, 255, 0.6))',
    zIndex: 1,
  },
  // Right border
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '2px',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(64, 196, 255, 0.6))',
    zIndex: 1,
  },
}));

interface Project {
  id: string;
  name: string;
  slug: string;
  location: string;
  clientName?: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: (slug: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const defaultImage = 'https://via.placeholder.com/320x200?text=No+Image+Available';

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <StyledCard>
      <CardActionArea 
        onClick={() => onClick(project.slug)}
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100%',
          transformStyle: 'preserve-3d', // Ensure children respect 3D space
        }}
      >
        <Box sx={{ position: 'relative', height: 200, transform: 'translateZ(20px)' }}> {/* Slight pop-out effect */}
          {imageLoading && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              }}
            >
              <CircularProgress color="primary" />
            </Box>
          )}
          <CardMedia
            component="img"
            height="200"
            image={imageError || !project.image ? defaultImage : project.image}
            alt={project.name}
            sx={{ 
              objectFit: 'cover',
              width: '100%',
            }}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </Box>
        <CardContent 
          sx={{ 
            color: '#FFFFFF',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transform: 'translateZ(10px)', // Slight depth for content
          }}
        >
          <Box>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                fontWeight: 600,
                minHeight: '3em',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {project.name}
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="grey.300">
              Location: {project.location}
            </Typography>
            {project.clientName && (
              <Typography variant="body2" color="grey.300" sx={{ mt: 1 }}>
                Client: {project.clientName}
              </Typography>
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};