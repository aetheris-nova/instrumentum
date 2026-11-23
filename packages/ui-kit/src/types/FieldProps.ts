import { Field as ChakraField } from '@chakra-ui/react';
import type { ReactNode } from 'react';

export interface Props {
  errorText?: ReactNode;
  helperText?: ReactNode;
  label: ReactNode;
  optionalText?: ReactNode;
}

type FieldProps = Omit<ChakraField.RootProps, 'label'> & Props;

export default FieldProps;
