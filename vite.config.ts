import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { UserConfigExport } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';

// https://vitejs.dev/config/
const viteConfig: UserConfigExport = defineConfig({
  plugins: [react()],
});

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['text'],
    },
  },
});

export default {
  ...viteConfig,
  ...vitestConfig,
};
