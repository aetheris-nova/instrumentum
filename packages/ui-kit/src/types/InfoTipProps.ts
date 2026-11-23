import { Popover as ChakraPopover } from '@chakra-ui/react';
import type { RefObject } from 'react';

export interface Props {
  portalled?: boolean;
  portalRef?: RefObject<HTMLElement>;
  showArrow?: boolean;
}

type InfoTipProps = ChakraPopover.RootProps & Props;

export default InfoTipProps;
