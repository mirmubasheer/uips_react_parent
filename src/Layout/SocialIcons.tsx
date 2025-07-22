import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';
import { gsap } from 'gsap';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareIcon from '@mui/icons-material/Share';

// Styled Components
const SocialContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(11), // Moved slightly upwards
  right: theme.spacing(3.5), // Moved slightly to the left
  zIndex: 1100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const MainButton = styled(IconButton)(({ theme }: { theme: Theme }) => ({
  // background: 'linear-gradient(135deg, #30779d 0%, #1e4b66 100%)',
  background: 'linear-gradient(160deg, #324177 0%, #2D3E66 100%)',
  color: 'white',
  width: theme.spacing(7), // Increased radius
  height: theme.spacing(7), // Increased radius
  boxShadow: '0px 4px 15px rgba(48, 119, 157, 0.4)',
  border: '2px solid #ffffff',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    // background: 'linear-gradient(135deg, #1e4b66 0%, #30779d 100%)',
        background: 'linear-gradient(160deg, #324177 0%, #2D3E66 100%)',
    transform: 'scale(1.1)',
    boxShadow: '0px 6px 20px rgba(48, 119, 157, 0.6)',
  },
  [theme.breakpoints.down('sm')]: {
    width: theme.spacing(5.5),
    height: theme.spacing(5.5),
  },
}));

const StyledSocialButton = (color1: string, color2: string) => styled(IconButton)(({ theme }: { theme: Theme }) => ({
  background: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`,
  color: 'white',
  width: theme.spacing(5.5),
  height: theme.spacing(5.5),
  border: '3px solid #ffffff',
  boxShadow: `0px 4px 15px ${color1}66`,
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
    top: 0,
    left: 0,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::after': {
    opacity: 1,
  },
  '&:hover': {
    transform: 'scale(1.2) rotate(5deg)',
    boxShadow: `0px 6px 20px ${color1}99`,
  },
  [theme.breakpoints.down('sm')]: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
  },
}));

const WhatsAppButton = StyledSocialButton('#25D366', '#128C7E');
const FacebookButton = StyledSocialButton('#1877F2', '#0A66C2');
const TwitterButton = StyledSocialButton('#1DA1F2', '#0D8BCE');
const InstagramButton = StyledSocialButton('#F58529', '#DD2A7B');

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  special: 'whatsapp' | 'facebook' | 'twitter' | 'instagram';
}

const SocialIcons: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const socialRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const handleScroll = () => {
      const visible = window.scrollY > 100;
      setIsVisible(visible);
      if (!visible) setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const socialButtons = socialRefs.current.filter(Boolean);
    const spacing = isSmallScreen ? 60 : 70;

    gsap.set(socialButtons, { y: 0, opacity: 0, scale: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(socialButtons, {
      y: -spacing,
      opacity: 1,
      scale: 1,
      rotation: 360,
      duration: 0.6,
      stagger: 0.1,
      ease: 'elastic.out(1, 0.5)',
    });

    gsap.to(containerRef.current, {
      opacity: isVisible ? 1 : 0,
      y: isVisible ? -10 : 50,
      duration: 0.4,
      ease: 'power2.out',
    });

    if (isVisible && isOpen) {
      tl.play();
    } else {
      tl.reverse();
    }

    return () => {
      tl.kill();
    };
  }, [isOpen, isVisible, isSmallScreen]);

  const toggleSocialIcons = () => {
    if (isVisible) setIsOpen((prev) => !prev);
  };

  const socialLinks: SocialLink[] = [
    { icon: <WhatsAppIcon />, href: 'https://wa.me/966138968061', special: 'whatsapp' },
    { icon: <FacebookIcon />, href: 'https://facebook.com', special: 'facebook' },
    { icon: <TwitterIcon />, href: 'https://x.com/uips_ksa', special: 'twitter' },
    { icon: <InstagramIcon />, href: 'https://www.instagram.com/uips_ksa/', special: 'instagram' },
  ];

  const getButtonComponent = (type: SocialLink['special']) => {
    switch (type) {
      case 'whatsapp': return WhatsAppButton;
      case 'facebook': return FacebookButton;
      case 'twitter': return TwitterButton;
      case 'instagram': return InstagramButton;
      default: return IconButton;
    }
  };

  return (
    <SocialContainer ref={containerRef}>
      {socialLinks.map((social, index) => {
        const ButtonComponent = getButtonComponent(social.special);
        return (
          <Box key={index} mb={1.5}>
            <ButtonComponent
              ref={(el) => (socialRefs.current[index] = el)}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              component="a"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                window.open(social.href, '_blank');
              }}
            >
              {social.icon}
            </ButtonComponent>
          </Box>
        );
      })}
      <MainButton onClick={toggleSocialIcons}>
        <ShareIcon fontSize={isSmallScreen ? 'small' : 'medium'} />
      </MainButton>
    </SocialContainer>
  );
};

export default SocialIcons;
