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



// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Grid,
//   Typography,
//   ToggleButton,
//   ToggleButtonGroup,
//   Container,
// } from '@mui/material';
// import { GridView as GridIcon, ViewList as ListIcon } from '@mui/icons-material';
// import gsap from 'gsap';
// import { ProjectCard } from './ProjectCard';
// import { FilterComponent } from './FilterComponent';
// import { ProjectListView } from './ProjectListView';
// import projectsData from '../../assets/data/projectall.json';
// import { styled } from '@mui/material/styles';

// const DivisionHeader = styled(Typography)(({ theme }) => ({
//   color: '#FFFFFF',
//   fontWeight: 700,
//   marginBottom: theme.spacing(3),
//   paddingBottom: theme.spacing(1),
//   position: 'relative',
//   fontSize: '2rem',
//   letterSpacing: '1px',
//   background: 'linear-gradient(90deg, #FFFFFF, #40C4FF)',
//   WebkitBackgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
//   textTransform: 'uppercase',
//   '&:after': {
//     content: '""',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     width: '100px',
//     height: '3px',
//     background: 'linear-gradient(to right, #FF4081, #40C4FF)',
//     borderRadius: '2px',
//     transition: 'width 0.3s ease-in-out',
//   },
//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     top: '-10px',
//     left: '-10px',
//     width: 'calc(100% + 20px)',
//     height: 'calc(100% + 20px)',
//     background: 'rgba(64, 196, 255, 0.1)',
//     borderRadius: '8px',
//     zIndex: -1,
//     opacity: 0,
//     transition: 'opacity 0.3s ease-in-out',
//   },
//   '&:hover': {
//     '&:after': {
//       width: '150px',
//     },
//     '&:before': {
//       opacity: 1,
//     },
//   },
// }));

// const ProjectsFindAll = () => {
//   const [viewMode, setViewMode] = useState('grid');
//   const [filteredProjects, setFilteredProjects] = useState(projectsData.divisions.flatMap(d => d.projects));
//   const navigate = useNavigate();
//   const containerRef = useRef(null);

//   const divisions = ['All Projects', ...projectsData.divisions.map(d => d.name)];
//   const allProjects = projectsData.divisions.flatMap(d => d.projects);
//   const locations = [...new Set(allProjects.map(project => project.location))].filter(Boolean);

//   const handleViewModeChange = (event, newViewMode) => {
//     if (newViewMode) setViewMode(newViewMode);
//   };

//   const handleProjectClick = (slug) => {
//     navigate(`/project/${slug}`);
//   };

//   const handleFilter = (searchTerm, location, division) => {
//     let filtered = allProjects;

//     if (location) {
//       filtered = filtered.filter(project => project.location === location);
//     }

//     if (searchTerm) {
//       filtered = filtered.filter(project =>
//         project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         (project.clientName && project.clientName.toLowerCase().includes(searchTerm.toLowerCase()))
//       );
//     }

//     if (division && division !== 'All Projects') {
//       const divisionData = projectsData.divisions.find(d => d.name === division);
//       if (divisionData) {
//         filtered = filtered.filter(project => 
//           divisionData.projects.some(p => p.id === project.id && p.name === project.name)
//         );
//       }
//     }

//     setFilteredProjects(filtered);
//   };

//   // Group filtered projects by division
//   const groupedProjects = projectsData.divisions
//     .map(division => ({
//       name: division.name,
//       projects: filteredProjects.filter(project => 
//         division.projects.some(p => p.id === project.id && p.name === project.name)
//       )
//     }))
//     .filter(division => division.projects.length > 0);

//   useEffect(() => {
//     if (containerRef.current) {
//       const selector = viewMode === 'grid' ? '.project-item' : '.MuiPaper-root';
//       gsap.fromTo(
//         containerRef.current.querySelectorAll(selector),
//         { opacity: 0, y: 50, scale: 0.9 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.8,
//           stagger: 0.15,
//           ease: 'power3.out',
//         }
//       );
      
//       gsap.fromTo(
//         containerRef.current.querySelectorAll('.division-header'),
//         { opacity: 0, x: -30 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.6,
//           stagger: 0.2,
//           ease: 'power2.out',
//         }
//       );
//     }
//   }, [filteredProjects, viewMode]);

