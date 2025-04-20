
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { footersbanner } from '../../assets'; // Use index.ts export
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Styled components
const FooterWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#1E1B4B',
  backgroundImage: `url(${footersbanner.fbanner1})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  padding: '60px 0',
  minHeight: '350px',
  zIndex: 999,
  display: 'block',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: -1,
    transition: 'opacity 0.5s ease',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '40px 0',
  },
}));

const SocialIconWrapper = styled(Box)({
  display: 'flex',
  gap: '15px',
  marginTop: '20px',
});

// Interface for link data
interface LinkItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

const Footer: React.FC = () => {
  // Refs for animations
  const footerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const textRefs = useRef<(HTMLHeadingElement | HTMLParagraphElement | null)[]>([]);
  const socialRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const navigate = useNavigate();

  // GSAP animations
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
    });

    // Footer entrance animation
    tl.fromTo(
      footerRef.current,
      { opacity: 0, scale: 0.98, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 1.5 }
    );

    // Text animation
    tl.fromTo(
      textRefs.current.filter(Boolean),
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'elastic.out(1, 0.8)',
      },
      '-=1.2'
    );

    // Link animation
    tl.fromTo(
      linkRefs.current.filter(Boolean),
      { opacity: 0, y: 20, rotation: -5 },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      },
      '-=0.8'
    );

    // Social icons animation
    tl.fromTo(
      socialRefs.current.filter(Boolean),
      { opacity: 0, scale: 0.8, rotation: -15 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.5)',
      },
      '-=0.6'
    );

    // Parallax background effect
    gsap.to(footerRef.current, {
      backgroundPosition: 'center 20%',
      scrollTrigger: {
        trigger: footerRef.current,
        scrub: 1.5,
        start: 'top bottom',
        end: 'bottom top',
      },
    });

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Link hover animations
  const handleLinkHover = (target: HTMLAnchorElement | null) => {
    if (target) {
      gsap.to(target, {
        scale: 1.1,
        color: '#1E3A8A',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleLinkHoverOut = (target: HTMLAnchorElement | null) => {
    if (target) {
      gsap.to(target, {
        scale: 1,
        color: 'white',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  // Social icon hover animations
  const handleSocialHover = (target: HTMLAnchorElement | null) => {
    if (target) {
      gsap.to(target, {
        scale: 1.2,
        color: '#1E3A8A',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleSocialHoverOut = (target: HTMLAnchorElement | null) => {
    if (target) {
      gsap.to(target, {
        scale: 1,
        color: 'white',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  // Link click animation and navigation
  const handleLinkClick = (path: string) => {
    const target = linkRefs.current.find((ref) => ref?.getAttribute('href') === path);
    if (target) {
      gsap.to(target, {
        scale: 1.15,
        rotation: 5,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)',
        onComplete: () => navigate(path),
      });
    }
  };

  // Link data
  const mainPages: LinkItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
    { label: 'Careers', path: '/careers' },
    { label: 'Certifications', path: '/certifications' },
  ];

  const additionalPages: LinkItem[] = [
    { label: 'Services', path: '/services' },
    { label: 'Affiliates', path: '/affiliates' },
    { label: 'Disclaimer', path: '/disclaimer' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Career', path: '/career' },
  ];

  const helpfulLinks: LinkItem[] = [
    { label: 'Our Services', path: '/services' },
    { label: 'Disclaimer', path: '/disclaimer' },
    { label: 'Showcase', path: '/showcase' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Affiliates', path: '/affiliates' },
  ];

  const socialLinks: LinkItem[] = [
    { label: 'Facebook', path: 'https://facebook.com', icon: <FacebookIcon /> },
    { label: 'Twitter', path: 'https://twitter.com', icon: <TwitterIcon /> },
    { label: 'LinkedIn', path: 'https://linkedin.com', icon: <LinkedInIcon /> },
    { label: 'Instagram', path: 'https://instagram.com', icon: <InstagramIcon /> },
  ];

  return (
    <FooterWrapper ref={footerRef}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info Section */}
          <Grid component="div" item xs={12} md={3}>
            <Typography
              component="h4"
              variant="h4"
              sx={{ color: 'white', cursor: 'pointer', fontWeight: 'bold' }}
              ref={(el) => (textRefs.current[0] = el)}
              onClick={() => navigate('/')}
            >
              UIPS
            </Typography>
            <Typography
              component="p"
              variant="body2"
              sx={{ color: 'white', mt: 2, mb: 3, fontStyle: 'italic' }}
              ref={(el) => (textRefs.current[1] = el)}
            >
              Al-Meflah Building, 4th Floor Suite 4B, 7th Cross, King Abdul Aziz Road
            </Typography>
            <Typography
              component="p"
              variant="body2"
              sx={{ color: 'white', mb: 1 }}
              ref={(el) => (textRefs.current[2] = el)}
            >
              Al Khobar, Kingdom of Saudi Arabia
            </Typography>
            <Typography
              component="p"
              variant="body2"
              sx={{ color: 'white', mb: 2 }}
              ref={(el) => (textRefs.current[3] = el)}
            >
              Phone: +966 13 896 8061
            </Typography>
            <Typography
              component="h6"
              variant="h6"
              sx={{ color: 'white' }}
              ref={(el) => (textRefs.current[4] = el)}
            >
              Business Hours
            </Typography>
            <Typography
              component="p"
              variant="body2"
              sx={{ color: 'white', lineHeight: 1.6 }}
              ref={(el) => (textRefs.current[5] = el)}
            >
              Monday-Friday: 9am to 5pm
              <br />
              Saturday: 10am to 3pm
              <br />
              Sunday: Closed
            </Typography>
            <SocialIconWrapper>
              {socialLinks.map((social, index) => (
                <Link
                  component="a"
                  key={social.label}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => (socialRefs.current[index] = el)}
                  onMouseEnter={() => handleSocialHover(socialRefs.current[index])}
                  onMouseLeave={() => handleSocialHoverOut(socialRefs.current[index])}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </Link>
              ))}
            </SocialIconWrapper>
          </Grid>

          {/* Explore Section */}
          <Grid component="div" item xs={12} md={3}>
            <Typography
              component="h6"
              variant="h6"
              sx={{ color: 'white' }}
              ref={(el) => (textRefs.current[6] = el)}
            >
              Explore
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {mainPages.map((page, index) => (
                <Link
                  component="a"
                  key={page.label}
                  href={page.path}
                  ref={(el) => (linkRefs.current[index] = el)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(page.path);
                  }}
                  onMouseEnter={() => handleLinkHover(linkRefs.current[index])}
                  onMouseLeave={() => handleLinkHoverOut(linkRefs.current[index])}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    mt: 1,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {page.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* More Section */}
          <Grid component="div" item xs={12} md={3}>
            <Typography
              component="h6"
              variant="h6"
              sx={{ color: 'white' }}
              ref={(el) => (textRefs.current[7] = el)}
            >
              More
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {additionalPages.map((page, index) => (
                <Link
                  component="a"
                  key={page.label}
                  href={page.path}
                  ref={(el) => (linkRefs.current[mainPages.length + index] = el)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(page.path);
                  }}
                  onMouseEnter={() => handleLinkHover(linkRefs.current[mainPages.length + index])}
                  onMouseLeave={() => handleLinkHoverOut(linkRefs.current[mainPages.length + index])}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    mt: 1,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {page.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Helpful Links Section */}
          <Grid component="div" item xs={12} md={3}>
            <Typography
              component="h6"
              variant="h6"
              sx={{ color: 'white' }}
              ref={(el) => (textRefs.current[8] = el)}
            >
              Helpful Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {helpfulLinks.map((link, index) => (
                <Link
                  component="a"
                  key={link.label}
                  href={link.path}
                  ref={(el) =>
                    (linkRefs.current[mainPages.length + additionalPages.length + index] = el)
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.path);
                  }}
                  onMouseEnter={() =>
                    handleLinkHover(linkRefs.current[mainPages.length + additionalPages.length + index])
                  }
                  onMouseLeave={() =>
                    handleLinkHoverOut(linkRefs.current[mainPages.length + additionalPages.length + index])
                  }
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    mt: 1,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          component="p"
          sx={{ color: 'white', textAlign: 'center', mt: 4, fontSize: '0.9rem' }}
          ref={(el) => (textRefs.current[9] = el)}
        >
          © 2025 All Rights Reserved | Designed by UIPS
        </Typography>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
