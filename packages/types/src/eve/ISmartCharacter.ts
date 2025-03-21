import type { SmartCharacter } from '@eveworld/types';
import type { Address } from 'viem';

// types
import type ISmartAssembly from './ISmartAssembly';

interface ISmartCharacter extends Omit<SmartCharacter, 'address' | 'smartAssemblies'> {
  address: Address;
  smartAssemblies: ISmartAssembly[];
}

export default ISmartCharacter;
