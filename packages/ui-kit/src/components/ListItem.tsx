import { HStack, Link as ChakraLink, Spacer, Text, VStack } from '@chakra-ui/react';
import { cloneElement, type FC, useCallback, useMemo } from 'react';

// constants
import { DEFAULT_GAP } from '@/constants';

// hooks
import useTabletAndUp from '@/hooks/useTabletAndUp';

// types
import type { ListItemProps } from '@/types';

const ListItem: FC<ListItemProps> = ({
  icon,
  isExternalLink,
  link,
  title,
  secondarySubtitle,
  secondaryTitle,
  subtitle,
}) => {
  // hooks
  const isTabletAndUp = useTabletAndUp();
  // memos
  const _icon = useMemo(() => {
    if (!icon) {
      return null;
    }

    return cloneElement(icon, {
      color: 'fg',
      size: 'lg',
    });
  }, [icon]);
  // callbacks
  const renderTitle = useCallback(() => {
    const _title = (
      <Text
        fontSize="md"
        fontWeight="semibold"
        maxW={200}
        truncate={true}
        w="full"
        {...(isTabletAndUp && {
          maxW: 'auto',
        })}
      >
        {title}
      </Text>
    );

    if (!link) {
      return _title;
    }

    return (
      <ChakraLink asChild={true} variant="underline">
        {typeof link === 'string' ? (
          <a
            href={link}
            {...(isExternalLink && {
              target: '_blank',
            })}
          >
            {_title}
          </a>
        ) : (
          link()
        )}
      </ChakraLink>
    );
  }, [isExternalLink, isTabletAndUp, link, title]);

  return (
    <HStack align="center" borderBottomWidth={1} borderColor="fg" justify="start" p={DEFAULT_GAP / 3} w="full">
      {_icon}

      <VStack
        align="start"
        gap={0}
        h="full"
        justify="space-between"
        w="full"
        {...(icon && {
          pl: DEFAULT_GAP / 3,
        })}
      >
        {/*title*/}
        {renderTitle()}

        <Spacer />

        {/*subtitle*/}
        {subtitle && (
          <Text
            fontSize="sm"
            maxW={200}
            truncate={true}
            {...(isTabletAndUp && {
              maxW: 'auto',
            })}
          >
            {subtitle}
          </Text>
        )}
      </VStack>

      <VStack align="end" gap={0} h="full" justify="space-between" pl={DEFAULT_GAP / 3} w="full">
        {/*secondary title*/}
        {secondaryTitle && (
          <Text
            maxW={150}
            truncate={true}
            {...(isTabletAndUp && {
              maxW: 'auto',
            })}
          >
            {secondaryTitle}
          </Text>
        )}

        <Spacer />

        {/*secondary subtitle*/}
        {secondarySubtitle && (
          <Text
            fontSize="sm"
            maxW={150}
            truncate={true}
            {...(isTabletAndUp && {
              maxW: 'auto',
            })}
          >
            {secondarySubtitle}
          </Text>
        )}
      </VStack>
    </HStack>
  );
};

export default ListItem;
