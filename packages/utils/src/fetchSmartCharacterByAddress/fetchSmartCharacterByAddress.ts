import type { IFetchOptions, ISmartCharacter } from '@aetherisnova/types';
import axios, { type AxiosResponse } from 'axios';

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
