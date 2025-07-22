// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import Slider from 'react-slick';
// import { gsap } from 'gsap';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// // Types
// interface Project {
//   id: number;
//   slug: string;
//   projectname: string;
//   client: string;
//   location: string;
//   status: string;
//   images: any[];
//   description: string;
//   monthyear: string;
//   duration: string;
//   povalue: string;
//   totalmanhour: string;
//   division: string;
// }

// interface Division {
//   name: string;
//   description: string;
//   clients: string[];
//   img: string;
//   projects: Project[];
// }

// // List of division slugs
// const divisions = [
//   'civil',
//   'electrical',
//   'shutdowns',
//   'instrumentation',
//   'power',
//   'it',
//   'mechanical',
// ];

// // Styled components
// const ProjectCard = styled(Card)(({ theme }) => ({
//   maxWidth: '320px',
//   height: '400px',
//   background: 'linear-gradient(160deg, #1E2A44 0%, #2D3E66 100%)',
//   borderRadius: '12px',
//   overflow: 'hidden',
//   transition: 'transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease',
//   boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
//   border: '1px solid rgba(59, 130, 246, 0.2)',
//   '&:hover': {
//     transform: 'translateY(-6px)',
//     boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
//     background: 'linear-gradient(160deg, #2D3E66 0%, #3B82F6 100%)',
//   },
//   margin: '0 8px',
//   [theme.breakpoints.down('sm')]: {
//     maxWidth: '280px',
//   },
// }));

// const ProjectsContainer = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(4),
//   background: 'linear-gradient(to bottom, #0F1A33, #1E2A44)',
//   position: 'relative',
//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
//     zIndex: 0,
//   },
// }));

// const SeeAllButton = styled(Button)(({ theme }) => ({
//   display: 'block',
//   margin: '20px auto 0',
//   background: 'linear-gradient(90deg, #3B82F6, #60A5FA)',
//   color: '#fff',
//   borderRadius: '20px',
//   textTransform: 'none',
//   fontSize: '1rem',
//   padding: '10px 30px',
//   boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
//   '&:hover': {
//     background: 'linear-gradient(90deg, #60A5FA, #93C5FD)',
//     boxShadow: '0 4px 12px rgba(59, 130, 246, 0.5)',
//   },
// }));

// const Projects: React.FC = () => {
//   const sliderRef = useRef(null);
//   const navigate = useNavigate();
//   const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

//   // Load one project per division with unique clients
//   useEffect(() => {
//     const loadFeaturedProjects = async () => {
//       const projects: Project[] = [];
//       const usedClients: Set<string> = new Set();

//       for (const divisionSlug of divisions) {
//         try {
//           const module = await import(`../../assets/data/${divisionSlug}.ts`);
//           const divisionData = module.default as Division;
//           // Find a project with a client not yet used
//           const project = divisionData.projects.find(
//             (p) => !usedClients.has(p.client)
//           );
//           if (project) {
//             projects.push(project);
//             usedClients.add(project.client);
//           }
//         } catch (error) {
//           console.error(`Failed to load ${divisionSlug}.ts:`, error);
//         }
//       }

//       setFeaturedProjects(projects);
//     };

//     loadFeaturedProjects();
//   }, []);

//   // GSAP animation
//   useEffect(() => {
//     gsap.fromTo(
//       sliderRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
//     );
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: featuredProjects.length > 4,
//     speed: 500,
//     slidesToShow: Math.min(featuredProjects.length, 4),
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     centerMode: true,
//     centerPadding: '20px',
//     customPaging: () => (
//       <Box
//         sx={{
//           width: 10,
//           height: 10,
//           borderRadius: '50%',
//           background: '#A5B4FC',
//           opacity: 0.6,
//           transition: 'opacity 0.3s ease',
//           '&.slick-active': { opacity: 1, background: '#3B82F6' },
//         }}
//       />
//     ),
//     dotsClass: 'slick-dots custom-dots',
//     responsive: [
//       {
//         breakpoint: 1280,
//         settings: { slidesToShow: Math.min(featuredProjects.length, 3), centerPadding: '15px' },
//       },
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: Math.min(featuredProjects.length, 2), centerPadding: '10px' },
//       },
//       {
//         breakpoint: 600,
//         settings: { slidesToShow: 1, centerPadding: '5px' },
//       },
//     ],
//   };

