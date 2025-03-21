import { Tooltip as ChakraTooltip } from '@chakra-ui/react';
import type { ReactNode, RefObject } from 'react';

// types
import type { IBaseComponentProps } from '@types';

export interface ITooltipProps {
  content: ReactNode;
  contentProps?: ChakraTooltip.ContentProps;
  disabled?: boolean;
  portalled?: boolean;
  portalRef?: RefObject<HTMLElement>;
  showArrow?: boolean;
}

type TTooltipProps = ChakraTooltip.RootProps & IBaseComponentProps & ITooltipProps;

export default TTooltipProps;
