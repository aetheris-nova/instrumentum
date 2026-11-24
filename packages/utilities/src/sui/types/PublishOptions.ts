import type { SuiGrpcClient } from '@mysten/sui/grpc';
import type { Signer } from '@mysten/sui/cryptography';

// types
import type { LogLevel } from '@/logging';

/**
 * @property {string[]} dependencies - [required] the IDs of the packages the modules depend on.
 * @property {SuiGrpcClient} gRPCClient - [required] the client used to sign and submit the publish.
 * @property {LogLevel} logLevel - [optional] the log level to use. Defaults to `error`.
 * @property {string[]} modules - [required] the base64-encoded compiled modules to publish.
 * @property {Signer} signer - [required] the publisher, who receives the `UpgradeCap`.
 */
interface PublishOptions {
  readonly dependencies: string[];
  readonly gRPCClient: SuiGrpcClient;
  readonly logLevel?: LogLevel;
  readonly modules: string[];
  readonly signer: Signer;
}

export default PublishOptions;
