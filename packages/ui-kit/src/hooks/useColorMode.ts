import { useTheme } from 'next-themes';

// types
import type { ColorMode, UseColorModeState } from '@/types';

/**
 * Reads and sets the color mode.
 * @returns {UseColorModeState} The current color mode and the functions to change it.
 */
export default function useColorMode(): UseColorModeState {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const resolvedColorMode = resolvedTheme === 'dark' ? 'dark' : 'light';

  return {
    colorMode: (theme as ColorMode) ?? 'system',
    resolvedColorMode,
    setColorMode: setTheme,
  };
}