//   return (


    
//     <Box sx={{ 
//       background: 'linear-gradient(135deg, #1E3A8A 0%, #2A4D9C 50%, #1E3A8A 100%)',
//       minHeight: '100vh',
//       py: 6,
//     }}>

      
//       <Container maxWidth="xl">
//         <Box sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           mb: 6,
//           gap: 3,
//           width: '100%',
//         }}>
//           <Box sx={{ 
//             width: { xs: '100%', sm: '90%', md: '800px' },
//             maxWidth: '800px',
//           }}>
//             <FilterComponent 
//               onFilter={handleFilter} 
//               locations={locations} 
//               divisions={divisions} 
//             />
//           </Box>
//           <Box sx={{ display: 'flex', gap: 2 }}>
//             <ToggleButtonGroup
//               value={viewMode}
//               exclusive
//               onChange={handleViewModeChange}
//             >
//               <ToggleButton value="grid" sx={{ color: '#FFFFFF' }}>
//                 <GridIcon />
//               </ToggleButton>
//               <ToggleButton value="list" sx={{ color: '#FFFFFF' }}>
//                 <ListIcon />
//               </ToggleButton>
//             </ToggleButtonGroup>
//           </Box>
//         </Box>

//         <Box ref={containerRef}>
//           {viewMode === 'grid' ? (
//             groupedProjects.map((division) => (
//               <Box key={division.name} sx={{ mb: 6 }}>
//                 <DivisionHeader variant="h4" className="division-header">
//                   {division.name}
//                 </DivisionHeader>
//                 <Grid container spacing={3}>
//                   {division.projects.map(project => (
//                     <Grid
//                       item
//                       xs={12}
//                       sm={6}
//                       md={4}
//                       lg={3}
//                       key={project.id}
//                       className="project-item"
//                     >
//                       <ProjectCard project={project} onClick={handleProjectClick} />
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>
//             ))
//           ) : (
//             groupedProjects.map((division) => (
//               <Box key={division.name} sx={{ mb: 6 }}>
//                 <DivisionHeader variant="h4" className="division-header">
//                   {division.name}
//                 </DivisionHeader>
//                 <ProjectListView 
//                   projects={division.projects} 
//                   onProjectClick={handleProjectClick} 
//                 />
//               </Box>
//             ))
//           )}
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ProjectsFindAll;



// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, Grid, Container, Typography } from "@mui/material";
// import { gsap } from "gsap";
// import projectData from "../../assets/data/projectall.json";
// import ProjectCardComponent from "./Components/ProjectCard";
// import ListViewComponent from "./Components/ListViewComponent";
// import PaginationControls from "../../components/Pagination/PaginationControls";
// import FilterComponent from "./Components/FilterComponent";
// import DetailedDivision from "./Components/DetailedDivision";

// // Types
// interface Project {
//   id: number;
//   slug: string;
//   projectname: string;
//   client: string;
//   location: string;
//   status: string;
//   image: string;
// }

// interface Division {
//   name: string;
//   description: string;
//   clients: string[];
//   image: string;
//   projects: Project[];
// }

// interface ProjectFindAllProps {
//   division?: string;
// }

// // Map route names to division names
// const divisionMap: Record<string, string> = {
//   civil: "Civil Division",
//   shutdowns: "Plant Shutdowns/Turnarounds",
//   instrumentation: "Instrumentation",
//   power: "Power",
//   electrical: "Electrical Division",
//   it: "IT Division",
//   mechanical: "Mechanical Division",
// };

// const ITEMS_PER_PAGE = 8;

// const ProjectFindAll: React.FC<ProjectFindAllProps> = ({ division }) => {
//   const navigate = useNavigate();
//   const [filterStatus, setFilterStatus] = useState<"ALL" | "COMPLETED" | "ONGOING">("ALL");
//   const [page, setPage] = useState(1);
//   const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // Normalize division for lookup
//   const normalizedDivision = division?.toLowerCase();
//   const selectedDivisionName = normalizedDivision
//     ? divisionMap[normalizedDivision] || "Projects"
//     : "Projects";

//   const divisionData = projectData.divisions.find(
//     (d) => d.name.toLowerCase() === selectedDivisionName.toLowerCase()
//   ) as Division | undefined;

//   const allProjects: Project[] = divisionData?.projects || [];

