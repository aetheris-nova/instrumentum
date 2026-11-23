import { Button as ChakraButton, Heading } from '@chakra-ui/react';
import { forwardRef } from 'react';

// constants
import { BUTTON_HEIGHT } from '@/constants';

// types
import type { ButtonProps } from '@/types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, scheme = 'primary', ...buttonProps }, ref) => {
  const isSecondary = scheme === 'secondary';

  return (
    <ChakraButton
      _hover={{
        bg: isSecondary ? 'fg' : 'bg',
        color: isSecondary ? 'bg' : 'fg',
      }}
      bg={isSecondary ? 'bg' : 'fg'}
      borderColor="fg"
      borderRadius={0}
      borderWidth={buttonProps.variant === 'ghost' ? 0 : 1}
      color={isSecondary ? 'fg' : 'bg'}
      colorPalette="gray"
      fontFamily="mono"
      minH={BUTTON_HEIGHT}
      textTransform="uppercase"
      transition="ease 300ms"
      {...buttonProps}
      ref={ref}
    >
      <Heading fontSize="sm">{children.toUpperCase()}</Heading>
    </ChakraButton>
  );
});

Button.displayName = 'Button';

export default Button;
