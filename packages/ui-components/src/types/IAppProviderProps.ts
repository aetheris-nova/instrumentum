import type { SystemContext as ChakraSystemContext } from '@chakra-ui/react';
import type { i18n as I18n } from 'i18next';
import type { Config as WagmiConfig } from 'wagmi';

interface IAppProviderProps {
  i18n?: I18n;
  theme?: ChakraSystemContext;
  wagmiConfig?: WagmiConfig;
}

export default IAppProviderProps;
