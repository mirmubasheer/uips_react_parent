// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { Box, Typography } from "@mui/material";
// import HeaderAll from "../../../components/HeaderAll/HeaderAll";
// import ProjectDetails from "./ProjectDetails";
// import projectData from "../../../assets/data/projectall.json";
// import { projectbanner } from "../../../assets";


// // Map division names to banner images
// const divisionBannerMap: Record<string, string> = {
//     civil: projectbanner.civilBanner,
//     shutdowns: projectbanner.shutdownsBanner,
//     instrumentation: projectbanner.instrumentationBanner,
//     power: projectbanner.powerBanner,
//     electrical: projectbanner.electricalbanner,
//     it: projectbanner.itBanner,
//     mechanical: projectbanner.mechanicalBanner,
// };

// // Define Project type
// interface Project {
//   id: number;
//   slug: string;
//   projectname: string;
//   client: string;
//   location: string;
//   status: string;
//   image: string;
//   description: string;
//   monthyear: string;
//   duration: string;
//   povalue: string;
//   totalmanhour: string;
// }

// const ProjectDetailsWrapper: React.FC = () => {
//     const { id } = useParams<{ id: string }>();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [project, setProject] = useState<Project | null>(null);

 
//   // Get division from router state (passed from ProjectFindAll)
//   const divisionFromState = location.state?.fromDivision as string | undefined;

//   useEffect(() => {
//     if (!id) return;

//     const projectId = Number(id);
//     const allProjects = projectData.divisions.flatMap((division) => division.projects);
//     const selectedProject = allProjects.find((p) => p.id === projectId);
//     setProject(selectedProject || null);
//   }, [id]);

//   if (!id) {
//     return (
//       <Box sx={{ minHeight: "100vh", background: "linear-gradient(to bottom, #0F1A33, #1E2A44)", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
//         <Typography variant="h5">No project ID provided</Typography>
//       </Box>
//     );
//   }

//   if (!project) {
//     return (
//       <Box sx={{ minHeight: "100vh", background: "linear-gradient(to bottom, #0F1A33, #1E2A44)", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
//         <Typography variant="h5">Project not found</Typography>
//       </Box>
//     );
//   }

//   // Determine banner image based on division from state (same as Projects.tsx)
//   const bannerImage = divisionFromState
//     ? divisionBannerMap[divisionFromState.toLowerCase()] || projectbanner.defaultBanner
//     : projectbanner.defaultBanner;

//   // Capitalize division for breadcrumb label
//   const breadcrumbLabel = divisionFromState
//     ? divisionFromState.charAt(0).toUpperCase() + divisionFromState.slice(1)
//     : "Projects";

//   // Set up breadcrumb items
//   const breadcrumbItems = [
//     { label: "Home", href: "/" },
//     { label: breadcrumbLabel, href: divisionFromState ? `/${divisionFromState}` : "/projects" },
//     { label: project.projectname, href: `/project/${project.id}` },
//   ];
//   return (
//     <Box sx={{ overflow: "hidden", backgroundColor: "transparent" }}>
//       <HeaderAll
//         imageSrc={bannerImage}
//         title={project.projectname}
//         breadcrumbItems={breadcrumbItems}
//       />
//       <ProjectDetails project={project} />
//     </Box>
//   );
// };

// export default ProjectDetailsWrapper;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { Box, Typography } from "@mui/material";
// import HeaderAll from "../../../components/HeaderAll/HeaderAll";
// import ProjectDetails from "./ProjectDetails";
// import { projectbanner } from "../../../assets";

// // Map division slugs to banner images
// const divisionBannerMap: Record<string, string> = {
//   civil: projectbanner.civilBanner,
//   shutdowns: projectbanner.shutdownsBanner,
//   instrumentation: projectbanner.instrumentationBanner,
//   power: projectbanner.powerBanner,
//   electrical: projectbanner.electricalbanner,
//   it: projectbanner.itBanner,
//   mechanical: projectbanner.mechanicalBanner,
// };

// // Define Project type
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

// const ProjectDetailsWrapper: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [project, setProject] = useState<Project | null>(null);
//   const [divisionSlug, setDivisionSlug] = useState<string | undefined>(undefined);

