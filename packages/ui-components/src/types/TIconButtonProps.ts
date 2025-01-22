import { IconButtonProps } from '@chakra-ui/react';

// types
import type { IBaseComponentProps } from '@types';

export interface IIconButtonProps {
  scheme?: 'primary' | 'secondary';
}

type TProps = IconButtonProps & IBaseComponentProps & IIconButtonProps;

export default TProps;
