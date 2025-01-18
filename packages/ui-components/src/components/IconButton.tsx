import { IconButton as ChakraIconButton } from '@chakra-ui/react';
import {
  forwardRef,
} from 'react';

// constants
import { BUTTON_HEIGHT } from '@constants';

// hooks
import useBackgroundColor from '@hooks/useBackgroundColor';
import useForegroundColor from '@hooks/useForegroundColor';

// types
import type { TIconButtonProps } from '@types';

const IconButton = forwardRef<HTMLButtonElement, TIconButtonProps>(({ colorMode = 'light', scheme, ...buttonProps }, ref) => {
  // hooks
  const backgroundColor = useBackgroundColor(colorMode);
  const foregroundColor = useForegroundColor(colorMode);

  return (
    <ChakraIconButton
      _hover={{
        bg: scheme === 'secondary' ? foregroundColor : backgroundColor,
        color: scheme === 'secondary' ? backgroundColor : foregroundColor,
      }}
      background={scheme === 'secondary' ? backgroundColor : foregroundColor}
      borderColor={foregroundColor}
      borderRadius={0}
      borderWidth={buttonProps.variant === 'ghost' ? 0 : 1}
      color={scheme === 'secondary' ? foregroundColor : backgroundColor}
      colorPalette="gray"
      fontFamily="{fonts.mono}"
      minH={BUTTON_HEIGHT}
      minW={BUTTON_HEIGHT}
      textTransform="uppercase"
      transition="ease-in-out 300ms"
      {...buttonProps}
      ref={ref}
    />
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
