// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Stack,
//   IconButton,
//   Tooltip,
//   Popover,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import ShareIcon from "@mui/icons-material/Share";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import { useNavigate } from "react-router-dom";

// interface Project {
//   id: number;
//   slug: string;
//   projectname: string;
//   location: string;
//   status: string;
//   image: string;
// }

// interface ListViewComponentProps {
//   projects: Project[];
//   onClick: (id: number) => void;
// }

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   background: "linear-gradient(160deg, #1E2A44 0%, #2D3E66 100%)",
//   transition: "background 0.4s ease, transform 0.4s ease",
//   "&:hover": {
//     background: "linear-gradient(160deg, #2D3E66 0%, #3B82F6 100%)",
//     transform: "translateY(-2px)",
//   },
// }));

// const StyledTableCell = styled(TableCell)({
//   color: "#ffffff", // White text
//   borderBottom: "1px solid rgba(59, 130, 246, 0.2)",
//   fontFamily: "'Kanit', sans-serif", // Kanit font family
// });

// const ListViewComponent: React.FC<ListViewComponentProps> = ({ projects, onClick }) => {
//   const navigate = useNavigate();
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const [shareProjectId, setShareProjectId] = useState<number | null>(null);

//   const handleShareClick = (e: React.MouseEvent<HTMLElement>, projectId: number) => {
//     e.stopPropagation();
//     setAnchorEl(e.currentTarget);
//     setShareProjectId(projectId);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setShareProjectId(null);
//   };

//   const open = Boolean(anchorEl);
//   const selectedProject = projects.find((p) => p.id === shareProjectId);
//   const shareUrl = selectedProject ? `${window.location.origin}/${selectedProject.slug}` : "";

//   return (
//     <TableContainer component={Paper} sx={{ backgroundColor: "transparent" }}>
//       <Table sx={{ minWidth: 650 }} aria-label="project list">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>
//               <Typography variant="h6" fontWeight={600} fontSize="1.2rem" sx={{color:"white"}}>
//                 Project Name
//               </Typography>
//             </StyledTableCell>
//             <StyledTableCell>
//               <Typography variant="h6" fontWeight={600} fontSize="1.2rem" sx={{color:"white"}}>
//                 Location
//               </Typography>
//             </StyledTableCell>
//             <StyledTableCell>
//               <Typography variant="h6" fontWeight={600} fontSize="1.2rem" sx={{color:"white"}}>
//                 Status
//               </Typography>
//             </StyledTableCell>
//             <StyledTableCell align="center">
//               <Typography variant="h6" fontWeight={600} fontSize="1.2rem" sx={{color:"white"}}>
//                 Actions
//               </Typography>
//             </StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {projects.map((project) => (
//             <StyledTableRow
//               key={project.id}
//               onClick={() => onClick(project.id)}
//               sx={{ cursor: "pointer" }}
//             >
//               <StyledTableCell component="th" scope="row">
//                 <Typography variant="subtitle1" fontWeight={500} fontSize="1.1rem" sx={{color:"white"}}>
//                   {project.projectname}
//                 </Typography>
//               </StyledTableCell>
//               <StyledTableCell>
//                 <Typography variant="body1" fontSize="1rem" sx={{color:"white"}}>
//                   {project.location}
//                 </Typography>
//               </StyledTableCell>
//               <StyledTableCell>
//                 <Typography variant="body1" fontSize="1rem" sx={{color:"white"}}>
//                   {project.status}
//                 </Typography>
//               </StyledTableCell>
//               <StyledTableCell align="center">
//                 <Stack direction="row" spacing={1} justifyContent="center">
//                   <Button
//                     variant="contained"
//                     endIcon={<ArrowForwardIcon />}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       navigate(`/${project.slug}`);
//                     }}
//                     sx={{
//                       backgroundColor: "#3b82f6",
//                       textTransform: "none",
//                       fontWeight: 500,
//                       borderRadius: "8px",
//                       color: "#ffffff", // White text for button
//                       fontFamily: "'Kanit', sans-serif", // Kanit font for button
//                       fontSize: "1rem", // Larger font size
//                       "&:hover": { backgroundColor: "#2563eb" },
//                     }}
//                   >
//                     Know More
//                   </Button>
//                   <Tooltip title="Share project">
//                     <IconButton onClick={(e) => handleShareClick(e, project.id)}>
//                       <ShareIcon fontSize="small" sx={{ color: "#ffffff" }} />
//                     </IconButton>
//                   </Tooltip>
//                 </Stack>
//               </StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>

