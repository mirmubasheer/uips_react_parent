// import React, { useEffect, useRef } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   CardMedia,
//   Container,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import gsap from "gsap";
// import { clientlogos } from "../../../assets";

// interface Division {
//   name: string;
//   description: string;
//   clients: string[];
//   img: string;
// }

// interface DetailedDivisionProps {
//   division: Division;
// }

// const ImageWrapper = styled(Box)(() => ({
//   overflow: "hidden",
//   borderRadius: "12px",
//   boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
// }));

// const ClientLogo = styled("img")(() => ({
//   height: 100,
//   width: 90,
//   objectFit: "contain",
//   flexShrink: 0,
//   borderRadius: "8px",
//   margin: "0 10px",
//   transition: "transform 0.4s ease-in-out",
// }));

// const ClientSliderWrapper = styled(Box)(() => ({
//   position: "relative",
//   overflow: "hidden",
//   width: "100%",
//   height: "120px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// }));

// const ClientSlider = styled(Box)(() => ({
//   display: "flex",
//   whiteSpace: "nowrap",
//   willChange: "transform",
// }));

// const allClients = [
//   "ARAMCO SHELL - SATORP",
//   "OLAYAN-BAYRONI",
//   "ABB-SADAF SABIC",
//   "SAUDI KAYAN SABIC",
//   "L&T - SABIC",
//   "SADAF SABIC",
//   "UNITED - SABIC",
//   "ADDAR GROUP",
//   "FARABI PETROCHEMICALS",
//   "MASA - MARAFIQ",
//   "SDC",
//   "EATON",
//   "MA'ADEN",
// ];

// const DetailedDivision: React.FC<DetailedDivisionProps> = ({ division }) => {
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const clientRefs = useRef<(HTMLImageElement | null)[]>([]);

//   const sliderClients = [...allClients, ...allClients, ...allClients]; // triple for smoother loop

//   useEffect(() => {
//     const slider = sliderRef.current;
//     if (!slider) return;

//     let x = 0;
//     const speed = 0.5;
//     let isPaused = false;
//     let lastCenteredIndex: number | null = null;
//     let pauseTimeout: NodeJS.Timeout | null = null;

//     const screenCenter = window.innerWidth / 2;

//     const update = () => {
//       if (!slider) return;

//       const totalWidth = slider.scrollWidth / 3;

//       if (!isPaused) {
//         x -= speed;

//         if (Math.abs(x) >= totalWidth) {
//           x = 0;
//         }

//         slider.style.transform = `translateX(${x}px)`;
//       }

//       let closestIndex = -1;
//       let closestDistance = Infinity;

//       clientRefs.current.forEach((img, index) => {
//         if (!img) return;
//         const rect = img.getBoundingClientRect();
//         const imgCenter = rect.left + rect.width / 2;
//         const distance = Math.abs(screenCenter - imgCenter);

//         if (distance < closestDistance) {
//           closestDistance = distance;
//           closestIndex = index;
//         }
//       });

//       if (
//         closestIndex !== -1 &&
//         closestDistance < 20 &&
//         closestIndex !== lastCenteredIndex
//       ) {
//         isPaused = true;
//         lastCenteredIndex = closestIndex;

//         clientRefs.current.forEach((img, idx) => {
//           if (!img) return;
//           img.style.transform = `scale(${idx === closestIndex ? 1.25 : 1})`;
//           img.style.zIndex = idx === closestIndex ? "2" : "1";
//         });

//         pauseTimeout = setTimeout(() => {
//           isPaused = false;
//         }, 2000);
//       } else {
//         clientRefs.current.forEach((img, idx) => {
//           if (!img || idx === lastCenteredIndex) return;
//           img.style.transform = "scale(1)";
//           img.style.zIndex = "1";
//         });
//       }
//     };

//     gsap.ticker.add(update);

//     return () => {
//       gsap.ticker.remove(update);
//       if (pauseTimeout) clearTimeout(pauseTimeout);
//     };
//   }, []);

//   return (
//     <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
//       <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="stretch">
//         <Grid item xs={12} md={6}>
//           <Box sx={{ color: "#ffffff" }}>
//             <Typography
//               variant="h4"
//               fontWeight={600}
//               gutterBottom
//               sx={{
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
//                 color: "#ffffff",
//               }}
//             >
//               {division.name}
//             </Typography>
//             <Typography
//               variant="body1"
//               lineHeight={1.6}
//               sx={{
//                 fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
//                 color: "#ffffff",
//               }}
//             >
//               {division.description}
//             </Typography>
//           </Box>
//         </Grid>

//         {/* <Grid item xs={12} md={6}>
//           <ImageWrapper>
//             <CardMedia
//               component="img"
//               image={`/images/${division.img}.jpg`}
//               alt={division.name}
//               sx={{
//                 height: { xs: 150, sm: 200, md: 300 },
//                 width: "100%",
//                 objectFit: "cover",
//                 transition: "transform 0.3s ease",
//                 "&:hover": {
//                   transform: "scale(1.05)",
//                 },
//               }}
//             />
//           </ImageWrapper>
//         </Grid> */}

//         <Grid item xs={12}>
//           <Box sx={{ color: "#ffffff" }}>
//             <Typography
//               variant="h5"
//               fontWeight={500}
//               gutterBottom
//               sx={{
//                 fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
//                 color: "#ffffff",
//               }}
//             >
//               Our Clients
//             </Typography>

