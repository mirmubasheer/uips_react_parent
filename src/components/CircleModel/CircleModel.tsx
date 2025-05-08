// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { useNavigate } from "react-router-dom";

// const SECTORS = [
//   { label: "Civil Sector", color: "#FF5733", startAngle: 0, link: "/civil" },
//   { label: "IT Sector", color: "#33FF57", startAngle: 36, link: "/it" },
//   { label: "Electrical Sector", color: "#3357FF", startAngle: 72, link: "/electrical" },
//   { label: "Mechanical Sector", color: "#F4C542", startAngle: 108, link: "/mechanical" },
//   { label: "Automobile Sector", color: "#A833FF", startAngle: 144, link: "/automobile" },
//   { label: "Healthcare", color: "#FF33A8", startAngle: 180, link: "/healthcare" },
//   { label: "Education", color: "#33FFF5", startAngle: 216, link: "/education" },
//   { label: "Finance", color: "#FFD700", startAngle: 252, link: "/finance" },
//   { label: "Retail", color: "#FF5733", startAngle: 288, link: "/retail" },
//   { label: "Telecom", color: "#33A1FF", startAngle: 324, link: "/telecom" },
// ];

// const outerRadius = 150;
// const innerRadius = 50;
// const centerX = 150;
// const centerY = 220;

// const CircleModal: React.FC = () => {
//   const sectorRefs = useRef<(SVGGElement | null)[]>([]);
//   const tooltipRef = useRef<HTMLDivElement | null>(null);
//   const [hoveredSector, setHoveredSector] = useState<number | null>(null);
//   const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

//   const navigate = useNavigate();

//   useEffect(() => {
//     sectorRefs.current = sectorRefs.current.slice(0, SECTORS.length);
//   }, []);

//   const handleMouseEnter = (index: number) => {
//     setHoveredSector(index);

//     const sector = SECTORS[index];
//     const angle = sector.startAngle + 18; // Middle of the slice

//     // Calculate tooltip position near the slice midpoint
//     const tooltipX = centerX + (outerRadius + 30) * Math.cos((angle * Math.PI) / 180);
//     const tooltipY = centerY + (outerRadius + 30) * Math.sin((angle * Math.PI) / 180);

//     setTooltipPos({ x: tooltipX, y: tooltipY });

//     // Animate the sector movement
//     sectorRefs.current.forEach((sector, i) => {
//       if (sector) {
//         const moveAngle = SECTORS[i].startAngle;
//         gsap.to(sector, {
//           x: 10 * Math.cos((moveAngle * Math.PI) / 180),
//           y: 10 * Math.sin((moveAngle * Math.PI) / 180),
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       }
//     });

//     // Animate tooltip appearance
//     if (tooltipRef.current) {
//       tooltipRef.current.style.visibility = "visible";
//       tooltipRef.current.innerHTML = sector.label;
//       gsap.fromTo(
//         tooltipRef.current,
//         { opacity: 0, y: -10 },
//         { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
//       );
//     }
//   };

//   const handleMouseLeave = () => {
//     setHoveredSector(null);

//     sectorRefs.current.forEach((sector) => {
//       if (sector) {
//         gsap.to(sector, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
//       }
//     });

//     if (tooltipRef.current) {
//       gsap.to(tooltipRef.current, { opacity: 0, y: -10, duration: 0.3, ease: "power2.out" });
//       tooltipRef.current.style.visibility = "hidden";
//     }
//   };

//   return (
//     <div className="circle-modal" style={{ position: "relative" }}>
//       <svg width="550" height="500" viewBox="0 0 400 400">
//         {/* Central Circle (Explore) */}
//         <circle cx={centerX} cy={centerY} r={innerRadius - 10} fill="#000" />
//         <text
//           x={centerX}
//           y={centerY + 5}
//           textAnchor="middle"
//           fill="white"
//           fontSize="14px"
//           fontWeight="bold"
//         >
//           UIPS
//         </text>

//         {/* Sectors */}
//         <g>
//           {SECTORS.map((sector, index) => {
//             const x1 = centerX + outerRadius * Math.cos((sector.startAngle * Math.PI) / 180);
//             const y1 = centerY + outerRadius * Math.sin((sector.startAngle * Math.PI) / 180);
//             const x2 = centerX + outerRadius * Math.cos(((sector.startAngle + 36) * Math.PI) / 180);
//             const y2 = centerY + outerRadius * Math.sin(((sector.startAngle + 36) * Math.PI) / 180);

