/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8080,
  },
  test: {
    environment: 'happy-dom',
    setupFiles: './tests/unit/vitest.setup.ts',
    reporters: ['default', 'junit', 'vitest-sonar-reporter'],
    outputFile: {
      junit: 'coverage/junit.xml',
      'vitest-sonar-reporter': 'coverage/sonar-report.xml',
    },
    coverage: {
      provider: 'v8',
      reporter: ['clover', 'lcov', 'cobertura'],
      exclude: ['**/*.stories.*', 'src/api'],
    },
    include: ['./tests/unit/**/*.spec.ts'],
  },
}));
