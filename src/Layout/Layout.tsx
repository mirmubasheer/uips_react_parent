// import { Outlet, useLocation } from 'react-router-dom';
// import { Box } from '@mui/material';
// import './Layout.css';
// import { useEffect } from 'react';
// import ScrollToTopButton from './ScrollToTopButton';
// import Footer from '../Pages/Footer/Footer';
// import Header from './Header';
// import SocialIcons from './SocialIcons';

// const Layout = () => {
//   const location = useLocation();

//   // Scroll to top on location change
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   return (
//     <Box className="layout-container">
//       <Box>
//         <Header />
//         <SocialIcons/>
//         <ScrollToTopButton />
//       </Box>
//       <Box className="content-container">
//         <Outlet />
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// export default Layout;

import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import './Layout.css';
import { useEffect } from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import Footer from '../Pages/Footer/Footer';
import Header from './Header';
import SocialIcons from './SocialIcons';
import SEO from '../components/SEO';
import { getSEOData } from '../utils/seo';

const Layout = () => {
  const location = useLocation();
  const { pathname } = location;
  const seo = getSEOData(pathname);

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box className="layout-container">
      <SEO title={seo.title} description={seo.description} />
      <Box>
        <Header />
        <SocialIcons/>
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
