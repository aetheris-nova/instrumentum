import { Text, VStack } from '@chakra-ui/react';
import type { FC } from 'react';

// components
import Modal from './Modal';
import PulseLoader from './PulseLoader';

// constants
import { DEFAULT_GAP } from '@constants';

// types
import type { TLoadingModalProps } from '@types';

const LoadingModal: FC<TLoadingModalProps> = ({ colorMode = 'light', message, onClose, open, title }) => {
  // handlers
  const handleClose = () => onClose && onClose();

  return (
    <Modal
      body={(
        <VStack
          align="center"
          flex={1}
          gap={DEFAULT_GAP - 2}
          justify="center"
          w="full"
        >
          <PulseLoader />

          {message && (
            <Text>
              {message}
            </Text>
          )}
        </VStack>
      )}
      colorMode={colorMode}
      open={open}
      onClose={handleClose}
      title={title}
    />
  );
};

export default LoadingModal;
