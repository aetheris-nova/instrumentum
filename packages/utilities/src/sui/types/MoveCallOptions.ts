import type { TransactionArgument } from '@mysten/sui/transactions';

/**
 * Describes a single Move call.
 *
 * Arguments are created with the standalone `Arguments` helper from `@mysten/sui/transactions`, so
 * they can be declared without a `Transaction` in hand, e.g.
 * `[Arguments.object(id), Arguments.pure.u8(1), Arguments.object.clock()]`.
 *
 * @property {string} target - [required] the target of the call, e.g. `0x2::coin::value`.
 * @property {TransactionArgument[]} transactionArguments - [optional] the arguments to pass to the call.
 * @property {string[]} typeArguments - [optional] the type arguments to pass to the call.
 */
interface MoveCallOptions {
  target: string;
  transactionArguments?: TransactionArgument[];
  typeArguments?: string[];
}

export default MoveCallOptions;
