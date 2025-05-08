
import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Project {
  id: number;
  slug: string;
  projectname: string;
  client: string;
  location: string;
  status: string;
  images: any[];
  description: string;
  monthyear: string;
  duration: string;
  povalue: string;
  totalmanhour: string;
  division: string;
  divisionSlug: string;
}

interface ProjectCardItemProps {
  project: Project;
  onCardClick: (projectId: number, divisionSlug: string) => void;
}

const ProjectCard = styled(Card)(({ theme }) => ({
  width: '80%', // 80% width
  height: 'auto', // Dynamic height
  background: 'linear-gradient(160deg, #1E2A44 0%, #2D3E66 100%)',
  borderRadius: '12px', // Polished look
  overflow: 'hidden',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)', // Slightly stronger shadow
  border: 'none', // Clean look
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 12px 36px rgba(59, 130, 246, 0.4)', // Enhanced hover shadow
    background: 'linear-gradient(160deg, #2D3E66 0%, #3B82F6 100%)',
  },
  margin: 'auto', // Center horizontally
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    width: '90%', // Slightly wider on mobile for balance
    height: 'auto',
    borderRadius: '8px', // Smaller radius on mobile
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.4)', // Lighter shadow on mobile
  },
}));

const ProjectCardMedia = styled(CardMedia)(({ theme }) => ({
  height: '200px',
  objectFit: 'cover',
  filter: 'brightness(0.9) contrast(1.1)',
  transition: 'filter 0.3s ease',
  '&:hover': {
    filter: 'brightness(1.05) contrast(1.15)',
  },
  [theme.breakpoints.down('sm')]: {
    height: '150px',
  },
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  color: '#E0E7FF',
  fontWeight: 500,
  fontFamily: '"Roboto", Arial, sans-serif',
  letterSpacing: '0.3px',
  fontSize: '1.2rem',
  marginBottom: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const ProjectDivision = styled(Typography)(({ theme }) => ({
  color: '#A5B4FC',
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
  },
}));

const BlinkingArrow = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: '#3B82F6', // Blue arrow
  fontSize: '2rem',
  animation: 'heartbeat 1.5s infinite',
  '@keyframes heartbeat': {
    '0%': { transform: 'scale(1)', opacity: 1 },
    '50%': { transform: 'scale(1.2)', opacity: 0.7 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: '12px',
  },
}));

const ProjectCardItem: React.FC<ProjectCardItemProps> = ({ project, onCardClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const arrowVariants = {
    rest: { x: 0 },
    hover: { x: 6, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const handleClick = () => {
    setIsSelected(true);
    onCardClick(project.id, project.divisionSlug);
    // Reset highlight after 300ms for flash effect
    setTimeout(() => setIsSelected(false), 300);
  };

  return (
    <ProjectCard
      sx={{ background: isSelected ? 'linear-gradient(160deg, #2D3E66 0%, #60A5FA 100%)' : undefined }}
      onClick={handleClick}
    >
      <ProjectCardMedia
        component="img"
        image={project.images[0] || '/fallback-image.jpg'} // Fallback image
        alt={project.projectname}
      />
      <StyledCardContent>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <ProjectTitle gutterBottom variant="h6" component="div">
            {project.projectname}
          </ProjectTitle>
          <ProjectDivision variant="body2">
            Division: {project.division}
          </ProjectDivision>
        </Box>
        <BlinkingArrow variants={arrowVariants} initial="rest" whileHover="hover" animate="rest">
          <ArrowForwardIcon sx={{ fontSize: 'inherit', color:"white" }} />
        </BlinkingArrow>
      </StyledCardContent>
    </ProjectCard>
  );
};

export default ProjectCardItem;
