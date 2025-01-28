// hooks
import useMediaQuery from '@hooks/useMediaQuery';

export default function useDesktopAndUp(): boolean {
  return useMediaQuery('(min-width: 1024px)');
}
