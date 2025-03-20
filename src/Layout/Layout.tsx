import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import { Box } from '@mui/material';
import './Layout.css';
import { useEffect } from 'react';
import ScrollToTopButton from './ScrollToTopButton';

const Layout = () => {
  const location = useLocation();

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Box className="layout-container">
      <Box>
        <Header />
        <ScrollToTopButton />
      </Box>
      <Box className="content-container">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
