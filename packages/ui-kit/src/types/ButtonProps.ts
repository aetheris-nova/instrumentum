import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

export interface Props {
  children: string;
  scheme?: 'primary' | 'secondary';
}
type ButtonProps = Omit<ChakraButtonProps, 'children'> & Props;

export default ButtonProps;
