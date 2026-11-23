import type { IconButtonProps as ChakraIconButtonProps } from '@chakra-ui/react';

export interface Props {
  'aria-label': string;
  scheme?: 'primary' | 'secondary';
}

type IconButtonProps = ChakraIconButtonProps & Props;

export default IconButtonProps;
