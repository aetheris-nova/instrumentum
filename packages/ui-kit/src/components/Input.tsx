import { Input as ChakraInput, InputProps } from '@chakra-ui/react';
import {
  forwardRef
} from 'react';

// hooks
import useForegroundColor from '@hooks/useForegroundColor';

// types
import type { IBaseComponentProps } from '@types';

const Input = forwardRef<HTMLInputElement, IBaseComponentProps & InputProps>(({ colorMode = 'light', ...otherProps }, ref) => {
  // hooks
  const foregroundColor = useForegroundColor(colorMode);

  return (
    <ChakraInput
      borderColor={foregroundColor}
      borderRadius={0}
      colorPalette="gray"
      size="xl"
      {...otherProps}
      ref={ref}
    />
  );
});

Input.displayName = 'Input';

export default Input;
