import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Portfolio-Website/' : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Production optimizations
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Group dependencies into chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'particles': ['react-tsparticles', 'tsparticles-slim'],
        },
      },
    },
    // Improve build performance
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
  },
});
