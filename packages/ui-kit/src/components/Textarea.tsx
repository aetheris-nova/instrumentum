import { Textarea as ChakraTextarea, TextareaProps } from '@chakra-ui/react';
import {
  forwardRef
} from 'react';

// hooks
import useForegroundColor from '@hooks/useForegroundColor';

// types
import type { IBaseComponentProps } from '@types';

const Textarea = forwardRef<HTMLTextAreaElement, IBaseComponentProps & TextareaProps>(({ colorMode = 'light', ...otherProps }, ref) => {
  // hooks
  const foregroundColor = useForegroundColor(colorMode);

  return (
    <ChakraTextarea
      borderColor={foregroundColor}
      borderRadius={0}
      colorPalette="gray"
      size="xl"
      {...otherProps}
      ref={ref}
    />
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
