import { PropsWithChildren } from 'react';

// types
import type ColorMode from './ColorMode';

export interface Props {
  forcedColorMode?: ColorMode;
}
type AppProviderProps = PropsWithChildren<Props>;

export default AppProviderProps;
