import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Card,
  styled,
  OutlinedInput,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

interface FilterProps {
  onFilter: (searchTerm: string, location?: string, division?: string) => void;
  locations: string[];
  divisions: string[];
}

const FilterCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2D3A63 0%, #1E2952 100%)',
  borderRadius: '12px',
  padding: theme.spacing(2),
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  transition: 'box-shadow 0.3s ease-in-out',
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto',
  '&:hover': {
    boxShadow: '0 6px 20px rgba(255, 255, 255, 0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
    maxWidth: '100%',
  },
}));

export const FilterComponent = ({ onFilter, locations, divisions }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('All Projects');

  const handleSearch = () => {
    onFilter(searchTerm.trim(), selectedLocation || undefined, selectedDivision);
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLocationSelect = (location) => {
    const newLocation = location === 'All Locations' ? '' : location;
    setSelectedLocation(newLocation);
    setAnchorEl(null);
    onFilter(searchTerm.trim(), newLocation || undefined, selectedDivision);
  };

  const handleDivisionChange = (event) => {
    const newDivision = event.target.value;
    setSelectedDivision(newDivision);
    onFilter(searchTerm.trim(), selectedLocation || undefined, newDivision);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <FilterCard>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          <TextField
            label={`Search by Project/Client Name ${selectedLocation ? `(Location: ${selectedLocation})` : ''}`}
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            sx={{
              flex: 1,
              maxWidth: { xs: '100%', sm: '600px' },
              '& .MuiInputBase-root': {
                backgroundColor: '#3D4A73',
                color: '#FFFFFF',
                height: '56px',
                '& input': {
                  color: '#FFFFFF',
                },
                '&.Mui-focused': {
                  backgroundColor: '#4A5A8C',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#FFFFFF',
                '&.Mui-focused': { color: '#FFFFFF' },
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#FFFFFF' },
                '&:hover fieldset': { borderColor: '#B0C4DE' },
                '&.Mui-focused fieldset': { borderColor: '#3B82F6' },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#FFFFFF' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleFilterClick} sx={{ color: '#FFFFFF' }}>
                    <FilterListIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            onClick={handleSearch}
            variant="contained"
            sx={{
              background: 'linear-gradient(90deg, #3B82F6, #4B5EAA)',
              borderRadius: '8px',
              boxShadow: '0px 3px 10px rgba(59, 130, 246, 0.5)',
              height: '56px',
              minWidth: { xs: '100px', sm: '120px' },
              fontWeight: 'bold',
              color: '#FFFFFF',
              '&:hover': {
                background: 'linear-gradient(90deg, #4B5EAA, #6B7280)',
                boxShadow: '0px 5px 12px rgba(59, 130, 246, 0.7)',
              },
            }}
          >
            Search
          </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Select
            value={selectedDivision}
            onChange={handleDivisionChange}
            input={
              <OutlinedInput
                sx={{
                  backgroundColor: '#1E3A8A',
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FFFFFF',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#B0C4DE',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#3B82F6',
                  },
                  '& input': {
                    color: '#FFFFFF',
                  },
                }}
              />
            }
            displayEmpty
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: '#1E3A8A',
                  color: '#FFFFFF',
                },
              },
            }}
            sx={{
              minWidth: { xs: '150px', sm: '200px' },
              '& .MuiSelect-select': {
                backgroundColor: '#1E3A8A',
                color: '#FFFFFF !important',
              },
              '& .MuiSvgIcon-root': {
                color: '#FFFFFF',
              },
            }}
          >
            {divisions.map((division) => (
              <MenuItem
                key={division}
                value={division}
                sx={{
                  color: '#FFFFFF',
                  '&:hover': { backgroundColor: '#4B5EAA' },
                  '&.Mui-selected': {
                    backgroundColor: '#1E3A8A',
                    color: '#FFFFFF',
                    '&:hover': { backgroundColor: '#4B5EAA' },
                  },
                }}
              >
                {division}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: '#2D3A63',
            color: '#FFFFFF',
          },
        }}
      >
        {['All Locations', ...locations].map((location) => (
          <MenuItem
            key={location}
            onClick={() => handleLocationSelect(location)}
            sx={{
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#4A5A8C',
              },
              backgroundColor: selectedLocation === location ? '#4A5A8C' : 'inherit',
            }}
          >
            {location}
          </MenuItem>
        ))}
      </Menu>
    </FilterCard>
  );
};