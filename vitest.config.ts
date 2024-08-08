import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      include: ['src/**', 'components/**', 'utils/**'],
      exclude: ['src/setupTests.ts'],
    },
  },
  resolve: {
    alias: {
      'next/router': resolve(
        __dirname,
        'src/__tests__/__mocks__/next/router.ts'
      ),
    },
  },
});
