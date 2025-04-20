// // src/components/ProjectDetails/ProjectDetails.tsx
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Box, Container, Button, Grid, Typography } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import projectData from "../../../assets/data/projectall.json";
// import Project from "./ProjectDetails.types";
// import ProjectImageSlider from "./Components/ProjectImageSlider";
// import ProjectInfo from "./Components/ProjectInfo";
// import EnquiryForm from "./Components/EnquiryForm";
// import RelatedProjectsSlider from "./Components/RelatedProjectsSlider";

// const ProjectDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const [project, setProject] = useState<Project | null>(null);

//   useEffect(() => {
//     if (!id) return;

//     const projectId = Number(id);
//     const allProjects = projectData.divisions.flatMap((division) => division.projects);
//     const selectedProject = allProjects.find((p) => p.id === projectId);
//     setProject(selectedProject || null);

//     // Log for debugging
//     console.log("Project ID:", projectId, "Selected Project:", selectedProject);
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

//   return (
//     <Box sx={{ background: "linear-gradient(to bottom, #0F1A33, #1E2A44)", color: "white" }}>
//       <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
//         <Button
//           startIcon={<ArrowBackIcon />}
//           onClick={() => navigate(-1)}
//           sx={{ mb: 2, color: "white", "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" } }}
//         >
//           Back to Projects
//         </Button>

//         {/* Image Slider with fallback */}
//         <ProjectImageSlider
//           images={project.images && project.images.length > 0 ? project.images : ["placeholder.jpg"]}
//         />

//         {/* Project Info and Enquiry Form */}
//         <Grid container spacing={4} sx={{ mb: 6 }}>
//           <Grid item xs={12} md={8}>
//             <ProjectInfo project={project} />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Box
//               sx={{
//                 position: { xs: "static", md: "sticky" },
//                 top: { md: 80 },
//                 height: "fit-content",
//               }}
//             >
//               <EnquiryForm />
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Related Projects Slider */}
//         <RelatedProjectsSlider division={project.division} currentProjectId={project.id} />
//       </Container>
//     </Box>
//   );
// };

// export default ProjectDetails;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProjectImageSlider from "./Components/ProjectImageSlider";
import ProjectInfo from "./Components/ProjectInfo";
import EnquiryForm from "./Components/EnquiryForm";
import RelatedProjectsSlider from "./Components/RelatedProjectsSlider";

// Define Project type
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

interface ProjectDetailsProps {
  project: Project;
  divisionSlug?: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, divisionSlug }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: "linear-gradient(to bottom, #0F1A33, #1E2A44)", color: "white" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() =>
            navigate(divisionSlug ? `/${divisionSlug}` : "/projects")
          }
          sx={{ mb: 2, color: "white", "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" } }}
        >
          Back to Projects
        </Button>

        {/* Image Slider with fallback */}
        <ProjectImageSlider
          images={project.images && project.images.length > 0 ? project.images : []}
        />

        {/* Project Info and Enquiry Form */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={8}>
            <ProjectInfo project={project} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                position: { xs: "static", md: "sticky" },
                top: { md: 80 },
                height: "fit-content",
              }}
            >
              <EnquiryForm />
            </Box>
          </Grid>
        </Grid>

        {/* Related Projects Slider */}
        <RelatedProjectsSlider division={project.division} currentProjectId={project.id} />
      </Container>
    </Box>
  );
};

export default ProjectDetails;