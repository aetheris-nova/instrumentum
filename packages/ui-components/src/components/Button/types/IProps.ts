import type { ColorMode } from '@chakra-ui/color-mode';
import type { ButtonProps } from '@chakra-ui/react';

interface IProps extends Omit<ButtonProps, 'children'> {
  colorMode?: ColorMode;
  children: string;
  scheme?: 'primary' | 'secondary';
}

export default IProps;
