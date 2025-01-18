import { Button as ChakraButton, Heading } from '@chakra-ui/react';
import {
  type PropsWithoutRef,
  type ForwardRefExoticComponent,
  forwardRef,
  type RefAttributes,
} from 'react';

// constants
import { BUTTON_HEIGHT } from '@constants';

// hooks
import useBackgroundColor from '@hooks/useBackgroundColor';
import useForegroundColor from '@hooks/useForegroundColor';

// types
import type { IProps } from './types';

const Button: ForwardRefExoticComponent<
  PropsWithoutRef<IProps> & RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, IProps>(({ children, colorMode = 'light', scheme, ...buttonProps }, ref) => {
  // hooks
  const backgroundColor = useBackgroundColor(colorMode);
  const foregroundColor = useForegroundColor(colorMode);

  return (
    <ChakraButton
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
      textTransform="uppercase"
      transition="ease-in-out 300ms"
      {...buttonProps}
      ref={ref}
    >
      <Heading fontSize="sm">
        {children.toUpperCase()}
      </Heading>
    </ChakraButton>
  );
});

Button.displayName = 'Button';

export default Button;