//   useEffect(() => {
//     // Reset page and update filtered projects when division or filterStatus changes
//     setPage(1);
//     const statusFiltered = allProjects.filter((project) => {
//       if (filterStatus === "ALL") return true;
//       return project.status.toUpperCase().includes(filterStatus);
//     });
//     setFilteredProjects(statusFiltered);
//   }, [division, filterStatus, allProjects]);

//   const paginatedProjects = filteredProjects.slice(
//     (page - 1) * ITEMS_PER_PAGE,
//     page * ITEMS_PER_PAGE
//   );

//   const pageCount = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

//   useEffect(() => {
//     cardRefs.current = cardRefs.current.slice(0, paginatedProjects.length);
//   }, [paginatedProjects]);

//   useEffect(() => {
//     if (viewMode === "grid") {
//       cardRefs.current.forEach((el, index) => {
//         if (el) {
//           gsap.fromTo(
//             el,
//             { opacity: 0, y: 50 },
//             {
//               opacity: 1,
//               y: 0,
//               duration: 0.5,
//               delay: index * 0.1,
//               ease: "power2.out",
//             }
//           );
//         }
//       });
//     }
//   }, [paginatedProjects, viewMode]);

//   const handleCardClick = (id: number) => {
//     if (!Number.isFinite(id)) {
//       console.error("Invalid project ID:", id);
//       return;
//     }
//     // Use the normalized division as the state, or omit if undefined
//     navigate(`/project/${id}`, {
//       state: { fromDivision: normalizedDivision },
//     });
//   };

//   const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
//     setPage(value);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleFilterChange = (newFilteredProjects: Project[]) => {
//     const statusFiltered = newFilteredProjects.filter((project) => {
//       if (filterStatus === "ALL") return true;
//       return project.status.toUpperCase().includes(filterStatus);
//     });
//     setFilteredProjects(statusFiltered);
//     setPage(1);
//   };

//   const handleViewModeChange = (newViewMode: "grid" | "list" | null) => {
//     if (newViewMode) {
//       setViewMode(newViewMode);
//       setPage(1);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         background: "linear-gradient(to bottom, #0F1A33, #1E2A44)",
//         minHeight: "100vh",
//         py: { xs: 2, sm: 3, md: 4 },
//       }}
//     >
//       <Container maxWidth="xl">
//         {divisionData ? (
//           <DetailedDivision division={divisionData} />
//         ) : (
//           <Typography
//             variant="h6"
//             sx={{
//               color: "#f1f5f9",
//               fontFamily: "'Kanit', sans-serif",
//               textAlign: "center",
//               my: 4,
//             }}
//           >
//             Division not found
//           </Typography>
//         )}
        
//         <FilterComponent
//           projects={allProjects}
//           onFilterChange={handleFilterChange}
//           filterStatus={filterStatus}
//           setFilterStatus={setFilterStatus}
//           viewMode={viewMode}
//           onViewModeChange={handleViewModeChange}
//         />

//         {allProjects.length === 0 ? (
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               minHeight: "200px",
//               mt: { xs: 2, sm: 3, md: 4 },
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 color: "#f1f5f9",
//                 fontFamily: "'Kanit', sans-serif",
//                 fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
//                 textAlign: "center",
//               }}
//             >
//               No projects to display
//             </Typography>
//           </Box>
//         ) : (
//           <>
//             {viewMode === "grid" ? (
//               <Grid
//                 container
//                 spacing={{ xs: 2, sm: 3, md: 4 }}
//                 justifyContent="center"
//                 alignItems="stretch"
//               >
//                 {paginatedProjects.map((project, index) => (
//                   <Grid
//                     item
//                     key={project.id}
//                     xs={12}
//                     sm={6}
//                     md={4}
//                     lg={3}
//                   >
//                     <Box
//                       width="100%"
//                       height="100%"
//                       ref={(el) => (cardRefs.current[index] = el)}
//                       sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                       }}
//                     >
//                       <ProjectCardComponent
//                         project={project}
//                         onClick={() => handleCardClick(project.id)}
//                         cardRef={{ current: cardRefs.current[index] }}
//                       />
//                     </Box>
//                   </Grid>
//                 ))}
//               </Grid>
//             ) : (
//               <ListViewComponent
//                 projects={paginatedProjects}
//                 onClick={handleCardClick}
//               />
//             )}

