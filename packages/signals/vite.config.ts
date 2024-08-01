import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
  const tsconfigPath = mode === 'test'
    ? './tsconfig.test.json'
    : './tsconfig.build.json';

  return {
    plugins: [
      tsconfigPaths({ projects: [tsconfigPath] }),
      dts({ outDir: 'dist/dts', tsconfigPath }),
    ],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: true,
      lib: {
        entry: 'src/index.ts',
        formats: ['es', 'cjs'],
      },
    },
    test: {
      environment: 'happy-dom',
      coverage: {
        enabled: true,
        provider: 'v8',
        include: ['src/**/*.ts'],
        exclude: ['src/**/*.test.ts', 'src/index.ts'],
        branches: 80,
        functions: 80,
        statements: 80,
        lines: 80,
      },
    },
  };
});