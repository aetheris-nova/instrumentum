import type { ColorMode } from '@chakra-ui/color-mode';

export default function useBackgroundColor(colorMode: ColorMode): string {
  if (colorMode === 'dark') {
    return 'gray.800';
  }

  return 'beige.50';
}