//   const handleCardClick = (projectId: number, divisionSlug: string) => {
//     navigate(`/${divisionSlug}/project/${projectId}`, { state: { fromDivision: divisionSlug } });
//   };

//   const arrowVariants = {
//     rest: { x: 0 },
//     hover: { x: 6, transition: { duration: 0.3, ease: 'easeInOut' } },
//   };

//   return (
//     <ProjectsContainer>
//       <Typography
//         variant="h3"
//         sx={{
//           textAlign: 'center',
//           mb: 4,
//           fontWeight: 300,
//           color: '#A3BFFA',
//           textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)',
//         }}
//       >
//         UIPS Major Projects
//       </Typography>
//       <Box ref={sliderRef} sx={{ px: 0, position: 'relative', zIndex: 1 }}>
//         {featuredProjects.length > 0 ? (
//           <Slider
//             {...settings}
//             sx={{
//               '& .custom-dots li': {
//                 margin: '0 4px',
//               },
//             }}
//           >
//             {featuredProjects.map((project) => {
//               const divisionSlug = divisions.find((slug) =>
//                 project.division.toLowerCase().includes(slug)
//               ) || project.division.toLowerCase();
//               return (
//                 <Box key={`${divisionSlug}-${project.id}`} sx={{ py: 2 }}>
//                   <ProjectCard>
//                     <CardMedia
//                       component="img"
//                       height="180"
//                       image={project.images[0]}
//                       alt={project.projectname}
//                       sx={{
//                         objectFit: 'cover',
//                         filter: 'brightness(0.9) contrast(1.1)',
//                         transition: 'filter 0.3s ease',
//                         '&:hover': { filter: 'brightness(1.05) contrast(1.15)' },
//                       }}
//                     />
//                     <CardContent
//                       sx={{
//                         padding: '16px',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         gap: 1,
//                       }}
//                     >
//                       <Typography
//                         gutterBottom
//                         variant="h6"
//                         component="div"
//                         sx={{
//                           color: '#E0E7FF',
//                           fontWeight: 500,
//                           fontFamily: '"Roboto", Arial, sans-serif',
//                           letterSpacing: '0.3px',
//                           fontSize: '1.1rem',
//                           marginBottom: 0,
//                         }}
//                       >
//                         {project.projectname}
//                       </Typography>
//                       <motion.div
//                         initial="rest"
//                         whileHover="hover"
//                         animate="rest"
//                         style={{ alignSelf: 'flex-start', marginTop: '12px' }}
//                       >
//                         <Button
//                           variant="contained"
//                           size="small"
//                           onClick={() => handleCardClick(project.id, divisionSlug)}
//                           sx={{
//                             marginTop: '50px',
//                             background: 'linear-gradient(90deg, #3B82F6, #60A5FA)',
//                             color: '#fff',
//                             borderRadius: '20px',
//                             textTransform: 'none',
//                             fontSize: '0.85rem',
//                             padding: '6px 20px',
//                             boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
//                             minWidth: '140px',
//                             '&:hover': {
//                               background: 'linear-gradient(90deg, #60A5FA, #93C5FD)',
//                               boxShadow: '0 4px 12px rgba(59, 130, 246, 0.5)',
//                             },
//                           }}
//                           endIcon={
//                             <motion.div variants={arrowVariants}>
//                               <ArrowForwardIcon sx={{ fontSize: '1rem' }} />
//                             </motion.div>
//                           }
//                         >
//                           Details
//                         </Button>
//                       </motion.div>
//                     </CardContent>
//                   </ProjectCard>
//                 </Box>
//               );
//             })}
//           </Slider>
//         ) : (
//           <Typography sx={{ color: '#E0E7FF', textAlign: 'center' }}>
//             No projects available
//           </Typography>
//         )}
//       </Box>
//       <SeeAllButton onClick={() => navigate('/all-projects')}>
//         See All Projects
//       </SeeAllButton>
//     </ProjectsContainer>
//   );
// };

// export default Projects;


