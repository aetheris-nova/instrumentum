import { PropsWithChildren } from 'react';

// types
import type ColorMode from './ColorMode';

interface Props {
  forcedColorMode?: ColorMode;
}
type AppProviderProps = PropsWithChildren<Props>;

export default AppProviderProps;
