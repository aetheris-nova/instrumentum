import type { StackProps } from '@chakra-ui/react';

export interface Props {
  subtitle?: string;
  title?: string;
}

type CardProps = StackProps & Props;

export default CardProps;
