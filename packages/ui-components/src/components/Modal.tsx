import {
  Box,
  Flex,
  Heading,
  HStack,
  Portal,
  Text,
  VStack,
} from '@chakra-ui/react';
import { randomString } from '@stablelib/random';
import { cloneElement, type FC, useMemo } from 'react';
import { GrClose } from 'react-icons/gr';

// components
import IconButton from '@components/IconButton';

// constants
import { DEFAULT_GAP, BUTTON_HEIGHT } from '@constants';

// hooks
import useBackgroundColor from '@hooks/useBackgroundColor';
import useForegroundColor from '@hooks/useForegroundColor';
import useTabletAndUp from '@hooks/useTabletAndUp';

// types
import type { TModalProps } from '@types';

const Modal: FC<TModalProps> = ({ body, closeButton, colorMode = 'light', footer, onClose, open, subtitle, title }) => {
  // hooks
  const backgroundColor = useBackgroundColor(colorMode);
  const foregroundColor = useForegroundColor(colorMode);
  const isTabletAndUp = useTabletAndUp();
  // memos
  const context = useMemo(() => randomString(8), []);
  // handlers
  const handleClose = () => onClose && onClose();
  // renders
  const renderFooter = () => {
    if (!footer || footer.length <= 0) {
      return null;
    }

    // if there are up to two buttons, make them horizontal
    if (footer.length <= 2) {
      return (
        <HStack
          borderColor={foregroundColor}
          borderTopWidth={1}
          gap={0}
          w="full"
        >
          {footer.map((value, index, array) => cloneElement(value, {
            borderColor: foregroundColor,
            flex: 1,
            key: `${context}__footer-${index}`,
            variant: 'ghost',
            ...(index < array.length - 1 && {
              borderRightWidth: 1,
            })
          }))}
        </HStack>
      );
    }

    // three or more, make them vertical
    return (
      <VStack
        gap={0}
        w="full"
      >
        {footer.map((value, index) => cloneElement(value, {
          borderColor: foregroundColor,
          borderTopWidth: 1,
          key: `${context}__footer-${index}`,
          variant: 'ghost',
        }))}
      </VStack>
    );
  };

  return (
    <>
      {open && (
        <Portal>
          <Box
            bottom={0}
            position="fixed"
            left={0}
            right={0}
            top={0}
          >
            <Flex
              h="100vh"
              w="full"
              {...isTabletAndUp && {
                align: 'center',
                justify: 'center',
              }}
            >
              <VStack
                background={backgroundColor}
                flex={0}
                h="full"
                minW="100%"
                {...isTabletAndUp && {
                  borderColor: foregroundColor,
                  borderWidth: 1,
                  h: 'auto',
                  minW: '400px',
                }}
              >
                {/*header*/}
                {(closeButton || subtitle || title) && (
                  <HStack
                    borderBottomWidth={1}
                    borderColor={foregroundColor}
                    justify="space-between"
                    minH={BUTTON_HEIGHT}
                    pl={DEFAULT_GAP / 2}
                    w="full"
                  >
                    <VStack flex={1} gap={0} justify="center" w="full">
                      {title && (
                        <Heading w="full">
                          {title.toUpperCase()}
                        </Heading>
                      )}

                      {subtitle && (
                        <Text fontSize="sm">
                          {subtitle}
                        </Text>
                      )}
                    </VStack>

                    {closeButton && (
                      <IconButton
                        borderColor={foregroundColor}
                        borderLeftWidth={1}
                        onClick={handleClose}
                        scheme="secondary"
                        variant="ghost"
                      >
                        <GrClose />
                      </IconButton>
                    )}
                  </HStack>
                )}

                {/*body*/}
                <VStack
                  flex={1}
                  p={DEFAULT_GAP / 2}
                  w="full"
                >
                  {body}
                </VStack>

                {/*footer*/}
                {renderFooter()}
              </VStack>
            </Flex>
          </Box>
        </Portal>
      )}
    </>
  );
};

export default Modal;
