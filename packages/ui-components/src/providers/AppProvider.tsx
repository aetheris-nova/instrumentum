import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type FC, type PropsWithChildren, useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import { http, webSocket } from 'viem';
import { anvil, garnet, redstone } from 'viem/chains';
import { createConfig, WagmiProvider } from 'wagmi';

// themes
import defaultTheme from '@theme';

// types
import type { IAppProviderProps } from '@types';

const AppProvider: FC<PropsWithChildren<IAppProviderProps>> = ({ children, i18n, theme = defaultTheme, wagmiConfig }) => {
  const _wagmiConfig = useMemo(() => wagmiConfig || createConfig({
    chains: [anvil, garnet, redstone],
    transports: {
      [anvil.id]: webSocket(),
      [garnet.id]: http(),
      [redstone.id]: http(),
    },
  }), [wagmiConfig]);
  const queryClient = new QueryClient();
  const innerProviders = (
    <ChakraProvider value={theme}>
      <WagmiProvider config={_wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </ChakraProvider>
  );

  if (!i18n) {
    return innerProviders;
  }

  return (
    <I18nextProvider i18n={i18n}>
      {innerProviders}
    </I18nextProvider>
  );
};

export default AppProvider;
