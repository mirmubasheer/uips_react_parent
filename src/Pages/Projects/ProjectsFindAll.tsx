// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   MenuItem,
//   Select,
//   Grid,
//   Box,
//   ToggleButton,
//   ToggleButtonGroup,
//   Typography,
// } from '@mui/material';
// import { GridView as GridIcon, ViewList as ListIcon } from '@mui/icons-material';
// import gsap from 'gsap';
// import { ProjectCard } from './ProjectCard';
// import { FilterComponent } from './FilterComponent';
// import projectsData from '../../assets/data/projectall.json';
// import ProjectListView from './ProjectListView';

// const divisionHeadingStyle = {
//   color: '#FFFFFF',
//   fontWeight: 'bold',
//   mb: 2,
//   borderBottom: '2px solid #FFFFFF',
//   paddingBottom: 1,
// };

// const ProjectsFindAll: React.FC = () => {
//   const [selectedDivision, setSelectedDivision] = useState('All Projects');
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
//   const [filteredProjects, setFilteredProjects] = useState(projectsData.divisions.flatMap(d => d.projects));
//   const navigate = useNavigate();
//   const cardContainerRef = useRef(null);

//   const divisions = [
//     "All Projects", "Maintenance Division", "IT Division", "Substation Construction",
//     "Upgrade Projects", "Plant Construction", "Power House", "Shutdowns",
//     "Sale Gas Division", "UG Cabling", "Port Division"
//   ];

//   const allProjects = projectsData.divisions.flatMap(d => d.projects);
//   const locations = [...new Set(allProjects.map(project => project.location))].filter(Boolean) as string[];

//   const handleDivisionChange = (event: any) => {
//     setSelectedDivision(event.target.value);
//   };

//   const handleViewModeChange = (event: React.MouseEvent<HTMLElement>, newViewMode: 'grid' | 'list' | null) => {
//     if (newViewMode) setViewMode(newViewMode);
//   };

//   const handleProjectClick = (slug: string) => {
//     navigate(`/project/${slug}`);
//   };

//   const handleFilter = (searchTerm: string, location?: string) => {
//     let filtered = allProjects;

//     if (location && location !== 'All Locations') {
//       filtered = filtered.filter(project => project.location === location);
//     }

//     if (searchTerm) {
//       filtered = filtered.filter(project =>
//         project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         (project.clientName && project.clientName.toLowerCase().includes(searchTerm.toLowerCase()))
//       );
//     }

//     setFilteredProjects(filtered);
//   };

//   useEffect(() => {
//     const divisionProjects = selectedDivision === 'All Projects'
//       ? allProjects
//       : projectsData.divisions.find(d => d.name === selectedDivision)?.projects || [];

//     setFilteredProjects(divisionProjects);
//   }, [selectedDivision]);

//   useEffect(() => {
//     if (cardContainerRef.current) {
//       gsap.fromTo(
//         cardContainerRef.current.querySelectorAll('.project-card'),
//         { opacity: 0, y: 40, scale: 0.95 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.8,
//           stagger: 0.1,
//           ease: 'power2.out',
//         }
//       );
//     }
//   }, [filteredProjects, viewMode]);

