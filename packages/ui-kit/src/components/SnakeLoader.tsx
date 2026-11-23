import { Box } from '@chakra-ui/react';
import { type CSSProperties, type FC, useMemo } from 'react';

// types
import type { SnakeLoaderProps, Sizes } from '@/types';

/**
 * The dot sizes, in rem. The track is four dots long and the square five, so a dot travels exactly
 * its own width on each of the sixteen steps of a lap.
 */
const DOT_SIZES: Record<Sizes, number> = {
  xs: 0.25,
  sm: 0.375,
  md: 0.5,
  lg: 0.75,
  xl: 1,
  '2xl': 1.25,
  '3xl': 1.5,
  '4xl': 2,
};
const STEPS_PER_LAP = 16;
const TOTAL_DOTS = 3;

const SnakeLoader: FC<SnakeLoaderProps> = ({ duration = 1.6, size = 'md' }) => {
  // memos
  const dot = useMemo(() => DOT_SIZES[size], [size]);
  const dots = useMemo(() => {
    // one step of delay between dots keeps them in adjacent squares, like the body of the snake.
    const step = duration / STEPS_PER_LAP;

    return [...Array(TOTAL_DOTS).keys()].map((index) => ({
      animation: `snake ${duration}s infinite linear ${-step * index}s`,
      bg: 'currentcolor',
      h: `${dot}rem`,
      left: 0,
      position: 'absolute' as const,
      top: 0,
      w: `${dot}rem`,
    }));
  }, [dot, duration]);

  return (
    <Box boxSize={`${dot * 5}rem`} position="relative" style={{ '--snake-track': `${dot * 4}rem` } as CSSProperties}>
      {dots.map((props, index) => (
        <Box key={`snake-loader-dot-${index}`} {...props} />
      ))}
    </Box>
  );
};

export default SnakeLoader;
