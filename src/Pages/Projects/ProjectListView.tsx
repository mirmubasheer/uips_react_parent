// ProjectListView.tsx
import React, { useState } from 'react';
import { Box, Typography, Paper, Divider, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Project {
  id: string;
  name: string;
  slug: string;
  location: string;
  clientName?: string;
  image?: string;
}

interface ProjectListViewProps {
  projects: Project[];
  onProjectClick: (slug: string) => void;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1E3A8A 0%, #2A4D9C 80%, #1E3A8A 100%)',
  borderRadius: '8px',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  // 3D effect
  transformStyle: 'preserve-3d',
  transform: 'perspective(800px) rotateY(-1deg)', // Slight tilt for list view
  boxShadow: '6px 6px 15px rgba(0, 0, 0, 0.3), -2px -2px 10px rgba(64, 196, 255, 0.1)', // Subtle 3D shadow
  transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
  '&:hover': {
    transform: 'perspective(800px) translateY(-4px) rotateY(0deg)', // Straightens and lifts
    boxShadow: '0 8px 20px rgba(64, 196, 255, 0.25), 0 -2px 10px rgba(0, 0, 0, 0.2)', // Enhanced shadow
    cursor: 'pointer',
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

const ImageContainer = styled(Box)({
  width: '120px',
  height: '80px',
  flexShrink: 0,
  position: 'relative',
  marginRight: '16px',
  transform: 'translateZ(15px)', // Slight pop-out for image
});

export const ProjectListView: React.FC<ProjectListViewProps> = ({ projects, onProjectClick }) => {
  const defaultImage = 'https://via.placeholder.com/120x80?text=No+Image+Available';

  return (
    <Box>
      {projects.map((project) => {
        const [imageLoading, setImageLoading] = useState(true);
        const [imageError, setImageError] = useState(false);

        const handleImageLoad = () => setImageLoading(false);
        const handleImageError = () => {
          setImageLoading(false);
          setImageError(true);
        };

        return (
          <StyledPaper key={project.id} onClick={() => onProjectClick(project.slug)}>
            <ImageContainer>
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
                  <CircularProgress size={24} color="primary" />
                </Box>
              )}
              <img
                src={imageError || !project.image ? defaultImage : project.image}
                alt={project.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '4px',
                }}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </ImageContainer>
            <Box 
              sx={{ 
                flexGrow: 1, 
                transform: 'translateZ(5px)', // Slight depth for text
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {project.name}
              </Typography>
              <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', mb: 1 }} />
              <Typography variant="body2" color="grey.300">
                Location: {project.location}
              </Typography>
              {project.clientName && (
                <Typography variant="body2" color="grey.300" sx={{ mt: 1 }}>
                  Client: {project.clientName}
                </Typography>
              )}
            </Box>
          </StyledPaper>
        );
      })}
    </Box>
  );
};