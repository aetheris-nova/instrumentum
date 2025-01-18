import type { StackProps } from '@chakra-ui/react';

// types
import type { IBaseComponentProps } from '@types';

interface IProps {
  subtitle?: string;
  title?: string;
}

type TCardProps = StackProps & IBaseComponentProps & IProps;

export default TCardProps;
