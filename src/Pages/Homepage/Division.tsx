// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import gsap from 'gsap';
// import { divisions, Division } from '../../assets/data/Divisions'; // Import from Divisions.ts
// import { Alldivisions } from '../../assets';

// const StyledCard = styled(Card)(({ theme }) => ({
//   backgroundColor: '#1E2A44',
//   color: '#A3BFFA',
//   borderRadius: '12px',
//   overflow: 'hidden',
//   boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
//   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   cursor: 'pointer',
//   width: '100%',
//   maxWidth: '350px',
//   margin: '0 auto',
//   display: 'flex',
//   flexDirection: 'column',
//   height: '400px',
//   border: '1px solid rgba(59, 130, 246, 0.2)',
//   '&:hover': {
//     transform: 'scale(1.05)',
//     boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)',
//   },
// }));

// const StyledCardContent = styled(CardContent)({
//   flexGrow: 1,
//   color: '#A3BFFA',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
// });

// const DivisionPage: React.FC = () => {
//   const navigate = useNavigate();
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // GSAP animation on mount
//   useEffect(() => {
//     cardRefs.current.forEach((el, index) => {
//       if (el) {
//         gsap.fromTo(
//           el,
//           { opacity: 0, y: 50 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             delay: index * 0.2,
//             ease: 'power3.out',
//           }
//         );
//       }
//     });
//   }, []);

//   // Handle card click and redirect
//   const handleCardClick = (title: string) => {
//     const slug = title.toLowerCase().replace(/\s+/g, '-');
//     navigate(`/division/${slug}`);
//   };

//   return (
//     <Box
//       sx={{
//         py: 6,
//         background: 'linear-gradient(to bottom, #0F1A33, #1E2A44)',
//         minHeight: '100vh',
//       }}
//     >
//       <Typography
//         variant="h3"
//         align="center"
//         sx={{ color: '#A3BFFA', mb: 6, fontWeight: 'bold' }}
//       >
//         Our Divisions
//       </Typography>
//       <Grid
//         container
//         spacing={4}
//         justifyContent="center"
//         sx={{ px: { xs: 2, md: 4 }, maxWidth: '1300px', mx: 'auto' }}
//       >
//         {divisions.map((division, index) => (
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             md={4}
//             key={division.title}
//             ref={(el) => (cardRefs.current[index] = el)}
//           >
//             <StyledCard onClick={() => handleCardClick(division.title)}>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={Alldivisions[division.image]}
//                 alt={division.title}
//                 sx={{
//                   objectFit: 'cover',
//                   transition: 'opacity 0.3s ease',
//                   '&:hover': {
//                     opacity: 0.9,
//                   },
//                 }}
//               />
//               <StyledCardContent>
//                 <Typography
//                   variant="h5"
//                   gutterBottom
//                   sx={{ fontWeight: 'bold', color: '#A3BFFA' }}
//                 >
//                   {division.title}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: '#CBD5E1', opacity: 0.9 }}>
//                   {division.description}
//                 </Typography>
//               </StyledCardContent>
//             </StyledCard>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default DivisionPage;



import React, { useEffect, useRef, memo, useState, useDeferredValue } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid, Box, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from 'framer-motion';
import { divisions, Division } from '../../assets/data/Divisions';
import { Alldivisions } from '../../assets';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1E2A44',
  color: '#A3BFFA',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
  cursor: 'pointer',
  width: '100%',
  maxWidth: '360px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  height: '420px',
  border: '1px solid rgba(59, 130, 246, 0.2)',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
    backgroundColor: '#25335A',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '320px',
    height: '400px',
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  color: '#E0E7FF',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(2.5),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '5rem',
  fontWeight: 600,
  letterSpacing: '0.8px',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  color: '#A5B4FC',
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    fontSize: '3rem',
  },
}));

