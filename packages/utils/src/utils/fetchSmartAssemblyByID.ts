import type { IFetchOptions, TSmartAssemblyWithAdditionalModules } from '@aetherisnova/types';
import type { SmartAssemblies } from '@eveworld/types';
import axios, { type AxiosError, type AxiosResponse } from 'axios';

/**
 * Convenience function to fetch a smart assembly by its ID.
 * @param {string} worldAPIURL - The World API URL that is used to fetch the smart assembly data from.
 * @param {string} id - The smart assembly ID.
 * @param {IFetchOptions} options - [optional] Allows customization of the request.
 * @returns {TSmartAssemblyWithAdditionalModules<Type> | null} The smart assembly for a given ID. If no smart assembly
 * is found for the given ID, null is returned.
 */
export default async function fetchSmartAssemblyByID<Type extends SmartAssemblies>(
  worldAPIURL: string,
  id: string,
  { delay }: IFetchOptions = { delay: 0 }
): Promise<TSmartAssemblyWithAdditionalModules<Type> | null> {
  return new Promise<TSmartAssemblyWithAdditionalModules<Type> | null>((resolve, reject) => {
    window.setTimeout(async () => {
      let response: AxiosResponse<TSmartAssemblyWithAdditionalModules<Type>>;

      try {
        response = await axios.get(`${worldAPIURL}/smartassemblies/${id}`);

        return resolve(response.data);
      } catch (error) {
        if ((error as AxiosError).isAxiosError) {
          if ((error as AxiosError).status === 404) {
            return resolve(null);
          }
        }

        return reject(error);
      }
    }, delay);
  });
}
