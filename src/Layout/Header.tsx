import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, Button, Divider, ListItemText, ListItemButton, Box, useMediaQuery, useTheme, Stack } from "@mui/material";
import { Menu } from "lucide-react";
import { uipslogo } from "../assets";
import TopHeader from "../components/TopHeader/TopHeader"; // Import the TopHeader component
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";  // Add the Link import for navigation

// Tab labels
const tabLabels = [
  { label: 'Home', route: '/home' },
  { label: 'Projects', route: '/projects' },
  { label: 'About', route: '/about' },
  { label: 'Blog', route: '/blog' },
  { label: 'Contact', route: '/contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);  // For mobile view drawer
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTopHeaderVisible, setIsTopHeaderVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [detailsDrawerOpen, setDetailsDrawerOpen] = useState(false);  // For desktop view drawer
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Check if the view is mobile or desktop
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Toggle Drawer for details (desktop only)
  const handleDetailsDrawerToggle = () => {
    setDetailsDrawerOpen(!detailsDrawerOpen);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsTopHeaderVisible(window.scrollY <= 50); // Hide TopHeader when scrolled down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box>
      {/* Add TopHeader component here */}
      {/* {isTopHeaderVisible && <TopHeader />} */}

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: isScrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
          backdropFilter: isScrolled ? "none" : "blur(10px)",
          transition: "all 0.3s ease-in-out",
          boxShadow: "none",
          marginTop: isTopHeaderVisible ? "0px" : "0", // Adjust for the visibility of TopHeader
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box
            component="img"
            src={uipslogo.logo01}
            alt="UIP Logo"
            sx={{
              height: 50,
              width: "auto",
              filter: isScrolled ? "invert(0)" : "invert(2)",
              transition: "filter 0.3s ease",
            }}
          />
   <List sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
      {tabLabels.map((tab, index) => (
        <ListItem key={index} component={Link} to={tab.route} sx={{ padding: 0 }}>
          <ListItemButton
            sx={{
              color: isScrolled ? "#000" : "#fff", // Default color is white, black when scrolled
              fontWeight: 300,
              transition: "color 0.3s ease",
              "&:hover": { color: "#00bcd4" },
            }}
          >
       <Typography
            variant="body1"
            sx={{
              fontWeight: 400, // Less font weight
              fontSize: "18px", // Reduced font size
              color: isScrolled ? "#000" : "#fff", // Default white, black when scrolled
              transition: "color 0.3s ease",
              fontFamily: "'Kanit', sans-serif", // Ensuring 'Kanit' is used
            }}
          >
            {tab.label}
          </Typography>

          </ListItemButton>
        </ListItem>
      ))}
    </List>

          {/* Quote Button */}
          {!isMobile && (
           <Button
           variant="contained"
           sx={{
             display: { xs: "none", md: "block" },
             background: "linear-gradient(90deg, #25358d, #1a2467)",
             borderRadius: "15px", // Reduced from 20px to 15px
             boxShadow: "0px 3px 10px rgba(37, 53, 141, 0.5)", // Slightly lighter shadow
             px: 2, // Reduced horizontal padding (was 3)
             py: 0.5, // Reduced vertical padding (was 1)
             fontSize: "0.85rem", // Slightly smaller text
             fontWeight: "bold",
             "&:hover": {
               background: "linear-gradient(90deg, #0088cc, #00bcd4)",
               boxShadow: "0px 5px 12px rgba(37, 53, 141, 0.7)",
             },
           }}
         >
           DOWNLOAD BROCHURE
         </Button>
         
          )}

          {/* Toggle Button for both mobile (main tabs) and desktop (details) */}
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={isMobile ? handleDrawerToggle : handleDetailsDrawerToggle}
            sx={{
              color: '#000000',
              '&:hover': {
                color: '#1C276C',
                transition: 'all 0.3s ease',
              },
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
              {/* Top Line */}
              <div
                style={{
                  width: '30px',
                  height: '2px',
                  backgroundColor: isScrolled ? '#000000' : '#FFFFFF',
                  margin: '3px 0',
                  transition: 'width 0.3s ease-in-out',
                }}
              />
              
              {/* Middle Line (expands on hover) */}
              <div
                style={{
                  width: isHovered ? '30px' : '20px',
                  height: '2px',
                  backgroundColor: isScrolled ? '#000000' : '#FFFFFF',
                  margin: '3px 0',
                  transition: 'width 0.3s ease-in-out',
                }}
              />
              
              {/* Bottom Line */}
              <div
                style={{
                  width: '30px',
                  height: '2px',
                  backgroundColor: isScrolled ? '#000000' : '#FFFFFF',
                  margin: '3px 0',
                  transition: 'width 0.3s ease-in-out',
                }}
              />
            </div>
          </IconButton>

          {/* Desktop Details Drawer */}
          <Drawer
            anchor="right"
            open={detailsDrawerOpen}
            onClose={handleDetailsDrawerToggle}
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': {
                width: 320,
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
                <img src={uipslogo.logo01} alt="Logo" style={{ height: '30px' }} />
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

          {/* Mobile Drawer */}
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
                  <ListItem key={index} onClick={handleDrawerToggle}>
                    <Link to={tab.route} style={{ textDecoration: 'none', color: '#1C276C' }}>
                      <ListItemButton>{tab.label}</ListItemButton>
                    </Link>
                  </ListItem>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
