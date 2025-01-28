import { useMediaQuery } from '@chakra-ui/react';

export default function useDesktopAndUp(): boolean {
  const [value] = useMediaQuery(['(min-width: 1024px)'], {});

  return value;
}
