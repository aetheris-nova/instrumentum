import type { StackProps } from '@chakra-ui/react';

// types
import type { IBaseComponentProps } from '@types';

export interface ICardProps {
  subtitle?: string;
  title?: string;
}

type TCardProps = StackProps & IBaseComponentProps & ICardProps;

export default TCardProps;
