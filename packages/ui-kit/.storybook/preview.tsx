import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react-vite';

// fonts
import '@/fonts';

// providers
import { AppProvider } from '@/providers';

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      defaultTheme: 'light',
      themes: {
        light: 'light',
        dark: 'dark',
      },
    }),
    (Story, context) => (
      <AppProvider forcedColorMode={context.globals.theme}>
        {/* `forcedTheme` keeps the next-themes hooks in step with the toolbar's class. */}
        <Story />
      </AppProvider>
    ),
  ],
  parameters: {
    a11y: {
      test: 'todo',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
