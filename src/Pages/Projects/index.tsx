// import React from "react";
// import HeaderAll from "../../components/HeaderAll/HeaderAll";
// import ProjectsFindAll from "./ProjectsFindAll";
// import { Box } from "@mui/material";
// import { useParams } from "react-router-dom";
// import { projectbanner } from "../../assets";

// // Map division routes to their banner images
// const divisionBannerMap: Record<string, string> = {
//   civil: projectbanner.civilBanner,
//   shutdowns: projectbanner.shutdownsBanner,
//   instrumentation: projectbanner.instrumentationBanner,
//   power: projectbanner.powerBanner,
//   electrical: projectbanner.electricalbanner,
//   it: projectbanner.itBanner,
//   mechanical: projectbanner.mechanicalBanner,
// };

// const Projects: React.FC = () => {
//   const { division } = useParams<{ division?: string }>();

//   // Normalize division for lookup
//   const normalizedDivision = division?.toLowerCase();

//   // Determine the banner image with a fallback
//   const bannerImage = normalizedDivision
//     ? divisionBannerMap[normalizedDivision] || projectbanner.defaultBanner
//     : projectbanner.defaultBanner;

//   // Capitalize division for breadcrumb label
//   const breadcrumbLabel = normalizedDivision
//     ? normalizedDivision.charAt(0).toUpperCase() + normalizedDivision.slice(1)
//     : "Projects";

//   const breadcrumbItems = [
//     { label: "Home", href: "/" },
//     { label: breadcrumbLabel, href: normalizedDivision ? `/${normalizedDivision}` : "/projects" },
//   ];

//   return (
//     <Box sx={{ overflow: "hidden", backgroundColor: "transparent" }}>
//       <HeaderAll
//         imageSrc={bannerImage}
//         title="Projects"
//         breadcrumbItems={breadcrumbItems}
//       />
//       <ProjectsFindAll division={normalizedDivision} />
//     </Box>
//   );
// };

// export default Projects;




// import React, { useEffect, useState, Suspense } from "react";
// import HeaderAll from "../../components/HeaderAll/HeaderAll";
// import ProjectsFindAll from "./ProjectsFindAll";
// import { Box } from "@mui/material";
// import { useParams } from "react-router-dom";
// import { projectbanner } from "../../assets";

// // Custom hook to preload images
// const useImagePreload = (imageSrc: string) => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const img = new Image();
//     img.src = imageSrc;
//     img.onload = () => setIsLoaded(true);
//     img.onerror = () => setIsLoaded(true); // Fallback to loaded state on error
//   }, [imageSrc]);

//   return isLoaded;
// };

// // Map division routes to their banner images
// const divisionBannerMap: Record<string, string> = {
//   civil: projectbanner.civilBanner,
//   shutdowns: projectbanner.shutdownsBanner,
//   instrumentation: projectbanner.instrumentationBanner,
//   power: projectbanner.powerBanner,
//   electrical: projectbanner.electricalbanner,
//   it: projectbanner.itBanner,
//   mechanical: projectbanner.mechanicalBanner,
// };

// const Projects: React.FC = () => {
//   const { division } = useParams<{ division?: string }>();

//   // Normalize division for lookup
//   const normalizedDivision = division?.toLowerCase();

//   // Determine the banner image with a fallback
//   const bannerImage = normalizedDivision
//     ? divisionBannerMap[normalizedDivision] || projectbanner.defaultBanner
//     : projectbanner.defaultBanner;

//   // Preload the banner image
//   const isBannerLoaded = useImagePreload(bannerImage);

//   // Capitalize division for breadcrumb label
//   const breadcrumbLabel = normalizedDivision
//     ? normalizedDivision.charAt(0).toUpperCase() + normalizedDivision.slice(1)
//     : "Projects";

//   const breadcrumbItems = [
//     { label: "Home", href: "/" },
//     {
//       label: breadcrumbLabel,
//       href: normalizedDivision ? `/${normalizedDivision}` : "/projects",
//     },
//   ];

//   return (
//     <Suspense fallback={<div className="min-h-screen bg-gray-100 animate-pulse" />}>
//       <Box sx={{ overflow: "hidden", backgroundColor: "transparent" }}>
//         {isBannerLoaded ? (
//           <HeaderAll
//             imageSrc={bannerImage}
//             title="Projects"
//             breadcrumbItems={breadcrumbItems}
//             loading="eager" // Ensure browser prioritizes this image
//           />
//         ) : (
//           <div className="relative w-full h-64 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse">
//             <div className="absolute inset-0 flex items-center justify-center">
//               <span className="text-gray-500">Loading...</span>
//             </div>
//           </div>
//         )}
//         <ProjectsFindAll division={normalizedDivision} />
//       </Box>
//     </Suspense>
//   );
// };

// export default Projects;

import React, { useEffect, useState, Suspense } from 'react';
import HeaderAll from '../../components/HeaderAll/HeaderAll';
import ProjectsFindAll from './ProjectsFindAll';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { projectbanner } from '../../assets';

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

const Projects: React.FC = () => {
  const { division } = useParams<{ division?: string }>();
  const normalizedDivision = division?.toLowerCase();
  const bannerImage = normalizedDivision
    ? divisionBannerMap[normalizedDivision] || projectbanner.defaultBanner
    : projectbanner.defaultBanner;
  const isBannerLoaded = useImagePreload(bannerImage);
  const breadcrumbLabel = normalizedDivision
    ? normalizedDivision.charAt(0).toUpperCase() + normalizedDivision.slice(1)
    : 'Projects';
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    {
      label: breadcrumbLabel,
      href: normalizedDivision ? `/${normalizedDivision}` : '/projects',
    },
  ];

  return (
    <Suspense
      fallback={
        <Box
          sx={{
            minHeight: '100vh',
            background: 'linear-gradient(to bottom, #0F1A33, #1E2A44)',
            width: '100%',
            overflowX: 'hidden',
            animatePulse: true,
          }}
        />
      }
    >
      <Box
        sx={{
          background: 'linear-gradient(to bottom, #0F1A33, #1E2A44)',
          width: '100%',
          overflowX: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {isBannerLoaded ? (
          <HeaderAll
            imageSrc={bannerImage}
            title="Projects"
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
            Loading...
          </Box>
        )}
        <ProjectsFindAll division={normalizedDivision} />
      </Box>
    </Suspense>
  );
};

export default Projects;