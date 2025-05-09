import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import { gsap } from 'gsap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const motivesData = [
  {
    title: 'Mission',
    description: 'Our mission is to develop a beautiful planet and give the best to human beings. We have built a worldwide rappo with the leading companies in same field and has further enhanced our business by developing contacts in worldwide.',
    icon: <CheckCircleOutlineIcon sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#fff' }} />,
  },
  {
    title: 'Our Beliefs',
    description: 'Achieve and maintain a leadership position in each of our fields of expertise. We believe patience is the key of success and nothing can failure if you work hard definitely success will be the aspiration. Respect for individuals people are our greatest assets',
    icon: <VpnKeyIcon sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#fff' }} />,
  },
  {
    title: 'Commitments',
    description: 'We conduct business with respect and care for the environment in which we operate. We are committed to providing high-quality products and services that meet stakeholders’ expectations while ensuring that our operations are safe and reliable.',
    icon: <ChatBubbleOutlineIcon sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#fff' }} />,
  },
];

const MotiveContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  background: 'linear-gradient(135deg, #0a0f2d 0%, #1a2467 100%)',
  position: 'relative',
  minHeight: '50vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
}));

const SlideWrapper = styled(Box)(({ theme }) => ({
  display: 'flex !important',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'auto',
  width: '95%', // Increased width to give more room on mobile
  maxWidth: '1100px',
  padding: theme.spacing(2),
  background: 'linear-gradient(135deg, #0a0f2d 0%, #1a2467 100%)',
  borderRadius: '20px',
  margin: '0 auto',
  transition: 'transform 0.3s ease',
  textAlign: 'center',
  '&:hover': { transform: 'scale(1.01)' },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    textAlign: 'left',
    padding: theme.spacing(3),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  marginBottom: theme.spacing(2),
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    width: '25px',
    height: '8px',
    background: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '50%',
    filter: 'blur(4px)',
  },
  [theme.breakpoints.up('sm')]: {
    width: '60px',
    height: '60px',
  },
  [theme.breakpoints.up('md')]: {
    width: '80px',
    height: '80px',
  },
}));

interface MotiveData {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Motive: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    iconRefs.current.forEach((icon, index) => {
      if (icon) {
        gsap.to(icon, {
          y: -12,
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2,
        });
      }
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <MotiveContainer>
      <Box sx={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <Slider {...settings} ref={sliderRef}>
          {motivesData.map((motive: MotiveData, index: number) => (
            <SlideWrapper key={motive.title}>
              <Box
                sx={{
                  flex: 1,
                  pr: { xs: 0, sm: 3 },
                  mb: { xs: 2, sm: 0 },
                  maxWidth: { xs: '90%', sm: '100%' }, // Restrict width on mobile to prevent overflow
                  mx: 'auto', // Center the text box on mobile
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: '#fff',
                    fontWeight: 300,
                    fontSize: { xs: '1rem', sm: '1.4rem', md: '2rem' },
                    // textTransform: 'uppercase',
                    mb: 1,
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  {motive.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: { xs: '0.8rem', sm: '0.95rem', md: '1.1rem' }, // Slightly smaller on mobile
                    lineHeight: 1.6,
                    maxWidth: '100%',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',
                    overflowWrap: 'break-word',
                    textAlign: { xs: 'center', sm: 'left' },
                    overflow: 'hidden', // Ensure no overflow
                    textOverflow: 'ellipsis', // Add ellipsis if text still overflows
                  }}
                >
                  {motive.description}
                </Typography>
              </Box>
              <IconWrapper ref={(el) => (iconRefs.current[index] = el)}>
                {motive.icon}
              </IconWrapper>
            </SlideWrapper>
          ))}
        </Slider>
      </Box>
    </MotiveContainer>
  );
};

export default Motive;