//   return (
//     <Box sx={{ backgroundColor: '#1E2952', minHeight: '100vh', color: '#FFFFFF', mt: 0, zIndex: 1 }}>
//       <Box sx={{ px: { xs: 2, md: 4 }, py: 3, zIndex: 2 }}>
//         <Box
//           sx={{
//             mb: 4,
//             display: 'flex',
//             flexDirection: { xs: 'column', sm: 'row' },
//             alignItems: { xs: 'stretch', sm: 'center' },
//             gap: 2,
//           }}
//         >
//           <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, flexGrow: 1 }}>
//             <Select
//               value={selectedDivision}
//               onChange={handleDivisionChange}
//               sx={{
//                 backgroundColor: '#2D3A63',
//                 color: '#FFFFFF',
//                 width: { xs: '100%', sm: '200px', md: '250px' },
//                 '& .MuiSelect-icon': { color: '#FFFFFF' },
//                 '& .MuiOutlinedInput-root': {
//                   '& fieldset': { borderColor: '#FFFFFF' },
//                   '&:hover fieldset': { borderColor: '#FFFFFF' },
//                   '&.Mui-focused fieldset': { borderColor: '#40C4FF' },
//                 },
//               }}
//             >
//               {divisions.map((division) => (
//                 <MenuItem
//                   key={division}
//                   value={division}
//                   sx={{
//                     color: '#FFFFFF',
//                     backgroundColor: '#2D3A63',
//                     '&:hover': { backgroundColor: '#3D4A73' },
//                     '&.Mui-selected': {
//                       backgroundColor: '#3D4A73',
//                       color: '#FFFFFF',
//                     },
//                   }}
//                 >
//                   {division}
//                 </MenuItem>
//               ))}
//             </Select>
//             <FilterComponent onFilter={handleFilter} locations={locations} />
//           </Box>
//           <ToggleButtonGroup
//             value={viewMode}
//             exclusive
//             onChange={handleViewModeChange}
//             aria-label="view mode"
//             sx={{ alignSelf: { xs: 'center', sm: 'flex-end' } }}
//           >
//             <ToggleButton value="grid" sx={{ backgroundColor: '#2D3A63', color: '#FFF', '&:hover': { backgroundColor: '#3D4A73' } }}>
//               <GridIcon />
//             </ToggleButton>
//             <ToggleButton value="list" sx={{ backgroundColor: '#2D3A63', color: '#FFF', '&:hover': { backgroundColor: '#3D4A73' } }}>
//               <ListIcon />
//             </ToggleButton>
//           </ToggleButtonGroup>
//         </Box>

//         <Box ref={cardContainerRef} sx={{ mt: 2, zIndex: 3 }}>
//           {viewMode === 'grid' ? (
//             selectedDivision === 'All Projects' ? (
//               projectsData.divisions.map((division) => {
//                 const divisionProjects = filteredProjects.filter(project =>
//                   division.projects.some((p: any) => p.id === project.id)
//                 );
//                 if (!divisionProjects.length) return null;
//                 return (
//                   <Box key={division.name} sx={{ mb: 4 }}>
//                     <Typography variant="h5" sx={divisionHeadingStyle}>{division.name}</Typography>
//                     <Grid container spacing={3}>
//                       {divisionProjects.map(project => (
//                         <Grid
//                           item
//                           xs={12}
//                           sm={6}
//                           md={4}
//                           lg={4}
//                           xl={3}
//                           key={project.id}
//                           className="project-card"
//                         >
//                           <ProjectCard project={project} onClick={handleProjectClick} />
//                         </Grid>
//                       ))}
//                     </Grid>
//                   </Box>
//                 );
//               })
//             ) : (
//               <Grid container spacing={3}>
//                 {filteredProjects.map(project => (
//                   <Grid
//                     item
//                     xs={12}
//                     sm={6}
//                     md={4}
//                     lg={4}
//                     xl={3}
//                     key={project.id}
//                     className="project-card"
//                   >
//                     <ProjectCard project={project} onClick={handleProjectClick} />
//                   </Grid>
//                 ))}
//               </Grid>
//             )
//           ) : (
//             selectedDivision === 'All Projects' ? (
//               projectsData.divisions.map((division) => {
//                 const divisionProjects = filteredProjects.filter(project =>
//                   division.projects.some((p: any) => p.id === project.id)
//                 );
//                 if (!divisionProjects.length) return null;
//                 return (
//                   <Box key={division.name} sx={{ mb: 4 }}>
//                     <Typography variant="h5" sx={divisionHeadingStyle}>{division.name}</Typography>
//                     <ProjectListView projects={divisionProjects} onProjectClick={handleProjectClick} />
//                   </Box>
//                 );
//               })
//             ) : (
//               <ProjectListView projects={filteredProjects} onProjectClick={handleProjectClick} />
//             )
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ProjectsFindAll;

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Container,
} from '@mui/material';
import { GridView as GridIcon, ViewList as ListIcon } from '@mui/icons-material';
import gsap from 'gsap';
import { ProjectCard } from './ProjectCard';
import { FilterComponent } from './FilterComponent';
import { ProjectListView } from './ProjectListView';
import projectsData from '../../assets/data/projectall.json';
import { styled } from '@mui/material/styles';

