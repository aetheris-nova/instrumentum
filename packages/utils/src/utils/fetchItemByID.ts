import type { IFetchOptions, IItem } from '@aetherisnova/types';
import axios, { type AxiosError, type AxiosResponse } from 'axios';

/**
 * Convenience function to fetch an item by its ID.
 * @param {string} worldAPIURL - The World API URL that is used to fetch the item data from.
 * @param {string} id - The item ID.
 * @param {IFetchOptions} options - [optional] Allows customization of the request.
 * @returns {IItem | null} The item for a given ID. If no item is found for the given ID, null is returned.
 */
export default async function fetchItemByID(
  worldAPIURL: string,
  id: string,
  { delay }: IFetchOptions = { delay: 0 }
): Promise<IItem | null> {
  return new Promise<IItem | null>((resolve, reject) => {
    window.setTimeout(async () => {
      let response: AxiosResponse<IItem>;

      try {
        response = await axios.get(`${worldAPIURL}/types/${id}`);

        return resolve(response.data);
      } catch (error) {
        if ((error as AxiosError).isAxiosError) {
          if ((error as AxiosError).status === 404) {
            return null;
          }
        }

        reject(error);
      }
    }, delay);
  });
}
