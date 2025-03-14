// types
import type { IEllipseTextOptions } from '@types';

/**
 * Utility function to use an ellipsis in the middle of the text.
 * @param {string} text - the text to ellipse.
 * @param {IEllipseTextOptions} options - [optional] The length of the start and end characters.
 * @returns {string} An ellipsed text.
 */
export default function ellipseText(text: string, { end = 5, start = 5 }: IEllipseTextOptions): string {
  return `${text.slice(0, start)}...${text.slice(-end)}`;
}
