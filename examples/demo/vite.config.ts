import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Allow access to the 'node_modules' directory using a relative path
        path.resolve(__dirname, '../../', 'node_modules'),
        // Allow access to the 'examples/demo' directory
        path.resolve(__dirname, '../../', 'examples/demo'),
      ],
    },
  },
});
