import type { ColorMode } from '@chakra-ui/color-mode';

export default function useForegroundColor(colorMode: ColorMode): string {
  if (colorMode === 'dark') {
    return 'beige.50';
  }

  return 'gray.800';
}
