import type { ButtonProps } from '@chakra-ui/react';

// types
import type { IBaseComponentProps } from '@types';

interface IProps {
  children: string;
  scheme?: 'primary' | 'secondary';
}

type TButtonProps = Omit<ButtonProps, 'children'> & IBaseComponentProps & IProps;

export default TButtonProps;
