// // import React, { useState } from 'react';
// // import {
// //   Box,
// //   TextField,
// //   Button,
// //   InputAdornment,
// //   IconButton,
// //   Menu,
// //   MenuItem,
// //   Select,
// //   Card,
// //   styled,
// //   OutlinedInput,
// // } from '@mui/material';
// // import SearchIcon from '@mui/icons-material/Search';
// // import FilterListIcon from '@mui/icons-material/FilterList';

// // interface FilterProps {
// //   onFilter: (searchTerm: string, location?: string, division?: string) => void;
// //   locations: string[];
// //   divisions: string[];
// // }

// // const FilterCard = styled(Card)(({ theme }) => ({
// //   background: 'linear-gradient(135deg, #2D3A63 0%, #1E2952 100%)',
// //   borderRadius: '12px',
// //   padding: theme.spacing(2),
// //   boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
// //   transition: 'box-shadow 0.3s ease-in-out',
// //   width: '100%',
// //   maxWidth: '800px',
// //   margin: '0 auto',
// //   '&:hover': {
// //     boxShadow: '0 6px 20px rgba(255, 255, 255, 0.1)',
// //   },
// //   [theme.breakpoints.down('sm')]: {
// //     padding: theme.spacing(1.5),
// //     maxWidth: '100%',
// //   },
// // }));

// // export const FilterComponent = ({ onFilter, locations, divisions }) => {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [anchorEl, setAnchorEl] = useState(null);
// //   const [selectedLocation, setSelectedLocation] = useState('');
// //   const [selectedDivision, setSelectedDivision] = useState('All Projects');

// //   const handleSearch = () => {
// //     onFilter(searchTerm.trim(), selectedLocation || undefined, selectedDivision);
// //   };

// //   const handleFilterClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleLocationSelect = (location) => {
// //     const newLocation = location === 'All Locations' ? '' : location;
// //     setSelectedLocation(newLocation);
// //     setAnchorEl(null);
// //     onFilter(searchTerm.trim(), newLocation || undefined, selectedDivision);
// //   };

// //   const handleDivisionChange = (event) => {
// //     const newDivision = event.target.value;
// //     setSelectedDivision(newDivision);
// //     onFilter(searchTerm.trim(), selectedLocation || undefined, newDivision);
// //   };

// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };

// //   return (
// //     <FilterCard>
// //       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
// //         <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
// //           <TextField
// //             label={`Search by Project/Client Name ${selectedLocation ? `(Location: ${selectedLocation})` : ''}`}
// //             variant="outlined"
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
// //             sx={{
// //               flex: 1,
// //               maxWidth: { xs: '100%', sm: '600px' },
// //               '& .MuiInputBase-root': {
// //                 backgroundColor: '#3D4A73',
// //                 color: '#FFFFFF',
// //                 height: '56px',
// //                 '& input': {
// //                   color: '#FFFFFF',
// //                 },
// //                 '&.Mui-focused': {
// //                   backgroundColor: '#4A5A8C',
// //                 },
// //               },
// //               '& .MuiInputLabel-root': {
// //                 color: '#FFFFFF',
// //                 '&.Mui-focused': { color: '#FFFFFF' },
// //               },
// //               '& .MuiOutlinedInput-root': {
// //                 '& fieldset': { borderColor: '#FFFFFF' },
// //                 '&:hover fieldset': { borderColor: '#B0C4DE' },
// //                 '&.Mui-focused fieldset': { borderColor: '#3B82F6' },
// //               },
// //             }}
// //             InputProps={{
// //               startAdornment: (
// //                 <InputAdornment position="start">
// //                   <SearchIcon sx={{ color: '#FFFFFF' }} />
// //                 </InputAdornment>
// //               ),
// //               endAdornment: (
// //                 <InputAdornment position="end">
// //                   <IconButton onClick={handleFilterClick} sx={{ color: '#FFFFFF' }}>
// //                     <FilterListIcon />
// //                   </IconButton>
// //                 </InputAdornment>
// //               ),
// //             }}
// //           />
// //           <Button
// //             onClick={handleSearch}
// //             variant="contained"
// //             sx={{
// //               background: 'linear-gradient(90deg, #3B82F6, #4B5EAA)',
// //               borderRadius: '8px',
// //               boxShadow: '0px 3px 10px rgba(59, 130, 246, 0.5)',
// //               height: '56px',
// //               minWidth: { xs: '100px', sm: '120px' },
// //               fontWeight: 'bold',
// //               color: '#FFFFFF',
// //               '&:hover': {
// //                 background: 'linear-gradient(90deg, #4B5EAA, #6B7280)',
// //                 boxShadow: '0px 5px 12px rgba(59, 130, 246, 0.7)',
// //               },
// //             }}
// //           >
// //             Search
// //           </Button>
// //         </Box>
// //         <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
// //           <Select
// //             value={selectedDivision}
// //             onChange={handleDivisionChange}
// //             input={
// //               <OutlinedInput
// //                 sx={{
// //                   backgroundColor: '#1E3A8A',
// //                   color: '#FFFFFF',
// //                   borderRadius: '8px',
// //                   '& .MuiOutlinedInput-notchedOutline': {
// //                     borderColor: '#FFFFFF',
// //                   },
// //                   '&:hover .MuiOutlinedInput-notchedOutline': {
// //                     borderColor: '#B0C4DE',
// //                   },
// //                   '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
// //                     borderColor: '#3B82F6',
// //                   },
// //                   '& input': {
// //                     color: '#FFFFFF',
// //                   },
// //                 }}
// //               />
// //             }
// //             displayEmpty
// //             MenuProps={{
// //               PaperProps: {
// //                 sx: {
// //                   backgroundColor: '#1E3A8A',
// //                   color: '#FFFFFF',
// //                 },
// //               },
// //             }}
// //             sx={{
// //               minWidth: { xs: '150px', sm: '200px' },
// //               '& .MuiSelect-select': {
// //                 backgroundColor: '#1E3A8A',
// //                 color: '#FFFFFF !important',
// //               },
// //               '& .MuiSvgIcon-root': {
// //                 color: '#FFFFFF',
// //               },
// //             }}
// //           >
// //             {divisions.map((division) => (
// //               <MenuItem
// //                 key={division}
// //                 value={division}
// //                 sx={{
// //                   color: '#FFFFFF',
// //                   '&:hover': { backgroundColor: '#4B5EAA' },
// //                   '&.Mui-selected': {
// //                     backgroundColor: '#1E3A8A',
// //                     color: '#FFFFFF',
// //                     '&:hover': { backgroundColor: '#4B5EAA' },
// //                   },
// //                 }}
// //               >
// //                 {division}
// //               </MenuItem>
// //             ))}
// //           </Select>
// //         </Box>
// //       </Box>

// //       <Menu
// //         anchorEl={anchorEl}
// //         open={Boolean(anchorEl)}
// //         onClose={handleClose}
// //         PaperProps={{
// //           sx: {
// //             backgroundColor: '#2D3A63',
// //             color: '#FFFFFF',
// //           },
// //         }}
// //       >
// //         {['All Locations', ...locations].map((location) => (
// //           <MenuItem
// //             key={location}
// //             onClick={() => handleLocationSelect(location)}
// //             sx={{
// //               color: '#FFFFFF',
// //               '&:hover': {
// //                 backgroundColor: '#4A5A8C',
// //               },
// //               backgroundColor: selectedLocation === location ? '#4A5A8C' : 'inherit',
// //             }}
// //           >
// //             {location}
// //           </MenuItem>
// //         ))}
// //       </Menu>
// //     </FilterCard>
// //   );
// // };





// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   MenuItem,
//   Button,
//   IconButton,
//   InputAdornment,
//   Menu,
//   ToggleButton,
//   ToggleButtonGroup,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import SortIcon from "@mui/icons-material/Sort";
// import ViewListIcon from "@mui/icons-material/ViewList";
// import ViewModuleIcon from "@mui/icons-material/ViewModule";

