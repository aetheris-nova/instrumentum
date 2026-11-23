import type { ILogger } from '@aetherisnova/types';

// types
import type IBaseComponentProps from './IBaseComponentProps';

interface IWalletSelectModalProps {
  caption?: string;
  emptyText?: string;
  loadingText?: string;
  logger?: ILogger;
  open: boolean;
  onClose?: () => void;
  title?: string;
}

type TWalletSelectModalProps = IBaseComponentProps & IWalletSelectModalProps;

export default TWalletSelectModalProps;
