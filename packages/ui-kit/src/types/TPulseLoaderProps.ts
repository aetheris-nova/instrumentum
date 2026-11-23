// types
import type { IBaseComponentProps } from '@types';

export interface IPulseLoaderProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

type TPulseLoaderProps = IBaseComponentProps & IPulseLoaderProps;

export default TPulseLoaderProps;
