import type { SuiClientTypes } from '@mysten/sui/client';

/**
 * What a read asks the node to return: the return values of each command.
 *
 * This extends the SDK's own include type so that `commandResults` — which belongs to a simulation,
 * not to a transaction — is recognised, and so a mistyped key is caught at compile time rather than
 * silently resolving the corresponding field to `undefined`.
 */
interface SimulateTransactionIncludes extends SuiClientTypes.SimulateTransactionInclude {
  commandResults: true;
}

export default SimulateTransactionIncludes;
