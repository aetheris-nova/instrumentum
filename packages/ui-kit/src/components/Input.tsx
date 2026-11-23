import { Input as ChakraInput, InputProps } from '@chakra-ui/react';
import {
  forwardRef
} from 'react';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <ChakraInput
      borderColor="fg"
      borderRadius={0}
      colorPalette="gray"
      size="xl"
      {...props}
      ref={ref}
    />
  );
});

Input.displayName = 'Input';

export default Input;
