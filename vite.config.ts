// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   base: '/',
//   plugins: [react()],
// });




import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase limit to 1000 kB to reduce warnings
    rollupOptions: {
      output: {
        // Cache-busting with hashed filenames
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
        // Split large dependencies into separate chunks
        manualChunks: {
          vendor: ['react', 'react-dom'], // Core React libs
          // Add more if needed, e.g., 'charts': ['chart.js']
        },
      },
    },
  },
});