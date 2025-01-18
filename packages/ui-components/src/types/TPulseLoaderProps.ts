// types
import type { IBaseComponentProps } from '@types';

interface IProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

type TPulseLoaderProps = IBaseComponentProps & IProps;

export default TPulseLoaderProps;
