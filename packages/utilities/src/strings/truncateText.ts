// types
import type { TruncateTextOptions } from './types';

/**
 * Utility function to truncate text and add an ellipsis to the end. Defaults to 5 characters.
 * @param {string} text - The text to truncate.
 * @param {TruncateTextOptions} options - [optional] options to customise.
 *  - length - The length to truncate the text to. Defaults to 5.
 * @returns {string} THe truncated text.
 */
export default function truncateText(text: string, { length = 5 }: TruncateTextOptions): string {
  if (text.length > length) {
    return text.slice(0, length - 3) + '...';
  }

  return text;
}