//   // Get division from router state
//   const divisionFromState = location.state?.fromDivision as string | undefined;

//   useEffect(() => {
//     if (!id || !divisionFromState) {
//       setProject(null);
//       return;
//     }

//     const projectId = Number(id);
//     if (!Number.isFinite(projectId)) {
//       setProject(null);
//       return;
//     }

//     const loadProject = async () => {
//       try {
//         // Dynamically import the division-specific JSON file
//         const module = await import(`../../../assets/data/${divisionFromState}.json`);
//         const divisionData = module.default as Division;
//         const selectedProject = divisionData.projects.find((p) => p.id === projectId);
//         setProject(selectedProject || null);
//         setDivisionSlug(divisionFromState);
//       } catch (error) {
//         console.error("Failed to load division data:", error);
//         setProject(null);
//       }
//     };

//     loadProject();
//   }, [id, divisionFromState]);

//   if (!id || !divisionFromState) {
//     return (
//       <Box
//         sx={{
//           minHeight: "100vh",
//           background: "linear-gradient(to bottom, #0F1A33, #1E2A44)",
//           color: "white",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Typography variant="h5">No project ID or division provided</Typography>
//       </Box>
//     );
//   }

//   if (!project) {
//     return (
//       <Box
//         sx={{
//           minHeight: "100vh",
//           background: "linear-gradient(to bottom, #0F1A33, #1E2A44)",
//           color: "white",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Typography variant="h5">Project not found</Typography>
//       </Box>
//     );
//   }

//   // Determine banner image based on division
//   const bannerImage = divisionSlug
//     ? divisionBannerMap[divisionSlug.toLowerCase()] || projectbanner.defaultBanner
//     : projectbanner.defaultBanner;

//   // Capitalize division for breadcrumb label
//   const breadcrumbLabel = divisionSlug
//     ? divisionSlug.charAt(0).toUpperCase() + divisionSlug.slice(1)
//     : "Projects";

//   // Set up breadcrumb items
//   const breadcrumbItems = [
//     { label: "Home", href: "/" },
//     { label: breadcrumbLabel, href: divisionSlug ? `/${divisionSlug}` : "/projects" },
//     { label: project.projectname, href: `/project/${project.id}` },
//   ];

//   return (
//     <Box sx={{ overflow: "hidden", backgroundColor: "transparent" }}>
//       <HeaderAll
//         imageSrc={bannerImage}
//         title={project.projectname}
//         breadcrumbItems={breadcrumbItems}
//       />
//       <ProjectDetails project={project} divisionSlug={divisionSlug} />
//     </Box>
//   );
// };

// export default ProjectDetailsWrapper;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { Box, Typography } from "@mui/material";
// import HeaderAll from "../../../components/HeaderAll/HeaderAll";
// import ProjectDetails from "./ProjectDetails";
// import { projectbanner } from "../../../assets";

// // Map division slugs to banner images
// const divisionBannerMap: Record<string, string> = {
//   civil: projectbanner.civilBanner,
//   shutdowns: projectbanner.shutdownsBanner,
//   instrumentation: projectbanner.instrumentationBanner,
//   power: projectbanner.powerBanner,
//   electrical: projectbanner.electricalbanner,
//   it: projectbanner.itBanner,
//   mechanical: projectbanner.mechanicalBanner,
// };

// // List of all divisions (for fallback search)
// const divisions = [
//   "civil",
//   "electrical",
//   "Shutdowns",
//   "instrumentation",
//   "power",
//   "it",
//   "mechanical",
// ];

// // Define Project type
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

// const ProjectDetailsWrapper: React.FC = () => {
//   const { id, division } = useParams<{ id: string; division?: string }>();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [project, setProject] = useState<Project | null>(null);
//   const [divisionSlug, setDivisionSlug] = useState<string | undefined>(division);

//   // Get division from router state as fallback
//   const divisionFromState = location.state?.fromDivision as string | undefined;

//   useEffect(() => {
//     if (!id) {
//       setProject(null);
//       return;
//     }

//     const projectId = Number(id);
//     if (!Number.isFinite(projectId)) {
//       setProject(null);
//       return;
//     }