// interface Project {
//   id: number;
//   projectname: string;
//   client: string;
//   location: string;
//   status: string;
//   image: string;
// }

// interface FilterComponentProps {
//   projects: Project[];
//   onFilterChange: (filteredProjects: Project[]) => void;
//   filterStatus: "ALL" | "COMPLETED" | "ONGOING";
//   setFilterStatus: (status: "ALL" | "COMPLETED" | "ONGOING") => void;
//   viewMode: "grid" | "list";
//   onViewModeChange: (newViewMode: "grid" | "list" | null) => void;
// }

// const FilterBox = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between", // Distribute elements evenly across the width
//   padding: "10px",
//   background: "linear-gradient(160deg, #1E2A44 0%, #2D3E66 100%)",
//   borderRadius: "8px",
//   marginBottom: "20px",
//   width: "100%", // Ensure it takes full width of the container
//   gap: "16px", // Increased gap for better spacing
//   [theme.breakpoints.down("sm")]: {
//     flexDirection: "column",
//     alignItems: "stretch",
//     padding: "8px",
//     gap: "8px", // Smaller gap on mobile
//   },
// }));

// const FilterButton = styled(Button)(({ theme }) => ({
//   backgroundColor: "#3b82f6",
//   color: "#ffffff",
//   padding: "6px 12px",
//   borderRadius: "6px",
//   textTransform: "none",
//   fontFamily: "'Kanit', sans-serif",
//   fontSize: "0.9rem",
//   "&:hover": {
//     backgroundColor: "#2563eb",
//   },
//   "&.MuiButton-outlined": {
//     backgroundColor: "transparent",
//     borderColor: "#3b82f6",
//     color: "#ffffff",
//     "&:hover": {
//       backgroundColor: "rgba(59, 130, 246, 0.1)",
//     },
//   },
// }));

// const CompactTextField = styled(TextField)({
//   width: "500px",
//   "& .MuiOutlinedInput-root": {
//     backgroundColor: "#2D3E66",
//     color: "#f1f5f9", // Set input text color to white
//     height: "40px",
//     "& fieldset": {
//       borderColor: "rgba(59, 130, 246, 0.5)",
//     },
//     "&:hover fieldset": {
//       borderColor: "#3b82f6",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#3b82f6",
//     },
//     "&.Mui-focused": {
//       backgroundColor: "#2D3E66",
//     },
//     "& input": {
//       color: "#f1f5f9", // Ensure input text is white
//     },
//   },
//   "& .MuiInputLabel-root": {
//     color: "#f1f5f9",
//     fontSize: "0.9rem",
//     top: "-4px",
//   },
//   "& .MuiInputLabel-shrink": {
//     top: 0,
//   },
// });

// const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
//   border: "1px solid #ffffff",
//   borderRadius: "4px",
//   "& .MuiToggleButton-root": {
//     color: "#ffffff",
//     padding: "6px",
//     "&:hover": {
//       backgroundColor: "rgba(255, 255, 255, 0.1)",
//     },
//     "&.Mui-selected": {
//       backgroundColor: "#3b82f6",
//       color: "#ffffff",
//       "&:hover": {
//         backgroundColor: "#2563eb",
//       },
//     },
//   },
// });

// const FilterComponent: React.FC<FilterComponentProps> = ({
//   projects,
//   onFilterChange,
//   filterStatus,
//   setFilterStatus,
//   viewMode,
//   onViewModeChange,
// }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState<string>("All");
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//   const uniqueLocations = ["All", ...new Set(projects.map((project) => project.location))];

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const query = event.target.value.toLowerCase();
//     setSearchQuery(query);
//     filterProjects(query, selectedLocation);
//   };

//   const handleLocationClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleLocationClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLocationSelect = (location: string) => {
//     setSelectedLocation(location);
//     filterProjects(searchQuery, location);
//     handleLocationClose();
//   };

