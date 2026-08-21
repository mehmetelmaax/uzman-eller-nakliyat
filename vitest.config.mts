import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'node',
    alias: {
      '@': path.resolve(import.meta.dirname, './src')
    },
    exclude: ['**/node_modules/**', '**/dist/**', '**/e2e/**', '**/src/tests/e2e/**']
  }
});
