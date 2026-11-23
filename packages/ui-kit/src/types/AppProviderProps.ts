import type { SystemContext as ChakraSystemContext } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface Props {
  theme?: ChakraSystemContext;
}
type AppProviderProps = PropsWithChildren<Props>;

export default AppProviderProps;
