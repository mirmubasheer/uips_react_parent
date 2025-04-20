
import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Modal, IconButton } from '@mui/material';
import Slider from 'react-slick';
import Masonry from 'react-masonry-css';
import gsap from 'gsap';
import CloseIcon from '@mui/icons-material/Close';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define interfaces for images
interface GalleryImage {
  src: string;
  alt: string;
}

// Group pictures for slider
const groupPictures: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1516321310766-61b7b7b93a47',
    alt: 'Team Group Photo 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    alt: 'Team Group Photo 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1557426277-33e0a4b0d73e',
    alt: 'Team Group Photo 3',
  },
];

// Team pictures for collage
const teamPictures: GalleryImage[] = [
  { src: 'https://randomuser.me/api/portraits/men/1.jpg', alt: 'Team Member 1' },
  { src: 'https://randomuser.me/api/portraits/women/2.jpg', alt: 'Team Member 2' },
  { src: 'https://randomuser.me/api/portraits/women/3.jpg', alt: 'Team Member 3' },
  { src: 'https://randomuser.me/api/portraits/men/4.jpg', alt: 'Team Member 4' },
  { src: 'https://randomuser.me/api/portraits/women/5.jpg', alt: 'Team Member 5' },
  { src: 'https://randomuser.me/api/portraits/men/6.jpg', alt: 'Team Member 6' },
  { src: 'https://randomuser.me/api/portraits/women/7.jpg', alt: 'Team Member 7' },
  { src: 'https://randomuser.me/api/portraits/men/8.jpg', alt: 'Team Member 8' },
];

const Gallery: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const masonryRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // GSAP animations
  useEffect(() => {
    // Slider animation
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

    // Masonry animation
    if (masonryRef.current) {
      gsap.fromTo(
        masonryRef.current.children,
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

  // Modal animation
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

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerPadding: '20px',
        },
      },
    ],
  };

  // Masonry breakpoints
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(180deg, #334155 0%, #475569 100%)',
      }}
    >
      <Container maxWidth="lg">
        {/* Group Pictures Slider */}
        <Box mb={8} textAlign="center">
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              color: '#f1f5f9',
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
              '& .slick-slide': {
                px: 2,
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
              {groupPictures.map((image, index) => (
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
                    style={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>

        {/* Team Pictures Collage */}
        <Box textAlign="center">
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              color: '#f1f5f9',
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
          <Masonry
            breakpointCols={breakpointColumnsObj}
            sx={{
              display: 'flex',
              ml: -2,
              width: 'auto',
              '& > div': {
                pl: 2,
                backgroundClip: 'padding-box',
                '& > div': {
                  mb: 2,
                },
              },
            }}
            ref={masonryRef}
          >
            {teamPictures.map((image, index) => (
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
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: index % 3 === 0 ? '4/3' : index % 2 === 0 ? '3/4' : '1/1',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    display: 'block',
                  }}
                />
              </Box>
            ))}
          </Masonry>
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
            bgcolor: 'rgba(15, 23, 42, 0.9)',
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

export default Gallery;
