
// // App.tsx
// import React, { useState, useEffect } from 'react';
// import { Box } from '@mui/material';
// import { QueryClient, QueryClientProvider } from 'react-query';
// // import { RouterProvider } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './App.css';
// // import router from './Routes/routes';
// // import { theme } from './Theme/theme';
// // import CursorBall from './CursorBall';
// import Preloader from './components/Preloader';

// // Create a new instance of QueryClient
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });

// const App: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     // <ThemeProvider theme={theme}> 
//       <QueryClientProvider client={queryClient}>
//         <Box className="App">
//           {isLoading ? (
//             <Preloader />
//           ) : (
//             <>
//               {/* <RouterProvider router={router} /> */}
//               {/* <CursorBall /> */}
//               <ToastContainer
//                 position="top-right"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//               />
//             </>
//           )}
//         </Box>
//       </QueryClientProvider>
//     // </ThemeProvider>
//   );
// };

// export default App;

import { Box, ThemeProvider } from "@mui/material";
import Preloader from "./components/Preloader";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "./Theme/theme";
import router from "./Routes/Routes";
import slides from "./assets/data/slides"; // ✅ Ensure slides are imported

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const MIN_LOAD_TIME = 1500; // ✅ Minimum preloader time (1.5s)
    const startTime = Date.now(); // ✅ Track when loading starts

    const preloadImages = async () => {
      if (!slides || slides.length === 0) {
        setTimeout(() => setIsLoading(false), MIN_LOAD_TIME);
        return;
      }

      const imagePromises = slides.map((slide) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        });
      });

      await Promise.all(imagePromises); // ✅ Wait for all images to load
      
      // ✅ Ensure preloader stays for at least MIN_LOAD_TIME
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_LOAD_TIME - elapsedTime);
      setTimeout(() => setIsLoading(false), remainingTime);
    };

    preloadImages();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Box className="App">
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              <RouterProvider router={router} />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </>
          )}
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;

