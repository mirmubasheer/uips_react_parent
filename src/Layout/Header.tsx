import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, Button, Divider, ListItemText, ListItemButton, Box, useMediaQuery, useTheme, Stack, Menu, MenuItem, Collapse } from "@mui/material";
import { Menu as MenuIcon } from "lucide-react";
import { uipslogo } from "../assets";
import TopHeader from "../components/TopHeader/TopHeader";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// Tab labels
const tabLabels = [
  { label: "Home", route: "/" },
  { label: "Major Division" },
  { label: "About", route: "/about" },
  { label: "Gallery", route: "/gallery" },
  { label: "Careers", route: "/career" },
  { label: "Contact", route: "/contact" },
];

// Dropdown menu items for Major Division with updated slugs
const divisionItems = [
  { label: "Civil Division", route: "/civil" },
  { label: "Plant Shutdowns/Turnarounds", route: "/shutdowns" },
  { label: "Instrumentation", route: "/instrumentation" },
  { label: "Power", route: "/power" },
  { label: "Electrical Division", route: "/electrical" },
  { label: "IT Division", route: "/it" },
  { label: "Mechanical Division", route: "/mechanical" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTopHeaderVisible, setIsTopHeaderVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [detailsDrawerOpen, setDetailsDrawerOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDetailsDrawerToggle = () => {
    setDetailsDrawerOpen(!detailsDrawerOpen);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
    if (!drawerOpen) setMobileMenuOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsTopHeaderVisible(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: isScrolled ? "white" : "transparent",
          backdropFilter: isScrolled ? "none" : "blur(10px)",
          transition: "all 0.3s ease-in-out",
          boxShadow: "none",
          marginTop: isTopHeaderVisible ? "0px" : "0",
          width: '100%',
        }}
      >
        <Toolbar sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          px: { xs: 1, sm: 2, md: 3 },
          maxWidth: '1300px',
          width: '100%',
          mx: 'auto',
        }}>
          {/* Logo on the left with no gap */}
          <Box
            component="img"
            src={uipslogo.logo02}
            alt="UIP Logo"
            sx={{
              height: { xs: 40, md: 60 },
              width: "auto",
              filter: isScrolled ? "invert(0)" : "invert(2)",
              transition: "filter 0.3s ease",
              flexShrink: 0,
              ml: { xs: 0, md: 0 }, // Remove left margin
            }}
          />
          
          {/* Navigation List centered with more spacing */}
          <List sx={{ 
            display: { xs: "none", md: "flex" }, 
            gap: { md: 3, lg: 4 }, // Increased gap for more spacing between tabs
            flexGrow: 1,
            justifyContent: 'center',
            mx: { md: 2, lg: 3 },
            overflow: 'hidden',
          }}>
            {tabLabels.map((tab, index) => (
              <ListItem 
                key={index} 
                sx={{ 
                  padding: 0, 
                  width: 'auto', 
                  flexShrink: 0,
                }}
              >
                {tab.label === 'Major Division' ? (
                  <Box
                    onMouseEnter={handleMenuOpen}
                    onMouseLeave={handleMenuClose}
                  >
                    <ListItemButton
                      sx={{
                        color: isScrolled ? "#000" : "#fff",
                        fontWeight: 300,
                        transition: "color 0.3s ease",
                        "&:hover": { color: "#00bcd4" },
                        display: 'flex',
                        alignItems: 'center',
                        px: { md: 0.5, lg: 0.75 },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 400,
                          fontSize: { md: "14px", lg: "16px" },
                          color: isScrolled ? "#000" : "#fff",
                          transition: "color 0.3s ease",
                          fontFamily: "'Kanit', sans-serif",
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {tab.label}
                      </Typography>
                      <ArrowDropDownIcon sx={{ 
                        color: isScrolled ? "#000" : "#fff",
                        fontSize: { md: "18px", lg: "20px" },
                      }} />
                    </ListItemButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      MenuListProps={{
                        onMouseLeave: handleMenuClose, // Close when leaving dropdown
                      }}
                      PaperProps={{
                        sx: {
                          backgroundColor: '#fff',
                          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                          minWidth: 180,
                        },
                      }}
                    >
                      {divisionItems.map((item, idx) => (
                        <MenuItem
                          key={idx}
                          component={Link}
                          to={item.route}
                          onClick={handleMenuClose}
                          sx={{
                            color: '#1C276C',
                            fontSize: "13px",
                            fontFamily: "'Kanit', sans-serif",
                            '&:hover': {
                              backgroundColor: '#f5f5f5',
                              color: '#00bcd4',
                            },
                          }}
                        >
                          {item.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <ListItemButton
                    component={Link}
                    to={tab.route}
                    sx={{
                      color: isScrolled ? "#000" : "#fff",
                      fontWeight: 300,
                      transition: "color 0.3s ease",
                      "&:hover": { color: "#00bcd4" },
                      px: { md: 0.5, lg: 0.75 },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 400,
                        fontSize: { md: "14px", lg: "16px" },
                        color: isScrolled ? "#000" : "#fff",
                        transition: "color 0.3s ease",
                        fontFamily: "'Kanit', sans-serif",
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tab.label}
                    </Typography>
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>

          {/* Right side: Download Brochure Button and Menu Icon */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { md: 1, lg: 1.5 },
            flexShrink: 0,
          }}>
            {!isMobile && (
              <Button
                variant="contained"
                sx={{
                  display: { xs: "none", md: "block" },
                  background: "linear-gradient(90deg, #25358d, #1a2467)",
                  borderRadius: "15px",
                  boxShadow: "0px 3px 10px rgba(37, 53, 141, 0.5)",
                  px: { md: 1, lg: 1.5 },
                  py: { md: 0.3, lg: 0.4 },
                  fontSize: { md: "0.7rem", lg: "0.8rem" },
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(90deg, #0088cc, #00bcd4)",
                    boxShadow: "0px 5px 12px rgba(37, 53, 141, 0.7)",
                  },
                  whiteSpace: 'nowrap',
                  minWidth: { md: '110px', lg: '130px' },
                }}
              >
                DOWNLOAD BROCHURE
              </Button>
            )}

<IconButton
  edge="end"
  aria-label="menu"
  onClick={isMobile ? handleDrawerToggle : handleDetailsDrawerToggle}
  sx={{
    color: '#000000',
    '&:hover': {
      color: '#1C276C',
      transition: 'all 0.3s ease',
    },
    mr: { xs: 2, md: 1 }, // Move left on mobile by reducing margin-right
  }}
>
  <div
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    }}
  >
    <div style={{ width: '25px', height: '2px', backgroundColor: isScrolled ? '#000000' : '#FFFFFF', margin: '3px 0', transition: 'width 0.3s ease-in-out' }} />
    <div style={{ width: isHovered ? '25px' : '18px', height: '2px', backgroundColor: isScrolled ? '#000000' : '#FFFFFF', margin: '3px 0', transition: 'width 0.3s ease-in-out' }} />
    <div style={{ width: '25px', height: '2px', backgroundColor: isScrolled ? '#000000' : '#FFFFFF', margin: '3px 0', transition: 'width 0.3s ease-in-out' }} />
  </div>
</IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={detailsDrawerOpen}
        onClose={handleDetailsDrawerToggle}
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            width: { md: 300, lg: 320 },
            backgroundColor: (theme) => theme.palette.background.default,
            border: 'none',
            boxSizing: 'border-box',
          },
        }}
      >
      <Box sx={{ width: 270, p: 2, display: 'flex', flexDirection: 'column', height: '100%', overflow: "hidden" }}>
              {/* Logo and Close Button */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <img src={uipslogo.logo02} alt="Logo" style={{ height: '48px' }} />
                <IconButton
                  onClick={handleDetailsDrawerToggle}
                  sx={{
                    color: '#1C276C',
                    '&:hover': {
                      color: '#000000',
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              <Box sx={{ marginBottom: '20px' }} />

              <Typography variant="h5" sx={{ color: '#1C276C', fontWeight: '550' }}>
                Get In Touch
              </Typography>

              <Divider sx={{ borderColor: '#1C276C', my: 2 }} />

              {/* Contact Details */}
              <List sx={{ flexGrow: 1 }}>
                <ListItem>
                  <FaPhone style={{ marginRight: '10px', color: '#1C276C', fontSize: '1.2rem' }} />
                  <ListItemText
                    primary={
                      <Typography variant="caption">
                        <a href="tel:+919549546568" color="inherit" style={{ color: '#1C276C', textDecoration: 'none' }}>
                          +966 13 896 8061
                        </a>
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <FaEnvelope style={{ marginRight: '10px', color: '#1C276C', fontSize: '1.2rem' }} />
                  <ListItemText
                    primary={
                      <Typography variant="caption">
                        <a href="mailto:info@dprprop.com" color="inherit" style={{ color: '#1C276C', textDecoration: 'none' }}>
                          info@uips-sa.com
                        </a>
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
              <Stack direction="column" alignItems="left" spacing={1}>
                <FaMapMarkerAlt style={{ color: "#1C276C", fontSize: "1.3rem" }} />
                <ListItemText
                  primary={
                    <Typography variant="caption" textAlign="center">
                      Al-Meflah Building, 4th Floor Suit 4B <br />
                      7th Cross, King Abdul Aziz Road <br />
                      Al Khobar, Kingdom Of Saudi Arabia
                    </Typography>
                  }
                />
              </Stack>
            </ListItem>
              </List>

              <Divider sx={{ borderColor: '#1C276C', my: 2 }} />

              {/* Google Maps iframe */}
              <Box sx={{ height: '200px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.182815150521!2d50.20350387419608!3d26.28817288665294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e83e5bd4727f%3A0x1d4e32577a32381e!2sUtilities%20%26%20Industrial%20Power%20Services%20(UIPS)%20%40%205th%20Floor%205D.!5e0!3m2!1sen!2ssa!4v1742466963682!5m2!1sen!2ssa"
                  style={{ width: '100%', height: '100%', border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Box>
      </Drawer>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <Box
          sx={{
            width: 250,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            background: '#fff',
            height: '100%',
          }}
        >
          <List>
            {tabLabels.map((tab, index) => (
              <Box key={index}>
                {tab.label === 'Major Division' ? (
                  <>
                    <ListItemButton 
                      onClick={handleMobileMenuToggle}
                      sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        color: '#1C276C',
                      }}
                    >
                      <ListItemText primary={tab.label} />
                      {mobileMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItemButton>
                    <Collapse in={mobileMenuOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {divisionItems.map((item, idx) => (
                          <ListItemButton 
                            key={idx}
                            component={Link}
                            to={item.route}
                            onClick={handleDrawerToggle}
                            sx={{ pl: 4, color: '#1C276C' }}
                          >
                            <ListItemText primary={item.label} />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItemButton 
                    component={Link}
                    to={tab.route}
                    onClick={handleDrawerToggle}
                    sx={{ color: '#1C276C' }}
                  >
                    <ListItemText primary={tab.label} />
                  </ListItemButton>
                )}
              </Box>
            ))}
          </List>
          <Divider />
          <Button
            variant="contained"
            sx={{
              marginTop: '20px',
              background: "linear-gradient(90deg, #25358d, #1a2467)",
              borderRadius: "20px",
              boxShadow: "0px 4px 12px rgba(37, 53, 141, 0.6)",
              "&:hover": {
                background: "linear-gradient(90deg, #0088cc, #00bcd4)",
              },
            }}
            onClick={() => window.open('/brochure.pdf', '_blank')}
          >
            DOWNLOAD BROCHURE
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;