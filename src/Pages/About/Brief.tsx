import React, { useRef, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AboutSectionImages } from '../../assets';

gsap.registerPlugin(ScrollTrigger);

interface Section {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  isImageLeft: boolean;
}

const Brief: React.FC = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sectionData: Section[] = [
    {
      title: 'About Us',
      content:
        'Utilities & Industrial Power Services (UIPS) is a 100% Saudi owned company based in Al-Khobar, Saudi Arabia. The company was established in June 2003 to cater Industrial & Building sector.',
      imageSrc: AboutSectionImages.ab00,
      imageAlt: 'About Us Image',
      isImageLeft: true,
    },
    {
      title: 'About Company',
      content:
        'The company is a Saudi based Engineering, Procurement and Installation Contracting Company with specialized local know-how managed by a high qualified and experienced team of engineers.',
      imageSrc: AboutSectionImages.ab01,
      imageAlt: 'About Company Image',
      isImageLeft: false,
    },
    {
      title: 'Our Goal',
      content:
        'UIPS goal and focus is on Customer satisfaction by providing Quality and Efficient Solutions & Services. We implement and maintain ARAMCO, SABIC, SEC and International quality standards.',
      imageSrc: AboutSectionImages.ab02,
      imageAlt: 'Our Goal Image',
      isImageLeft: true,
    },
  ];

  useEffect(() => {
    imageRefs.current.forEach((image, index) => {
      if (image && contentRefs.current[index]) {
        // Image animation
        gsap.fromTo(
          image,
          { scale: 0.85, opacity: 0, x: sectionData[index].isImageLeft ? -50 : 50 },
          {
            scale: 1,
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: image,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Content animation
        gsap.fromTo(
          contentRefs.current[index],
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRefs.current[index],
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Hover effect for image
        const handleEnter = () =>
          gsap.to(image, { scale: 1.03, duration: 0.3, ease: 'power2.out' });
        const handleLeave = () =>
          gsap.to(image, { scale: 1, duration: 0.3, ease: 'power2.out' });

        image.addEventListener('mouseenter', handleEnter);
        image.addEventListener('mouseleave', handleLeave);

        return () => {
          image.removeEventListener('mouseenter', handleEnter);
          image.removeEventListener('mouseleave', handleLeave);
        };
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Box
      sx={{
        // background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)',
        background: 'rgba(50, 65, 119, 0.4)',
        py: { xs: 6, md: 10 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {sectionData.map((section, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: section.isImageLeft ? 'row' : 'row-reverse',
              },
              alignItems: 'center',
              gap: { xs: 4, md: 6 },
              mb: { xs: 8, md: 12 },
            }}
          >
            {/* Image Box */}
            <Box
              ref={(el) => (imageRefs.current[index] = el)}
              sx={{
                flex: 1,
                maxWidth: { xs: '100%', md: '50%' },
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
                },
                '& img': {
                  width: '100%',
                  height: { xs: '240px', md: '320px' },
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '12px',
                },
              }}
            >
              <img src={section.imageSrc} alt={section.imageAlt} />
            </Box>

            {/* Content Box */}
            <Box
              ref={(el) => (contentRefs.current[index] = el)}
              sx={{
                flex: 1,
                p: { xs: 3, md: 4 },
                textAlign: { xs: 'center', md: 'left' },
                color: '#e2e8f0',
                // background: 'rgba(15, 23, 42, 0.6)',
                borderRadius: '12px',
                // boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  // color: '#f1f5f9',
                   color: '#1e2a44',

                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                    borderRadius: '2px',
                  },
                }}
              >
                {section.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.9,
                   color: '#1e2a44',
                     textAlign: { xs: 'justify', sm: 'justify', md:'justify' },
                }}
              >
                {section.content}
              </Typography>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Brief;