import React, { useEffect, useRef, useState, memo } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Types
interface Project {
  id: number;
  slug: string;
  projectname: string;
  client: string;
  location: string;
  status: string;
  images: any[];
  description: string;
  monthyear: string;
  duration: string;
  povalue: string;
  totalmanhour: string;
  division: string;
}

interface Division {
  name: string;
  description: string;
  clients: string[];
  img: string;
  projects: Project[];
}

// List of division slugs
const divisions = [
  'civil',
  'electrical',
  'shutdowns',
  'instrumentation',
  'power',
  // 'it',
  'mechanical',
];

// Styled components
const ProjectCard = styled(Card)(({ theme }) => ({
  maxWidth: '320px',
  height: '450px',
  // background: 'linear-gradient(160deg, #1E2A44 0%, #2D3E66 100%)',
  background: 'white',

  borderRadius: '12px',
  overflow: 'hidden',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease',
  boxShadow: '0 6px 20px rgba(50, 65, 119, 0.8)',
  border: '1px solid rgba(50, 65, 119, 0.8)',
  position: 'relative', // For absolute button positioning
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 10px 30px rgba(50, 65, 119, 0.8)',
    // background: 'linear-gradient(160deg, #2D3E66 0%, #3B82F6 100%)',
    // background: 'transparent',
  },
  margin: '0 8px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '280px',
  },
}));

const ProjectsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(50, 65, 119, 0.8)',
  position: 'relative',
  zIndex: 5, // Match HomePage zIndex
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
    zIndex: 0,
  },
}));

const SeeAllButton = styled(Button)(({ theme }) => ({
  display: 'block',
  margin: '20px auto 0',
  background: "#324177",
  color: "#FFF",
  borderRadius: '20px',
  textTransform: 'none',
  fontSize: '1rem',
  padding: '10px 30px',
  boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
  '&:hover': {
    
    // background: 'linear-gradient(90deg, #60A5FA, #93C5FD)',
    background: 'white',
    // boxShadow: '0 4px 12px rgba(59, 130, 246, 0.5)',
  },
}));

// Preload first few images
const preloadImages = (images: string[], count: number) => {
  images.slice(0, count).forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Memoized Project Card
const ProjectCardComponent: React.FC<{
  project: Project;
  divisionSlug: string;
  handleCardClick: (projectId: number, divisionSlug: string) => void;
  index: number;
}> = memo(
  ({ project, divisionSlug, handleCardClick, index }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const shouldReduceMotion = useReducedMotion();
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (inView && cardRef.current && !shouldReduceMotion) {
        const tween = gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            willChange: 'transform, opacity',
          }
        );
        return () => {
          tween.kill();
        };
      }
    }, [inView, shouldReduceMotion]);

    const arrowVariants = {
      rest: { x: 0 },
      hover: { x: 6, transition: { duration: 0.3, ease: 'easeInOut' } },
    };

    return (
      <Box sx={{ py: 2 }} ref={ref}>
        <ProjectCard
          ref={cardRef}
          sx={{ opacity: inView ? 1 : 0, transition: 'opacity 0.3s ease' }}
        >
          <CardMedia
            component="img"
            height="180"
            image={project.images[0]}
            alt={project.projectname}
            sx={{
              objectFit: 'cover',
              filter: 'brightness(0.9) contrast(1.1)',
              transition: 'filter 0.3s ease',
              '&:hover': { filter: 'brightness(1.05) contrast(1.15)' },
            }}
            loading={index < 4 ? 'eager' : 'lazy'}
          />
          <CardContent
            sx={{
              padding: '16px',
              height: '220px', // Fixed height to stabilize button position
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              position: 'relative',
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                color: "#1e2a44",
                fontWeight: 500,
                fontFamily: '"Roboto", Arial, sans-serif',
                letterSpacing: '0.3px',
                fontSize: '1.1rem',
                marginBottom: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {project.projectname}
            </Typography>
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
              }}
            >
              <Button
                variant="contained"
                size="small"
                onClick={() => handleCardClick(project.id, divisionSlug)}
                sx={{
                  background: "#324177",
                  color: '#fff',
                  borderRadius: '20px',
                  textTransform: 'none',
                  fontSize: '0.85rem',
                  padding: '6px 20px',
                  boxShadow: '0 2px 8px rgba(50, 65, 119, 0.8)',
                  minWidth: '140px',
                  '&:hover': {
                    background: 'transparent',
                    // background: 'linear-gradient(90deg, #60A5FA, #93C5FD)',
                    boxShadow: '0 4px 12px rgba(50, 65, 119, 0.8)',
                  },
                }}
                endIcon={
                  <motion.div variants={arrowVariants}>
                    <ArrowForwardIcon sx={{ fontSize: '1rem' }} />
                  </motion.div>
                }
              >
                Details
              </Button>
            </motion.div>
          </CardContent>
        </ProjectCard>
      </Box>
    );
  },
  (prevProps, nextProps) =>
    prevProps.project.id === nextProps.project.id &&
    prevProps.divisionSlug === nextProps.divisionSlug &&
    prevProps.index === nextProps.index
);

