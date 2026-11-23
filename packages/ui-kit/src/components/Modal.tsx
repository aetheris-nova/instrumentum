import { Box, Flex, Heading, HStack, Portal, Text, VStack } from '@chakra-ui/react';
import { cloneElement, type FC, useCallback, useId } from 'react';
import { GrClose } from 'react-icons/gr';

// components
import IconButton from './IconButton';

// constants
import { BUTTON_HEIGHT, DEFAULT_GAP } from '@/constants';

// hooks
import useTabletAndUp from '@/hooks/useTabletAndUp';

// types
import type { ModalProps } from '@/types';

const Modal: FC<ModalProps> = ({ body, closeButton, footer, onClose, open, subtitle, title }) => {
  // hooks
  const isTabletAndUp = useTabletAndUp();
  // ids
  const id = useId();
  const titleID = `${id}__title`;
  // callbacks
  const handleClose = useCallback(() => onClose && onClose(), [onClose]);
  const renderFooter = useCallback(() => {
    if (!footer || footer.length <= 0) {
      return null;
    }

    // if there are up to two buttons, make them horizontal
    if (footer.length <= 2) {
      return (
        <HStack borderColor="fg" borderTopWidth={1} gap={0} w="full">
          {footer.map((value, index, array) =>
            cloneElement(value, {
              borderColor: 'fg',
              flex: 1,
              key: `${id}__footer-${index}`,
              variant: 'ghost',
              ...(index < array.length - 1 && {
                borderRightWidth: 1,
              }),
            })
          )}
        </HStack>
      );
    }

    // three or more, make them vertical
    return (
      <VStack gap={0} w="full">
        {footer.map((value, index) =>
          cloneElement(value, {
            borderColor: 'fg',
            borderTopWidth: 1,
            key: `${id}__footer-${index}`,
            variant: 'ghost',
            w: 'full',
          })
        )}
      </VStack>
    );
  }, [footer, id]);

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <Box bottom={0} left={0} position="fixed" right={0} top={0}>
        <Flex
          h="100vh"
          w="full"
          {...(isTabletAndUp && {
            align: 'center',
            justify: 'center',
          })}
        >
          <VStack
            aria-labelledby={title ? titleID : undefined}
            aria-modal={true}
            bg="bg"
            flex={0}
            h="full"
            minW="100%"
            role="dialog"
            {...(isTabletAndUp && {
              borderColor: 'fg',
              borderWidth: 1,
              h: 'auto',
              minW: '400px',
            })}
          >
            {/*header*/}
            {(closeButton || subtitle || title) && (
              <HStack
                borderBottomWidth={1}
                borderColor="fg"
                justify="space-between"
                minH={BUTTON_HEIGHT}
                pl={DEFAULT_GAP / 2}
                w="full"
              >
                <VStack flex={1} gap={0} justify="center" w="full">
                  {title && (
                    <Heading id={titleID} w="full">
                      {title.toUpperCase()}
                    </Heading>
                  )}

                  {subtitle && (
                    <Text fontSize="sm" w="full">
                      {subtitle}
                    </Text>
                  )}
                </VStack>

                {closeButton && (
                  <IconButton
                    aria-label="Close"
                    borderColor="fg"
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
            <VStack flex={1} p={DEFAULT_GAP / 2} w="full">
              {body}
            </VStack>

            {/*footer*/}
            {renderFooter()}
          </VStack>
        </Flex>
      </Box>
    </Portal>
  );
};

export default Modal;
