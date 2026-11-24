import type { SuiClientTypes } from '@mysten/sui/client';

/**
 * What a write asks the node to return: the parsed effects, the emitted events, and the type of
 * every object the transaction touched.
 *
 * This extends the SDK's own include type so that a mistyped key is caught at compile time rather
 * than silently resolving the corresponding field to `undefined`.
 */
interface ExecuteTransactionIncludes extends SuiClientTypes.TransactionInclude {
  effects: true;
  events: true;
  objectTypes: true;
}

export default ExecuteTransactionIncludes;