const Projects: React.FC = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  // Load one project per division with unique clients
  useEffect(() => {
    const loadFeaturedProjects = async () => {
      const projects: Project[] = [];
      const usedClients: Set<string> = new Set();

      for (const divisionSlug of divisions) {
        try {
          const module = await import(`../../assets/data/${divisionSlug}.ts`);
          const divisionData = module.default as Division;
          const project = divisionData.projects.find(
            (p) => !usedClients.has(p.client)
          );
          if (project) {
            projects.push(project);
            usedClients.add(project.client);
          }
        } catch (error) {
          console.error(`Failed to load ${divisionSlug}.ts:`, error);
        }
      }

      setFeaturedProjects(projects);

      // Preload first 4 images
      const imageKeys = projects.slice(0, 4).map((project) => project.images[0]);
      preloadImages(imageKeys, 4);
    };

    loadFeaturedProjects();
  }, []);

  // GSAP animation for slider
  useEffect(() => {
    if (!shouldReduceMotion && sliderRef.current) {
      const tween = gsap.fromTo(
        sliderRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          willChange: 'transform, opacity',
        }
      );
      return () => {
        tween.kill();
      };
    }
  }, [shouldReduceMotion]);

  const settings = {
    dots: true,
    infinite: featuredProjects.length > 4,
    speed: 500,
    slidesToShow: Math.min(featuredProjects.length, 4),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: '20px',
    customPaging: () => (
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: '#A5B4FC',
          opacity: 0.6,
          transition: 'opacity 0.3s ease',
          '&.slick-active': { opacity: 1, background: '#3B82F6' },
        }}
      />
    ),
    dotsClass: 'slick-dots custom-dots',
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: Math.min(featuredProjects.length, 3), centerPadding: '15px' },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.min(featuredProjects.length, 2), centerPadding: '10px' },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, centerPadding: '5px' },
      },
    ],
  };

  const handleCardClick = (projectId: number, divisionSlug: string) => {
    navigate(`/${divisionSlug}/project/${projectId}`, { state: { fromDivision: divisionSlug } });
  };

  return (
    <ProjectsContainer>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 300,
          color: "white",
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)',
        }}
      >
        UIPS Major Projects
      </Typography>
      <Box ref={sliderRef} sx={{ px: 0, position: 'relative', zIndex: 1 }}>
        {featuredProjects.length > 0 ? (
          <Slider
            {...settings}
            sx={{
              '& .custom-dots li': {
                margin: '0 4px',
              },
            }}
          >
            {featuredProjects.map((project, index) => {
              const divisionSlug = divisions.find((slug) =>
                project.division.toLowerCase().includes(slug)
              ) || project.division.toLowerCase();
              return (
                <ProjectCardComponent
                  key={`${divisionSlug}-${project.id}`}
                  project={project}
                  divisionSlug={divisionSlug}
                  handleCardClick={handleCardClick}
                  index={index}
                />
              );
            })}
          </Slider>
        ) : (
          <Typography sx={{ color: '#E0E7FF', textAlign: 'center' }}>
            No projects available
          </Typography>
        )}
      </Box>
      <SeeAllButton onClick={() => navigate('/all-projects')}>
        
        See All Projects
      </SeeAllButton>
    </ProjectsContainer>
  );
};

export default memo(Projects);