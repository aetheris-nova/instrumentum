import type { IUtilityOptions } from '@aetherisnova/types';
import { type EIP6963ProviderDetail, SupportedWallets } from '@eveworld/types';
import { useCallback, useEffect, useState } from 'react';

// types
import type { IUseCheckInGameState } from '@types';

export default function useCheckInGame({ logger }: IUtilityOptions = {}): IUseCheckInGameState {
  // states
  const [inGame, setInGame] = useState<boolean>(false);
  // actions
  const checkAction = useCallback(() => {
    window.dispatchEvent(new CustomEvent('eip6963:requestProvider'));
  }, []);
  // handlers
  const handleOnEIP6963Provider = (event: CustomEvent<EIP6963ProviderDetail>) => {
    const __functionName = 'handleOnEIP6963Provider';

    if (event.detail.info.name !== SupportedWallets.FRONTIER) {
      return;
    }

    logger && logger.debug(`${__functionName}: in-game provider "${event.detail.info.name}" found`);

    setInGame(true);
  };

  useEffect(() => {
    window.addEventListener('eip6963:announceProvider', handleOnEIP6963Provider);

    return () => window.removeEventListener('eip6963:announceProvider', handleOnEIP6963Provider);
  }, []);

  return {
    checkAction,
    inGame,
  };
}
