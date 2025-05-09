import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { HelmetProvider } from 'react-helmet-async';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import App from './App.tsx';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <HelmetProvider>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </HelmetProvider>
//   </StrictMode>,
// );