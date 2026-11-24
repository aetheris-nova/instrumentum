import type { SuiClientTypes } from '@mysten/sui/client';

// types
import type ExecuteTransactionIncludes from './ExecuteTransactionIncludes';

/**
 * The result of publishing a package.
 *
 * ```typescript
 * const { client, packageID, transaction } = await SomeClient.publish({ ... });
 * const arbiterID = objectOfType(transaction, `${packageID}::arbiter::Arbiter`);
 * ```
 *
 * @property {T} client - a client bound to the published package.
 * @property {SuiClientTypes.Transaction<ExecuteTransactionIncludes>} transaction - the publish transaction, carrying the objects `init` created.
 * @property {string} upgradeCapID - the ID of the `UpgradeCap`, which was transferred to the signer.
 */
interface PublishResult<T> {
  readonly client: T;
  readonly transaction: SuiClientTypes.Transaction<ExecuteTransactionIncludes>;
  readonly upgradeCapID: string;
}

export default PublishResult;
