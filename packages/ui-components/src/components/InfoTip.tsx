import { IconButton } from '@chakra-ui/react';
import {
  forwardRef,
} from 'react';
import { GrCircleInformation } from 'react-icons/gr';

// components
import ToggleTip from './ToggleTip';

// types
import type { TInfoTipProps } from '@types';

const InfoTip = forwardRef<HTMLDivElement, TInfoTipProps>(({
  children,
  ...otherProps
}, ref) => {
  return (
    <ToggleTip content={children} {...otherProps} ref={ref}>
      <IconButton
        variant="ghost"
        aria-label="info"
        size="2xs"
        colorPalette="gray"
      >
        <GrCircleInformation />
      </IconButton>
    </ToggleTip>
  );
});

InfoTip.displayName = 'InfoTip';

export default InfoTip;
