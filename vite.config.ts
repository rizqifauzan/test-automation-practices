import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/test-automation-practices/', // Add repository name back to base URL
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
