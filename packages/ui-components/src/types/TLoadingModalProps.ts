// types
import type IBaseComponentProps from './IBaseComponentProps';

interface ILoadingModalProps {
  message?: string;
  onClose?: () => void;
  open: boolean;
  title?: string;
}

type TLoadingModalProps = IBaseComponentProps & ILoadingModalProps;

export default TLoadingModalProps;
