import type { ReactElement, ReactNode } from 'react';

// types
import type ButtonProps from './ButtonProps';

interface ModalProps {
  body: ReactNode;
  closeButton?: boolean;
  footer?: ReactElement<ButtonProps>[];
  onClose?: () => void;
  open: boolean;
  subtitle?: string;
  title?: string;
}

export default ModalProps;
