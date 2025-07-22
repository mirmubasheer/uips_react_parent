import React, { forwardRef, useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Modal, Box, IconButton } from '@mui/material';
import { styled, Theme } from '@mui/system';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

// Styled components with TypeScript
const StyledCertificateCard = styled(Card)(({ theme }: { theme: Theme }) => ({
  width: '100%',
  maxWidth: 400,
  margin: '30px',
  background: '#324177',
  // background: 'linear-gradient(145deg, #0c1c3c 0%, #1e2a5c 100%)',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(0, 0, 0, 0.2)',
  borderRadius: '16px',
  border: '1px solid #0c1c3c',
  overflow: 'hidden',
  transform: 'perspective(1200px)',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'perspective(1200px) translateY(-10px) scale(1.03)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4), 0 6px 15px rgba(0, 0, 0, 0.3)',
    borderColor: '#4b5e9f',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: 350,
    margin: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 300,
    margin: '15px',
  },
}));

const CertificateImage = styled(CardMedia)({
  height: 250,
  objectFit: 'cover',
  filter: 'brightness(1)',
  transition: 'filter 0.3s ease',
  pointerEvents: 'none',
  userSelect: 'none',
  draggable: false,
  [({ theme }: { theme: Theme }) => theme.breakpoints.down('sm')]: {
    height: 200,
  },
  '@media print': {
    display: 'none',
  },
});

const ModalContainer = styled(Box)({
  position: 'relative',
  outline: 'none',
  userSelect: 'none',
  '@media print': {
    display: 'none',
  },
});

const ModalImage = styled('img')({
  maxWidth: '90vw',
  maxHeight: '90vh',
  objectFit: 'contain',
  transition: 'transform 0.3s ease',
  userSelect: 'none',
  pointerEvents: 'none',
  draggable: false,
});

const ProtectionOverlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'transparent',
  pointerEvents: 'none',
});

const ZoomControls = styled('div')({
  position: 'absolute',
  bottom: 10,
  right: 10,
  display: 'flex',
  gap: '8px',
  background: 'rgba(0, 0, 0, 0.6)',
  borderRadius: '20px',
  padding: '4px',
  zIndex: 1,
});

// TypeScript interface
interface Certificate {
  title: string;
  image: string;
  description: string;
}

interface CertificateCardProps {
  cert: Certificate;
  onClick?: () => void;
}

const CertificateCard = forwardRef<HTMLDivElement, CertificateCardProps>(({ cert }, ref) => {
  const [open, setOpen] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => {
    setOpen(false);
    setZoomLevel(1);
  };

  const handleZoomIn = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setZoomLevel(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setZoomLevel(prev => Math.max(prev - 0.2, 1));
  };

  useEffect(() => {
    const preventScreenshot = (e: KeyboardEvent): void => {
      if (
        (e.ctrlKey && e.key === 'p') ||
        (e.metaKey && e.altKey && e.key === 's') ||
        (e.key === 'PrintScreen')
      ) {
        e.preventDefault();
      }
    };

    if (open) {
      window.addEventListener('keydown', preventScreenshot);
      document.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    return () => {
      window.removeEventListener('keydown', preventScreenshot);
      document.removeEventListener('contextmenu', (e) => e.preventDefault());
    };
  }, [open]);

  return (
    <>
      <StyledCertificateCard ref={ref} onClick={handleOpen}>
        <CertificateImage image={cert.image} title={cert.title} />
        <CardContent sx={{ padding: { xs: 2, sm: 3 } }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: '#ffffff',
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
            }}
          >
            {cert.title}
          </Typography>
          <Typography
            variant="body1"
            color="#a3bffa"
            sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, lineHeight: 1.6 }}
          >
            {cert.description}
          </Typography>
        </CardContent>
      </StyledCertificateCard>

      <Modal
  open={open}
  onClose={handleClose}
  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
>
  <ModalContainer>
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      {/* Certificate Image */}
      <ModalImage
        src={cert.image}
        alt={cert.title}
        sx={{ transform: `scale(${zoomLevel})` }}
        onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
        onDragStart={(e: React.DragEvent) => e.preventDefault()}
      />

      {/* Watermark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-30deg)',
          color: 'rgba(255, 255, 255, 0.08)',
          fontSize: { xs: '2.5rem', sm: '4rem', md: '5rem' },
          fontWeight: 800,
          whiteSpace: 'nowrap',
          letterSpacing: '10px',
          zIndex: 2,
          pointerEvents: 'none',
          userSelect: 'none',
          textShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        UIPS
      </Box>
    </Box>

    <ProtectionOverlay />
    <ZoomControls>
      <IconButton onClick={handleZoomOut} size="small" sx={{ color: '#ffffff' }}>
        <ZoomOutIcon />
      </IconButton>
      <IconButton onClick={handleZoomIn} size="small" sx={{ color: '#ffffff' }}>
        <ZoomInIcon />
      </IconButton>
    </ZoomControls>
  </ModalContainer>
</Modal>

    </>
  );
});

export default CertificateCard;