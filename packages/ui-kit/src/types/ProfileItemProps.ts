import BigNumber from 'bignumber.js';

interface ProfileItemProps {
  address: string;
  balance: BigNumber;
  name?: string;
  onDisconnect: () => void;
}

export default ProfileItemProps;