//   const filterProjects = (query: string, location: string) => {
//     let filtered = projects;

//     if (query) {
//       filtered = filtered.filter(
//         (project) =>
//           project.projectname.toLowerCase().includes(query) ||
//           project.client.toLowerCase().includes(query)
//       );
//     }

//     if (location !== "All") {
//       filtered = filtered.filter((project) => project.location === location);
//     }

//     onFilterChange(filtered);
//   };

//   return (
//     <FilterBox>
//       {/* Status Buttons */}
//       <Box sx={{ display: "flex", gap: "8px" }}>
//         {["ALL", "COMPLETED", "ONGOING"].map((status) => (
//           <FilterButton
//             key={status}
//             variant={filterStatus === status ? "contained" : "outlined"}
//             onClick={() => setFilterStatus(status as typeof filterStatus)}
//           >
//             {status.charAt(0) + status.slice(1).toLowerCase()}
//           </FilterButton>
//         ))}
//       </Box>

//       {/* Search Bar */}
//       <CompactTextField
//         label="Search Project/Client"
//         variant="outlined"
//         value={searchQuery}
//         onChange={handleSearchChange}
//         InputProps={{
//           style: { fontSize: "0.9rem" },
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton onClick={handleLocationClick} sx={{ padding: "4px" }}>
//                 <SortIcon sx={{ color: "#f1f5f9", fontSize: "1.2rem" }} />
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//       />
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleLocationClose}
//         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//         transformOrigin={{ vertical: "top", horizontal: "right" }}
//         PaperProps={{
//           sx: {
//             backgroundColor: "#2D3E66",
//             color: "#f1f5f9",
//           },
//         }}
//       >
//         {uniqueLocations.map((location) => (
//           <MenuItem
//             key={location}
//             value={location}
//             onClick={() => handleLocationSelect(location)}
//             sx={{ fontSize: "0.9rem" }}
//           >
//             {location}
//           </MenuItem>
//         ))}
//       </Menu>

//       {/* View Mode Toggle */}
//       <StyledToggleButtonGroup
//         value={viewMode}
//         exclusive
//         onChange={(e, newViewMode) => onViewModeChange(newViewMode)}
//         aria-label="view mode"
//       >
//         <ToggleButton value="grid" aria-label="grid view">
//           <ViewModuleIcon />
//         </ToggleButton>
//         <ToggleButton value="list" aria-label="list view">
//           <ViewListIcon />
//         </ToggleButton>
//       </StyledToggleButtonGroup>
//     </FilterBox>
//   );
// };

// export default FilterComponent;




import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Button,
  IconButton,
  InputAdornment,
  Menu,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SortIcon from '@mui/icons-material/Sort';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { Project } from '../../../types/project';

interface FilterComponentProps {
  projects: Project[];
  onFilterChange: (filteredProjects: Project[]) => void;
  filterStatus: 'ALL' | 'COMPLETED' | 'ONGOING';
  setFilterStatus: (status: 'ALL' | 'COMPLETED' | 'ONGOING') => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (newViewMode: 'grid' | 'list' | null) => void;
}

const FilterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  background: 'linear-gradient(160deg, #1E2A44 0%, #2D3E66 100%)',
  borderRadius: '8px',
  marginBottom: '20px',
  width: '100%',
  gap: '16px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: '8px',
    gap: '8px',
  },
}));

const FilterButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#3b82f6',
  color: '#ffffff',
  padding: '6px 12px',
  borderRadius: '6px',
  textTransform: 'none',
  fontFamily: "'Kanit', sans-serif",
  fontSize: '0.9rem',
  minWidth: '80px', // Ensure buttons are visible
  '&:hover': {
    backgroundColor: '#2563eb',
  },
  '&.MuiButton-outlined': {
    backgroundColor: 'transparent',
    borderColor: '#3b82f6',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
    },
  },
}));

