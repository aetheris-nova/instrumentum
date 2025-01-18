import type { ReactElement, ReactNode } from 'react';

// types
import type IBaseComponentProps from './IBaseComponentProps';
import type TButtonProps from './TButtonProps';

interface IProps {
  body: ReactNode;
  closeButton?: boolean;
  footer?: ReactElement<TButtonProps>[];
  onClose?: () => void;
  open: boolean;
  subtitle?: string;
  title?: string;
}

type TModalProps = IBaseComponentProps & IProps;

export default TModalProps;
