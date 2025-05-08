import React, { useEffect, useRef, useState, memo } from 'react';
import { Typography, Box } from '@mui/material';
import gsap from 'gsap';
import BreadcrumbComponent from '../BreadCrumb/BreadcrumbComponent';
import { projectbanner } from '../../assets';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeaderAllProps {
  imageSrc: string;
  title: string;
  breadcrumbItems: BreadcrumbItem[];
}

const HeaderAll: React.FC<HeaderAllProps> = ({ imageSrc, title, breadcrumbItems }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Fallback placeholder (LQIP or gradient matching #F0F0F0)
  const placeholderImage = projectbanner.defaultBannerLowRes || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 400"%3E%3Crect width="1600" height="400" fill="%23F0F0F0"/%3E%3C/svg%3E';

  useEffect(() => {
    // Preload the high-quality image
    const img = new Image();
    img.src = imageSrc;
    img.fetchPriority = 'high';
    img.decoding = 'async';

    const handleLoad = () => {
      setImageLoaded(true);
      setImageError(false);
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: 'power2.out',
          willChange: 'opacity, transform', // Optimize for animations
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
      img.onload = null;
      img.onerror = null;
      if (headerRef.current) {
        gsap.killTweensOf(headerRef.current);
      }
    };
  }, [imageSrc]);

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
      {/* Placeholder Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${placeholderImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          opacity: imageLoaded && !imageError ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      />

      {/* High-Quality Background Image */}
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
          opacity: imageLoaded && !imageError ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      />

      {/* Black Overlay */}
      {imageLoaded && !imageError && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        />
      )}

      {/* Error Fallback */}
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

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
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

      {/* Transparent Background on Load */}
      {imageLoaded && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'transparent',
            zIndex: -1,
          }}
        />
      )}
    </Box>
  );
};

export default memo(HeaderAll);