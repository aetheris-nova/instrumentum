import { defineConfig, mergeConfig } from 'vite';
import dts from 'unplugin-dts/vite';

// configs
import commonConfig from './vite.common.config.ts';

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
    },
    plugins: [
      dts({
        tsconfigPath: 'tsconfig.build.json',
      }),
    ],
  })
);
