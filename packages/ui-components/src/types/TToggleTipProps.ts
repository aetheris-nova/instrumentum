import { Popover as ChakraPopover } from '@chakra-ui/react';
import type { ReactNode, RefObject } from 'react';

// types
import type { IBaseComponentProps } from '@types';

interface IProps {
  content: ReactNode;
  portalled?: boolean;
  portalRef?: RefObject<HTMLElement>;
  showArrow?: boolean;
}

type TToggleTipProps = ChakraPopover.RootProps & IBaseComponentProps & IProps;

export default TToggleTipProps;
