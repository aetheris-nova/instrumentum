import { EmptyState as ChakraEmptyState } from '@chakra-ui/react';
import type { ReactNode } from 'react';

export interface Props {
  description?: string;
  icon?: ReactNode;
  title: string;
}

type EmptyStateProps = ChakraEmptyState.RootProps & Props;

export default EmptyStateProps;
