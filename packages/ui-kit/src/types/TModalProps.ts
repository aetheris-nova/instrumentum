import type { ReactElement, ReactNode } from 'react';

// types
import type IBaseComponentProps from './IBaseComponentProps';
import type TButtonProps from './TButtonProps';

export interface IModalProps {
  body: ReactNode;
  closeButton?: boolean;
  footer?: ReactElement<TButtonProps>[];
  onClose?: () => void;
  open: boolean;
  subtitle?: string;
  title?: string;
}

type TModalProps = IBaseComponentProps & IModalProps;

export default TModalProps;
