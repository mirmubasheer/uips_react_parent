import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
  IconButton,
  Tooltip,
  Popover,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ShareIcon from '@mui/icons-material/Share';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';
import { Project } from '../../../types/project';

interface ProjectCardProps {
  project: Project;
  onClick: (id: number) => void;
  cardRef: React.RefObject<HTMLDivElement>;
}

const CARD_HEIGHT = 440;
const CARD_WIDTH = 345;

const ProjectCard = styled(Card)(({ theme }) => ({
  height: CARD_HEIGHT,
  width: CARD_WIDTH,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '16px',
  overflow: 'hidden',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
  border: '1px solid rgba(59, 130, 246, 0.2)',
  background: 'linear-gradient(160deg, #1E2A44 0%, #2D3E66 100%)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
    background: 'linear-gradient(160deg, #2D3E66 0%, #3B82F6 100%)',
  },
  margin: '0 auto', // Center the card
}));

const StyledCardMedia = styled(CardMedia)({
  height: 180,
  width: '100%',
  objectFit: 'cover', // Ensure images scale consistently
  position: 'relative',
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '16px',
  color: 'white',
  overflow: 'hidden',
});

const ProjectCardComponent: React.FC<ProjectCardProps> = ({ project, onClick, cardRef }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleShareClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  const shareUrl = `${window.location.origin}/${project.division.toLowerCase()}/project/${project.id}`;

  // Use the first image from images array or fallback
  const cardImage = project.images[0] || project.image || 'path/to/fallback-image.jpg';

  return (
    <ProjectCard ref={cardRef}>
      <Box position="relative">
        <StyledCardMedia component="img" image={cardImage} alt={project.projectname} />
      </Box>

      <StyledCardContent>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom sx={{ color: 'white' }}>
          {project.projectname}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom sx={{ color: 'white' }}>
          {project.location}
        </Typography>

        <Box mt={2}>
          <Button
            fullWidth
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/${project.division.toLowerCase()}/project/${project.id}`);
            }}
            sx={{
              backgroundColor: '#3b82f6',
              textTransform: 'none',
              fontWeight: 500,
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#2563eb',
              },
            }}
          >
            Know More
          </Button>
        </Box>

        <Stack direction="row" spacing={1} mt={2} justifyContent="flex-end">
          <Tooltip title="Share project">
            <IconButton onClick={handleShareClick}>
              <ShareIcon fontSize="small" sx={{ color: 'white' }} />
            </IconButton>
          </Tooltip>
        </Stack>

        {/* Social Share Popover */}
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Box p={2} display="flex" gap={1}>
            <IconButton
              component="a"
              href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              color="success"
            >
              <WhatsAppIcon />
            </IconButton>

            <IconButton
              component="a"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              component="a"
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                shareUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#0e76a8' }}
            >
              <LinkedInIcon />
            </IconButton>

            <Tooltip title="Copy link for Instagram">
              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                  handleClose();
                  alert('Link copied! Paste it in your Insta bio or story.');
                }}
                sx={{ color: '#E1306C' }}
              >
                <InstagramIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Popover>
      </StyledCardContent>
    </ProjectCard>
  );
};

export default ProjectCardComponent;