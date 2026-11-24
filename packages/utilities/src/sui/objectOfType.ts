import type { SuiClientTypes } from '@mysten/sui/client';
import { normalizeStructTag } from '@mysten/sui/utils';

// types
import type { ExecuteTransactionIncludes } from './types';

/**
 * Finds the ID of the single object of `type` among the objects a transaction touched.
 *
 * Useful for picking out an object a package's `init` created, e.g.
 * `objectOfType(transaction, `${packageID}::arbiter::Arbiter`)`. The bare type `package` identifies
 * the published package itself.
 * @param {SuiClientTypes.Transaction<TransactionIncludes>} transaction - The transaction to look through.
 * @param {string} type - The fully qualified type to look for, or `package`.
 * @returns {string} The ID of the object.
 * @throws {Error} If the transaction touched no object of that type.
 */
export default function objectOfType(
  transaction: SuiClientTypes.Transaction<ExecuteTransactionIncludes>,
  type: string
): string {
  const normalize = (value: string): string => (value.includes('::') ? normalizeStructTag(value) : value);
  const expected = normalize(type);
  const match = Object.entries(transaction.objectTypes).find(([, objectType]) => normalize(objectType) === expected);

  if (!match) {
    throw new Error(`transaction "${transaction.digest}" did not touch an object of type "${type}"`);
  }

  return match[0];
}
