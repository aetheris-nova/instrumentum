import type { IFetchOptions, ISmartCharacter } from '@aetherisnova/types';
import axios, { type AxiosResponse } from 'axios';

/**
 * Convenience function to fetch an address smart character information.
 * @param {string} worldAPIURL - The World API URL that is used to fetch the character data from.
 * @param {string} address - THe EVM address.
 * @param {IFetchOptions} options - [optional] Allows customization of the request.
 * @returns {ISmartCharacter} The smart character for the given address.
 */
export default async function fetchSmartCharacterByAddress(
  worldAPIURL: string,
  address: string,
  { delay }: IFetchOptions = { delay: 0 }
): Promise<ISmartCharacter> {
  return new Promise<ISmartCharacter>((resolve, reject) => {
    window.setTimeout(async () => {
      let response: AxiosResponse<ISmartCharacter>;

      try {
        response = await axios.get(`${worldAPIURL}/smartcharacters/${address.toLowerCase()}`);

        return resolve(response.data);
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
}
