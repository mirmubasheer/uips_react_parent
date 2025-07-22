// src/components/ProjectDetails/ProjectInfo.tsx
import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import Project from "./ProjectDetails.types";
import PersonIcon from "@mui/icons-material/Person"; // For Client
import LocationOnIcon from "@mui/icons-material/LocationOn"; // For Location
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"; // For Month/Year
import TimelapseIcon from "@mui/icons-material/Timelapse"; // For Duration
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // For PO Value
import EngineeringIcon from "@mui/icons-material/Engineering"; // For Total Man-Hours
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // For COMPLETED Status
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // For IN PROGRESS Status

interface ProjectInfoProps {
  project: Project;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {
  const infoRef = useRef<HTMLDivElement | null>(null);

  // GSAP animation for slide-in from left
  useEffect(() => {
    if (infoRef.current) {
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  // Helper function to format numbers
  const formatNumber = (value: string, decimals: number): string => {
    try {
      const cleaned = value.replace(/,/g, ""); // Remove commas
      const number = parseFloat(cleaned);
      if (isNaN(number)) return "N/A";
      return number.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    } catch {
      return "N/A";
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 700, // Narrower width for compact look
        mx: "auto", // Center the component
        color: "white",
        py: { xs: 2, md: 3 },
      }}
    >
      <Box ref={infoRef}>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{color: '#1e2a44', mb: 2 }}
        >
          {project.projectname}
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4, lineHeight: 1.8, color: '#1e2a44', }}
        >
          {project.description}
        </Typography>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ mb: 2, textAlign: "left", color: '#1e2a44', }}
        >
          Project Details
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PersonIcon sx={{ color: "#3B82F6", fontSize: "2.2rem" }} />
            <Typography variant="body1" sx={{ color: '#1e2a44', }}>
              <strong>Client:</strong> {project.client}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOnIcon sx={{ color: "#3B82F6", fontSize: "2.2rem" }} />
            <Typography variant="body1" sx={{ color: '#1e2a44', }}>
              <strong>Location:</strong> {project.location}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CalendarTodayIcon sx={{ color: "#3B82F6", fontSize: "2.2rem" }} />
            <Typography variant="body1" sx={{ color: '#1e2a44', }}>
              <strong>Month/Year:</strong> {project.monthyear}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TimelapseIcon sx={{ color: "#3B82F6", fontSize: "2.2rem" }} />
            <Typography variant="body1" sx={{ color: '#1e2a44', }}>
              <strong>Duration:</strong> {project.duration}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AttachMoneyIcon sx={{ color: "#3B82F6", fontSize: "2.2rem" }} />
            <Typography variant="body1" sx={{ color: '#1e2a44', }}>
              <strong>PO Value:</strong>  {formatNumber(project.povalue, 2)}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EngineeringIcon sx={{ color: "#3B82F6", fontSize: "2.2rem" }} />
            <Typography variant="body1" sx={{ color: '#1e2a44', }}>
              <strong>Total Man-Hours:</strong>{" "}
              {formatNumber(project.totalmanhour, 0)}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {project.status === "COMPLETED" ? (
              <CheckCircleIcon sx={{ color: "#3B82F6", fontSize: "2.2rem" }} />
            ) : (
              <AccessTimeIcon sx={{ color: "#3B82F6", fontSize: "2.2rem" }} />
            )}
            <Typography variant="body1" sx={{ color: '#1e2a44', }}>
              <strong>Status:</strong>{" "}
              <span
                style={{
                  color: project.status === "COMPLETED" ? "#4CAF50" : "#F44336",
                  fontWeight: 500,
                }}
              >
                {project.status}
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectInfo;