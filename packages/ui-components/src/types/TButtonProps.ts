import type { ButtonProps } from '@chakra-ui/react';

// types
import type { IBaseComponentProps } from '@types';

export interface IButtonProps {
  children: string;
  scheme?: 'primary' | 'secondary';
}

type TButtonProps = Omit<ButtonProps, 'children'> & IBaseComponentProps & IButtonProps;

export default TButtonProps;
