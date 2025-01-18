import { EmptyState as ChakraEmptyState } from '@chakra-ui/react';
import type { ReactNode } from 'react';

// types
import type { IBaseComponentProps } from '@types';

interface IProps {
  description?: string;
  icon?: ReactNode;
  title: string;
}

type TEmptyStateProps = ChakraEmptyState.RootProps & IBaseComponentProps & IProps;

export default TEmptyStateProps;
