import type { SuiClientTypes } from '@mysten/sui/client';
import type { GrpcSimulateTransactionResult, GrpcTransactionResult, SuiGrpcClient } from '@mysten/sui/grpc';
import { Transaction } from '@mysten/sui/transactions';
import { SUI_FRAMEWORK_ADDRESS } from '@mysten/sui/utils';

// types
import type { Logger } from '@/logging/types';
import type {
  ExecuteOptions,
  ExecuteTransactionIncludes,
  NewBasePackageOptions,
  PublishOptions,
  PublishResult,
  SimulateOptions,
  SimulateTransactionIncludes,
} from '@/sui/types';

// utilities
import objectOfType from './objectOfType';
import createLogger from '@/logging/createLogger';

export default class BasePackage {
  protected readonly _gRPCClient: SuiGrpcClient;
  protected readonly _logger: Logger;
  protected readonly _packageID: string;

  constructor({ gRPCClient, logLevel = 'error', packageID }: NewBasePackageOptions) {
    this._gRPCClient = gRPCClient;
    this._logger = createLogger(logLevel);
    this._packageID = packageID;
  }

  /**
   * public static methods
   */

  /**
   * Publishes a package's compiled modules, transferring the `UpgradeCap` to the signer, and returning an initialized
   * client bound to the published package.
   *
   * Note: The modules are expected to be already compiled — the base64 `modules` and `dependencies` that
   * `sui move build --dump-bytecode-as-base64` emits. Compiling is deliberately not done here, as it
   * shells out to the `sui` CLI and would stop this package from bundling for the browser.
   *
   * The result carries the publish transaction as well as the client, because a package's `init` runs
   * during the publish and the objects it created appear nowhere else — see `PublishResult`.
   *
   * @param {PublishOptions} options - The client, the signer, and the compiled modules.
   * @returns {Promise<PublishResult<T>>} A promise that resolves to the client, the package ID, the `UpgradeCap` ID and the publish transaction.
   * @throws {Error} If the publishing of the package failed.
   * @public
   * @static
   */
  public static async publish<T extends BasePackage>(
    this: new (options: NewBasePackageOptions) => T,
    { dependencies, gRPCClient, logLevel, modules, signer }: PublishOptions
  ): Promise<PublishResult<T>> {
    const __function = 'publish';
    const logger = createLogger(logLevel);
    const transaction = new Transaction();
    const [upgradeCap] = transaction.publish({ dependencies, modules });
    let executed: SuiClientTypes.Transaction<ExecuteTransactionIncludes>;
    let packageID: string;
    let result: GrpcTransactionResult<ExecuteTransactionIncludes>;

    // the UpgradeCap is returned by value, so it must go somewhere or the transaction fails
    transaction.transferObjects([upgradeCap], transaction.pure.address(signer.toSuiAddress()));
    result = await gRPCClient.signAndExecuteTransaction({
      include: {
        effects: true,
        events: true,
        objectTypes: true,
      } satisfies ExecuteTransactionIncludes,
      signer,
      transaction,
    });
    executed = result.$kind === 'Transaction' ? result.Transaction : result.FailedTransaction;

    if (!executed.status.success) {
      logger.error(`${__function}: failed to publish package`, executed.status.error.message);

      throw new Error(executed.status.error.message);
    }

    await gRPCClient.waitForTransaction({ digest: executed.digest });

    packageID = objectOfType(executed, 'package');

    logger.debug(`${__function}: published package`, packageID);

    return {
      client: new this({
        gRPCClient,
        packageID,
        logLevel,
      }),
      transaction: executed,
      upgradeCapID: objectOfType(executed, `${SUI_FRAMEWORK_ADDRESS}::package::UpgradeCap`),
    };
  }

  /**
   * protected methods
   */

  /**
   * Signs, executes and waits for a single Move call.
   *
   * @param {MoveCallOptions} options - The target, and the arguments and type arguments to pass.
   * @returns {Promise<SuiClientTypes.Transaction<ExecuteTransactionIncludes>>} A promise that resolves to the executed transaction.
   * @throws {Error} If the transaction failed.
   * @protected
   */
  protected async _execute({
    signer,
    target,
    transactionArguments,
    typeArguments,
  }: ExecuteOptions): Promise<SuiClientTypes.Transaction<ExecuteTransactionIncludes>> {
    const __function = '_execute';
    const transaction = new Transaction();
    let executed: SuiClientTypes.Transaction<ExecuteTransactionIncludes>;
    let result: GrpcTransactionResult<ExecuteTransactionIncludes>;

    transaction.moveCall({
      arguments: transactionArguments,
      target,
      typeArguments,
    });

    result = await this._gRPCClient.signAndExecuteTransaction({
      include: {
        effects: true,
        events: true,
        objectTypes: true,
      } satisfies ExecuteTransactionIncludes,
      signer,
      transaction,
    });
    executed = result.$kind === 'Transaction' ? result.Transaction : result.FailedTransaction;

    if (!executed.status.success) {
      this._logger.error(`${__function}: failed to execute transaction`, executed.status.error.message);

      throw new Error(executed.status.error.message);
    }

    await this._gRPCClient.waitForTransaction({ digest: executed.digest });

    return executed;
  }

  /**
   * Runs a single read-only Move call, returning the raw BCS bytes of each return value.
   *
   * Nothing is signed or submitted and no gas is spent, so the signer does not need to be funded.
   * Decode the bytes with a BCS type, e.g. `bcs.Bool.parse(bytes)`.
   * @param {SimulateOptions} options - The target, and the arguments and type arguments to pass as well as the sender
   * address.
   * @returns {Promise<Uint8Array[]>} A promise that resolves to the BCS bytes of each return value.
   * @throws {Error} If the simulation failed.
   * @protected
   */
  protected async _simulate({
    sender,
    target,
    transactionArguments,
    typeArguments,
  }: SimulateOptions): Promise<Uint8Array[]> {
    const __function = '_simulate';
    const transaction = new Transaction();
    let result: GrpcSimulateTransactionResult<SimulateTransactionIncludes>;
    let simulated: SuiClientTypes.Transaction<SimulateTransactionIncludes>;

    transaction.setSender(sender);
    transaction.moveCall({
      arguments: transactionArguments,
      target,
      typeArguments,
    });

    result = await this._gRPCClient.simulateTransaction({
      include: {
        commandResults: true,
      } satisfies SimulateTransactionIncludes,
      transaction,
    });
    simulated = result.$kind === 'Transaction' ? result.Transaction : result.FailedTransaction;

    if (!simulated.status.success) {
      this._logger.error(`${__function}: failed to simulate transaction`, simulated.status.error.message);

      throw new Error(simulated.status.error.message);
    }

    const [command] = result.commandResults;

    if (!command) {
      this._logger.error(`${__function}: no command results in the simulation`);

      throw new Error('no command results in the simulation');
    }

    return command.returnValues.map(({ bcs }) => bcs);
  }

  /**
   * public methods
   */

  /**
   * Gets the ID of the package this client calls into.
   * @returns {string} The package ID.
   * @public
   */
  public packageID(): string {
    return this._packageID;
  }
}