//             {pageCount > 1 && (
//               <Box
//                 mt={{ xs: 2, sm: 3, md: 4 }}
//                 display="flex"
//                 justifyContent="center"
//                 sx={{
//                   px: { xs: 1, sm: 0 },
//                 }}
//               >
//                 <PaginationControls
//                   page={page}
//                   count={pageCount}
//                   onChange={handlePageChange}
//                 />
//               </Box>
//             )}
//           </>
//         )}
//       </Container>
//     </Box>
//   );
// };

// export default ProjectFindAll;


// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, Grid, Container, Typography } from "@mui/material";
// import { gsap } from "gsap";
// import ProjectCardComponent from "./Components/ProjectCard";
// import ListViewComponent from "./Components/ListViewComponent";
// import PaginationControls from "../../components/Pagination/PaginationControls";
// import FilterComponent from "./Components/FilterComponent";
// import DetailedDivision from "./Components/DetailedDivision";

// // Types
// interface Project {
//   id: number;
//   slug: string;
//   projectname: string;
//   client: string;
//   location: string;
//   status: string;
//   images: string[];
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

// interface ProjectFindAllProps {
//   division?: string;
// }

// // Map route slugs to division names
// const divisionMap: Record<string, string> = {
//   civil: "Civil",
//   shutdowns: "Plant Shutdowns/Turnarounds",
//   instrumentation: "Instrumentation",
//   power: "Power",
//   electrical: "Electrical",
//   it: "IT",
//   mechanical: "Mechanical",
// };

// const ITEMS_PER_PAGE = 8;

// const ProjectFindAll: React.FC<ProjectFindAllProps> = ({ division }) => {
//   const navigate = useNavigate();
//   const [filterStatus, setFilterStatus] = useState<"ALL" | "COMPLETED" | "ONGOING">("ALL");
//   const [page, setPage] = useState(1);
//   const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
//   const [divisionData, setDivisionData] = useState<Division | null>(null);
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // Normalize division for lookup
//   const normalizedDivision = division?.toLowerCase();
//   const divisionName = normalizedDivision
//     ? divisionMap[normalizedDivision] || "Projects"
//     : "Projects";

//   // Load division data
//   useEffect(() => {
//     const loadDivisionData = async () => {
//       if (!normalizedDivision) {
//         setDivisionData(null);
//         return;
//       }

//       try {
//         const module = await import(`../../assets/data/${normalizedDivision}.json`);
//         setDivisionData(module.default as Division);
//       } catch (error) {
//         console.error("Failed to load division data:", error);
//         setDivisionData(null);
//       }
//     };

//     loadDivisionData();
//   }, [normalizedDivision]);

//   // Filter projects when divisionData or filterStatus changes
//   useEffect(() => {
//     if (!divisionData) {
//       setFilteredProjects([]);
//       return;
//     }

//     const statusFiltered = divisionData.projects.filter((project) => {
//       if (filterStatus === "ALL") return true;
//       return project.status.toUpperCase().startsWith(filterStatus);
//     });

//     setFilteredProjects(statusFiltered);
//     setPage(1); // Reset page when filters change
//   }, [divisionData, filterStatus]);

//   const paginatedProjects = filteredProjects.slice(
//     (page - 1) * ITEMS_PER_PAGE,
//     page * ITEMS_PER_PAGE
//   );

//   const pageCount = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

//   useEffect(() => {
//     cardRefs.current = cardRefs.current.slice(0, paginatedProjects.length);
//   }, [paginatedProjects]);

//   useEffect(() => {
//     if (viewMode === "grid") {
//       cardRefs.current.forEach((el, index) => {
//         if (el) {
//           gsap.fromTo(
//             el,
//             { opacity: 0, y: 50 },
//             {
//               opacity: 1,
//               y: 0,
//               duration: 0.5,
//               delay: index * 0.1,
//               ease: "power2.out",
//             }
//           );
//         }
//       });
//     }
//   }, [paginatedProjects, viewMode]);

//   const handleCardClick = (id: number) => {
//     if (!Number.isFinite(id)) {
//       console.error("Invalid project ID:", id);
//       return;
//     }
//     navigate(`/project/${id}`, {
//       state: { fromDivision: normalizedDivision },
//     });
//   };

