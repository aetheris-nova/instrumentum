import { useMediaQuery } from '@chakra-ui/react';

export default function useTableAndUp(): boolean {
  const [value] = useMediaQuery(['(min-width: 768px)'], {});

  return value;
}
