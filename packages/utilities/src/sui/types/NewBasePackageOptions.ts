import type { SuiGrpcClient } from '@mysten/sui/grpc';

// types
import type { LogLevel } from '@/logging';

/**
 * @property {SuiGrpcClient} gRPCClient - [required] the client used to talk to a fullnode.
 * @property {boolean} logLevel - [optional] the log level. Defaults to `error`.
 * @property {string} packageID - [required] the ID of the published package the client calls into.
 */
interface NewBasePackageOptions {
  readonly gRPCClient: SuiGrpcClient;
  readonly logLevel?: LogLevel;
  readonly packageID: string;
}

export default NewBasePackageOptions;