const preloadImages = (images: string[], count: number) => {
  images.slice(0, count).forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

const CardSkeleton = () => (
  <Grid item xs={12} sm={6} md={4} component="div">
    <StyledCard>
      <Skeleton variant="rectangular" height={200} sx={{ bgcolor: '#2D3E66' }} />
      <StyledCardContent>
        <Skeleton variant="text" width="80%" sx={{ mb: 1, bgcolor: '#2D3E66' }} />
        <Skeleton variant="text" width="60%" sx={{ bgcolor: '#2D3E66' }} />
      </StyledCardContent>
    </StyledCard>
  </Grid>
);

const DivisionCard: React.FC<{
  division: Division;
  index: number;
  handleCardClick: (title: string) => void;
}> = memo(
  ({ division, index, handleCardClick }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const shouldReduceMotion = useReducedMotion();
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (inView && cardRef.current && !shouldReduceMotion) {
        const tween = gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
            willChange: 'transform, opacity',
          }
        );
        return () => {
          tween.kill();
        };
      }
    }, [inView, shouldReduceMotion]);

    return (
      <Grid item xs={12} sm={6} md={4} component="div" ref={ref}>
        <StyledCard
          ref={cardRef}
          onClick={() => handleCardClick(division.title)}
          sx={{ opacity: inView ? 1 : 0, transition: 'opacity 0.3s ease' }}
        >
          <CardMedia
            component="img"
            height="200"
            image={Alldivisions[division.image] || 'https://via.placeholder.com/360x200?text=Image+Not+Found'}
            alt={division.title}
            sx={{
              objectFit: 'cover',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              '&:hover': {
                opacity: 0.95,
                transform: 'scale(1.02)',
              },
            }}
            loading={index < 3 ? 'eager' : 'lazy'}
            onError={(e: React.SyntheticEvent<HTMLImageElement>) =>
              (e.currentTarget.src = 'https://via.placeholder.com/360x200?text=Image+Not+Found')
            }
          />
          <StyledCardContent>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                fontWeight: 600,
                color: '#A3BFFA',
                fontSize: '1.4rem',
                letterSpacing: '0.2px',
                mb: 1.5,
              }}
            >
              {division.title}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                color: '#CBD5E1',
                opacity: 0.9,
                fontSize: '1rem',
                lineHeight: 1.6,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {division.description}
            </Typography>
          </StyledCardContent>
        </StyledCard>
      </Grid>
    );
  },
  (prevProps, nextProps) =>
    prevProps.division.title === nextProps.division.title &&
    prevProps.index === nextProps.index
);

const DivisionPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const deferredDivisions = useDeferredValue(divisions);

  useEffect(() => {
    try {
      const imageKeys = divisions.slice(0, 3).map((division) => Alldivisions[division.image]);
      preloadImages(imageKeys, 3);
      setIsLoading(false);
    } catch (err) {
      console.error('Error preloading images:', err);
      setError('Failed to load division images');
      setIsLoading(false);
    }

    return () => {
      const links = document.querySelectorAll('link[rel="preload"][as="image"]');
      links.forEach((link) => link.remove());
    };
  }, []);

  const handleCardClick = (title: string) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/division/${slug}`);
  };

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(to bottom, #0F1A33, #1E2A44)',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 4,
        overflow: 'hidden',
      }}
    >
      <SectionTitle align="center">Our Divisions</SectionTitle>
      {error ? (
        <Typography
          variant="h6"
          component="h6"
          align="center"
          sx={{ color: '#E0E7FF', mt: 4, opacity: 0.8 }}
        >
          {error}
        </Typography>
      ) : (
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ px: { xs: 2, md: 4 }, maxWidth: '1400px', mx: 'auto' }}
        >
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => <CardSkeleton key={index} />)
            : deferredDivisions.map((division, index) => (
                <DivisionCard
                  key={division.title}
                  division={division}
                  index={index}
                  handleCardClick={handleCardClick}
                />
              ))}
        </Grid>
      )}
    </Box>
  );
};

export default memo(DivisionPage);