//             const xInner1 = centerX + innerRadius * Math.cos((sector.startAngle * Math.PI) / 180);
//             const yInner1 = centerY + innerRadius * Math.sin((sector.startAngle * Math.PI) / 180);
//             const xInner2 = centerX + innerRadius * Math.cos(((sector.startAngle + 36) * Math.PI) / 180);
//             const yInner2 = centerY + innerRadius * Math.sin(((sector.startAngle + 36) * Math.PI) / 180);

//             return (
//               <g
//                 key={index}
//                 ref={(el) => (sectorRefs.current[index] = el)}
//                 onClick={() => navigate(sector.link)}
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={handleMouseLeave}
//                 style={{ cursor: "pointer" }}
//               >
//                 <path
//                   d={`M ${xInner1},${yInner1} 
//                      L ${x1},${y1} 
//                      A ${outerRadius},${outerRadius} 0 0,1 ${x2},${y2} 
//                      L ${xInner2},${yInner2} 
//                      A ${innerRadius},${innerRadius} 0 0,0 ${xInner1},${yInner1} Z`}
//                   fill={sector.color}
//                   stroke="#000"
//                   strokeWidth="2"
//                   filter="url(#shadow)"
//                 />
//               </g>
//             );
//           })}
//         </g>

//         {/* Define shadow filter */}
//         <defs>
//           <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
//             <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="rgba(0, 0, 0, 0.6)" />
//           </filter>
//         </defs>
//       </svg>

//       {/* Tooltip positioned beside the hovered sector */}
//       <div
//         ref={tooltipRef}
//         style={{
//           position: "absolute",
//           padding: "6px 10px",
//           background: "#222",
//           color: "white",
//           borderRadius: "4px",
//           fontSize: "12px",
//           whiteSpace: "nowrap",
//           transformOrigin: "center",
//           visibility: "hidden",
//           opacity: 0,
//           left: `${tooltipPos.x}px`,
//           top: `${tooltipPos.y}px`,
//         }}
//       />
//     </div>
//   );
// };

// export default CircleModal;
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import SECTORS from "../../assets/data/slices";

// Adjusted constants from latest version
const outerRadius = 290;
const innerRadius = 120;
const centerX = 300;
const centerY = 300;
const sectorAngle = 33;
const gapAngle = 3;

const visibleSectors = SECTORS.slice(0, 10);