//             <ClientSliderWrapper>
//               <ClientSlider ref={sliderRef}>
//                 {sliderClients.map((client, index) => (
//                   <ClientLogo
//                     key={`${client}-${index}`}
//                     src={clientlogos[index % clientlogos.length]}
//                     alt={client}
//                     title={client}
//                     ref={(el) => (clientRefs.current[index] = el)}
//                   />
//                 ))}
//               </ClientSlider>
//             </ClientSliderWrapper>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default DetailedDivision;




import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import gsap from "gsap";
import { clientlogos } from "../../../assets";

interface Division {
  name: string;
  description: string;
  clients: string[];
  img: string;
}

interface DetailedDivisionProps {
  division: Division;
}

const ImageWrapper = styled(Box)(() => ({
  overflow: "hidden",
  borderRadius: "12px",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
}));

const ClientLogo = styled("img")(() => ({
  width: "100px",
  maxWidth: "130px",
  height: "auto",
  objectFit: "contain",
  flexShrink: 0,
  borderRadius: "12px",
  margin: "0 10px",
  padding: "16px",
  filter: "grayscale(20%) brightness(1.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.15)",
  },
}));

const ClientSliderWrapper = styled(Box)(() => ({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "120px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const ClientSlider = styled(Box)(() => ({
  display: "flex",
  whiteSpace: "nowrap",
  willChange: "transform",
}));

const allClients = [
  "ARAMCO SHELL - SATORP",
  "OLAYAN-BAYRONI",
  "ABB-SADAF SABIC",
  "SAUDI KAYAN SABIC",
  "L&T - SABIC",
  "SADAF SABIC",
  "UNITED - SABIC",
  "ADDAR GROUP",
  "FARABI PETROCHEMICALS",
  "MASA - MARAFIQ",
  "SDC",
  "EATON",
  "MA'ADEN",
];

const DetailedDivision: React.FC<DetailedDivisionProps> = ({ division }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const clientRefs = useRef<(HTMLImageElement | null)[]>([]);

  const sliderClients = [...allClients, ...allClients, ...allClients]; // triple for smoother loop

  useEffect(() => {
    // Only run client slider animation if not IT Division
    if (division.name.toLowerCase() === "it division") return;

    const slider = sliderRef.current;
    if (!slider) return;

    let x = 0;
    const speed = 0.5;
    let isPaused = false;
    let lastCenteredIndex: number | null = null;
    let pauseTimeout: NodeJS.Timeout | null = null;

    const screenCenter = window.innerWidth / 2;

    const update = () => {
      if (!slider) return;

      const totalWidth = slider.scrollWidth / 3;

      if (!isPaused) {
        x -= speed;

        if (Math.abs(x) >= totalWidth) {
          x = 0;
        }

        slider.style.transform = `translateX(${x}px)`;
      }

      let closestIndex = -1;
      let closestDistance = Infinity;

      clientRefs.current.forEach((img, index) => {
        if (!img) return;
        const rect = img.getBoundingClientRect();
        const imgCenter = rect.left + rect.width / 2;
        const distance = Math.abs(screenCenter - imgCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (
        closestIndex !== -1 &&
        closestDistance < 20 &&
        closestIndex !== lastCenteredIndex
      ) {
        isPaused = true;
        lastCenteredIndex = closestIndex;

        clientRefs.current.forEach((img, idx) => {
          if (!img) return;
          img.style.transform = `scale(${idx === closestIndex ? 1.25 : 1})`;
          img.style.zIndex = idx === closestIndex ? "2" : "1";
        });

        pauseTimeout = setTimeout(() => {
          isPaused = false;
        }, 2000);
      } else {
        clientRefs.current.forEach((img, idx) => {
          if (!img || idx === lastCenteredIndex) return;
          img.style.transform = "scale(1)";
          img.style.zIndex = "1";
        });
      }
    };

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
      if (pauseTimeout) clearTimeout(pauseTimeout);
    };
  }, [division.name]); // Depend on division.name to re-run effect if division changes

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <Box sx={{ color: '#1e2a44' }}>
            <Typography
              variant="h4"
              fontWeight={600}
              gutterBottom
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
                color: '#1e2a44',
              }}
            >
              {division.name}
            </Typography>
            <Typography
              variant="body1"
              lineHeight={1.6}
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                color: '#1e2a44',
              }}
            >
              {division.description}
            </Typography>
          </Box>
        </Grid>

        {division.name.toLowerCase() !== "it division" && (
          <Grid item xs={12}>
            <Box sx={{ color: "#ffffff" }}>
              <Typography
                variant="h5"
                fontWeight={500}
                gutterBottom
                sx={{
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                  color: '#1e2a44',
                }}
              >
                Our Clients
              </Typography>

              <ClientSliderWrapper>
                <ClientSlider ref={sliderRef}>
                  {sliderClients.map((client, index) => (
                    <ClientLogo
                      key={`${client}-${index}`}
                      src={clientlogos[index % clientlogos.length]}
                      alt={client}
                      title={client}
                      ref={(el) => (clientRefs.current[index] = el)}
                    />
                  ))}
                </ClientSlider>
              </ClientSliderWrapper>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default DetailedDivision;