//       {/* Social Share Popover */}
//       <Popover
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//         transformOrigin={{ vertical: "top", horizontal: "right" }}
//       >
//         <Box p={2} display="flex" gap={1}>
//           <IconButton
//             component="a"
//             href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             color="success"
//           >
//             <WhatsAppIcon />
//           </IconButton>
//           <IconButton
//             component="a"
//             href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//               shareUrl
//             )}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             color="primary"
//           >
//             <FacebookIcon />
//           </IconButton>
//           <IconButton
//             component="a"
//             href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//               shareUrl
//             )}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             sx={{ color: "#0e76a8" }}
//           >
//             <LinkedInIcon />
//           </IconButton>
//           <Tooltip title="Copy link for Instagram">
//             <IconButton
//               onClick={() => {
//                 navigator.clipboard.writeText(shareUrl);
//                 handleClose();
//                 alert("Link copied! Paste it in your Insta bio or story.");
//               }}
//               sx={{ color: "#E1306C" }}
//             >
//               <InstagramIcon />
//             </IconButton>
//           </Tooltip>
//         </Box>
//       </Popover>
//     </TableContainer>
//   );
// };

// export default ListViewComponent;



import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Tooltip,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ShareIcon from '@mui/icons-material/Share';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';
import { Project } from '../../../types/projet'; // Import unified Project type

interface ListViewComponentProps {
  projects: Project[];
  onClick: (id: number) => void;
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  background: 'linear-gradient(160deg, #1E2A44 0%, #2D3E66 100%)',
  transition: 'background 0.4s ease, transform 0.4s ease',
  '&:hover': {
    background: 'linear-gradient(160deg, #2D3E66 0%, #3B82F6 100%)',
    transform: 'translateY(-2px)',
  },
}));

const StyledTableCell = styled(TableCell)({
  color: '#ffffff',
  borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
  fontFamily: "'Kanit', sans-serif",
});

const ListViewComponent: React.FC<ListViewComponentProps> = ({ projects, onClick }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [shareProjectId, setShareProjectId] = useState<number | null>(null);

  const handleShareClick = (e: React.MouseEvent<HTMLElement>, projectId: number) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
    setShareProjectId(projectId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShareProjectId(null);
  };

  const open = Boolean(anchorEl);
  const selectedProject = projects.find((p) => p.id === shareProjectId);
  const shareUrl = selectedProject ? `${window.location.origin}/${selectedProject.slug}` : '';

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
      <Table sx={{ minWidth: 650 }} aria-label="project list">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Typography variant="h6" fontWeight={600} fontSize="1.2rem" sx={{ color: 'white' }}>
                Project Name
              </Typography>
            </StyledTableCell>
            <StyledTableCell>
              <Typography variant="h6" fontWeight={600} fontSize="1.2rem" sx={{ color: 'white' }}>
                Location
              </Typography>
            </StyledTableCell>
            <StyledTableCell>
              <Typography variant="h6" fontWeight={600} fontSize="1.2rem" sx={{ color: 'white' }}>
                Status
              </Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography variant="h6" fontWeight={600} fontSize="1.2rem" sx={{ color: 'white' }}>
                Actions
              </Typography>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <StyledTableRow
              key={project.id}
              onClick={() => onClick(project.id)}
              sx={{ cursor: 'pointer' }}
            >
              <StyledTableCell component="th" scope="row">
                <Typography
                  variant="subtitle1"
                  fontWeight={500}
                  fontSize="1.1rem"
                  sx={{ color: 'white' }}
                >
                  {project.projectname}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="body1" fontSize="1rem" sx={{ color: 'white' }}>
                  {project.location}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="body1" fontSize="1rem" sx={{ color: 'white' }}>
                  {project.status}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Stack direction="row" spacing={1} justifyContent="center">
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/${project.division.toLowerCase()}/project/${project.id}`);
                    }}
                    sx={{
                      backgroundColor: '#3b82f6',
                      textTransform: 'none',
                      fontWeight: 500,
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontFamily: "'Kanit', sans-serif",
                      fontSize: { xs: '0.8rem', sm: '1rem' }, // Smaller font size on xs screens
                      padding: { xs: '4px 8px', sm: '6px 16px' }, // Reduced padding on xs
                      whiteSpace: 'nowrap', // Prevent text wrapping
                      '&:hover': { backgroundColor: '#2563eb' },
                    }}
                  >
                    Know More
                  </Button>
                  <Tooltip title="Share project">
                    <IconButton onClick={(e) => handleShareClick(e, project.id)}>
                      <ShareIcon fontSize="small" sx={{ color: '#ffffff' }} />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      {/* Social Share Popover */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Box p={2} display="flex" gap={1}>
          <IconButton
            component="a"
            href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            color="success"
          >
            <WhatsAppIcon />
          </IconButton>
          <IconButton
            component="a"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              shareUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            component="a"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              shareUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#0e76a8' }}
          >
            <LinkedInIcon />
          </IconButton>
          <Tooltip title="Copy link for Instagram">
            <IconButton
              onClick={() => {
                navigator.clipboard.writeText(shareUrl);
                handleClose();
                alert('Link copied! Paste it in your Insta bio or story.');
              }}
              sx={{ color: '#E1306C' }}
            >
              <InstagramIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Popover>
    </TableContainer>
  );
};

export default ListViewComponent;