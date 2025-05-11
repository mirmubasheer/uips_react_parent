// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Slider from "react-slick";
// import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
// import gsap from "gsap";

// // Types (same as in ProjectFindAll.tsx and ProjectDetailsWrapper.tsx)
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

// interface RelatedProjectsSliderProps {
//   division: string;
//   currentProjectId: number;
// }

// // Map division names to slugs (matches ProjectFindAll.tsx)
// const divisionNameToSlug: Record<string, string> = {
//   "Civil": "civil",
//   "Electrical": "electrical",
//   "Plant Shutdowns/Turnarounds": "shutdowns",
//   "Instrumentation": "instrumentation",
//   "Power": "power",
//   "IT": "it",
//   "Mechanical": "mechanical",
// };

// const RelatedProjectsSlider: React.FC<RelatedProjectsSliderProps> = ({
//   division,
//   currentProjectId,
// }) => {
//   const navigate = useNavigate();
//   const sliderRef = useRef<HTMLDivElement | null>(null);
//   const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

//   // Load division data dynamically
//   useEffect(() => {
//     const loadRelatedProjects = async () => {
//       try {
//         // Map division name to slug (e.g., "Civil" -> "civil")
//         const divisionSlug = divisionNameToSlug[division];
//         if (!divisionSlug) {
//           setRelatedProjects([]);
//           return;
//         }

//         // Dynamically import the division JSON file
//         const module = await import(`../../../../assets/data/${divisionSlug}.json`);
//         const divisionData = module.default as Division;

//         // Filter projects by division, exclude current project, limit to 15
//         const projects = divisionData.projects
//           .filter(
//             (project) =>
//               project.division === division && project.id !== currentProjectId
//           )
//           .slice(0, 15);

//         setRelatedProjects(projects);
//       } catch (error) {
//         console.error("Failed to load related projects:", error);
//         setRelatedProjects([]);
//       }
//     };

//     loadRelatedProjects();
//   }, [division, currentProjectId]);

//   // GSAP animation for fade-in
//   useEffect(() => {
//     if (sliderRef.current) {
//       gsap.fromTo(
//         sliderRef.current,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//       );
//     }
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: relatedProjects.length > 3, // Only infinite if enough projects
//     speed: 500,
//     slidesToShow: Math.min(relatedProjects.length, 3), // Adjust based on project count
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 960,
//         settings: { slidesToShow: Math.min(relatedProjects.length, 2) },
//       },
//       {
//         breakpoint: 600,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   if (relatedProjects.length === 0) {
//     return null;
//   }

//   // Handle card click navigation with division slug
//   const handleCardClick = (projectId: number) => {
//     const divisionSlug = divisionNameToSlug[division];
//     if (projectId && projectId !== currentProjectId && divisionSlug) {
//       navigate(`/project/${projectId}`, { state: { fromDivision: divisionSlug } });
//     }
//   };

//   return (
//     <Box sx={{ mt: 6, px: { xs: 2, sm: 0 } }}>
//       <Typography
//         variant="h5"
//         fontWeight={600}
//         sx={{ mb: 3, color: "white" }}
//       >
//         Related Projects
//       </Typography>
//       <Box ref={sliderRef}>
//         <Slider {...settings}>
//           {relatedProjects.map((project) => (
//             <Box key={project.id} sx={{ px: 1 }}>
//               <Card
//                 sx={{
//                   maxWidth: "280px",
//                   height: "360px",
//                   background: "linear-gradient(160deg, #1E2A44 0%, #2D3E66 100%)",
//                   borderRadius: "12px",
//                   overflow: "hidden",
//                   transition: "transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease",
//                   boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
//                   border: "1px solid rgba(59, 130, 246, 0.2)",
//                   "&:hover": {
//                     transform: "translateY(-6px)",
//                     boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
//                     background: "linear-gradient(160deg, #2D3E66 0%, #3B82F6 100%)",
//                   },
//                   margin: "0 8px",
//                   cursor: "pointer",
//                   color: "white",
//                   [theme => theme.breakpoints.down("sm")]: {
//                     maxWidth: "240px",
//                   },
//                 }}
//                 onClick={() => handleCardClick(project.id)}
//               >
//                 <CardMedia
//                   component="img"
//                   height="150"
//                   image={`/images/${project.images[0] || "placeholder.jpg"}`}
//                   alt={project.projectname}
//                   sx={{ objectFit: "cover" }}
//                 />
//                 <CardContent>
//                   <Typography variant="h6">{project.projectname}</Typography>
//                   <Typography variant="body2" color="white">
//                     {project.location}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Box>
//           ))}
//         </Slider>
//       </Box>
//     </Box>
//   );
// };