//     const loadProject = async () => {
//       // Try division from URL first
//       if (division) {
//         try {
//           const module = await import(`../../../assets/data/${division}.ts`);
//           const divisionData = module.default as Division;
//           const selectedProject = divisionData.projects.find((p) => p.id === projectId);
//           if (selectedProject) {
//             setProject(selectedProject);
//             setDivisionSlug(division);
//             return;
//           }
//         } catch (error) {
//           console.error(`Failed to load ${division}.ts:`, error);
//         }
//       }

//       // Try divisionFromState (if available)
//       if (divisionFromState) {
//         try {
//           const module = await import(`../../../assets/data/${divisionFromState}.ts`);
//           const divisionData = module.default as Division;
//           const selectedProject = divisionData.projects.find((p) => p.id === projectId);
//           if (selectedProject) {
//             setProject(selectedProject);
//             setDivisionSlug(divisionFromState);
//             return;
//           }
//         } catch (error) {
//           console.error(`Failed to load ${divisionFromState}.ts:`, error);
//         }
//       }

//       // Fallback: Search all divisions
//       for (const divSlug of divisions) {
//         try {
//           const module = await import(`../../../assets/data/${divSlug}.ts`);
//           const divisionData = module.default as Division;
//           const selectedProject = divisionData.projects.find((p) => p.id === projectId);
//           if (selectedProject) {
//             setProject(selectedProject);
//             setDivisionSlug(divSlug);
//             return;
//           }
//         } catch (error) {
//           console.error(`Failed to load ${divSlug}.ts:`, error);
//         }
//       }

//       setProject(null); // Project not found
//     };

//     loadProject();
//   }, [id, division, divisionFromState]);

//   if (!id || !project) {
//     return (
//       <Box
//         sx={{
//           minHeight: "100vh",
//           background: "linear-gradient(to bottom, #0F1A33, #1E2A44)",
//           color: "white",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Typography variant="h5">{!id ? "No project ID provided" : "Project not found"}</Typography>
//       </Box>
//     );
//   }

//   // Determine banner image based on division
//   const bannerImage = divisionSlug
//     ? divisionBannerMap[divisionSlug.toLowerCase()] || projectbanner.defaultBanner
//     : projectbanner.defaultBanner;

//   // Capitalize division for breadcrumb label
//   const breadcrumbLabel = divisionSlug
//     ? divisionSlug.charAt(0).toUpperCase() + divisionSlug.slice(1)
//     : "Projects";

//   // Set up breadcrumb items
//   const breadcrumbItems = [
//     { label: "Home", href: "/" },
//     { label: breadcrumbLabel, href: divisionSlug ? `/${divisionSlug}` : "/projects" },
//     { label: project.projectname, href: divisionSlug ? `/${divisionSlug}/project/${project.id}` : `/project/${project.id}` },
//   ];

//   return (
//     <Box sx={{ overflow: "hidden", backgroundColor: "transparent" }}>
//       <HeaderAll
//         imageSrc={bannerImage}
//         title={project.projectname}
//         breadcrumbItems={breadcrumbItems}
//       />
//       <ProjectDetails project={project} divisionSlug={divisionSlug} />
//     </Box>
//   );
// };

// export default ProjectDetailsWrapper;




import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import HeaderAll from '../../../components/HeaderAll/HeaderAll';
import ProjectDetails from './ProjectDetails';
import { projectbanner } from '../../../assets';
import { Project } from '../../../types/projet';

const useImagePreload = (imageSrc: string) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsLoaded(true);
  }, [imageSrc]);

  return isLoaded;
};

const divisionBannerMap: Record<string, string> = {
  civil: projectbanner.civilBanner,
  shutdowns: projectbanner.shutdownsBanner,
  instrumentation: projectbanner.instrumentationBanner,
  power: projectbanner.powerBanner,
  electrical: projectbanner.electricalBanner,
  it: projectbanner.itBanner,
  mechanical: projectbanner.mechanicalBanner,
};

const divisions = [
  'civil',
  'electrical',
  'shutdowns',
  'instrumentation',
  'power',
  'it',
  'mechanical',
];

