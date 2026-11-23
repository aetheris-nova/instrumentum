import { Tooltip as ChakraTooltip } from '@chakra-ui/react';
import type { ReactNode, RefObject } from 'react';

export interface Props {
  content: ReactNode;
  contentProps?: ChakraTooltip.ContentProps;
  disabled?: boolean;
  portalled?: boolean;
  portalRef?: RefObject<HTMLElement>;
  showArrow?: boolean;
}

type TooltipProps = ChakraTooltip.RootProps & Props;

export default TooltipProps;
