// types
import type MoveCallOptions from './MoveCallOptions';

/**
 * @property {string} sender - [required] the account sends this transaction.
 */
interface SimulateOptions extends MoveCallOptions {
  sender: string;
}

export default SimulateOptions;
