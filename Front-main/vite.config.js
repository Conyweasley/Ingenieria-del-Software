/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
    proxy: {
      '/user/create': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
  test: {
    globals: true
  }
  // define: {
  //   global: 'window',
  // },
});

// define: {
//   global: 'window'
// },
// test: {
//   globals: true,
// },