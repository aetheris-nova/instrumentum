import { IconProps } from '@chakra-ui/react';
import type { ReactElement, ReactNode } from 'react';

interface ListItemProps {
  icon?: ReactElement<IconProps>;
  isExternalLink?: boolean;
  link?: string | (() => ReactNode);
  title: string;
  secondarySubtitle?: string;
  secondaryTitle?: string;
  subtitle?: string;
}

export default ListItemProps;