const DivisionHeader = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontWeight: 700,
  marginBottom: theme.spacing(3),
  paddingBottom: theme.spacing(1),
  position: 'relative',
  fontSize: '2rem',
  letterSpacing: '1px',
  background: 'linear-gradient(90deg, #FFFFFF, #40C4FF)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textTransform: 'uppercase',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100px',
    height: '3px',
    background: 'linear-gradient(to right, #FF4081, #40C4FF)',
    borderRadius: '2px',
    transition: 'width 0.3s ease-in-out',
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    width: 'calc(100% + 20px)',
    height: 'calc(100% + 20px)',
    background: 'rgba(64, 196, 255, 0.1)',
    borderRadius: '8px',
    zIndex: -1,
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  },
  '&:hover': {
    '&:after': {
      width: '150px',
    },
    '&:before': {
      opacity: 1,
    },
  },
}));

const ProjectsFindAll = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filteredProjects, setFilteredProjects] = useState(projectsData.divisions.flatMap(d => d.projects));
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const divisions = ['All Projects', ...projectsData.divisions.map(d => d.name)];
  const allProjects = projectsData.divisions.flatMap(d => d.projects);
  const locations = [...new Set(allProjects.map(project => project.location))].filter(Boolean);

  const handleViewModeChange = (event, newViewMode) => {
    if (newViewMode) setViewMode(newViewMode);
  };

  const handleProjectClick = (slug) => {
    navigate(`/project/${slug}`);
  };

  const handleFilter = (searchTerm, location, division) => {
    let filtered = allProjects;

    if (location) {
      filtered = filtered.filter(project => project.location === location);
    }

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (project.clientName && project.clientName.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (division && division !== 'All Projects') {
      const divisionData = projectsData.divisions.find(d => d.name === division);
      if (divisionData) {
        filtered = filtered.filter(project => 
          divisionData.projects.some(p => p.id === project.id && p.name === project.name)
        );
      }
    }

    setFilteredProjects(filtered);
  };

  // Group filtered projects by division
  const groupedProjects = projectsData.divisions
    .map(division => ({
      name: division.name,
      projects: filteredProjects.filter(project => 
        division.projects.some(p => p.id === project.id && p.name === project.name)
      )
    }))
    .filter(division => division.projects.length > 0);

  useEffect(() => {
    if (containerRef.current) {
      const selector = viewMode === 'grid' ? '.project-item' : '.MuiPaper-root';
      gsap.fromTo(
        containerRef.current.querySelectorAll(selector),
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
      
      gsap.fromTo(
        containerRef.current.querySelectorAll('.division-header'),
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
        }
      );
    }
  }, [filteredProjects, viewMode]);

  return (


    
    <Box sx={{ 
      background: 'linear-gradient(135deg, #1E3A8A 0%, #2A4D9C 50%, #1E3A8A 100%)',
      minHeight: '100vh',
      py: 6,
    }}>

      
      <Container maxWidth="xl">
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 6,
          gap: 3,
          width: '100%',
        }}>
          <Box sx={{ 
            width: { xs: '100%', sm: '90%', md: '800px' },
            maxWidth: '800px',
          }}>
            <FilterComponent 
              onFilter={handleFilter} 
              locations={locations} 
              divisions={divisions} 
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <ToggleButtonGroup
              value={viewMode}
              exclusive
              onChange={handleViewModeChange}
            >
              <ToggleButton value="grid" sx={{ color: '#FFFFFF' }}>
                <GridIcon />
              </ToggleButton>
              <ToggleButton value="list" sx={{ color: '#FFFFFF' }}>
                <ListIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>

        <Box ref={containerRef}>
          {viewMode === 'grid' ? (
            groupedProjects.map((division) => (
              <Box key={division.name} sx={{ mb: 6 }}>
                <DivisionHeader variant="h4" className="division-header">
                  {division.name}
                </DivisionHeader>
                <Grid container spacing={3}>
                  {division.projects.map(project => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      key={project.id}
                      className="project-item"
                    >
                      <ProjectCard project={project} onClick={handleProjectClick} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))
          ) : (
            groupedProjects.map((division) => (
              <Box key={division.name} sx={{ mb: 6 }}>
                <DivisionHeader variant="h4" className="division-header">
                  {division.name}
                </DivisionHeader>
                <ProjectListView 
                  projects={division.projects} 
                  onProjectClick={handleProjectClick} 
                />
              </Box>
            ))
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsFindAll;