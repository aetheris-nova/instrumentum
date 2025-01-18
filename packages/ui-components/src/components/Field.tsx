import {  Field as ChakraField } from '@chakra-ui/react';
import { forwardRef } from 'react';

// hooks
import useForegroundColor from '@hooks/useForegroundColor';

// types
import type { TFieldProps } from '@types';

const Field = forwardRef<HTMLDivElement, TFieldProps>(({
  children,
  colorMode = 'light',
  errorText,
  helperText,
  label,
  optionalText,
  ...otherProps
}, ref) => {
  // hooks
  const foregroundColor = useForegroundColor(colorMode);

  return (
    <ChakraField.Root ref={ref} {...otherProps}>
      {label && (
        <ChakraField.Label>
          {label}
          <ChakraField.RequiredIndicator color={foregroundColor} fallback={optionalText} />
        </ChakraField.Label>
      )}
      {children}
      {helperText && (
        <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
      )}
      {errorText && (
        <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>
      )}
    </ChakraField.Root>
  );
});

Field.displayName = 'Field';

export default Field;