interface Division {
  name: string;
  description: string;
  clients: string[];
  img: string;
  projects: Project[];
}

const ProjectDetailsWrapper: React.FC = () => {
  const { id, division } = useParams<{ id: string; division?: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [project, setProject] = useState<Project | null>(null);
  const [divisionSlug, setDivisionSlug] = useState<string | undefined>(division);

  const divisionFromState = location.state?.fromDivision as string | undefined;

  const dataModules = useMemo(
    () => import.meta.glob('../../../assets/data/*.ts', { eager: true }),
    []
  );

  useEffect(() => {
    if (!id) {
      setProject(null);
      return;
    }

    const projectId = Number(id);
    if (!Number.isFinite(projectId)) {
      setProject(null);
      return;
    }

    const loadProject = async () => {
      if (division) {
        try {
          const modulePath = `../../../assets/data/${division}.ts`;
          const divisionData = dataModules[modulePath]?.default as Division;
          if (divisionData) {
            const selectedProject = divisionData.projects.find((p) => p.id === projectId);
            if (selectedProject) {
              setProject(selectedProject);
              setDivisionSlug(division);
              return;
            }
          }
        } catch (error) {
          console.error(`Failed to load ${division}.ts:`, error);
        }
      }

      if (divisionFromState) {
        try {
          const modulePath = `../../../assets/data/${divisionFromState}.ts`;
          const divisionData = dataModules[modulePath]?.default as Division;
          if (divisionData) {
            const selectedProject = divisionData.projects.find((p) => p.id === projectId);
            if (selectedProject) {
              setProject(selectedProject);
              setDivisionSlug(divisionFromState);
              return;
            }
          }
        } catch (error) {
          console.error(`Failed to load ${divisionFromState}.ts:`, error);
        }
      }

      for (const divSlug of divisions) {
        try {
          const modulePath = `../../../assets/data/${divSlug}.ts`;
          const divisionData = dataModules[modulePath]?.default as Division;
          if (divisionData) {
            const selectedProject = divisionData.projects.find((p) => p.id === projectId);
            if (selectedProject) {
              setProject(selectedProject);
              setDivisionSlug(divSlug);
              return;
            }
          }
        } catch (error) {
          console.error(`Failed to load ${divSlug}.ts:`, error);
        }
      }

      setProject(null);
    };

    loadProject();
  }, [id, division, divisionFromState, dataModules]);

  const normalizedDivisionSlug = divisionSlug?.toLowerCase();
  const bannerImage = normalizedDivisionSlug
    ? divisionBannerMap[normalizedDivisionSlug] || projectbanner.defaultBanner
    : projectbanner.defaultBanner;

  const isBannerLoaded = useImagePreload(bannerImage);

  useEffect(() => {
    console.log('Banner Image:', bannerImage);
  }, [bannerImage]);

  if (!id || !project) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #0F1A33, #1E2A44)',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          overflowX: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        <Typography variant="h5">{!id ? 'No project ID provided' : 'Project not found'}</Typography>
      </Box>
    );
  }

  const breadcrumbLabel = normalizedDivisionSlug
    ? normalizedDivisionSlug.charAt(0).toUpperCase() + normalizedDivisionSlug.slice(1)
    : 'Projects';

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: breadcrumbLabel, href: normalizedDivisionSlug ? `/${normalizedDivisionSlug}` : '/projects' },
    {
      label: project.projectname,
      href: normalizedDivisionSlug ? `/${normalizedDivisionSlug}/project/${project.id}` : `/project/${project.id}`,
    },
  ];

  return (
    <Box
      sx={{
          background: 'rgba(50, 65, 119, 0.2)',
        width: '100%',
        overflowX: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {isBannerLoaded ? (
        <HeaderAll
          imageSrc={bannerImage}
          title={project.projectname}
          breadcrumbItems={breadcrumbItems}
          loading="lazy"
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: 64,
            background: 'linear-gradient(to right, #0F1A33, #1E2A44)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            overflowX: 'hidden',
          }}
        >
          Loading Banner...
        </Box>
      )}
      <ProjectDetails project={project} divisionSlug={divisionSlug} />
    </Box>
  );
};

export default ProjectDetailsWrapper;