import { IconButtonProps } from '@chakra-ui/react';

// types
import type { IBaseComponentProps } from '@types';

interface IProps {
  scheme?: 'primary' | 'secondary';
}

type TProps = IconButtonProps & IBaseComponentProps & IProps;

export default TProps;
