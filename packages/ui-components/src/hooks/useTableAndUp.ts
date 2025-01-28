// hooks
import useMediaQuery from '@hooks/useMediaQuery';

export default function useTableAndUp(): boolean {
  return useMediaQuery('(min-width: 768px)');
}
