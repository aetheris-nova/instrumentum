import { Field as ChakraField } from '@chakra-ui/react';
import type { ReactNode } from 'react';

// types
import type { IBaseComponentProps } from '@types';

interface IProps {
  errorText?: ReactNode;
  helperText?: ReactNode;
  label: ReactNode;
  optionalText?: ReactNode;
}

type TFieldProps = Omit<ChakraField.RootProps, 'label'> & IBaseComponentProps & IProps;

export default TFieldProps;
