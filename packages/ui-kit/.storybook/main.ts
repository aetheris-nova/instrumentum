import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-themes'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  /**
   * Storybook automatically composes the published Storybook of any dependency that declares a
   * `storybook` field in its `package.json` - `@chakra-ui/react` does.
   */
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // `preview.tsx` has no components to document, and docgen warns that it is outside `src`.
      exclude: ['.storybook/**', '**/node_modules/**'],
      // without this every Chakra style prop is documented as one of the component's own.
      propFilter: (prop) => !!prop.parent && !/node_modules/.test(prop.parent.fileName),
    },
  },
};

export default config;
