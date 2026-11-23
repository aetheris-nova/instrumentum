import { Textarea as ChakraTextarea, TextareaProps } from '@chakra-ui/react';
import {
  forwardRef
} from 'react';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ ...otherProps }, ref) => {
  return (
    <ChakraTextarea
      borderColor="fg"
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
