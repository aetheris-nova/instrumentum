// types
import type ColorMode from './ColorMode';

interface UseColorModeState {
  colorMode: ColorMode;
  resolvedColorMode: Exclude<ColorMode, 'system'>;
  setColorMode: (colorMode: ColorMode) => void;
}

export default UseColorModeState;
