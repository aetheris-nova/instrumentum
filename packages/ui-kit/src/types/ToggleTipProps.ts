import { Popover as ChakraPopover } from '@chakra-ui/react';
import type { ReactNode, RefObject } from 'react';

export interface Props {
  content: ReactNode;
  portalled?: boolean;
  portalRef?: RefObject<HTMLElement>;
  showArrow?: boolean;
}

type ToggleTipProps = ChakraPopover.RootProps & Props;

export default ToggleTipProps;
