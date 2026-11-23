import { Popover as ChakraPopover } from '@chakra-ui/react';
import type { RefObject } from 'react';

// types
import type { IBaseComponentProps } from '@types';

export interface IInfoTipProps {
  portalled?: boolean;
  portalRef?: RefObject<HTMLElement>;
  showArrow?: boolean;
}

type TInfoTipProps = ChakraPopover.RootProps & IBaseComponentProps & IInfoTipProps;

export default TInfoTipProps;
