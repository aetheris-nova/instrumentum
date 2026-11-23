import BigNumber from 'bignumber.js';
import numbro from 'numbro';

// types
import type { FormatUnitsOptions } from '@/types';

/**
 * Formats a given unit to display on the frontend.
 * @param {BigNumber} value - the unit as a BigNumber.
 * @param {FormatUnitsOptions} options - [optional] various options that affect the returned format.
 *  - decimals - The number of decimal places to display. Defaults to 2.
 *  - thousandSeparatedOnly - Whether to only display thousand separated numbers. Defaults to false.
 *
 * @returns {string} the formatted unit.
 */
export default function formatUnits(value: BigNumber, options?: FormatUnitsOptions): string {
  const decimals: number = options?.decimals || 2;
  const thousandSeparatedOnly: boolean = options?.thousandSeparatedOnly || false;

  if (value.gte(1)) {
    // numbers >= 1m+
    if (value.decimalPlaces(decimals).gte(new BigNumber(1000000)) && !thousandSeparatedOnly) {
      return numbro(value.toString()).format({
        average: true,
        totalLength: 6,
        trimMantissa: true,
      });
    }

    // numbers <= 999,999.99
    return numbro(value.toString()).format({
      mantissa: decimals,
      thousandSeparated: true,
      trimMantissa: true,
    });
  }

  // numbers < 1
  return numbro(value.toString()).format({
    mantissa: decimals,
    trimMantissa: true,
  });
}
