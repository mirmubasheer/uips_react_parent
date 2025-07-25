// import React, { memo } from "react";
// import { Box, Typography } from "@mui/material";
// import { useInView } from "react-intersection-observer";
// import { clientlogos } from "../../assets";

// const containerStyles = {
//   width: "100%",
//   background: "linear-gradient(90deg, #6B7280 0%, #9CA3AF 100%)",
//   padding: { xs: "20px 10px", sm: "30px 20px", md: "40px 30px" },
//   position: "relative",
//   "&:before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: "radial-gradient(at 0% 50%, rgba(107, 114, 128, 0.1) 50%, transparent 70%)",
//     zIndex: 0,
//   },
//   boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//   minHeight: { xs: "auto", md: "300px" },
// } as const;

// const titleStyles = {
//   textAlign: "center",
//   color: "#FFFFFF",
//   fontWeight: 600,
//   mb: { xs: 3, md: 4 },
//   textTransform: "uppercase",
//   letterSpacing: "2px",
//   position: "relative",
//   zIndex: 1,
//   fontSize: { xs: "18px", sm: "20px", md: "24px" },
//   textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
//   fontFamily: "Roboto, Arial, sans-serif",
// } as const;

// const gridStyles = {
//   position: "relative",
//   zIndex: 1,
//   display: "grid",
//   gridTemplateColumns: {
//     xs: "repeat(auto-fit, minmax(80px, 1fr))",
//     sm: "repeat(auto-fit, minmax(100px, 1fr))",
//     md: "repeat(auto-fit, minmax(120px, 1fr))",
//     lg: "repeat(auto-fit, minmax(140px, 1fr))",
//   },
//   gap: { xs: 2, sm: 3, md: 4 },
//   justifyContent: "center",
//   alignItems: "center",
//   px: { xs: 1, sm: 2, md: 4, lg: 6 },
//   maxWidth: "1200px",
//   mx: "auto",
// } as const;

// const logoContainerStyles = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   padding: "10px",
//   transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
//   willChange: "transform, box-shadow",
//   "&:hover": {
//     transform: "scale(1.5)",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
//     background: "rgba(255, 255, 255, 0.1)",
//     borderRadius: "12px",
//   },
// } as const;

// const logoImageStyles = {
//   width: { xs: "60px", sm: "80px", md: "100px", lg: "120px" },
//   maxWidth: "130px",
//   height: "auto",
//   objectFit: "contain",
//   filter: "grayscale(0%) brightness(1.2)",
//   borderRadius: "12px",
//   p: 2,
// } as const;

// const LogoItem: React.FC<{ logo: string; index: number }> = memo(({ logo, index }) => (
//   <Box sx={logoContainerStyles}>
//     <Box
//       component="img"
//       src={logo}
//       alt={`Client ${index + 1}`}
//       sx={logoImageStyles}
//       loading="lazy"
//     />
//   </Box>
// ));

// const ClientBar: React.FC = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

//   return (
//     <Box sx={containerStyles} ref={ref}>
//       <Typography variant="h5" sx={titleStyles}>
//         Our Esteemed Clients
//       </Typography>
//       {inView && (
//         <Box sx={gridStyles}>
//           {clientlogos.map((logo: string, index: number) => (
//             <LogoItem key={index} logo={logo} index={index} />
//           ))}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ClientBar;


import React, { memo, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { clientlogos } from "../../assets";

const containerStyles = {
  width: "100%",
  background: `linear-gradient(to bottom, hsl(220, 20%, 90%) 0%, hsl(220, 20%, 95%))`,
  padding: { xs: "50px 10px 20px", sm: "55px 20px 30px", md: "60px 0px 40px" },
  position: "relative",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(at 0% 50%, rgba(0, 0, 0, 0.05) 50%, transparent 70%)",
    zIndex: 1,
  },
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  minHeight: { xs: "200px", md: "300px" },
  willChange: "opacity",
} as const;

const titleStyles = {
  textAlign: "center",
  color: "#1e2a44",
  fontWeight: 600,
  mb: { xs: 3, md: 4 },
  textTransform: "uppercase",
  letterSpacing: "2px",
  position: "relative",
  zIndex: 3,
  fontSize: { xs: "18px", sm: "20px", md: "24px" },
  textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
  fontFamily: "Roboto, Arial, sans-serif",
} as const;

const gridStyles = {
  position: "relative",
  zIndex: 3,
  display: "grid",
  gridTemplateColumns: {
    xs: "repeat(auto-fit, minmax(80px, 1fr))",
    sm: "repeat(auto-fit, minmax(100px, 1fr))",
    md: "repeat(auto-fit, minmax(120px, 1fr))",
    lg: "repeat(auto-fit, minmax(140px, 1fr))",
  },
  gap: { xs: 2, sm: 3, md: 4 },
  justifyContent: "center",
  alignItems: "center",
  px: { xs: 1, sm: 2, md: 4, lg: 6 },
  maxWidth: "1200px",
  mx: "auto",
} as const;

const logoContainerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: { xs: "80px", sm: "100px", md: "120px", lg: "140px" }, // Fixed container size
  height: { xs: "80px", sm: "100px", md: "120px", lg: "140px" }, // Fixed container height
  padding: "10px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border 0.3s ease",
  willChange: "transform, box-shadow, border",
  "&:hover": {
    transform: "scale(1.3)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    background: "rgba(0, 0, 0, 0.05)",
    borderRadius: "12px",
    border: "1px solid #324177",
  },
} as const;

const logoImageStyles = {
  width: "100%", // Full width of container
  height: "100%", // Full height of container
  maxWidth: { xs: "70px", sm: "90px", md: "110px", lg: "130px" }, // Slightly smaller to fit within container
  maxHeight: { xs: "70px", sm: "90px", md: "110px", lg: "130px" }, // Slightly smaller to fit within container
  objectFit: "contain",
  filter: "grayscale(0%) brightness(1.1)",
  borderRadius: "12px",
} as const;

const preloadImages = (logos: string[], count: number) => {
  logos.slice(0, count).forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
};

const LogoItem: React.FC<{ logo: string; index: number }> = memo(
  ({ logo, index }) => (
    <Box sx={logoContainerStyles}>
      <Box
        component="img"
        src={logo}
        alt={`Client ${index + 1}`}
        sx={logoImageStyles}
        loading={index < 4 ? "eager" : "lazy"}
      />
    </Box>
  ),
  (prevProps, nextProps) => prevProps.logo === nextProps.logo && prevProps.index === nextProps.index
);

const ClientBar: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    preloadImages(clientlogos, 4);
    return () => {
      const links = document.querySelectorAll('link[rel="preload"][as="image"]');
      links.forEach((link) => link.remove());
    };
  }, []);

  return (
    <Box sx={containerStyles} ref={ref}>
      <Typography variant="h5" sx={titleStyles}>
        Our Esteemed Clients
      </Typography>
      {inView && (
        <Box sx={gridStyles}>
          {clientlogos.map((logo: string, index: number) => (
            <LogoItem key={index} logo={logo} index={index} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default memo(ClientBar);