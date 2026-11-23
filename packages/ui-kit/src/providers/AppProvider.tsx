import { ChakraProvider } from '@chakra-ui/react';
import { EveFrontierProvider } from '@evefrontier/dapp-kit';
import { QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { type FC, useMemo } from 'react';

// systems
import createSystem from '@/theme';

// types
import type { AppProviderProps } from '@/types';

const AppProvider: FC<AppProviderProps> = ({ children, forcedColorMode }) => {
  const theme = useMemo(() => createSystem(), []);
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <ChakraProvider value={theme}>
      <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem forcedTheme={forcedColorMode}>
        <EveFrontierProvider queryClient={queryClient}>{children}</EveFrontierProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default AppProvider;
