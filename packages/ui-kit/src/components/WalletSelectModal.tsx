import { Text, VStack } from '@chakra-ui/react';
import { randomString } from '@stablelib/random';
import { type FC, useEffect, useMemo } from 'react';
import { type Connector, useConnect } from 'wagmi';

// components
import Button from './Button';
import Modal from './Modal';
import PulseLoader from './PulseLoader';

// constants
import { DEFAULT_GAP } from '@constants';

// types
import type { TWalletSelectModalProps } from '@types';

const WalletSelectModal: FC<TWalletSelectModalProps> = ({
  caption = 'Choose a wallet:',
  colorMode = 'light',
  emptyText = 'No wallets available.',
  loadingText = 'Connecting to wallet.',
  logger,
  onClose,
  open,
  title = 'Select a Wallet',
}) => {
  const { connectors, connect, isPending, isSuccess } = useConnect();
  // memos
  const context = useMemo(() => randomString(8), []);
  // handlers
  const handleOnConnectorClick = (connector: Connector) => () =>  {
    const __function = 'handleOnConnectorClick';

    logger?.debug(`${__function}: connecting to wallet "${connector.name}"`);

    connect({ connector });
  };
  const handleClose = () => onClose && onClose();
  // renders
  const renderBody = () => {
    if (isPending) {
      return (
        <>
          <PulseLoader />

          <Text>{loadingText}</Text>
        </>
      );
    }

    return (
      <>
        <Text>
          {connectors.length > 0 ? caption : emptyText}
        </Text>

        <VStack gap={1} w="full">
          {connectors.map((value, index) => (
            <Button
              key={`${context}__connectors-${index}`}
              onClick={handleOnConnectorClick(value)}
              w="full"
            >
              {value.name}
            </Button>
          ))}
        </VStack>
      </>
    );
  };

  useEffect(() => {
    if (open && isSuccess) {
      handleClose();
    }
  }, [isSuccess]);

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
          {renderBody()}
        </VStack>
      )}
      closeButton={true}
      colorMode={colorMode}
      open={open}
      onClose={handleClose}
      title={title}
    />
  );
};

export default WalletSelectModal;
