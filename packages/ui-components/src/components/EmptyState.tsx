import { EmptyState as ChakraEmptyState, VStack } from '@chakra-ui/react';
import { forwardRef } from 'react';

// types
import type { TEmptyStateProps } from '@types';

const EmptyState = forwardRef<HTMLDivElement, TEmptyStateProps>(({ title, description, icon, children, ...otherProps }, ref) => {
  return (
    <ChakraEmptyState.Root ref={ref} {...otherProps}>
      <ChakraEmptyState.Content>
        {icon && (
          <ChakraEmptyState.Indicator>
            {icon}
          </ChakraEmptyState.Indicator>
        )}

        {description ? (
          <VStack textAlign="center">
            <ChakraEmptyState.Title>
              {title.toUpperCase()}
            </ChakraEmptyState.Title>

            <ChakraEmptyState.Description>
              {description}
            </ChakraEmptyState.Description>
          </VStack>
        ) : (
          <ChakraEmptyState.Title>
            {title.toUpperCase()}
          </ChakraEmptyState.Title>
        )}

        {children}
      </ChakraEmptyState.Content>
    </ChakraEmptyState.Root>
  );
});

EmptyState.displayName = 'EmptyState';

export default EmptyState;
