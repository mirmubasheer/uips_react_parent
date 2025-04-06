import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import './Layout.css';
import { useEffect } from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import Footer from '../Pages/Footer/Footer';
import Header from './Header';

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
      <Footer />
    </Box>
  );
};

export default Layout;
