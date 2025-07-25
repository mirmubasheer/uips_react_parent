import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Modal, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import CloseIcon from '@mui/icons-material/Close';
import CertificateCard from '../Certifications/Components/CertificateCard';
import CertDetails from '../Certifications/Components/CertDetails';
import { certifictaesall } from '../../assets';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Styled components
const CertificatesContainer = styled(Box)(({ theme }) => ({
  padding: { xs: '40px 10px', sm: '60px 15px', md: '80px 20px' },
  // background: 'linear-gradient(135deg, #0c1c3c 0%, #1e2a5c 100%)',
  background: 'rgba(50, 65, 119, 0.8)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: '30px 8px',
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'linear-gradient(145deg, #0c1c3c 0%, #1e2a5c 100%)',
  borderRadius: '16px',
  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)',
  padding: { xs: '16px', sm: '20px', md: '24px' },
  maxWidth: '90vw',
  maxHeight: '90vh',
  overflow: 'hidden',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: { xs: '12px', sm: '16px' },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '95vw',
    padding: '12px',
    gap: '10px',
  },
}));

const ModalImageContainer = styled(Box)({
  position: 'relative',
  maxWidth: '100%',
  maxHeight: { xs: '50vh', sm: '55vh', md: '60vh' },
});

const ModalImage = styled('img')({
  maxWidth: '100%',
  maxHeight: { xs: '50vh', sm: '55vh', md: '60vh' },
  objectFit: 'contain',
  pointerEvents: 'none',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
});

const Watermark = styled(Typography)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) rotate(-45deg)',
  color: 'rgba(255, 255, 255, 0.3)',
  fontSize: '3rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  pointerEvents: 'none',
  userSelect: 'none',
});

const Certification: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const modalImageRef = useRef<HTMLImageElement>(null);
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<{ title: string; image: string; description: string } | null>(null);
  const zoomLevel = useRef(1);

  // Certificate data with local .webp image paths
  const certificates = [
    {
      title: 'ISO 9001:2015 (Quality Management System)',
      description: 'Provision of Contracting for Civil, Mech, E&I & FO works and other supporting services',
      image: certifictaesall.reg,
    },
    {
      title: 'ISO 14001:2015',
      description: 'Provision of Contracting for Civil, Mech, E&I & FO works andother supporting services',
      image: certifictaesall.bqc,
    },
    {
      title: 'ISO 45001:2018',
      description: 'Provision of Contracting for Civil, Mech, E&I & FO works andother supporting services',
      image: certifictaesall.bqc1,
    },
  ];

  useEffect(() => {
    // Prevent right-click
    const handleContextMenu = (e: Event) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);

    // GSAP Animations for cards
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 120, rotateX: 30 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reset',
          },
          delay: index * 0.2,
        }
      );
    });

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleOpen = (cert: { title: string; image: string; description: string }) => {
    setSelectedCert(cert);
    setOpen(true);
    zoomLevel.current = 1; // Reset zoom
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCert(null);
  };

  const handleZoomIn = () => {
    if (zoomLevel.current < 2) {
      zoomLevel.current += 0.2;
      gsap.to(modalImageRef.current, {
        scale: zoomLevel.current,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel.current > 0.5) {
      zoomLevel.current -= 0.2;
      gsap.to(modalImageRef.current, {
        scale: zoomLevel.current,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  return (
    <>
      <CertDetails />
      <CertificatesContainer ref={containerRef}>
        <Typography
          variant="h4"
          sx={{
            color: '#ffffff',
            fontWeight: 700,
            mb: { xs: 4, sm: 6, md: 8 },
            textAlign: 'center',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            letterSpacing: '0.5px',
            marginTop: '50px',
          }}
        >
          Our Certifications
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: '8px', sm: '15px', md: '20px' },
            px: { xs: 1, sm: 2 },
          }}
        >
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              ref={(el) => (cardsRef.current[index] = el!)}
              cert={cert}
              onClick={() => handleOpen(cert)}
            />
          ))}
        </Box>
        {/* Overlay to deter screenshots */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'transparent',
            pointerEvents: 'none',
            zIndex: '1',
          }}
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="certificate-modal"
          sx={{ userSelect: 'none' }}
        >
          <ModalContent>
            <IconButton
              onClick={handleClose}
              sx={{ position: 'absolute', top: 12, right: 12, color: '#ffffff' }}
            >
              <CloseIcon />
            </IconButton>
            {selectedCert && (
              <>
                <Typography
                  id="certificate-modal"
                  variant="h4"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: '#ffffff',
                    textAlign: 'center',
                    fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                  }}
                >
                  {selectedCert.title}
                </Typography>
                <ModalImageContainer>
                  <ModalImage
                    ref={modalImageRef}
                    src={selectedCert.image}
                    alt={selectedCert.title}
                  />
                  <Watermark>UIPS</Watermark>
                </ModalImageContainer>
                <Box sx={{ mt: 2, display: 'flex', gap: 1.5 }}>
                  <IconButton
                    onClick={handleZoomIn}
                    sx={{
                      color: '#ffffff',
                      bgcolor: 'rgba(12, 28, 60, 0.8)',
                      '&:hover': { bgcolor: 'rgba(12, 28, 60, 1)' },
                    }}
                  >
                    <ZoomInIcon />
                  </IconButton>
                  <IconButton
                    onClick={handleZoomOut}
                    sx={{
                      color: '#ffffff',
                      bgcolor: 'rgba(12, 28, 60, 0.8)',
                      '&:hover': { bgcolor: 'rgba(12, 28, 60, 1)' },
                    }}
                  >
                    <ZoomOutIcon />
                  </IconButton>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 2,
                    color: '#a3bffa',
                    textAlign: 'center',
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                    lineHeight: '1.6',
                  }}
                >
                  {selectedCert.description}
                </Typography>
              </>
            )}
            {/* Overlay to deter screenshots in modal */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'transparent',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />
          </ModalContent>
        </Modal>
      </CertificatesContainer>
    </>
  );
};

export default Certification;