const CompactTextField = styled(TextField)({
  width: '500px',
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#2D3E66',
    color: '#f1f5f9',
    height: '40px',
    '& fieldset': {
      borderColor: 'rgba(59, 130, 246, 0.5)',
    },
    '&:hover fieldset': {
      borderColor: '#3b82f6',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3b82f6',
    },
    '&.Mui-focused': {
      backgroundColor: '#2D3E66',
    },
    '& input': {
      color: '#f1f5f9',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#f1f5f9',
    fontSize: '0.9rem',
    top: '-4px',
  },
  '& .MuiInputLabel-shrink': {
    top: 0,
  },
});

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  border: '1px solid #ffffff',
  borderRadius: '4px',
  '& .MuiToggleButton-root': {
    color: '#ffffff',
    padding: '6px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&.Mui-selected': {
      backgroundColor: '#3b82f6',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#2563eb',
      },
    },
  },
});

const FilterComponent: React.FC<FilterComponentProps> = ({
  projects,
  onFilterChange,
  filterStatus,
  setFilterStatus,
  viewMode,
  onViewModeChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const uniqueLocations = ['All', ...new Set(projects.map((project) => project.location))];

  useEffect(() => {
    // Apply status filter whenever filterStatus changes
    filterProjects(searchQuery, selectedLocation, filterStatus);
  }, [filterStatus, projects]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    filterProjects(query, selectedLocation, filterStatus);
  };

  const handleLocationClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLocationClose = () => {
    setAnchorEl(null);
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    filterProjects(searchQuery, location, filterStatus);
    handleLocationClose();
  };

  const filterProjects = (query: string, location: string, status: 'ALL' | 'COMPLETED' | 'ONGOING') => {
    let filtered = projects;

    // Apply status filter
    if (status !== 'ALL') {
      filtered = filtered.filter((project) => project.status.toUpperCase() === status);
    }

    // Apply search query filter
    if (query) {
      filtered = filtered.filter(
        (project) =>
          project.projectname.toLowerCase().includes(query) ||
          project.client.toLowerCase().includes(query)
      );
    }

    // Apply location filter
    if (location !== 'All') {
      filtered = filtered.filter((project) => project.location === location);
    }

    onFilterChange(filtered);
  };

  return (
    <FilterBox>
      {/* Status Buttons */}
      <Box sx={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
        {['ALL', 'COMPLETED', 'ONGOING'].map((status) => (
          <FilterButton
            key={status}
            variant={filterStatus === status ? 'contained' : 'outlined'}
            onClick={() => setFilterStatus(status as typeof filterStatus)}
            sx={{ visibility: 'visible', opacity: 1 }} // Ensure visibility
          >
            {status.charAt(0) + status.slice(1).toLowerCase()}
          </FilterButton>
        ))}
      </Box>

      {/* Search Bar */}
      <CompactTextField
        label="Search Project/Client"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        InputProps={{
          style: { fontSize: '0.9rem' },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleLocationClick} sx={{ padding: '4px' }}>
                <SortIcon sx={{ color: '#f1f5f9', fontSize: '1.2rem' }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLocationClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            backgroundColor: '#2D3E66',
            color: '#f1f5f9',
          },
        }}
      >
        {uniqueLocations.map((location) => (
          <MenuItem
            key={location}
            value={location}
            onClick={() => handleLocationSelect(location)}
            sx={{ fontSize: '0.9rem' }}
          >
            {location}
          </MenuItem>
        ))}
      </Menu>

      {/* View Mode Toggle */}
      <StyledToggleButtonGroup
        value={viewMode}
        exclusive
        onChange={(e, newViewMode) => onViewModeChange(newViewMode)}
        aria-label="view mode"
        sx={{ flexShrink: 0 }}
      >
        <ToggleButton value="grid" aria-label="grid view">
          <ViewModuleIcon />
        </ToggleButton>
        <ToggleButton value="list" aria-label="list view">
          <ViewListIcon />
        </ToggleButton>
      </StyledToggleButtonGroup>
    </FilterBox>
  );
};

export default FilterComponent;