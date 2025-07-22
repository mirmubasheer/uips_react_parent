import React, { useEffect, useRef, useState, memo } from 'react';
import { Box, Container, Typography, Modal, IconButton } from '@mui/material';
import Slider from 'react-slick';
import gsap from 'gsap';
import CloseIcon from '@mui/icons-material/Close';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { galleryGroupImages, gallerySoloImages } from '../../assets/index'; // Adjust path as needed

// Define interfaces for images
interface GalleryImage {
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // GSAP animations
  useEffect(() => {
    if (sliderRef.current) {
      gsap.fromTo(
        sliderRef.current.querySelectorAll('.slick-slide img'),
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }

    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.5,
        }
      );
    }
  }, []);

  useEffect(() => {
    if (modalRef.current && selectedImage) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power3.out',
        }
      );
    }
  }, [selectedImage]);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: 'power3.in',
        onComplete: () => setSelectedImage(null),
      });
    } else {
      setSelectedImage(null);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
    lazyLoad: 'ondemand' as const,
  };

  return (
    <Box
      sx={{
        py: 8,
        background: 'rgba(50, 65, 119, 0.2)',
      }}
    >
      <Container maxWidth="lg">
        {/* Group Pictures Slider */}
        <Box mb={8} textAlign="center">
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              // color: '#f1f5f9',
               color: '#1e2a44',
              fontWeight: 'bold',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                borderRadius: '2px',
              },
            }}
          >
            Our Team Moments
          </Typography>
          <Box
            ref={sliderRef}
            sx={{
              overflow: 'hidden',
              maxWidth: '100%',
              '& .slick-slider': {
                overflow: 'hidden',
              },
              '& .slick-slide': {
                px: 0,
                width: '100% !important',
                opacity: 0,
                transition: 'opacity 0.3s ease',
              },
              '& .slick-slide.slick-active': {
                opacity: 1,
              },
              '& .slick-track': {
                display: 'flex',
                alignItems: 'center',
              },
              '& .slick-prev, & .slick-next': {
                color: '#60a5fa',
                zIndex: 1,
                '&:hover': {
                  color: '#3b82f6',
                },
              },
              '& .slick-dots li button:before': {
                color: '#94a3b8',
              },
              '& .slick-dots li.slick-active button:before': {
                color: '#60a5fa',
              },
            }}
          >
            <Slider {...sliderSettings}>
              {galleryGroupImages.map((image, index) => (
                <Box
                  key={index}
                  sx={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                      cursor: 'pointer',
                    },
                  }}
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'contain',
                      borderRadius: '12px',
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>

        {/* Team Pictures Collage (Grid View) */}
        <Box textAlign="center">
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              // color: '#f1f5f9',
               color: '#1e2a44',

              fontWeight: 'bold',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                borderRadius: '2px',
              },
            }}
          >
            Our Team
          </Typography>
          <Box
            ref={gridRef}
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
              },
              gap: 2,
              width: '100%',
            }}
          >
            {gallerySoloImages.map((image, index) => (
              <Box
                key={index}
                sx={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                  },
                }}
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    display: 'block',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Modal for Full-Size Image */}
      <Modal
        open={!!selectedImage}
        onClose={handleCloseModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(5px)',
        }}
      >
        <Box
          ref={modalRef}
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            bgcolor: 'rgba(50, 65, 119, 0.6)',
            borderRadius: '12px',
            p: 2,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            outline: 'none',
          }}
        >
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          )}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: '#f1f5f9',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
};

export default memo(Gallery);