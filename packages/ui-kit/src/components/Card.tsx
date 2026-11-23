import { Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import type { FC, PropsWithChildren } from 'react';

// constants
import { DEFAULT_GAP } from '@/constants';

// types
import type { CardProps } from '@/types';

const Card: FC<PropsWithChildren<CardProps>> = ({ children, subtitle, title, ...stackProps }) => {
  return (
    <VStack align="start" borderColor="fg" gap={0} {...stackProps}>
      {/*header*/}
      {(subtitle || title) && (
        <HStack borderColor="fg" borderBottomWidth={1} px={DEFAULT_GAP / 2} py={1} w="full">
          {title && (
            <Heading fontSize="md" w="full">
              {title.toUpperCase()}
            </Heading>
          )}

          <Spacer />

          {subtitle && <Text fontSize="sm">{subtitle}</Text>}
        </HStack>
      )}

      {/*body*/}
      {children}
    </VStack>
  );
};

export default Card;