//   const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
//     setPage(value);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleFilterChange = (newFilteredProjects: Project[]) => {
//     const statusFiltered = newFilteredProjects.filter((project) => {
//       if (filterStatus === "ALL") return true;
//       return project.status.toUpperCase().startsWith(filterStatus);
//     });
//     setFilteredProjects(statusFiltered);
//     setPage(1);
//   };

//   const handleViewModeChange = (newViewMode: "grid" | "list" | null) => {
//     if (newViewMode) {
//       setViewMode(newViewMode);
//       setPage(1);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         background: "linear-gradient(to bottom, #0F1A33, #1E2A44)",
//         minHeight: "100vh",
//         py: { xs: 2, sm: 3, md: 4 },
//       }}
//     >
//       <Container maxWidth="xl">
//         {divisionData ? (
//           <DetailedDivision division={divisionData} />
//         ) : (
//           <Typography
//             variant="h6"
//             sx={{
//               color: "#f1f5f9",
//               fontFamily: "'Kanit', sans-serif",
//               textAlign: "center",
//               my: 4,
//             }}
//           >
//             Division not found
//           </Typography>
//         )}

//         <FilterComponent
//           projects={divisionData?.projects || []}
//           onFilterChange={handleFilterChange}
//           filterStatus={filterStatus}
//           setFilterStatus={setFilterStatus}
//           viewMode={viewMode}
//           onViewModeChange={handleViewModeChange}
//         />

//         {filteredProjects.length === 0 ? (
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               minHeight: "200px",
//               mt: { xs: 2, sm: 3, md: 4 },
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 color: "#f1f5f9",
//                 fontFamily: "'Kanit', sans-serif",
//                 fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
//                 textAlign: "center",
//               }}
//             >
//               No projects to display
//             </Typography>
//           </Box>
//         ) : (
//           <>
//             {viewMode === "grid" ? (
//               <Grid
//                 container
//                 spacing={{ xs: 2, sm: 3, md: 4 }}
//                 justifyContent="center"
//                 alignItems="stretch"
//               >
//                 {paginatedProjects.map((project, index) => (
//                   <Grid
//                     item
//                     key={project.id}
//                     xs={12}
//                     sm={6}
//                     md={4}
//                     lg={3}
//                   >
//                     <Box
//                       width="100%"
//                       height="100%"
//                       ref={(el) => (cardRefs.current[index] = el)}
//                       sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                       }}
//                     >
//                       <ProjectCardComponent
//                         project={project}
//                         onClick={() => handleCardClick(project.id)}
//                         cardRef={{ current: cardRefs.current[index] }}
//                       />
//                     </Box>
//                   </Grid>
//                 ))}
//               </Grid>
//             ) : (
//               <ListViewComponent
//                 projects={paginatedProjects}
//                 onClick={handleCardClick}
//               />
//             )}

//             {pageCount > 1 && (
//               <Box
//                 mt={{ xs: 2, sm: 3, md: 4 }}
//                 display="flex"
//                 justifyContent="center"
//                 sx={{
//                   px: { xs: 1, sm: 0 },
//                 }}
//               >
//                 <PaginationControls
//                   page={page}
//                   count={pageCount}
//                   onChange={handlePageChange}
//                 />
//               </Box>
//             )}
//           </>
//         )}
//       </Container>
//     </Box>
//   );
// };

// export default ProjectFindAll;




import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Container, Typography } from "@mui/material";
import { gsap } from "gsap";
import ProjectCardComponent from "./Components/ProjectCard";
import ListViewComponent from "./Components/ListViewComponent";
import PaginationControls from "../../components/Pagination/PaginationControls";
import FilterComponent from "./Components/FilterComponent";
import DetailedDivision from "./Components/DetailedDivision";

