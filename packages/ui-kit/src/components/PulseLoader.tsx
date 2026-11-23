import { Box, HStack } from '@chakra-ui/react';
import { type FC, useMemo } from 'react';

// constants
import { DEFAULT_GAP } from '@/constants';

// types
import type { PulseLoaderProps, Sizes } from '@/types';

const PulseLoader: FC<PulseLoaderProps> = ({ size = 'md' }) => {
  const dotSize = useMemo(() => (({
    xs: '0.25rem',
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
  } as Record<Sizes, string>)[size]), [size]);
  const dotProps = useMemo(() => ({
    bg: 'currentcolor',
    h: dotSize,
    w: dotSize,
  }), [dotSize]);

  return (
    <HStack gap={DEFAULT_GAP / 3}>
      <Box animation="pulse 1.2s infinite steps(1) -0.8s" {...dotProps} />

      <Box animation="pulse 1.2s infinite steps(1) -0.4s" {...dotProps} />

      <Box animation="pulse 1.2s infinite steps(1)" {...dotProps} />
    </HStack>
  );
};

export default PulseLoader;
