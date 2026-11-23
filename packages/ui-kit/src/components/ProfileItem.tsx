import { formatUnits, truncateText } from '@aetherisnova/utilities';
import { Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { abbreviateAddress } from '@evefrontier/dapp-kit';
import { SUI_DECIMALS } from '@mysten/sui/utils';
import BigNumber from 'bignumber.js';
import { type FC, useMemo } from 'react';
import { GrPower } from 'react-icons/gr';

// components
import IconButton from './IconButton';
import Tooltip from './Tooltip';

// icons
import { EFGas } from '@/icons';

// types
import type { ProfileItemProps } from '@/types';

const ProfileItem: FC<ProfileItemProps> = ({ address, balance, name, onDisconnect }) => {
  const balanceInStandardForm = useMemo(() => balance.dividedBy(new BigNumber(10).pow(SUI_DECIMALS)), [balance]);

  return (
    <HStack>
      {/*details*/}
      <VStack align="end" gap={0} justify="space-evenly">
        {/*name/account*/}
        {name ? (
          <Tooltip content={name}>
            <Heading fontSize="md" fontWeight="bold">
              {name.length > 25
                ? truncateText(name, {
                    length: 25,
                  })
                : name}
            </Heading>
          </Tooltip>
        ) : (
          <Tooltip content={address}>
            <Heading fontSize="md" fontWeight="bold">
              {abbreviateAddress(address)}
            </Heading>
          </Tooltip>
        )}

        {/*gas balance*/}
        <Tooltip content={balanceInStandardForm.toString()}>
          <HStack gap={1} justify="end" w="full">
            <Text fontSize="sm">{formatUnits(balanceInStandardForm, { decimals: 2 })}</Text>

            <EFGas size="sm" />
          </HStack>
        </Tooltip>
      </VStack>

      {/*actions*/}
      <HStack gap={0}>
        <Tooltip content="Disconnect">
          <IconButton
            aria-label="Disconnect"
            borderLeftWidth={1}
            onClick={onDisconnect}
            scheme="secondary"
            variant="ghost"
          >
            <GrPower />
          </IconButton>
        </Tooltip>
      </HStack>
    </HStack>
  );
};
ProfileItem.displayName = 'ProfileItem';

export default ProfileItem;
