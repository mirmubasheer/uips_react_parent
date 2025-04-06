import React, { useEffect, useRef, useState } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';
import gsap from 'gsap';
import BreadcrumbComponent from '../BreadCrumb/BreadcrumbComponent'; // Adjust path as needed

// Import the BreadcrumbItem interface from BreadcrumbComponent or define it here for consistency
interface BreadcrumbItem {
  label: string;
  href?: string; // Optional, for links
}

interface HeaderAllProps {
  imageSrc: string; // Dynamic image source
  title: string; // Dynamic title (e.g., "Projects", "About Us", "Contact Us")
  breadcrumbItems: BreadcrumbItem[]; // Use the same interface as BreadcrumbComponent
}

const HeaderAll: React.FC<HeaderAllProps> = ({ imageSrc, title, breadcrumbItems }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Preload the image synchronously and handle loading state
    const img = new Image();

    // Start with a loading state
    setImageLoaded(false);
    setImageError(false);

    img.src = imageSrc;

    // Ensure image loads before rendering
    const handleLoad = () => {
      console.log('Image loaded successfully:', imageSrc);
      setImageLoaded(true);
      setImageError(false);
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: 'power2.out',
        });
      }
    };

    const handleError = () => {
      console.error('Image failed to load:', imageSrc);
      setImageLoaded(false);
      setImageError(true);
    };

    img.onload = handleLoad;
    img.onerror = handleError;

    return () => {
      if (headerRef.current) {
        gsap.killTweensOf(headerRef.current);
      }
      img.onload = null;
      img.onerror = null;
    };
  }, [imageSrc]); // Add imageSrc to dependency array to re-run effect if image changes

  return (
    <Box
      ref={headerRef}
      sx={{
        position: 'relative',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#F0F0F0',
        transition: 'background-color 0.3s ease-in-out',
      }}
      className="top-header"
    >
      {/* Skeleton Loader or Fallback */}
      {!imageLoaded && !imageError && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F0F0F0',
          }}
        >
          <CircularProgress sx={{ color: '#40C4FF' }} />
        </Box>
      )}

      {imageError && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F0F0F0',
            color: '#666',
          }}
        >
          Failed to load image. Using fallback.
        </Box>
      )}

      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      />

      {/* Black Overlay */}
      {imageLoaded && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1, // Above the background image, below the content
          }}
        />
      )}

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2, // Above the overlay
          textAlign: 'center',
          color: '#FFFFFF',
          padding: 2,
        }}
      >
        <BreadcrumbComponent items={breadcrumbItems} />
        <Typography variant="h2" sx={{ mt: 1, color: '#FFFFFF' }}>
          {title}
        </Typography>
      </Box>

      {/* Ensure background transitions to transparent when image loads */}
      {imageLoaded && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'transparent',
            zIndex: -1, // Behind everything
          }}
        />
      )}
    </Box>
  );
};

export default HeaderAll;