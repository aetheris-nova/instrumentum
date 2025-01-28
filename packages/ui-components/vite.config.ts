import { defineConfig, mergeConfig } from 'vite';
import dts from 'vite-plugin-dts';

// configs
import commonConfig from './vite.common.config';

export default mergeConfig(
  commonConfig,
  defineConfig({
    build: {
      lib: {
        entry: 'src/index.ts',
        formats: ['es'],
        fileName: 'index',
      },
      outDir: 'dist',
      rollupOptions: {
        external: [
          '@chakra-ui/react',
          '@emotion/react',
          '@tanstack/react-query',
          'react',
          'react/jsx-runtime',
          'viem',
          'wagmi',
        ],
      },
    },
    plugins: [
      dts({
        tsconfigPath: 'tsconfig.build.json',
      }),
    ],
  })
);
