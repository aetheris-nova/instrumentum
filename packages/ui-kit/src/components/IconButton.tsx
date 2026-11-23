import { IconButton as ChakraIconButton } from '@chakra-ui/react';
import { forwardRef } from 'react';

// components
import PulseLoader from './PulseLoader';

// constants
import { BUTTON_HEIGHT } from '@/constants';

// types
import type { IconButtonProps } from '@/types';

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ scheme = 'primary', ...buttonProps }, ref) => {
  const isSecondary = scheme === 'secondary';

  return (
    <ChakraIconButton
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
      minH={BUTTON_HEIGHT}
      minW={BUTTON_HEIGHT}
      spinner={<PulseLoader size="sm" />}
      transition="ease 300ms"
      {...buttonProps}
      ref={ref}
    />
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