// export default RelatedProjectsSlider;




import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { Box, Typography, Card, CardMedia, CardContent, useTheme } from "@mui/material";
import gsap from "gsap";

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

interface RelatedProjectsSliderProps {
  division: string;
  currentProjectId: number;
}

// Map division names to slugs
const divisionNameToSlug: Record<string, string> = {
  Civil: "civil",
  Electrical: "electrical",
  "Plant Shutdowns/Turnarounds": "shutdowns",
  Instrumentation: "instrumentation",
  Power: "power",
  IT: "it",
  Mechanical: "mechanical",
};

const RelatedProjectsSlider: React.FC<RelatedProjectsSliderProps> = ({
  division,
  currentProjectId,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  // Load division data dynamically
  useEffect(() => {
    const loadRelatedProjects = async () => {
      try {
        const divisionSlug = divisionNameToSlug[division];
        if (!divisionSlug) {
          setRelatedProjects([]);
          return;
        }

        const module = await import(`../../../../assets/data/${divisionSlug}.ts`);
        const divisionData = module.default as Division;

        const projects = divisionData.projects
          .filter(
            (project) =>
              project.division === division && project.id !== currentProjectId
          )
          .slice(0, 15);

        setRelatedProjects(projects);
      } catch (error) {
        console.error("Failed to load related projects:", error);
        setRelatedProjects([]);
      }
    };

    loadRelatedProjects();
  }, [division, currentProjectId]);

  // GSAP animation for fade-in
  useEffect(() => {
    if (sliderRef.current) {
      gsap.fromTo(
        sliderRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  const settings = {
    dots: true,
    infinite: relatedProjects.length > 3,
    speed: 500,
    slidesToShow: Math.min(relatedProjects.length, 3),
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 960,
        settings: { slidesToShow: Math.min(relatedProjects.length, 2) },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  if (relatedProjects.length === 0) {
    return null;
  }

  const handleCardClick = (projectId: number) => {
    const divisionSlug = divisionNameToSlug[division];
    if (projectId && projectId !== currentProjectId && divisionSlug) {
      navigate(`/${divisionSlug}/project/${projectId}`, { state: { fromDivision: divisionSlug } });
    }
  };

  return (
    <Box sx={{ mt: 6, px: { xs: 2, sm: 0 } }}>
      <Typography
        variant="h5"
        fontWeight={600}
        sx={{ mb: 3, color: "white" }} // Already white
      >
        Related Projects
      </Typography>
      <Box ref={sliderRef}>
        <Slider {...settings}>
          {relatedProjects.map((project) => (
            <Box key={project.id} sx={{ px: 1 }}>
              <Card
                sx={{
                  maxWidth: "280px",
                  height: "360px",
                  background: "linear-gradient(160deg, #1E2A44 0%, #2D3E66 100%)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                    background: "linear-gradient(160deg, #2D3E66 0%, #3B82F6 100%)",
                  },
                  margin: "0 8px",
                  cursor: "pointer",
                  color: "white", // Ensure card text is white
                  [theme.breakpoints.down("sm")]: {
                    maxWidth: "240px",
                  },
                }}
                onClick={() => handleCardClick(project.id)}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={project.images[0] || "/images/placeholder.jpg"}
                  alt={project.projectname}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ color: "white" }}> {/* Ensure CardContent text is white */}
                  <Typography variant="h6" sx={{ color: "white" }}>
                    {project.projectname}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    {project.location}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default RelatedProjectsSlider;