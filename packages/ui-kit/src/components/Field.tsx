import { Field as ChakraField } from '@chakra-ui/react';
import { forwardRef } from 'react';

// types
import type { FieldProps } from '@/types';

const Field = forwardRef<HTMLDivElement, FieldProps>(({
  children,
  errorText,
  helperText,
  label,
  optionalText,
  ...otherProps
}, ref) => {
  return (
    <ChakraField.Root ref={ref} {...otherProps}>
      {label && (
        <ChakraField.Label>
          {label}
          <ChakraField.RequiredIndicator color="fg" fallback={optionalText} />
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
