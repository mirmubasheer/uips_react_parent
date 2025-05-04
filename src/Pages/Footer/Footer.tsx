import React, { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Grid, Link, Theme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { footersbanner } from '../../assets';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Styled components
const FooterWrapper = styled(Box)(({ theme }: { theme: Theme }) => ({
  position: 'relative',
  backgroundColor: '#1E1B4B',
  backgroundImage: `url(${footersbanner.fbanner1})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  padding: theme.spacing(7.5, 0),
  minHeight: '350px',
  zIndex: 999,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: -1,
    transition: 'opacity 0.5s ease',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(5, 0),
    minHeight: '300px',
  },
}));

const SocialIconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.875),
  marginTop: theme.spacing(2.5),
}));

// Interfaces
interface LinkItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

// Component
const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const textRefs = useRef<(HTMLElement | null)[]>([]);
  const socialRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const navigate = useNavigate();

  // Animation setup
  useEffect(() => {
    const elements = {
      footer: footerRef.current,
      texts: textRefs.current.filter(Boolean),
      links: linkRefs.current.filter(Boolean),
      socials: socialRefs.current.filter(Boolean),
    };

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(elements.footer, { opacity: 0, scale: 0.98, y: 50 }, { opacity: 1, scale: 1, y: 0, duration: 1.5 })
      .fromTo(elements.texts, { opacity: 0, y: 30, scale: 0.95 }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'elastic.out(1, 0.8)',
      }, '-=1.2')
      .fromTo(elements.links, { opacity: 0, y: 20, rotation: -5 }, {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      }, '-=0.8')
      .fromTo(elements.socials, { opacity: 0, scale: 0.8, rotation: -15 }, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.5)',
      }, '-=0.6');

    gsap.to(elements.footer, {
      backgroundPosition: 'center 20%',
      scrollTrigger: {
        trigger: elements.footer,
        scrub: 1.5,
        start: 'top bottom',
        end: 'bottom top',
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Animation handlers
  const animateHover = (target: HTMLAnchorElement | null, enter: boolean) => {
    if (!target) return;
    gsap.to(target, {
      scale: enter ? 1.1 : 1,
      color: enter ? '#1E3A8A' : 'white',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const animateSocialHover = (target: HTMLAnchorElement | null, enter: boolean) => {
    if (!target) return;
    gsap.to(target, {
      scale: enter ? 1.2 : 1,
      color: enter ? '#1E3A8A' : 'white',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleLinkClick = (path: string, refIndex: number) => {
    const target = linkRefs.current[refIndex];
    if (!target) return;

    gsap.to(target, {
      scale: 1.15,
      rotation: 5,
      duration: 0.4,
      ease: 'elastic.out(1, 0.5)',
      onComplete: () => navigate(path),
    });
  };

  // Data
  const linksData: Record<string, LinkItem[]> = {
    mainPages: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Careers', path: '/career' },
      { label: 'Certifications', path: '/certificates' },
    ],
    additionalPages: [
      { label: 'Privacy Policy', path: '/privacy-policy' },
    ],
    helpfulLinks: [
      { label: 'Our Services', path: '/services' },
      { label: 'Disclaimer', path: '/disclaimer' },
      { label: 'Showcase', path: '/showcase' },
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Affiliates', path: '/affiliates' },
    ],
    socialLinks: [
      { label: 'Facebook', path: 'https://facebook.com', icon: <FacebookIcon /> },
      { label: 'Twitter', path: 'https://twitter.com', icon: <TwitterIcon /> },
      { label: 'LinkedIn', path: 'https://linkedin.com', icon: <LinkedInIcon /> },
      { label: 'Instagram', path: 'https://instagram.com', icon: <InstagramIcon /> },
    ],
  };

  return (
    <FooterWrapper ref={footerRef}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={3}>
            <Typography
              variant="h4"
              color="white"
              sx={{ cursor: 'pointer', fontWeight: 'bold' }}
              ref={(el) => (textRefs.current[0] = el)}
              onClick={() => navigate('/')}
            >
              UIPS
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ mt: 2, mb: 3, fontStyle: 'italic' }}
              ref={(el) => (textRefs.current[1] = el)}
            >
              Al-Meflah Building, 4th Floor Suite 4B, 7th Cross, King Abdul Aziz Road
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ mb: 1 }}
              ref={(el) => (textRefs.current[2] = el)}
            >
              Al Khobar, Kingdom of Saudi Arabia
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ mb: 2 }}
              ref={(el) => (textRefs.current[3] = el)}
            >
              Phone: +966 13 896 8061
            </Typography>
            <Typography
              variant="h6"
              color="white"
              ref={(el) => (textRefs.current[4] = el)}
            >
              Business Hours
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ lineHeight: 1.6 }}
              ref={(el) => (textRefs.current[5] = el)}
            >
              Monday-Friday: 9am to 5pm
              <br />
              Saturday: 10am to 3pm
              <br />
              Sunday: Closed
            </Typography>
            <SocialIconWrapper>
              {linksData.socialLinks.map((social, index) => (
                <Link
                  href={social.path}
                  key={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => (socialRefs.current[index] = el)}
                  onMouseEnter={() => animateSocialHover(socialRefs.current[index], true)}
                  onMouseLeave={() => animateSocialHover(socialRefs.current[index], false)}
                  sx={{ color: 'white', transition: 'all 0.3s ease' }}
                >
                  {social.icon}
                </Link>
              ))}
            </SocialIconWrapper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              color="white"
              ref={(el) => (textRefs.current[6] = el)}
            >
              Explore
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}>
              {linksData.mainPages.map((page, index) => (
                <Link
                  href={page.path}
                  key={page.label}
                  ref={(el) => (linkRefs.current[index] = el)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(page.path, index);
                  }}
                  onMouseEnter={() => animateHover(linkRefs.current[index], true)}
                  onMouseLeave={() => animateHover(linkRefs.current[index], false)}
                  sx={{ color: 'white', textDecoration: 'none', my: 0.5 }}
                >
                  {page.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              color="white"
              ref={(el) => (textRefs.current[7] = el)}
            >
              More
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}>
              {linksData.additionalPages.map((page, index) => (
                <Link
                  href={page.path}
                  key={page.label}
                  ref={(el) => (linkRefs.current[linksData.mainPages.length + index] = el)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(page.path, linksData.mainPages.length + index);
                  }}
                  onMouseEnter={() => animateHover(linkRefs.current[linksData.mainPages.length + index], true)}
                  onMouseLeave={() => animateHover(linkRefs.current[linksData.mainPages.length + index], false)}
                  sx={{ color: 'white', textDecoration: 'none', my: 0.5 }}
                >
                  {page.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              color="white"
              ref={(el) => (textRefs.current[8] = el)}
            >
              Helpful Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}>
              {linksData.helpfulLinks.map((link, index) => (
                <Link
                  href={link.path}
                  key={link.label}
                  ref={(el) => (linkRefs.current[linksData.mainPages.length + linksData.additionalPages.length + index] = el)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.path, linksData.mainPages.length + linksData.additionalPages.length + index);
                  }}
                  onMouseEnter={() => animateHover(linkRefs.current[linksData.mainPages.length + linksData.additionalPages.length + index], true)}
                  onMouseLeave={() => animateHover(linkRefs.current[linksData.mainPages.length + linksData.additionalPages.length + index], false)}
                  sx={{ color: 'white', textDecoration: 'none', my: 0.5 }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="white"
          align="center"
          sx={{ mt: 4, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}
          ref={(el) => (textRefs.current[9] = el)}
        >
          © 2025 All Rights Reserved | Designed by UIPS
        </Typography>
      </Container>
    </FooterWrapper>
  );
};

export default memo(Footer);