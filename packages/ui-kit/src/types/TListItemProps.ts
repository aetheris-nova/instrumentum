import type { ReactNode } from 'react';

// types
import type { IBaseComponentProps } from '@types';

interface IListItemProps {
  icon?: ReactNode;
  isExternalLink?: boolean;
  link?: string | (() => ReactNode);
  title: string;
  secondarySubtitle?: string;
  secondaryTitle?: string;
  subtitle?: string;
}

type TListItemProps = IBaseComponentProps & IListItemProps;

export default TListItemProps;