const CircleModel: React.FC = () => {
  const sectorRefs = useRef<(SVGGElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      sectorRefs.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 0.9,
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out",
      }
    );

    const enableRotation = false;
    if (enableRotation) {
      tl.to(".sectors-group", {
        rotation: 360,
        transformOrigin: "50% 50%",
        duration: 100,
        repeat: -1,
        ease: "linear",
      });
    }

    const autoHover = () => {
      const totalSectors = visibleSectors.length;
      const hoverDuration = 0.3;
      const cycleDuration = 2;
      const delayBetweenCycles = 5 - cycleDuration;

      const hoverTimeline = gsap.timeline({ repeat: -1 });
      sectorRefs.current.forEach((sector, index) => {
        if (sector) {
          hoverTimeline
            .to(sector.querySelector("path"), {
              scale: 1.08,
              fill: "rgba(29, 78, 216, 0.9)", // Darker blue on hover
              duration: hoverDuration,
              ease: "power2.out",
              transformOrigin: "50% 50%",
            }, index * (cycleDuration / totalSectors))
            .to(sector.querySelectorAll("text tspan"), {
              fill: "#E0E7FF",
              duration: hoverDuration,
              ease: "power2.out",
            }, index * (cycleDuration / totalSectors))
            .to(sector.querySelector("path"), {
              scale: 1,
              fill: "rgba(23, 37, 84, 0.9)", // Darker base blue
              duration: hoverDuration,
              ease: "power2.inOut",
              transformOrigin: "50% 50%",
            }, index * (cycleDuration / totalSectors) + hoverDuration)
            .to(sector.querySelectorAll("text tspan"), {
              fill: "#D1D5DB",
              duration: hoverDuration,
              ease: "power2.inOut",
            }, index * (cycleDuration / totalSectors) + hoverDuration);
        }
      });

      hoverTimeline.to({}, { duration: delayBetweenCycles });
    };

    autoHover();

    return () => {
      tl.kill();
      gsap.globalTimeline.clear();
    };
  }, []);

  const handleSectorClick = (index: number, link: string) => {
    gsap.to(sectorRefs.current[index]?.querySelector("path"), {
      scale: 1.1,
      opacity: 1,
      duration: 0.3,
      ease: "elastic.out(1, 0.3)",
      transformOrigin: "50% 50%",
    });

    setTimeout(() => navigate(link), 300);
  };

  const handleMouseEnter = (index: number) => {
    if (sectorRefs.current[index]) {
      gsap.to(sectorRefs.current[index]?.querySelector("path"), {
        scale: 1.08,
        fill: "rgba(29, 78, 216, 0.9)", // Darker blue on hover
        duration: 0.3,
        ease: "power2.out",
        transformOrigin: "50% 50%",
      });
      gsap.to(sectorRefs.current[index]?.querySelectorAll("text tspan"), {
        fill: "#E0E7FF",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    if (sectorRefs.current[index]) {
      gsap.to(sectorRefs.current[index]?.querySelector("path"), {
        scale: 1,
        fill: "rgba(23, 37, 84, 0.9)", // Darker base blue
        duration: 0.3,
        ease: "power2.inOut",
        transformOrigin: "50% 50%",
      });
      gsap.to(sectorRefs.current[index]?.querySelectorAll("text tspan"), {
        fill: "#D1D5DB",
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div
      className="circle-modal"
      style={{
        position: "relative",
        width: "100%",
        textAlign: "center",
        paddingTop: "5px",
        marginTop: "-50px",
        marginLeft: "-80px",
      }}
    >
      <svg width="100%" height="600px" viewBox="0 0 610 610" preserveAspectRatio="xMidYMid meet">
        <circle
          cx={centerX}
          cy={centerY}
          r={innerRadius - 15}
          fill="#1E1B4B" // Darker blue for inner circle
          stroke="rgba(29, 78, 216, 0.3)" // Darker blue stroke
          strokeWidth="2"
        />
        <text
          x={centerX}
          y={centerY + 8}
          textAnchor="middle"
          fill="#93C5FD" // Slightly lighter blue for contrast
          fontSize="32px"
          fontWeight="bold"
          style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)" }}
        >
          UIPS
        </text>

        <g className="sectors-group">
          {visibleSectors.map((sector, index) => {
            const start = index * (sectorAngle + gapAngle);
            const end = start + sectorAngle;

            const x1 = centerX + outerRadius * Math.cos((start * Math.PI) / 180);
            const y1 = centerY + outerRadius * Math.sin((start * Math.PI) / 180);
            const x2 = centerX + outerRadius * Math.cos((end * Math.PI) / 180);
            const y2 = centerY + outerRadius * Math.sin((end * Math.PI) / 180);

            const xInner1 = centerX + innerRadius * Math.cos((start * Math.PI) / 180);
            const yInner1 = centerY + innerRadius * Math.sin((start * Math.PI) / 180);
            const xInner2 = centerX + innerRadius * Math.cos((end * Math.PI) / 180);
            const yInner2 = centerY + innerRadius * Math.sin((end * Math.PI) / 180);

            const textX =
              centerX +
              (innerRadius + (outerRadius - innerRadius) * 0.6) *
              Math.cos(((start + end) / 2) * Math.PI / 180);
            const textY =
              centerY +
              (innerRadius + (outerRadius - innerRadius) * 0.6) *
              Math.sin(((start + end) / 2) * Math.PI / 180);

            return (
              <g
                key={index}
                ref={(el) => (sectorRefs.current[index] = el)}
                onClick={() => handleSectorClick(index, sector.link)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                style={{ cursor: "pointer" }}
              >
                <path
                  d={`M ${xInner1},${yInner1} 
                      L ${x1},${y1} 
                      A ${outerRadius},${outerRadius} 0 0,1 ${x2},${y2} 
                      L ${xInner2},${yInner2} 
                      A ${innerRadius},${innerRadius} 0 0,0 ${xInner1},${yInner1} Z`}
                  fill="rgba(23, 37, 84, 1.2)" // Darker blue for sectors
                  stroke="#1E1B4B" // Darker blue stroke
                  strokeWidth="2"
                />

                <text
                  x={textX}
                  y={textY - 5}
                  textAnchor="middle"
                  fill="#D1D5DB"
                  fontSize="20px"
                  fontWeight="regular"
                  dominantBaseline="middle"
                >
                  <tspan x={textX} dy="-6">{sector.label.split(" ")[0]}</tspan>
                  <tspan x={textX} dy="20">{sector.label.split(" ").slice(1).join(" ")}</tspan>
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default CircleModel;