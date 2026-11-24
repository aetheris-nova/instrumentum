import type { Signer } from '@mysten/sui/cryptography';

// types
import type MoveCallOptions from './MoveCallOptions';

/**
 * @property {Signer} signer - [required] the account that signs the transaction.
 */
interface ExecuteOptions extends MoveCallOptions {
  signer: Signer;
}

export default ExecuteOptions;
