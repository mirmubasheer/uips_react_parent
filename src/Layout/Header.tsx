import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemButton, Button } from "@mui/material";
import { Box } from "@mui/material";
import { Menu, X } from "lucide-react";
import { uipslogo } from "../assets";
import TopHeader from "../components/TopHeader/TopHeader"; // Import the TopHeader component

const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTopHeaderVisible, setIsTopHeaderVisible] = useState(true);

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
      {isTopHeaderVisible && <TopHeader />}

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: isScrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
          backdropFilter: isScrolled ? "none" : "blur(10px)",
          transition: "all 0.3s ease-in-out",
          boxShadow: "none",
          marginTop: isTopHeaderVisible ? "35px" : "0", // Adjust for the visibility of TopHeader
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

          {/* Desktop Navigation */}
          <List sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navLinks.map((link, index) => (
              <ListItem key={index} sx={{ width: "auto", p: 0 }}>
                <ListItemButton
                  sx={{
                    color: isScrolled ? "#000" : "#fff",
                    fontWeight: 500,
                    transition: "color 0.3s ease",
                    "&:hover": { color: "#00bcd4" },
                  }}
                >
                  <Typography variant="body1" sx={{ color: "inherit" }}>
                    {link}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Quote Button */}
          <Button
            variant="contained"
            sx={{
              display: { xs: "none", md: "block" },
              background: "linear-gradient(90deg, #25358d, #1a2467)",
              borderRadius: "20px",
              boxShadow: "0px 4px 12px rgba(37, 53, 141, 0.6)", // Soft blue shadow to match the gradient
              px: 3,
              py: 1,
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(90deg, #0088cc, #00bcd4)",
                boxShadow: "0px 6px 15px rgba(37, 53, 141, 0.8)", // Slightly stronger shadow on hover
              },
            }}
          >
            DOWNLOAD BROCHURE
          </Button>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: isScrolled ? "#000" : "#fff" }}
            onClick={() => setOpen(true)}
          >
            <Menu />
          </IconButton>

          {/* Mobile Drawer */}
          <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <IconButton sx={{ m: 2, alignSelf: "flex-end" }} onClick={() => setOpen(false)}>
              <X />
            </IconButton>
            <List>
              {navLinks.map((link, index) => (
                <ListItem key={index} onClick={() => setOpen(false)}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {link}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
