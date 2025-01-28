import { useMediaQuery } from '@chakra-ui/react';

export default function useMobileOnly(): boolean {
  const [value] = useMediaQuery(['(max-width: 768px - 1px)'], {});

  return value;
}