// Types
interface Project {
  id: number;
  slug: string;
  projectname: string;
  client: string;
  location: string;
  status: string;
  images: any[]; // Changed from string[] to any[] to accept image modules
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

interface ProjectFindAllProps {
  division?: string;
}

// Map route slugs to division names
const divisionMap: Record<string, string> = {
  civil: "Civil",
  shutdowns: "Shutdowns",
  instrumentation: "Instrumentation",
  power: "Power",
  electrical: "Electrical",
  it: "IT",
  mechanical: "Mechanical",
};

const ITEMS_PER_PAGE = 8;

const ProjectFindAll: React.FC<ProjectFindAllProps> = ({ division }) => {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState<"ALL" | "COMPLETED" | "ONGOING">("ALL");
  const [page, setPage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [divisionData, setDivisionData] = useState<Division | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Normalize division for lookup
  const normalizedDivision = division?.toLowerCase();
  const divisionName = normalizedDivision
    ? divisionMap[normalizedDivision] || "Projects"
    : "Projects";

  // Load division data
  useEffect(() => {
    const loadDivisionData = async () => {
      if (!normalizedDivision) {
        setDivisionData(null);
        return;
      }

      try {
        const module = await import(`../../assets/data/${normalizedDivision}.ts`);
        setDivisionData(module.default as Division);
      } catch (error) {
        console.error("Failed to load division data:", error);
        setDivisionData(null);
      }
    };

    loadDivisionData();
  }, [normalizedDivision]);

  // Filter projects when divisionData or filterStatus changes
  useEffect(() => {
    if (!divisionData) {
      setFilteredProjects([]);
      return;
    }

    const statusFiltered = divisionData.projects.filter((project) => {
      if (filterStatus === "ALL") return true;
      return project.status.toUpperCase().startsWith(filterStatus);
    });

    setFilteredProjects(statusFiltered);
    setPage(1); // Reset page when filters change
  }, [divisionData, filterStatus]);

  const paginatedProjects = filteredProjects.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const pageCount = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, paginatedProjects.length);
  }, [paginatedProjects]);

  useEffect(() => {
    if (viewMode === "grid") {
      cardRefs.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: index * 0.1,
              ease: "power2.out",
            }
          );
        }
      });
    }
  }, [paginatedProjects, viewMode]);

  const handleCardClick = (id: number) => {
    if (!Number.isFinite(id)) {
      console.error("Invalid project ID:", id);
      return;
    }
    // Include division slug in the URL
    navigate(`/${normalizedDivision}/project/${id}`, {
      state: { fromDivision: normalizedDivision },
    });
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (newFilteredProjects: Project[]) => {
    const statusFiltered = newFilteredProjects.filter((project) => {
      if (filterStatus === "ALL") return true;
      return project.status.toUpperCase().startsWith(filterStatus);
    });
    setFilteredProjects(statusFiltered);
    setPage(1);
  };

  const handleViewModeChange = (newViewMode: "grid" | "list" | null) => {
    if (newViewMode) {
      setViewMode(newViewMode);
      setPage(1);
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #0F1A33, #1E2A44)",
        minHeight: "100vh",
        py: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="xl">
        {divisionData ? (
          <DetailedDivision division={divisionData} />
        ) : (
          <Typography
            variant="h6"
            sx={{
              color: "#f1f5f9",
              fontFamily: "'Kanit', sans-serif",
              textAlign: "center",
              my: 4,
            }}
          >
            Division not found
          </Typography>
        )}

        <FilterComponent
          projects={divisionData?.projects || []}
          onFilterChange={handleFilterChange}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
        />

        {filteredProjects.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "200px",
              mt: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#f1f5f9",
                fontFamily: "'Kanit', sans-serif",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                textAlign: "center",
              }}
            >
              No projects to display
            </Typography>
          </Box>
        ) : (
          <>
            {viewMode === "grid" ? (
              <Grid
                container
                spacing={{ xs: 2, sm: 3, md: 4 }}
                justifyContent="center"
                alignItems="stretch"
              >
                {paginatedProjects.map((project, index) => (
                  <Grid
                    item
                    key={project.id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                  >
                    <Box
                      width="100%"
                      height="100%"
                      ref={(el) => (cardRefs.current[index] = el)}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <ProjectCardComponent
                        project={project}
                        onClick={() => handleCardClick(project.id)}
                        cardRef={{ current: cardRefs.current[index] }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <ListViewComponent
                projects={paginatedProjects}
                onClick={handleCardClick}
              />
            )}

            {pageCount > 1 && (
              <Box
                mt={{ xs: 2, sm: 3, md: 4 }}
                display="flex"
                justifyContent="center"
                sx={{
                  px: { xs: 1, sm: 0 },
                }}
              >
                <PaginationControls
                  page={page}
                  count={pageCount}
                  onChange={handlePageChange}
                />
              </Box>
            )}
          </>
        )}
      </Container>
    </Box>
  );
};

export default ProjectFindAll;