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
  isImageLeft: boolean; // Determines if image is on the left or right
}

const Brief: React.FC = () => {
  const sections = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sectionData: Section[] = [
    {
      title: 'About Us',
      content: 'Utilities & Industrial Power Services (UIPS) is a 100% Saudi owned company based in Al-Khobar, Saudi Arabia. The company was established in June 2003 to cater Industrial & Building sector.',
      imageSrc: AboutSectionImages.ab00,
      imageAlt: 'About Us Image',
      isImageLeft: true,
    },
    {
      title: 'About Company',
      content: 'The company is a Saudi based Engineering, Procurement and Installation Contracting Company with specialized local know-how managed by a high qualified and experienced team of engineers.',
      imageSrc: AboutSectionImages.ab01,
      imageAlt: 'About Company Image',
      isImageLeft: false,
    },
    {
      title: 'Our Goal',
      content: 'UIPS goal and focus is on Customer satisfaction by providing Quality and Efficient Solutions & Services. We implement and maintain ARAMCO, SABIC, SEC and International quality standards.',
      imageSrc: AboutSectionImages.ab02,
      imageAlt: 'Our Goal Image',
      isImageLeft: true,
    },
  ];

  useEffect(() => {
    // Normal scrolling with gentle snap when stopping
    gsap.utils.toArray(sections.current).forEach((section: any, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%', // Start when section is 80% from top of viewport
        end: 'bottom 20%', // End when section is 20% from bottom
        onEnter: () => {
          gsap.to(window, {
            duration: 0.5,
            scrollTo: {
              y: section,
              autoKill: true, // Allow manual scrolling to override
            },
            ease: 'power2.out',
          });
        },
        onEnterBack: () => {
          gsap.to(window, {
            duration: 0.5,
            scrollTo: {
              y: section,
              autoKill: true,
            },
            ease: 'power2.out',
          });
        },
        markers: false, // Set to true for debugging
      });
    });

    // Image animations (initial and hover)
    imageRefs.current.forEach((image, index) => {
      if (image) {
        gsap.fromTo(
          image,
          { scale: 0.2, opacity: 0, rotate: 1 },
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 1.5,
            ease: 'power2.out',
          }
        );

        // Hover effect
        image.addEventListener('mouseenter', () => {
          gsap.to(image, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        image.addEventListener('mouseleave', () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1E3A8A 0%, #2A4D9C 50%, #1E3A8A 100%)',
        py: 25,
        minHeight: 'auto', // Allow content to determine height, no forced viewport
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {sectionData.map((section, index) => (
          <Box
            key={index}
            ref={(el) => (sections.current[index] = el)}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: section.isImageLeft ? 'row' : 'row-reverse' },
              alignItems: 'center',
              gap: 6,
              mb: 25,
              '&:last-child': { mb: 2 },
            }}
          >
            {/* Image Section */}
            <Box
              ref={(el) => (imageRefs.current[index] = el)}
              sx={{
                flex: 1,
                overflow: 'hidden',
                borderRadius: 3,
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                maxWidth: { xs: '100%', md: '50%' },
                '& img': {
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                  borderRadius: 3,
                },
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)',
                  borderRadius: 3,
                },
              }}
            >
              <img src={section.imageSrc} alt={section.imageAlt} />
            </Box>

            {/* Content Section */}
            <Box
              sx={{
                flex: 1,
                p: { xs: 2, md: 4 },
                textAlign: { xs: 'center', md: 'left' },
                color: '#FFFFFF',
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                  letterSpacing: '0.5px',
                  position: 'relative',
                  display: 'inline-block',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-8px',
                    left: 0,
                    width: '50px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #FFD700, #FFA500)',
                    borderRadius: '2px',
                  },
                }}
              >
                {section.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: '#FFFFFF',
                  fontSize: '1.1rem',
                  mt: 2,
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